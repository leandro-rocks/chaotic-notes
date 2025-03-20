import styled from "styled-components";
import { colors, rounding, spacing, typography } from "@styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${spacing.medium};
  align-items: center;
  padding: 0;
`;

export const DateItemContainer = styled.ul`
  display: flex;
  flex-direction: row;
  gap: ${spacing.small};
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const DateItem = styled.li<{ selected: boolean; today: boolean }>`
  position: relative;
  gap: 8px;
  align-items: center;
  padding: ${spacing.medium} 0 ${spacing.xsmall} 0;
  width: 92px;
  text-align: center;
  border: 1px solid ${colors.neutral.lightest};
  border-radius: ${rounding.large};
  cursor: pointer;
  text-transform: capitalize;

  &::before {
    content: attr(data-weekday);
    position: absolute;
    top: 4px;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    text-align: center;

    font-size: ${typography.sizing.xsmall};
    color: ${colors.neutral.medium};
    text-transform: uppercase;
  }

  ${({ selected }) =>
    selected &&
    `
        background-color: ${colors.neutral.darkest};
        color: ${colors.neutral.lightest};
        border-color: ${colors.neutral.darkest};

        &::before {
          color: ${colors.white.medium};
        }
    `};

  ${({ today }) =>
    today &&
    `       
        color: ${colors.danger.medium};
    `};
`;

export const IconButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 45px;
  border: none;
  border-radius: ${rounding.large};
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: ${colors.neutral.lightest};
  }

  & > * {
    cursor: pointer;
  }
`;
