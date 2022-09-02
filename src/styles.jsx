import styled from 'styled-components';
import { Link } from 'react-router-dom';





// ALL STYLES

export const Container = styled.div`
 max-width:1200px;
 margin: 0 auto;
 padding:0 20px 100px 20px;
`;

export const SectionAll = styled.section`
  position:relative;
  top: 150px;
  min-height:100vh;
`;

export const Title = styled.h1`
  font-family:'Roboto', sans-serif;
  font-size:clamp(40px, 8vw, 80px);
  color:#F5F5F5;
`;


export const SubTitleAll = styled.h2`
color:#E0E0E0;
font-size:1.875rem;
font-family: 'Arial';
margin-bottom: 1.875rem;
&:before{
  content:"❖";
  color:#F29602;
  margin-right:0.625rem;
}
`;

export const ThirdTitle = styled.h3`
  font-size:1rem;
  color:#E0E0E0;
  font-family:'Roboto Mono', monospace;
  font-style:italic;
  font-weight:Normal;
  margin-bottom: 1.875rem;

`;

export const Paragraph = styled.p`
  font-family:'Roboto', sans-serif;
  font-size:1rem;
  line-height:1.2;
  color:#E0E0E0;
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
`;



// HEADER
export const HeaderSite = styled.header`
padding: 30px 0;
`;

export const ContainerHeader = styled(Container)`
display:flex;
align-items:center;
justify-content:space-between;
padding:0;
`;

export const HeaderUl = styled.ul`
display:flex;
align-items:center;
`;

export const HeaderLI = styled.li`
  font-size:1rem;
  margin:1.25rem;
`;


export const LinkHeader = styled(Link)`
  color:#E0E0E0;
  opacity:0.8;
  font-family:${({font}) => font};
  position:relative;
  transition: .2s ease-in-out;
  &:hover,
  &:focus{
    opacity:1;
    color:#F5F5F5;
  }
  &:after{
   content:"";
   width:100%;
   height:2px;
   background:#FDA821;
   position:relative;
   bottom:-68px;
   display: block;
   opacity:0;
  transition: .2s ease-in-out;
  }&:hover:after,
  &:focus:after{
    opacity:1;
    outline:none;
  }`;


// HOME PRESENTATION

export const Span = styled.span`
  font-family:'Roboto', sans-serif;
  font-size:1.25rem;
  color:#F29602;
`;


export const SubTitle = styled.h2`
  font-family:'Roboto', sans-serif;
  font-size:clamp(40px, 8vw, 80px);
  color:#9F9F9F;
`;

export const ParagraphPresentation = styled(Paragraph)`
  margin: 1.875rem 0 1.875rem;
  max-width:600px;
`;

export const DivFlex = styled.div`
display:flex;
align-items:center;
`;


// ABOUT SECTION



export const AboutSect = styled.div `
  display:grid;
  grid-template-columns: 1fr 1fr;
`;


export const ParagraphAbout = styled(Paragraph)`
  max-width:40vw;
`;

export const  ImgDiv = styled.div`
  justify-self:end;
`;

// TECNOLOGIAS

export const  TecDiv = styled.ul`
  display:grid;
  grid-template-columns: repeat(4, 60px);
  gap:1.5rem;
  align-items:center;
  margin-top:1.875rem;
  text-align:center;
`;


export const TecLink = styled(Link)`
  background:#1F1F1F;
  border:2px solid #474747;
  padding:10px;
  display:block;
  cursor:pointer;
  &:hover,
  &:focus{
    background:#333333;
    border:2px solid #F29602;
    outline:none;
  }
`


export const  TecSpan = styled.span`
  font-family:'Roboto', sans-serif;
  font-size:.75rem;  
  font-style:italic;
  color:#E0E0E0;
`;



// MY EXPERIENCIES 




export const DivFlexExp = styled.div`
  display:flex;
  max-width:800px;
  gap:1.25rem;
  justify-content:center;
  position:relative;
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
  margin-bottom:0.625rem;
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