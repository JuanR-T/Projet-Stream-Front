import React, { useState, useEffect }from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components';
import Axios from 'axios';

const Section = styled.section`
display:flex;
justify-content:center;
justify-items:center;
align-items:center;
align-content:center;
`;
const ContentAccount = styled.div`
background-color:Green;
width:400px;

`;
const Left = styled.form`
display:flex;
flex-direction:column;


align-items:center;


`;
const Title = styled.h1`
margin:0px;

`;
const Mail = styled.input`
padding:10px;
margin:5px;

`;
const Password = styled.input`
padding:10px;
margin:5px;

`;
const Button = styled.button`
background-color:white;
font-size:20px;
margin:10px;
display:flex;
justify-content:center;
justify-items:center;
align-items:center;
align-content:center;
width:150px;
height:30px;
border-radius:8px;
text-decoration:none;
`;
function Login() {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push("/connected")
        }
    }, [])

    async function login(){
        console.warn(username,password)
        let item={username,password};
        let result = await fetch("http://localhost:3001/auth",{
            method:'POST',
            headers:{
                "Content-type":"application/json",
                "Accept":'application/json'
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result))
        history.push("/")
    } 
    return (
        <Section >
            <ContentAccount>
                <Left>
                    <Title ><h1>Bienvenue</h1></Title>
                    <Mail onChange={(e)=>setUsername(e.target.value)} placeholder="Adresse mail" type="text"></Mail>
                    <Password onChange={(e)=>setPassword(e.target.value)} placeholder="Mot de passe" type="password"></Password>
                </Left>
                    <Button onClick={login}>Se connecter</Button>
            </ContentAccount>
        </Section>
    );
};

export default Login