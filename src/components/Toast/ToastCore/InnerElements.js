import styled from 'styled-components'
import PropTypes from 'prop-types'

const DismissButton = styled.img`
  position: absolute;
  top: 1em;
  right: 1em;
  width: 1em;
  height: 1em;
`

const Content = styled.div`
  display: flex;
  align-items: center;
`

const Icon = styled.img`
  width: 2em;
  height: 2em;
`

const Text = styled.p`
  line-height: 1.2em;
  color: ${({ color }) => color};
  margin-left: 1em;
`
Text.propTypes = {
  color: PropTypes.string.isRequired
}

export { DismissButton, Content, Icon, Text }
