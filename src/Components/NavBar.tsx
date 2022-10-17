import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
right: 100px;
position: fixed;
left: 0;
top: 0;
right: 0;
margin: auto;
`;

const Wrapper = styled.div`
border-radius: 5px;
background-color: #E0FFFF;
position: absolute;
right: 5%;
top: 15px;
width: 80%;
height: 25px;
display: flex;
justify-content: space-between; 
font-size: 10;
`;

const Home = styled.div``;
// const Logo = styled.div``;

const Search = styled.div
  `
 padding-left: 10px;
`;

const Logout = styled.div
  `

`;


export const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Home></Home>
        <Search>Top Movie From MOVIEDB API</Search>
        <Logout></Logout>
        {/* <Logo>Logo</Logo> */}
        {/* <Logout>Logout</Logout> */}
      </Wrapper>
    </Container>


  )
}
