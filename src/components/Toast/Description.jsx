import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  margin-left: 1em;
  display: flex;
  flex-direction: column;
`

const Title = styled.p`
  margin: 0;
  margin-bottom: 0.25em;
  font-size: 1.25em;
  font-weight: bold;
  color: ${({ color }) => color};
`

const Message = styled.p`
  margin: 0;
  color: ${({ color }) => color};
`

const Description = ({ color, title, message, ...props }) => (
  <Container {...props}>
    <Title color={color}>{title}</Title>
    <Message color={color}>{message}</Message>
  </Container>
)
Description.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
}

export default Description
