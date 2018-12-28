import { scaleRotate as Menu } from 'react-burger-menu'
import Head from 'next/head';
import styled from 'styled-components';

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#fff'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
    overflow: 'hidden !important',

  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '10px',
    textAlign: 'center',
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const LinkWrapper = styled.a`
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 30px;
    text-transform: uppercase;
    margin-bottom: 10px;

    &:hover {
        cursor: pointer;
        border-bottom: 2px solid white;
    }
`;

class Layout extends React.Component {

    showSettings(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta charSet="utf-8" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
                    <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                </Head>
                <style jsx global>{`
                  body { 
                    margin: 0;
                    padding: 0;
                  }

                  *:focus {
                    outline: none;
                  }

                `}</style>
                <div id="outer-container" style={{height: '100%'}}>
                    <Menu styles={ styles } width={ '20%' } pageWrapId={"page-wrap"} outerContainerId={"outer-container"} >
                        <LinkWrapper>Home</LinkWrapper>
                        <LinkWrapper>About</LinkWrapper>
                        <LinkWrapper>Contact</LinkWrapper>
                        <LinkWrapper>Highlights</LinkWrapper>
                    </Menu>
                    <main id="page-wrap">
                        {this.props.children}
                    </main>
                </div>
            </div>
        );
    }
}

export default Layout;
