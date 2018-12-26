import Layout from '../components/Layout';
import hero_image from '../static/hero_image.jpeg';
import styled from 'styled-components';

const IndexWrapper = styled.div`
    background-image: linear-gradient(rgba(0,0,0,0), rgba(0, 0, 0, 0.5)), url(${props => props.image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    box-shadow: border-box;
`;

const Index = (props) => {
    return (
        <Layout>
            <IndexWrapper image={hero_image} >
            </IndexWrapper>
        </Layout>
    );
}

export default Index;
