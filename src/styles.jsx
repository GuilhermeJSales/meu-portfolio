import styled from 'styled-components';
import { Link } from 'react-router-dom';





// ALL STYLES

export const MainConfigs = styled.main`
  max-width:min(100% - 100px, 1600px - 150px);
  width:100%;
  margin:0 auto;
  z-index:-1;
`




export const Title = styled.h1`
  font-size:clamp(1.5rem, 5vw, 5rem);
  color:#F5F5F5;
  margin-top:1.125rem;
`;


export const SubTitleAll = styled.h2`
  color:#F5F5F5;
  font-size:clamp(1.5rem, 5vw, 2.5rem);
  letter-spacing:1.1px;
  font-weight:bold;
  position:relative;
  z-index:1;
  margin: 0  0 20px 5px;
  &:before{
  content:'';
  z-index:-1;
  background:#FF7A21;
  border-radius:0 6px 6px 6px ;
  box-shadow: 2px 2px 2px rgba(0,0,0,.3);
  width:4%;
  height:35%;
  display:inline-block;
  position:absolute;
  bottom:5px;
  left:-5px;
  margin-left:0px;
}
`;

export const ThirdTitle = styled.h3`
  font-size:1rem;
  color:#E0E0E0;
  font-family:'Roboto Mono', monospace;
  font-style:italic;
  font-weight:Normal;
  margin-top:10px;
  margin-bottom: 2.25rem;
  @media (max-width:38rem){
    font-size:.675rem;
  }
`;

export const Paragraph = styled.p`
  font-family:'Roboto', sans-serif;
  color:#E0E0E0;
  @media (max-width:32rem) {
    font-size:.875rem;
  }
`;


export const ButtonForm = styled(Link)`
  font-family:'Roboto Mono', monospace;
  font-size:1rem;
  letter-spacing:1px;
  text-transform:uppercase;
  color:#9F9F9F;
  background:#1F1F1F;
  outline: 2px solid #474747;
  border: 3px solid #141414;
  padding:1.375rem;
  margin-top: 1.875rem;
  width:250px;
  text-align:center;
  margin-right:${({margin}) => margin ? margin : ''};
  transition: .3s ease-in-out;
  &:hover,
  &:focus{
    background:#3333;
    color:#F5F5F5;
    border: 3px solid #141414;
    outline: 2px solid #F29602;
  }
  @media (max-width:25rem) {
    font-size:.875rem;
    width:210px;
  }
`;






