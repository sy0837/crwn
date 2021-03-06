import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: black;
  color: white;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
const invertedStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
const googleButton = css`
  background-color: #db4437;
  color: white;
  &:hover {
    background-color: #db4457;
    border: none;
  }
`;

const getButtonStyle = (props) => {
  if (props.isGoogleSigin) {
    return googleButton;
  }
  return props.inverted ? invertedStyles : buttonStyles;
};
export const CustomButtonStyles = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  transition: all 0.2s linear;
  display: flex;
  justify-content: center;
  ${getButtonStyle}
`;
