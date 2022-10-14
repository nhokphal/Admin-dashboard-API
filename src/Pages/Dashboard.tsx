import React from 'react'
import styled from "styled-components"
import { MovieDTB } from '../MoviesDTB/MovieDTB';


const Container = styled.div`

`;
const Wrapper = styled.div`

`;
export default function Dashboard() {
  return (
    <Container>
      <Wrapper>
        Dashboard
      </Wrapper>
        <MovieDTB />
    </Container>
  )
}
