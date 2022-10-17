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

export const Note = () => {


 const url = "https://jsonplaceholder.typicode.com/posts"

 interface NoteDTB {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const [notes, setNote] = useState<NoteDTB[]>([]);

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
type ParamTypes =  {
    id: number | any;
  }
  const { id } = useParams<ParamTypes>()
  


// const id = useParams().id;
const items = notes.find(n => n.id === Number(id))

  return (
    <div>
        {notes.map(note =>
            <li style={{listStyle: "none"}}key={note.id}>
            <Link to={`/notes/${note.id}`}></Link>
            </li>
            )}
        {items?.id}.
        {items?.title}
    </div>
    
  )}