import React, { useEffect, useState } from 'react'
import axios from "axios";
import styled from 'styled-components';
// import { stringify } from 'querystring';


const Container = styled.div
    `
padding-left: 10%;
padding-top: 5%;
margin: auto;
width: 70%;
display: flex;
justify-content: center;
gap: 10px;
flex-flow: row wrap;`;

const Card = styled.div
    `
-webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.29);
box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.29);
border-radius: 10px;
flex: 0 0 10%;
background-color:#a3e4d7 ;
padding: 10px;
`;

const ImgBox = styled.img
    `
width: 100px;
object-fit: cover;
align-self: stretch;
`;

export const MovieDTB = () => {
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=a2af23c911b7f4267d76f66689f1ed00&language=en-US&page=1";

    interface MovieDTB {
        id: number;
        backdrop_path: string;
        original_title: string;
        poster_path: string;
    }

    const [useData, setUsedata] = useState<MovieDTB[]>([]);



    // fetching Data api
    useEffect(() => {
        console.log('effect')
        axios
            .get(url)
            .then(response => {
                console.log('promise fullfiled')
                // results from default api
                setUsedata(response.data.results)
            })
    }, [])
    // console.log('render', useData.length, 'usedata')
    return (
        <Container>
            {/* <Card> */}
            {useData.map(item =>
                <Card>
                    <ImgBox src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />
                    {item.original_title}
                </Card>)
            }

        </Container>
    )
}
