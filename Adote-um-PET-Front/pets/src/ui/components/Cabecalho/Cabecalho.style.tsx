import { styled } from "@mui/material";
import theme from "../../themes/theme";

export const CabecalhoContainer = styled("header")`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #ccc;
  padding: ${({ theme }) => theme.spacing(6)};
`;

export const Logo = styled("img")`
  height: 75px;
`;
