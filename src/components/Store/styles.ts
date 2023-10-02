import styled from "styled-components";

export const Store = styled.div`
  background: #e4e4de;
  height: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  border: 1px solid #000;
`;

export const H2 = styled.h2`
  font-weight: 500;
  font-size: 20px;
  margin: 0;
`;

export const Name = styled.h2`
  font-weight: 500;
  font-size: 32px;
  margin: 0;
`;

export const Status = styled.div`
  font-weight: 400;
  font-size: 16px;
  background: #595f39;
  color: #fff;
  padding: 5px;
  border: 5px;
  margin-top: 5px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  height: 100%;
`;

export const Image = styled.img`
  object-fit: contain;
`;
