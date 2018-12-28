import styled from 'styled-components';
import Fade from 'react-reveal/Fade'
import Text from './Text';
import Image from './Image';

const AboutWrapper = styled.div`
    display: flex;
`;


const About = (props) => {
    return (
        <AboutWrapper>
            <div style={{flex: '1'}}>
                <Fade left>
                    <Image />
                </Fade>
            </div>

            <div style={{flex: '1'}}>
                <Fade right>
                    <Text />
                </Fade>
            </div>
        </AboutWrapper>
    );
}


export default About;
