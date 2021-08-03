import { ToastsStack, sendNotification } from 'modsen-toast'
import { ReactComponent as WarningIcon } from './assets/warning.svg'

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
        position="bottom-left"
        notificationLifetime={1500}
        limit={5}
        edgeDistance="20px"
        internalSpacing="10px"
        parentNode={() => document.querySelector('#overlay')}
        toastTypesConfig={{
          Warning: {
            fgColor: '#000001',
            bgColor: '#F4E048',
            icon: WarningIcon
          }
        }}
      />
    </div>
  )
}

export default App
