import React from 'react'
import styled from 'styled-components'
import { NavBar } from '../Components/NavBar';
import SideBar from '../Components/SideBar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from './Home';
import Profile from './Profile';
import SignIn from './SignIn';
import TableData from './TableData';
import Dashboard from './Dashboard';


const Container = styled.div``;
const Wrapper = styled.div``;

export default function Pages() {
    return (
        <Container>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                    <Route path='/signin' element={<SignIn/>}/>
                    <Route path='/tableData' element={<TableData/>}/>
                </Routes>
            </Router>
        </Container>
)
}
