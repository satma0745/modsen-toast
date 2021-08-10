import styled from 'styled-components'
import PropTypes from 'prop-types'

import Toast from '@components/Toast'

const invert = (position) => {
  switch (position) {
    case 'top':
      return 'bottom'
    case 'bottom':
      return 'top'
    default:
      throw new Error('Unsupported position option.')
  }
}

const SpacedToast = styled(Toast)`
  margin-${({ position }) => invert(position)}: ${({ spacing }) => spacing};

  &:last-child {
    margin-${({ position }) => invert(position)}: 0;
  }
`
SpacedToast.propTypes = {
  position: PropTypes.string.isRequired,
  spacing: PropTypes.string.isRequired
}

export default SpacedToast
