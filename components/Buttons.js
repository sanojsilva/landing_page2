import styled from 'styled-components';

const RoundedButtonWrapper = styled.button`
    border: none;
    border-radius: 20px;
    padding: 15px 40px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    color: ${props => props.textColor};
    background-color: ${props => props.backgroundColor};
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    outline: none;
    background-position: center;
    transition: background 0.8s;
    margin: 5px;

    &:hover {
        background: ${props => props.backgroundColor} radial-gradient(circle, transparent 1%, ${props => props.backgroundColor} 1%) center/15000%;
    }

    &:active {
        background-color: #d1eaff;
        background-size: 100%;
        transition: background 0s;
    }
`;

const SquareButtonWrapper = styled.button`
    border: 1px solid white;
    padding: 12px 40px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    color: ${props => props.textColor};
    background-color: ${props => props.backgroundColor};
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    background-position: center;
    transition: background 0.8s;
    margin: 5px;
    flex: 1;
    font-family: Roboto;


    &:hover {
        background: ${props => props.backgroundColor} radial-gradient(circle, transparent 1%, ${props => props.backgroundColor} 1%) center/15000%;
    }

    &:active {
        background-color: #d1eaff;
        background-size: 100%;
        transition: background 0s;
        outline: 0
    }

`;

export const RoundedButton = (props) => {
    return (
        <RoundedButtonWrapper textColor={props.textColor} backgroundColor={props.backgroundColor} >
            {props.text}
        </RoundedButtonWrapper>
    );
}

export const SquareButton = (props) => {

    return (
        <SquareButtonWrapper textColor={props.textColor} backgroundColor={props.backgroundColor} >
            {props.text}
        </SquareButtonWrapper>
    );
}

//<RoundedButton backgroundColor="lightblue" textColor="white" text="Button" />
//<RoundedButton backgroundColor="tomato" textColor="white" text="Button" />
//<RoundedButton backgroundColor="lightgreen" textColor="white" text="Button" />
//<RoundedButton backgroundColor="#4caeff" textColor="white" text="Button" />
