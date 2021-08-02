import { ToastsStack, sendNotification } from 'modsen-toast'

const App = () => {
  return (
    <div className="App">
      <button
        id="send-notification"
        type="button"
        onClick={() =>
          sendNotification('Warning', 'Warning', 'Some warning message')
        }
      >
        Notify
      </button>

      <ToastsStack
        id="toasts-container"
        position="top-left"
        notificationLifetime={1500}
        limit={5}
        toastTypesConfig={{
          Warning: {
            fgColor: '#000',
            bgColor: '#F4E048'
          }
        }}
      />
    </div>
  )
}

export default App
