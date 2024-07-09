// components/Center.tsx
import React from "react";
import styled from "@emotion/styled";

const StyledDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Center: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default Center;
