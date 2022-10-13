import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
right: 100px;
`;
const Wrapper = styled.div`
position: absolute;
right: 1px;
width: 170vh;
height: 120px;
display: flex;
justify-content: space-between; 
font-size: 14;
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
        <Home>Home</Home>
        <Search>Search</Search>
        <Logout>Logout</Logout>
        {/* <Logo>Logo</Logo> */}
        {/* <Logout>Logout</Logout> */}
        </Wrapper>
    </Container>


    )
}
