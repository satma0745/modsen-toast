import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Description from './Description'

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`

const IconWrapper = styled.div`
  width: 2em;
  height: 2em;
`

const Content = ({ icon: Icon, color, title, message, ...props }) => (
  <ContentWrapper {...props}>
    {Icon && (
      <IconWrapper>
        <Icon />
      </IconWrapper>
    )}

    <Description color={color} title={title} message={message} />
  </ContentWrapper>
)
Content.propTypes = {
  icon: PropTypes.func,
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
}
Content.defaultProps = {
  icon: undefined
}

export default Content
