import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #0f172a;
  color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;

  span {
    color: #4ade80;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          Carbon<span>Trackr</span>
        </Logo>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
