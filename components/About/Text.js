import styled from 'styled-components';
import { RoundedButton } from '../Buttons';


const TextWrapper = styled.div`
    font-family: Roboto;
    padding: 50px;
    min-width: 300px;
`;

const Title = styled.h2`
    text-transform: uppercase;
    font-weight: bold;
`;

const Paragraph = styled.p`
    font-family: Roboto;
    font-weight: 500;
    opacity: 0.7;
`;

const Text = (props) => {
    return (
        <TextWrapper>
            <Title>About Us</Title>
            <Paragraph>
                Ipsum accusantium assumenda voluptatum perferendis quas? Ipsum eveniet numquam quam placeat quis eum Ex in sit autem suscipit odio, sit Dignissimos non corporis neque consectetur maiores enim? Voluptate sunt adipisci
            </Paragraph>
            <Paragraph>
               veniet numquam quam placeat quis eum Ex in sit autem suscipit odio, sit Dignissimos non corporis neque consectetur maiores enim? Voluptate sunt adipisci
            </Paragraph>
            <Paragraph>
                Ipsum accusantium assumenda voluptatum perferendis quas? Ipsum eveniet numquam quam placeat quis eum Ex in sit autem suscipit odio, sit Dignissimos non corporis neque consectetur maiores enim? Voluptate sunt adipisci
            </Paragraph>
            <RoundedButton backgroundColor="tomato" textColor="white" text="BOOK NOW" />
        </TextWrapper>
    );
}


export default Text;
