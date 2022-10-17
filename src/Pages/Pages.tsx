import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from './Home';
import Profile from './Profile';
import SignIn from './SignIn';
import Dashboard from './Dashboard';
import { NavBar } from '../Components/NavBar';
import SideBar from '../Components/SideBar';
import Error from './Error';
import {Note} from './Note'




const Container = styled.div``;
const Wrapper = styled.div``;

export default function Pages() {
    return (
        <Container>        
            <Router>
              <SideBar />
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/dashboard' element={<Dashboard />} />
                        <Route path='/signin' element={<SignIn />} />
                        <Route path='/notes' element={<Note />} />
                        <Route path='/notes/:id' element={<Note />} />
                        {/* handle error error */}
                        <Route path='*' element={<Error />} />
                    </Route>
                </Routes>
            </Router>
        </Container>
    )
}
