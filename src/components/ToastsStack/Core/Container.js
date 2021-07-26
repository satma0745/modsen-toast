import styled from 'styled-components'
import PropTypes from 'prop-types'

const marginPlacement = (direction) => {
  switch (direction) {
    case 'column':
      return 'bottom'
    case 'column-reverse':
      return 'top'
    default:
      throw new Error('Unsupported direction option.')
  }
}

const Container = styled.div`
  padding: ${({ edgeDistance }) => edgeDistance};
  overflow-x: hidden;

  display: flex;
  flex-direction: ${({ direction }) => direction};

  > * {
    margin-${({ direction }) => marginPlacement(direction)}:
      ${({ internalSpacing }) => internalSpacing};
  }

  > *:last-child {
    margin-${({ direction }) => marginPlacement(direction)}: 0;
  }
`
Container.propTypes = {
  direction: PropTypes.string.isRequired,
  internalSpacing: PropTypes.string.isRequired,
  edgeDistance: PropTypes.string.isRequired
}

export default Container
