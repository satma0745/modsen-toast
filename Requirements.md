# Tестовое задание библиотека Toast

## Содержание

- [Техническое задание](#Техническое-задание)
- [Используемые технологии](#Используемые-технологии)
- [Структура проекта](#Структура-проекта)
- [Тестирование](#Тестирование)
- [Как начать](#Как-начать)
- [Полезные ссылки](#Полезные-ссылки)

## Техническое задание

Необходимо реализовать **_Toast_** библиотеку Javascript, для представления не блокирующих уведомлений . Цель состоит в том, чтобы создать базовую библиотеку, которую можно настраивать и расширять.

#### Необходимый функционал:

- [x] Показать уведомление.
- [x] Возможность устанавливать положению уведомления.
- [x] Возможность устанавливать тип уведомления (уведомления об успехе, ошибке, оповещение и т.д.).
- [x] Возможность устанавливать длительность показа уведомления.
- [x] Возможность задавать заголовок и описание уведомления.
- [x] Возможность устанавливать отступы уведомления.
- [x] Возможность изменять цвет типа уведомлений.
- [x] Возможность изменять анимацию появления и исчезновения.

#### Дополнительный функционал:

- [ ] Возможность "смахивать" уведомления в сторону для быстрого закрытия.
- [x] Показ до 3 уведомлений одновременно.

#### Пример графического представления:

Ссылка на макет: [Макет "Toast"](https://xd.adobe.com/view/9efd755b-6a29-49bf-4e13-d5cd74643170-e8cc/). Также его можно найти в папке **doc** c расширением **.xd** для программы **Adobe XD**.

#### Также проект предполагает:

- Разделить библиотеку на два основных компонента: представления и логики. Для реализации логики приложения необходимо использовать порождающий паттерн программирования **_"Одиночка"_**, который гарантирует, что у класса есть только один экземпляр, и предоставляет к нему глобальную точку доступа (см. подробнее [паттерн Одиночка](https://refactoring.guru/ru/design-patterns/singleton)). При помощи паттерна создать сервисный класс, в котором вы будете задавать конфигурацию и вызывать уведомление. Для реализация представления необходимо использовать **react portals**.

- [x] Настроить конфигурации **_babel_**, **_eslint_**.
- [x] Подключить и настроить бандлер **_Rollup_** для сборки проекта в библиотеку.
- [x] Подключить и настроить **_Strorybook_** для проверки работоспособности вашей библиотеки.
- [x] Обработку ошибок через паттерн **_Error Boundaries_**
- [x] Проверку типов в React компонентах, передаваемых параметров и подобных объектов.
- [x] Использование алиасов для импортирования файлов.

## Используемые технологии

### Для react

- [x] **_node.js_** - программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код).
- [x] **_babel_** - транспайлер, преобразующий код из одного стандарта в другой.
- [x] **_eslint_** - линтер для JavaScript кода.
- [x] **_yarn_** - менеджер пакетов.
- [x] **_rollup_** - сборщик ES-модулей.
- [x] **_stortbook_** - инструмент, используемый для разработки компонентов пользовательского интерфейса в изоляции.
- [x] **_react_** - JavaScript-библиотека для создания пользовательских интерфейсов.
- [x] **_prop-types_** - набор валидаторов, которые могут быть использованы для проверки получаемых данных.
- [x] **_styled-components_** - система стилизации react компонентов.
- [x] **_cypress_** — e2e тестирование для веб приложений.

## Тестирование

Реализовать e2e тестирование c полным покрытием функционала приложения:

- [x] Сервис для конфигурации Toast-компонента.
- [x] Графическое (компонент модуля и т.д.)

## Полезные ссылки

[React](https://reactjs.org/docs/getting-started.html)

[Rollup](https://rollupjs.org/guide/en/)

[Storybook](https://storybook.js.org/docs/basics/introduction/)

[Eslint](https://eslint.org/docs/user-guide/configuring)

[Babel](https://babeljs.io/docs/en/configuration)

[Тестирование Cypress](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)

[Тестирование Detox](https://github.com/wix/Detox/blob/master/docs/README.md)

[Styled-components](https://www.styled-components.com/docs)
