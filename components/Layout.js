import { scaleRotate as Menu } from 'react-burger-menu'
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

    constructor(props) {
        super(props);
        this.state = {
            hidden: 'none'
        };
    }

    componentDidMount() {
        this.setState({
            hidden: 'block' 
        });
    }

    showSettings(event) {
        event.preventDefault();
    }

    render() {

        const burgerJsx = (
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
        );

        return (
            <div style={{display: this.state.hidden}}>
                {this.props.children}
            </div>
        );
    }
}

export default Layout;
