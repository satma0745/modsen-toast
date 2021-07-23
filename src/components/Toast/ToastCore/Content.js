import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ContentWrapper = styled.div`
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

const Content = ({ icon, color, text, ...props }) => (
  <ContentWrapper {...props}>
    <Icon src={icon} />
    <Text color={color}>{text}</Text>
  </ContentWrapper>
)
Content.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Content
