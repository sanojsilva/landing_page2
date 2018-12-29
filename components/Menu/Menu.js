//import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
//import Zoom from 'react-reveal/Zoom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const MenuWrapper = styled.div`
    //margin: 0 5%;
`;


const Title = styled.div`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 30px;
    text-align: center;
    padding: 40px 0;
    font-family: Roboto;
`;


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '80%',
    margin: "auto",
    backgroundColor: theme.palette.background.paper,
  },
});

class Menu extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            value: 0
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };
    render() {
        const { classes } = this.props;
        const { value } = this.state;

        const tabs = [
            "SPECIAL",
            "BREAKFAST",
            "LUNCH",
            "DINNER",
            "SNACKS"
        ];

        return (
            <MenuWrapper>
                <Title>Our Menu</Title>
                  <div className={classes.root}>
                    <AppBar position="static" color="default">
                      <Tabs
                        value={value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        scrollable
                        scrollButtons="auto"
                      >
                          {tabs.map((tab, index) => <Tab label={tab} />)}
                      </Tabs>
                    </AppBar>
                    {value === 0 && <TabContainer>Item One</TabContainer>}
                    {value === 1 && <TabContainer>Item Two</TabContainer>}
                    {value === 2 && <TabContainer>Item Three</TabContainer>}
                    {value === 3 && <TabContainer>Item Four</TabContainer>}
                    {value === 4 && <TabContainer>Item Five</TabContainer>}
                  </div>
            </MenuWrapper>
        );
    }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);
