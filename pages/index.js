import Layout from '../components/Layout';
import hero_image1 from '../static/hero_image1.jpeg';
import hero_image2 from '../static/hero_image2.jpeg';
import hero_image3 from '../static/hero_image3.jpeg';
import styled from 'styled-components';
import Slider from 'react-slick';
import HeroText from '../components/HeroText';


const ImageWrapper = styled.div`
    background-image: linear-gradient(rgba(0,0,0,0), rgba(0, 0, 0, 0.5)), url(${props => props.image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    box-shadow: border-box;
    background-attachment: fixed;
`;

const Index = (props) => {

    const settings = {
        dots: false,
        infinite: true,
        fade: true,
        autoplay: true,
        speed: 5000,
        arrows: false
    };

    const images = [
        hero_image1,
        hero_image2,
        hero_image3
    ];

    return (
        <Layout>
            <HeroText />
            <Slider {...settings}>
                {images.map((image, index) => <ImageWrapper image={image} key={index}></ImageWrapper>)}
            </Slider>

            <div>
                Hello world
            </div>
        </Layout>
    );
}

export default Index;
