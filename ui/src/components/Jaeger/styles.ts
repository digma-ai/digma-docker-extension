import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.div`
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #27343e;
  padding: 0 12px;
`;

export const Title = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #dadada;
`;

export const Iframe = styled.iframe`
  height: 100%;
`;
