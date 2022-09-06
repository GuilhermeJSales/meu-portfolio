import styled from 'styled-components';
import { Link } from 'react-router-dom';





// ALL STYLES
export const Title = styled.h1`
  font-family:'Roboto', sans-serif;
  font-size:clamp(2.2rem, 5vw, 5rem);
  color:#F5F5F5;
  margin-top:1.125rem;
`;


export const SubTitleAll = styled.h2`
color:#E0E0E0;
font-size:1.875rem;
font-family: 'Helvetica', arial;
letter-spacing:1.1px;
margin-bottom: 1.875rem;
position:relative;
&:before{
  content:"❖";
  font-size:1.5rem;
  color:#F29602;
  margin-right:0.625rem;
}&:after{
  content:'';
  background:#333333;
  width:200px;
  height:1px;
  display:inline-block;
  position:absolute;
  top:20px;
  margin-left:10px;
}   @media (max-width:63rem){
    &:after{
      width: 250px;
    }
  } @media (max-width:33rem){
    &:after{
      width: 100px;
    }
  }
  @media (max-width:25rem){
    &:after{
      display:none;
    }
  }
`;

export const ThirdTitle = styled.h3`
  font-size:1rem;
  color:#E0E0E0;
  font-family:'Roboto Mono', monospace;
  font-style:italic;
  font-weight:Normal;
  margin-bottom: 2.25rem;
  @media (max-width:38rem){
    font-size:.675rem;
  }
`;

export const Paragraph = styled.p`
  font-family:'Roboto', sans-serif;
  font-size:1rem;
  line-height:1.2;
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






