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

const Container = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => flexDirection(direction)};
  padding: 1em;
`
Container.propTypes = {
  direction: PropTypes.oneOf(['top-down', 'down-top'])
}

export default Container
