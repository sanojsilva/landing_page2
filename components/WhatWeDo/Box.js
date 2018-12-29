//import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

const BoxWrapper = styled.div`
    padding: 20px;
    //background-color: tomato;
    margin: 20px;
    color: white;
    font-family: Roboto;
`;

const Icon = styled.div`
    text-align: center;
    border: 2px solid tomato;
    border-radius: 50%;
    width: 125px;
    line-height: 125px;
    margin: 0 auto;
    margin-bottom: 10px;
    width: 125px;
    position: relative;

    &:hover {
        background-color: tomato;
        transition: all 0.5s ease 0s;
    }
`;

const Title = styled.div`
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    padding:5px;
    font-size: 20px;
`;

const Text = styled.div`
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 2px solid tomato;
    border-bottom-width: 3px;
    padding: 10px;
`;


const Box = (props) => {

    return (
        <BoxWrapper>
            <Icon>
                {props.icon}
            </Icon>
            <Title>{props.title}</Title>
            <Text>
                Amet temporibus expedita eligendi est adipisci Exercitationem dolorem pariatur inventore cum officia 
            </Text>
        </BoxWrapper>
    );

};

export default Box;
