import React from 'react'
import styled from 'styled-components';


const Section = styled.section`


`;
const ContentAccount = styled.div`
background-color:blue;

`;
const Left = styled.div`


`;
const Title = styled.p`


`;

function Games () {
    return (
        <Section>
            <ContentAccount>
                <Left>
                    <Title><h1>Les Jeux</h1></Title>
                </Left>
            </ContentAccount>
        </Section>
    );
};

export default Games