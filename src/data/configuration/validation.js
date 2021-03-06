import { object, string, number } from 'yup'

const schema = object().shape({
  position: string()
    .oneOf(['top-right', 'bottom-right', 'bottom-left', 'top-left'])
    .required(),
  parentNode: object().required(),
  edgeDistance: string().required(),
  internalSpacing: string().required(),
  notificationLifetime: number().required(),
  transition: string().oneOf(['slide', 'fade', 'zoom']).required(),
  toastTypesConfig: object().required(),
  limit: number().required(),
  transitionDuration: number().required(),
  collapseDuration: number().required()
})

const validate = (preferences) => {
  schema.validateSync(preferences)
}

export default validate
