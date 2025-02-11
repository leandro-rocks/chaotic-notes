import { colors, rounding } from "@styles";
import styled from "styled-components";

export const Input = styled.input.attrs({
  type: "checkbox",
})`
  position: relative;
  border: 2px solid ${colors.neutral.lighter};
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: ${rounding.small};
  text-align: center;
  box-sizing: border-box;

  &::after {
    position: absolute;
    top: -1px;
    left: -1px;
    font-family: "Material Symbols Outlined";
    font-weight: normal;
    font-style: normal;
    font-size: 18px;
    color: ${colors.white.medium};
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: "liga";
    -webkit-font-smoothing: antialiased;
  }

  &:checked {
    background-color: ${colors.neutral.darkest};
    border-color: ${colors.neutral.darkest};

    &::after {
      content: "check";
    }
  }

  &:indeterminate {
    background-color: ${colors.neutral.dark};
    border-color: ${colors.neutral.dark};

    &::after {
      content: "remove";
    }
  }
`;
