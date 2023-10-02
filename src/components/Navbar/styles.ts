import styled from "styled-components";

export const Navbar = styled.div`
  background: #1b1b1b;
  height: 40px;
  border-bottom: 1px solid #c4c5ba;
  padding: 10px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  color: #fff;
  margin: 0px;
`;

export const Button = styled.button`
  background: #c4c5ba;
  padding: 5px 10px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
