import styled from 'styled-components';
import about_image from '../../static/about_image.jpeg';

const ImageWrapper = styled.div`
    background: url(${about_image});
    background-size: cover;
    background-position: center;
    margin: 40px;
    border: 5px solid gray;
    height: 400px;
    min-width: 300px;
    border-radius: 20px;
`;

const Image = (props) => {
    return (
        <ImageWrapper>
        </ImageWrapper>
    );
}


export default Image;
