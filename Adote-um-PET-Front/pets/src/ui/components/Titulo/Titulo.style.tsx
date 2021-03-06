import { styled } from "@mui/material";
import theme from "../../themes/theme";

export const TituloStyle = styled("h1")`
  font-size: 20px;
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing(5)};
`;

export const SubtituloStyle = styled("h2")`
  font-size: 16px;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing(5)};
  font-weight: normal;
  color: ${({ theme }) => theme.palette.text.secondary};
`;
