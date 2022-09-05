import styled from 'styled-components';
import { Link } from 'react-router-dom';





// ALL STYLES

export const Container = styled.div`
 max-width:1200px;
 margin: 0 auto;
 padding:0 60px 100px 60px;
`;


export const Title = styled.h1`
  font-family:'Roboto', sans-serif;
  font-size:clamp(2.2rem, 5vw, 5rem);
  color:#F5F5F5;

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
  width:400px;
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






// MY EXPERIENCIES 

export const ExpSection = styled.section`
  min-height:50vh;
  max-width:800px;
  margin:0 auto;
`;


export const DivFlexExp = styled.div`
  display:flex;
  max-width:800px;
  gap:1.25rem;
  position:relative;
  margin:0 auto;
`;


export const DivButtonFlex = styled.div`
  flex: 1;
  max-width:100%;
`;

export const ButtonExp = styled.button`
  font-family: 'Roboto Mono', monospace;
  font-size:1rem;
  font-weight:bold;
  background:transparent;
  border: none;
  display:flex;
  border-left:2px solid #333333;
  width:100%;
  color:#474747;
  padding:10px;
  cursor:pointer;
  transition: .5s ease-in-out;
  &:before{
    content:"•";
    color:#F29602;
    margin-right:10px;
  }
  &:hover{
    color:#f29602;
    background:#3333;
  } &:focus{
    color:#E0E0E0;
    background:#3333;
  }&.active{
    color:#E0E0E0;
    background:#3333;
  }
`

export const CssTest = styled.li`
&.my-node-enter {
  opacity: 0;
}
&.my-node-enter-active {
  opacity: 1;
  transition: opacity .5s ease-in-out;
}
&.my-node-enter-done {
  opacity: 1;
}&.my-node-exit {
  opacity: 0;
}
&.my-node-exit-active {
  opacity: 1;
  transition: opacity .5s ease-in-out;
}
&.my-node-exit-done {
  opacity: 1;
}
`


export const ExpName = styled.h4`
  font-family: 'Roboto Mono', monospace;
  font-size:1rem;
  font-style:italic;
  color:#E0E0E0;
  margin-bottom:1rem;
`;

export const ExpSpanName = styled.span`
  font-family: 'Roboto Mono', monospace;
  font-size:1rem;
  font-style:normal;
  color:#F29602;
  `;


export const ExpParagraph = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size:.875rem;
  color:#E0E0E0;
`

export const DivScroll = styled.div`
position:absolute;
background:#F29602;
width:2px;
height:41px;
top:0;
left:0;
transform: ${({scrollButton}) => scrollButton};
transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s;
`



// FOOTER 

export const FooterP = styled.p` 
  text-align:center;
  font-size:1rem;
  font-family:'Roboto Mono', monospace;
  color:#E0E0E0;
  padding-bottom: 100px ;

`