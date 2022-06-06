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
import { TextService } from "../../../data/services/TextService";
interface ListaProps {
  pets: Pet[];
}

function Lista(props: ListaProps) {
  const limiteTexto = 150;

  return (
    <>
      <ListaStyle>
        {props.pets.map((pet) => (
          <ItemListaStyle key={pet.id}>
            <FotoStyle src={pet.foto} alt="Adote um pet" />
            <CaixaInformacoes>
              <NomeStyle>{pet.nome}</NomeStyle>
              <DescricaoStyle>
                {TextService.limitaTexto(pet.historia, limiteTexto)}
              </DescricaoStyle>

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
