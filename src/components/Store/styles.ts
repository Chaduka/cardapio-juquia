import styled from "styled-components";

export const Store = styled.div`
  background: #fff;
  border-radius: 8px;
  height: 250px;
  border: 1px solid #e0e0e0;
  display: grid;
  grid-template: min-content/3fr 7fr;
  gap: 16px;
`;

export const H2 = styled.h2`
  font-weight: 500;
  font-size: 16px;
  margin: 0;
`;

export const Name = styled.h2`
  font-weight: 500;
  font-size: 24px;
  margin: 0;
`;

export const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Status = styled.div<{ isOpen: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${({ isOpen }) => (isOpen ? "#36a736" : "#d14545")};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Informations = styled.div`
  padding: 16px 0%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
