import React,{useState} from 'react'
import styled from 'styled-components';
import Axios from 'axios';

// apzeoi  aze
const Section = styled.section`
display:flex;
justify-content:center;
justify-items:center;
align-items:center;
align-content:center;
`;
const ContentAccount = styled.div`
background-color:blue;
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
function Auth() {
    const url="http://localhost:3001/users"
    const[data, setData] = useState({
        mail:"",
        password:""
    })

    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            username: data.mail,
            password: data.password
        })
        .then(res=>{
            console.log(res.data)
        })
    }

    function handle(e){
        const newdata={ ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return (
        <Section>
            <ContentAccount>
                <Left onSubmit={(e)=> submit(e)}>
                    <Title ><h1>Rejoignez-nous</h1></Title>
                    <Mail onChange={(e)=>handle(e)} id="mail" value ={data.mail} placeholder="Adresse mail" type="text"></Mail>
                    <Password onChange={(e)=>handle(e)} id="password" value ={data.password} placeholder="Mot de passe" type="password"></Password>
                    <Button ><span>S'inscrire</span></Button>
                </Left>
            </ContentAccount>
        </Section>
    );
};


export default Auth