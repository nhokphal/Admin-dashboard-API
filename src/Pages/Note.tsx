import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate,
    useParams,
    useNavigate,
} from "react-router-dom";
import { NavLink } from '../Style/Note.styled';

export const Note = () => {
    const url = "https://jsonplaceholder.typicode.com/users"

    const [notes, setNote] = useState<NoteDTB[]>([]);
    interface NoteDTB {
        id: number;
        name: string;
        username: string;
        email: string;
    }


    useEffect(() => {
        console.log('effect')
        axios
            .get(url)
            .then(response => {
                console.log('promise fullfiled')
                setNote(response.data)
            })
    }, [])



    // declare type 
    type ParamTypes = {
        id: number | any;
    }
    const { id } = useParams<ParamTypes>()

    // const id = useParams().id;

    //sort out the equal id number
    const items = notes.find(n => n.id === Number(id))

    return (
        <div>
            {notes.map(note =>
                <li style={{ listStyle: "none" }} key={note.id}>
                    <Link to={`/notes/${note.id}`}></Link>
                </li>
            )}
            Note numbers<br />
            {items?.id}
            {items?.name}
            {items?.email}
            <br />

            {/* When a browser navigates to the url for a specific note, for example /notes/3, we render the Note component: */}
            <NavLink href='https://fullstackopen.com/en/part7/react_router#application-navigation-structure'>
                Useful Link
            </NavLink>
            {/* <div><>{items?.email ? '' : ''}</></div> */}
        </div>
    )
}