# Report

Интересные и сложные проблемы, с которыми я столкнулся


## Content

1. [In search of the perfect solution](#In-search-of-the-perfect-solution)
2. [The worst solution ever](#The-worst-solution-ever)
3. [Back to the roots](#Back-to-the-roots)
4. [Blitz problems](#Blitz-problems)


## In search of the perfect solution

Мне нужно было, что бы при удалении тоста, все последующие сдвигались плавно:
![ezgif com-gif-maker](https://user-images.githubusercontent.com/54468544/128674389-3fadd9b5-0717-4632-902e-c4e9aa3ba31f.gif)

### First thoughts: transition elements movement

Первым, что пришло мне в голову было - анимировать движение элементов по вертикали.
В таком случае, при удалении вышестоящего элемента, остальные плавно сдвинулись бы.
Вот только фактически никакого перемещения не происходит.
Это просто flex прижимает элементы и стару блока (сдвиг происходит при появлении свободного места).
Этот процесс постоянен, так что как-либо его анимировать не получится.

### Second option: transition container height

Был также вариант как-либо зафиксировать тосты в пространстве и анимировать изменение высоты контейнера.
План был в том, что бы контейнер сдвигал тосты только при изменении собственной высоты.
Данный вариант также с треском провалился.

### Third option: transition deleted element height

Если не подходит изменение высоты контейнера, то почему бы не сделать транзишн на изменение высоты удаляемого элемента.
Суть идеи: перед удалением DOM-ноды можно сделать транзишн в `height: 0`.
Проблема в том, что высота тоста заранее не известна (`height: auto`), а большинство (если не все) браузеров отказывается делать транзишн `auto -> 0`.

### The last hope: absolute positioning

От этой идеи я отказался сразу, т.к. она тоже требовала заранее знать высоту тоста.
После того, как я потратил 2 дня на раздумия и эксперементы с разными подходами, спросил как это лучше реализовать у Максима.
Он предложил вариант с анимированием контейнера и скинул пример с абсолютным позиционированием.
В тот момент я подумал, что если его устраивает подобное решение, то оно устроит и меня.
Я решил, что я и так слишком много времени потратил на поиск идеального решения, так что можно остановиться и на этом варианте.


## The worst solution ever

Как оказалось, данное решение принесло ещё больше проблем, часть из которых были довольно легко решаемы, а часть остались нерешёнными.
К нерешённым проблемам относится проблема `overflow`.
Суть проблемы в том, что нельзя поставить одновременно `overflow-x: hidden` и `overflow-y: visible`.
Скрывать оверфлоу по горизонтали нужно в случае некоторых анимаций (например `slide`, где тост появляется из-за края экрана).
При этом необходимо показывать оверфлоу по вертикали, т.к. использование абсолютного позиционирования приводит к нулевой высоте у контейнера.
Столкнувшись с огромным количеством проблем данного подхода (некоторые из которых так и оставались нерешёнными),
я решил попробовать вернуться к варианту с транзишном высоты удаляемого элемента.


## Back to the roots

В этот раз я сразу искал варианты как обойти проблему транзишна `auto -> 0`, а точнее - лучший способ для резализации следующего костыля:
Если узнать вычисленную высоту элемента в рантайме, то можно использовать это значение как начальное значение для транзишна `node.syle.height = computedHeight`.
Больше всего мне понравился этот вариант:
```js
const computedHeight = node.scrollHeight;

requestAnimationFrame(() => {
  node.style.height = `${computedHeight}px`
  node.style.transition = 'height 500ms'

  requestAnimationFrame(() => {
    style.height = 0
  })
})
```
После небольших изменений данное решение позволило решить данную задачу.


## Blitz problems

### Conditional hooks

Я знал, что React-hooks нельзя использовать в if-statements, вложенных функциях и т.п. случаях.
Однако я и подумать не мог, что нельзя делать так:
```js
const useTransition = (config) => {
  switch (config.transition) {
    case 'slide': return useSlideTransition
    case 'fade': return useFadeTransition
    case 'zoom': return useZoomTransition
  }
}
```
Понятно, что если `config.transition` не будет обработан switch-statement, то возникнут проблемы.
Однако проблемы, на моё удивление, возникали и если `config.transition` имел подходящее значение.
В своё оправдание могу также сказать, что специальные `eslint-rules` не выдавали предупреждения.
К тому же, в данном случае в switch-statement происходит лишь выбор хука, а его вызов производится уже без каких-либо условий.

### Inline render-prop

Есть ситуация, при которой данный код не работает (транзишн одного элемента прерывается, если начинается транзишн другого):
```js
const ElementsList = {
  const [elements, delete] = useElements()
  return (
    <Transition
      elements={elements}
      render={({ id }) => <Element dismiss={() => delete(id)} />}
    />
  )
}
```

А данный работает:
```js
const TransitionedElement = (props) => <Element {...props} />

const ElementsList = {
  const [elements] = useElements()
  return (
    <Transition
      elements={elements}
      render={TransitionedElement}
    />
  )
}
```

Вот только второй вариант не позволяет использовать функцию `delete`, возвращённую хуком `useElements`.
По началу кажется, что дело в контекстах, но нет.
Дело в том, как компонент `Transition` использует `render`.
Насколько я понял, `Transition` делает клон `render`-компонента, для своих нужд.
Скорее всего клон пересоздаётся, если ссылка на компонент изменилась, а в 1м варианте ссылка менятся при каждом рендере.
В итоге получается ситуация, что когда добавляется/удаляется элемент, происходит ре-рендер, из-за чего переделывается клон и сбрасывается транзишн.
В пользу этого также свидетельствует и решение проблемы:
```js
const ElementsList = {
  const [elements, delete] = useElements()
  
  const TransitionedElement = useCallback(
    ({ id }) => <Element dismiss={() => delete(id)} />,
    [delete]
  )
  
  return (
    <Transition
      elements={elements}
      render={TransitionedElement}
    />
  )
}
```

Данное решение выглядит довольно странно (даже в документации говорится, что `useCallback` призван решать задачи оптимизации, а не исправлять поведенческие проблемы).
Однако это единственное решение, что я нашёл (также спрашивал у знакомых и на *StackOverflow*).
