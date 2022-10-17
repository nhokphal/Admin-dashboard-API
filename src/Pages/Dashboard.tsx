import React from 'react'
import styled from "styled-components"
import { NavBar } from '../Components/NavBar';
import { MovieDTB } from '../MoviesDTB/MovieDTB';


const Container = styled.div`

`;
const Wrapper = styled.div`

`;
export default function Dashboard() {
  return (
    <Container>
      <NavBar />
      <Wrapper>
        <MovieDTB />
      </Wrapper>
    </Container>
  )
}
