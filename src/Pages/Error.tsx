import React from 'react'
import styled from 'styled-components';

const Container = styled.div
  `
width: 300px;
padding: 50px;
margin: auto;
`;


export default function Error() {
  return (
    <Container>Error 404</Container>
  )
}
