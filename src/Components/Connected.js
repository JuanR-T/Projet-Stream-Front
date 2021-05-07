import React, { useState, useEffect }from 'react'

import styled from 'styled-components';

const Section = styled.section`
display:flex;
justify-content:center;
justify-items:center;
align-items:center;
align-content:center;
height:80vh;
width:100%;
`;
const ContentAccount = styled.div`
background-color:beige;
width:400px;
height:400px;
border-radius:10px;
text-align:center;
display:flex;
align-items:center;
`;
const Left = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`;
const Title = styled.h1`
margin:0px;

`;


function Connected() {

    return (
        <Section >
            <ContentAccount>
                <Left>
                    <Title ><h1>Vous êtes bien connecté(e) !</h1></Title>
                </Left>
            </ContentAccount>
        </Section>
    );
};

export default Connected