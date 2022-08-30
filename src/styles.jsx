import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';



// ALL STYLES

export const Container = styled.div`
 max-width:1400px;
 margin: 0 auto;
 padding: 6.25rem 60px;
`;

export const Title = styled.h1`
  font-family:'Roboto', sans-serif;
  font-size:3.125rem;
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

export const Paragraph = styled.p`
  font-family:'Roboto', sans-serif;
  font-size:1.125rem;
  color:#E0E0E0;
`;


export const ButtonForm = styled(Link)`
  font-family:'Roboto', sans-serif;
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
padding: 1.875rem 0;
background:#1F1F1F;
`;

export const ContainerHeader = styled(Container)`
display:flex;
align-items:center;
justify-content:space-between;
padding:0 60px;
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
  font-family:'Roboto', sans-serif;
  font-size:.75rem;  
  font-style:italic;
  color:#E0E0E0;
`;



// MY EXPERIENCIES 

export const SubH3 = styled.h3`
  font-family:'Roboto', sans-serif;
  font-size: 1.25rem;
  font-style:italic;
  font-weight:normal;
  color:#E0E0E0;
  margin-bottom:1.875rem;
`;


export const ButtonExp = styled.button`
  background:transparent;
  border:none;
  outline:none;
  cursor:pointer;
  color:#474747;
  font-size:1rem;
  font-family:'Roboto', sans-serif;
  display:flex;
  flex:1;
  padding:10px 0;
  transition:.5s ease-in-out;
  &:before{
    content:"•";
    color:#F29602;
    margin:0 0.625rem;
  } &:hover{
      color:#f29602;
    } &:focus{
      color:#fff;
      background:#1F1F1F;  
      cursor:pointer;
    }&.active{
      color:#fff;
      background:#1F1F1F;  
      cursor:pointer;
    }
`;


export const JobDiv = styled.div`
  display:grid;
  grid-template-columns:1fr;
`;


export const DivExp = styled(JobDiv)`
  grid-template-columns:repeat(2,400px);
  gap:1.875rem;
`;


export const TitleExp = styled.h4`
font-family:'Roboto', sans-serif;
font-size:1rem;
font-style:italic;
font-weight: normal;
color:#F5F5F5;
margin-bottom:10px;
`;


export const TitleSpan = styled.span`
  color:#F29602;
  font-family:'Roboto', sans-serif;
  font-size:1rem;
  font-style:initial;
  font-weight:bold;
  display:inline-block;
  letter-spacing:1px;
  margin-left:5px;
`;



export const ParagraphExp = styled.p`
  font-family:'Roboto', sans-serif;
  font-size: .875rem;
  color:#E0E0E0;
  line-height:1.2;
`;




