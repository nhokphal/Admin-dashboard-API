import React from 'react'
import styled from 'styled-components';
import { NavBar } from '../Components/NavBar';
import SideBar from '../Components/SideBar';
import { MovieDTB } from '../MoviesDTB/MovieDTB';

const Container = styled.div``;

export const Home = () => {
  return (
    <Container>
            <NavBar/>
            <SideBar/>
    </Container>
  )
}
