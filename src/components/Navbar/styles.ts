import styled from "styled-components";

export const Navbar = styled.div`
  background: #fff;
  height: 40px;
  border-bottom: 1px solid #e0e0e0;
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
  background: #000;
  padding: 10px 16px;
  border: none;
  border-radius: 15px;
  color: #fff;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
