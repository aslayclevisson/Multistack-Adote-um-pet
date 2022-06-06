import {
  ListaStyle,
  ItemListaStyle,
  FotoStyle,
  CaixaInformacoes,
  NomeStyle,
  DescricaoStyle,
} from "./Lista.style";
import { Button } from "@mui/material";
import { Pet } from "../../../data/@types/Pet";
interface ListaProps {
  pets: Pet[];
}

function Lista(props: ListaProps) {
  return (
    <>
      <ListaStyle>
        {props.pets.map((pet) => (
          <ItemListaStyle key={pet.id}>
            <FotoStyle src={pet.foto} alt="Adote um pet" />
            <CaixaInformacoes>
              <NomeStyle>{pet.nome}</NomeStyle>
              <DescricaoStyle>{pet.historia}</DescricaoStyle>

              <Button variant={"contained"} fullWidth>
                Adotar {pet.nome}
              </Button>
            </CaixaInformacoes>
          </ItemListaStyle>
        ))}
      </ListaStyle>
    </>
  );
}

export default Lista;
