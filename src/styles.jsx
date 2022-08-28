import styled from 'styled-components';
import { Link } from 'react-router-dom';



// ALL STYLES

export const Container = styled.div`
 max-width:1400px;
 margin: 0 auto;
 padding: 6.25rem 0;
`;

export const Title = styled.h1`
  font-family:'Roboto';
  font-size:3.125rem;
  color:#F5F5F5;
`;

export const Paragraph = styled.p`
  font-family:'Roboto';
  font-size:1.125rem;
  color:#E0E0E0;
`;


export const ButtonForm = styled(Link)`
  font-family:'Roboto';
  font-size:1.25rem;
  text-transform:uppercase;
  color:#E0E0E0;
  background:#1F1F1F;
  outline: 2px solid #474747;
  border: 3px solid #141414;
  padding:1.375rem;
  margin-top: 1.875rem;
  display:inline-block;
  width:241px;
  height:68px;
  text-align:center;
  margin-right:${({margin}) => margin ? margin : ''};
  &:hover,
  &:focus{
    background:#333333;
    color:#F5F5F5;
    border: 3px solid #141414;
    outline: 2px solid #F29602;
  }
`;



// HEADER
export const HeaderSite = styled.header`
padding: 1.875rem;
background:#1F1F1F;
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
  font-family:'Roboto';
  font-size:1.25rem;
  color:#F29602;
`;


export const SubTitle = styled.h2`
  font-family:'Roboto';
  font-size:3.125rem;
  color:#F5F5F5;
`;

export const ParagraphPresentation = styled(Paragraph)`
  margin-top: 1.875rem;
  max-width:35vw;
`;

export const DivFlex = styled.div`
display:flex;
align-items:center;
`;


// ABOUT SECTION

export const TitleAbout = styled.h2`
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

export const AboutSect = styled.section `
  padding:100px 0;
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
  font-family:'Roboto';
  font-size:.75rem;  
  font-style:italic;
  color:#E0E0E0;
`;

