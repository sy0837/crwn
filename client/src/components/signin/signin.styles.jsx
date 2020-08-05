import styled,{keyframes} from 'styled-components';

const disappear= keyframes`
0%{
  opacity: 1;
}
100%{
  opacity: 0;
}`

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const ErrorWarning = styled.span`
color: red;
animation: ${disappear} 4s linear
`

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;