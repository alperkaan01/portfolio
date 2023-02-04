import React from "react";
import styled from "styled-components";


const Content = styled.aside`
  position: relative;
  margin: 2em auto;
`;

const ContentPoint = styled.span`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #8c52ff;
  display: block;
  margin-left: -10px;
`;

const ContentChildren = styled.div`
  position: relative;
  padding: 0em 1em;
  top: -8px;
  width: 60%;
`;

function VerticalLineContent({ children, className, position }) {
  return (
    <Content className={className}>
      <ContentPoint />
      <ContentChildren position={position}>{children}</ContentChildren>
    </Content>
  );
}

export default VerticalLineContent;