import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom'
import { SquareButton } from '../Buttons';

const HeroTextWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: black;
    z-index: 1;
    //max-width: 400px;
`;

const Title = styled.h3`
    font-weight: bold;
    font-family: Roboto;
    font-size: 60px;
    text-align: center;
    margin-bottom: 0;
    //text-transform: uppercase;
`;

const Text = styled.p`
    font-weight: bold;
    text-align: center;
    padding-bottom: 10px;
    font-family: Roboto;
`;

const ButtonsWrapper = styled.div`
    display: flex;
`;

const HeroText = (props) => {

    const midText = "Adipisicing itaque dolor quasi aliquam voluptates possimus Nobis alias recusandae deserunt nemo obcaecati! Eaque illo alias accusamus earum impedit nisi?";

    return(
        <HeroTextWrapper>
            <Zoom ssrFadeout>
                <Title>
                    Best Food In The World
                </Title>
                <Text>Elit iure voluptatem modi dolorem maiores dignissimos veritatis Numquam provident earum ariatur Elit iure voluptatem modi dolorem maiores dignissimos veritatis Numquam provident earum ariatur</Text>
                <ButtonsWrapper>
                    <SquareButton backgroundColor="tomato" textColor="white" text="Learn More" />
                    <SquareButton backgroundColor="transparent" textColor="white" text="View Food Types" />
                </ButtonsWrapper>
            </Zoom>
        </HeroTextWrapper>
    );
}


export default HeroText;
