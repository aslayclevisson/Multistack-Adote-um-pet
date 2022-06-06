import { TituloStyle, SubtituloStyle } from "./Titulo.style";

interface TituloProps {
  titulo: string;
  subtitulo?: string | JSX.Element; // ? significa que é opcional
}

function Titulo(props: TituloProps) {
  return (
    <>
      <TituloStyle>{props.titulo}</TituloStyle>
      <SubtituloStyle>{props.subtitulo}</SubtituloStyle>
    </>
  );
}

export default Titulo;
