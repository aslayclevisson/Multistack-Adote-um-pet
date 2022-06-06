import {
  ListaStyle,
  ItemListaStyle,
  FotoStyle,
  CaixaInformacoes,
  NomeStyle,
  DescricaoStyle,
} from "./Lista.style";
import { Button } from "@mui/material";

function Lista() {
  return (
    <>
      <ListaStyle>
        <ItemListaStyle>
          <FotoStyle
            src="https://veja.abril.com.br/wp-content/uploads/2017/01/cao-labrador-3-copy.jpg"
            alt="Adote um pet"
          />
          <CaixaInformacoes>
            <NomeStyle>Adote um pet</NomeStyle>
            <DescricaoStyle>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              asperiores fugit, eligendi veniam cupiditate explicabo sed autem?
              Deleniti aut eos fugiat dignissimos tempora in suscipit corrupti
              adipisci quam, eveniet quod?
            </DescricaoStyle>

            <Button variant={"contained"} fullWidth>
              Adotar
            </Button>
          </CaixaInformacoes>
        </ItemListaStyle>
      </ListaStyle>
    </>
  );
}

export default Lista;
