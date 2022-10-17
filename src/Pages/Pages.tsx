import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from './Home';
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
                    {/* routes or switch in v6 */}
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path='/dashboard' element={<Dashboard />} />
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
