import styled from 'styled-components'
import PropTypes from 'prop-types'

const flexDirection = (direction) => {
  switch (direction) {
    case 'top-down':
      return 'column'
    case 'down-top':
      return 'column-reverse'
  }
}

const marginPlacement = (direction) => {
  switch (direction) {
    case 'top-down':
      return 'bottom'
    case 'down-top':
      return 'top'
  }
}

const Container = styled.div`
  padding: ${({ edgeDistance }) => edgeDistance};
  overflow-x: hidden;

  display: flex;
  flex-direction: ${({ direction }) => flexDirection(direction)};

  > * {
    margin-${({ direction }) => marginPlacement(direction)}:
      ${({ internalSpacing }) => internalSpacing};
  }

  > *:last-child {
    margin-${({ direction }) => marginPlacement(direction)}: 0;
  }
`
Container.propTypes = {
  direction: PropTypes.oneOf(['top-down', 'down-top']),
  internalSpacing: PropTypes.string.isRequired,
  edgeDistance: PropTypes.string.isRequired
}

export default Container
