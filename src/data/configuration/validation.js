import { object, string, number } from 'yup'

const schema = object().shape({
  position: string().oneOf([
    'top-right',
    'bottom-right',
    'bottom-left',
    'top-left'
  ]),
  parentNode: object(),
  edgeDistance: string(),
  internalDistance: string(),
  notificationLifetime: number(),
  toastTypesConfig: object()
})

const validate = (preferences) => {
  schema.validateSync(preferences)
}

export default validate
