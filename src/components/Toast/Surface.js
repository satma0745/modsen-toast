import styled from 'styled-components'
import PropTypes from 'prop-types'

const Surface = styled.div`
  height: 6em;
  width: 18em;

  padding: 0 1em;

  border-radius: 0.75em;
  box-shadow: 0.125em 0.125em 0.25em #00000029;
  background-color: ${({ color }) => color};

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
`
Surface.propTypes = {
  color: PropTypes.string.isRequired
}

export default Surface
