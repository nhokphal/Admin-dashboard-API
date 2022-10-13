import React from 'react'
import styled from 'styled-components'
import { NavBar } from './NavBar';
import SideBar from './SideBar';



const Container = styled.div``;

const Wrapper = styled.div``;

export default function Pages() {
    return (
        <Container>
            <Wrapper>
                <NavBar />
                <SideBar />
            </Wrapper>

        </Container>

    )
}
