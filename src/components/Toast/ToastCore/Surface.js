import styled from 'styled-components'
import PropTypes from 'prop-types'

const Surface = styled.div`
  height: 6em;
  width: 20em;
  background-color: ${({ color }) => color};
  box-shadow: 0.125em 0.125em 0.25em #00000029;
  border-radius: 0.75em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1em;
  margin: 1em;
  position: relative;
`
Surface.propTypes = {
  color: PropTypes.string.isRequired
}

export default Surface
