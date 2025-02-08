import { spacing } from "@styles";
import styled from "styled-components";

export const Container = styled.div`
  margin: ${spacing.medium} ${spacing.small};
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const ListItem = styled.li``;
