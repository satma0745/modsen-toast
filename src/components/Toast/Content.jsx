import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`

const IconWrapper = styled.div`
  width: 2em;
  height: 2em;
`

const Text = styled.p`
  line-height: 1.2em;
  color: ${({ color }) => color};
  margin-left: 1em;
`

const Content = ({ icon: Icon, color, text, ...props }) => (
  <ContentWrapper {...props}>
    {Icon && (
      <IconWrapper>
        <Icon />
      </IconWrapper>
    )}

    <Text color={color}>{text}</Text>
  </ContentWrapper>
)
Content.propTypes = {
  icon: PropTypes.func,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}
Content.defaultProps = {
  icon: undefined
}

export default Content