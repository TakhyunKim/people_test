import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.script`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
  font-size: 3rem;
  font-weight: bold;
`;

function Header() {
  return (
    <Wrapper>
      Angular / Angular-cli
    </Wrapper>
  );
}

export default Header;
