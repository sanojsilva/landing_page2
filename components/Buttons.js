import styled from 'styled-components';

const RoundedButtonWrapper = styled.button`
    border: none;
    border-radius: 10px;
    padding: 12px 40px;
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


export const RoundedButton = (props) => {
    return (
        <RoundedButtonWrapper textColor={props.textColor} backgroundColor={props.backgroundColor} >
            {props.text}
        </RoundedButtonWrapper>
    );
}

//<RoundedButton backgroundColor="lightblue" textColor="white" text="Button" />
//<RoundedButton backgroundColor="tomato" textColor="white" text="Button" />
//<RoundedButton backgroundColor="lightgreen" textColor="white" text="Button" />
//<RoundedButton backgroundColor="#4caeff" textColor="white" text="Button" />
