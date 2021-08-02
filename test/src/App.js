import { ToastsStack, sendNotification } from 'modsen-toast'

const App = () => {
  return (
    <div className="App">
      <button
        type="button"
        onClick={() =>
          sendNotification('Warning', 'Warning', 'Some notification')
        }
      >
        Notify
      </button>

      <ToastsStack />
    </div>
  )
}

export default App
