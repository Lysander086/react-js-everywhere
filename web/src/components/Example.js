import React from "react";
import styled from "styled-components";

const AlertParagraph = styled.p`
  color: green;
`;


const ErrorParagraph = styled.p`
  color: red;
`;


const Example = ()=>{
  return (
    <div>
      <AlertParagraph>This is green.</AlertParagraph>
      <ErrorParagraph>This is red.</ErrorParagraph>
    </div>
  );
}


export default Example
