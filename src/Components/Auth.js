import React from 'react'
import styled from 'styled-components';


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
const Title = styled.p`
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
const Button = styled.a`
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
    return (
        <Section>
            <ContentAccount>
                <Left>
                    <Title><h1>Rejoignez-nous</h1></Title>
                    <Mail placeholder="Adresse mail"></Mail>
                    <Password placeholder="Mot de passe"></Password>
                    <Button><span>S'inscrire</span></Button>
                </Left>
            </ContentAccount>
        </Section>
    );
};

export default Auth