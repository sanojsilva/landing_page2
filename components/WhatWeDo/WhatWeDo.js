//import React from 'react';
import styled from 'styled-components';
import Box from './Box';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Zoom';
import whatwedo_image from '../../static/whatwedo_image.jpeg';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import EventIcon from '@material-ui/icons/Event';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';

const WhatWeDoWrapper = styled.div`
    flex-grow: 1;
    background-image: linear-gradient(rgba(0,0,0,0), rgba(0, 0, 0, 0.8)), url(${props => props.image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: border-box;
    background-attachment: fixed;
    padding: 20px;
    display: inline-block;
`;


const BoxStyles = {
    fontSize: 60,
    height: 'auto',
    maxWidth: '100%',
    verticalAlign: 'middle'
};


const WhatWeDo = (props) => {

                
    return (
        <WhatWeDoWrapper image={whatwedo_image}>
            <Grid container>
                <Grid item xs>
                    <Fade bottom>
                        <Box title="Delicious Food" icon={<FastfoodIcon style={BoxStyles}/>} /> 
                    </Fade>
                </Grid>
                <Grid item xs>
                    <Fade bottom>
                        <Box title="Private Events" icon={<EventIcon style={BoxStyles}/>} /> 
                    </Fade>
                </Grid>
                <Grid item xs>
                    <Fade bottom>
                    <Box title="Online Order" icon={<AddShoppingCartIcon style={BoxStyles}/>} /> 
                    </Fade>
                </Grid>
                <Grid item xs>
                    <Fade bottom>
                    <Box title="Free Delivery" icon={<DirectionsCarIcon style={BoxStyles}/>} /> 
                    </Fade>
                </Grid>
            </Grid>
        </WhatWeDoWrapper>
    );

};

export default WhatWeDo;
