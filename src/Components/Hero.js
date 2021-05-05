import React from 'react'
import styled from 'styled-components';
import BgImg from '../Assets/Bg-img.webp';

const Section = styled.section`
    background-image: url(${BgImg});
    background-repeat: no-repeat;
    background-size: cover;
    height:780px;
    display: block;

`;
const Content = styled.div`
    width:100%;
    height:100px;
    display:flex;
    position: relative;
    justify-content:center;
    justify-items:center;
    align-items:center;
    align-content:center;
`;
const Left = styled.div`
    width:100%;
    height:100px;
    display:flex;
    flex-direction:column;
    align-items:center;
    align-content:center;
`;
const Title = styled.p`
    color:white;
    font-size:45px;

`;
const Desc = styled.p`
    color:white;
    font-size:20px

`;
const Button = styled.a`
    background-color:yellow;
    font-size:25px;
    display:flex;
    justify-content:center;
    justify-items:center;
    align-items:center;
    align-content:center;
    width:150px;
    height:70px;
    border-radius:8px;
    text-decoration:none;
`;





function Hero() {
    return (
        <Section>
            <Content>
                <Left>
                    <Title>Orion : NeoLiveStream</Title>
                    <Desc>La révolution du streaming est en marche</Desc>
                    <Button href="https://twitch.tv/iamseanred"><span>S'inscrire</span></Button>
                </Left>
            </Content>
        </Section>
    );
};

export default Hero
