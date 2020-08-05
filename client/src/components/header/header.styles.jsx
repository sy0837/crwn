import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const OptionContainerStyles = css`
  padding: 10px 15px;
        cursor: pointer;`

export const HeaderContainer = styled.div`
  height: 70px;
  width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
   
    align-items: center;
    @media screen and (max-width: 800px) {
      width: 100%;
      padding: 10px;
    margin-bottom: 20px;
    }
`;
export const LogoLink = styled(Link)`
  height: 100%;
    width: 70px;
    /* padding: 25px; */
    padding-top: 20px;
    padding-left: 5px;
    @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;
export const OptionContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;
export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`
export const OptionDiv = styled.div`
${OptionContainerStyles}`
