import React, { useState, useLayoutEffect, useRef } from "react";
import styled from "styled-components";


/**
 * Styled component
 */
const Wrapper = styled.section`
  width: 100%;
  margin: 2em auto;
  position: relative;
  padding: 0em 1em;
  * {
    box-sizing: border-box;
  }
  ::after {
    content: "";
    display: table;
    clear: both;
  }
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 10px;
    height: ${(props) => props.lineHeight}px;
    width: 2px;
    background: #5cbd95;
  }
`;

function VerticalLineWrapper({ className, children }) {
  const [lineHeight, setLineHeight] = useState(0);
  const wrapperHeight = useRef(null);

  useLayoutEffect(() => {
    const handleResize = () => {
      setLineHeight(
        wrapperHeight.current.clientHeight
      );
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [children, lineHeight]);

  return (
    <Wrapper
      ref={wrapperHeight}
      id="vertical--line--wrapper"
      className={className}
      lineHeight={lineHeight}
    >
      {children}
    </Wrapper>
  );
}

export default VerticalLineWrapper;