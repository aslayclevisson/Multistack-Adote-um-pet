import { styled } from "@mui/material";
import theme from "../../themes/theme";

export const ListaStyle = styled("ul")`
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const ItemListaStyle = styled("li")`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(6)};
  // breakpoint já definido no tema
  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing(2)};
  }
`;

export const FotoStyle = styled("img")`
  width: 100%;
`;

export const CaixaInformacoes = styled("div")`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const NomeStyle = styled("h2")`
  margin: 0;
`;

export const DescricaoStyle = styled("p")`
  word-break: break-word;
  margin: 0;
`;
