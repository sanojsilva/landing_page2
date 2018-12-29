import styled from 'styled-components';
import Fade from 'react-reveal/Fade'
import Text from './Text';
import Image from './Image';
import Grid from '@material-ui/core/Grid';

const AboutWrapper = styled.div`
    flex-grow: 1;

`;


const About = (props) => {
    return (
        <AboutWrapper>
            <Grid container>
                <Grid item xs>
                    <Fade left>
                        <Image /> 
                    </Fade>
                </Grid>
                <Grid item xs>
                    <Fade right>
                        <Text /> 
                    </Fade>
                </Grid>
            </Grid>
        </AboutWrapper>
    );
}


export default About;
