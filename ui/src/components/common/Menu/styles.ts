import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
  border-radius: 2px;

  background: ${({ theme }) => {
    switch (theme.palette.mode) {
      case "light":
        return "#fff";
      case "dark":
        return "#27343e";
    }
  }};
`;

export const Header = styled.div`
  padding: 2px 8px;
  font-size: 10px;
  line-height: 14px;
  /* color: #7c7c94; */
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  flex-direction: row;
  width: 100%;
  list-style-type: none;
  padding: 6px 8px;
  font-size: 10px;
  line-height: 12px;
  /* color: #9b9b9b; */
  cursor: pointer;
`;
