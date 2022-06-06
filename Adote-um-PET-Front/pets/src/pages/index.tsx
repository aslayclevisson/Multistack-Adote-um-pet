import type { NextPage } from "next";
import Titulo from "../ui/components/Titulo/Titulo";
import Lista from "../ui/components/Lista/Lista";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Titulo
          titulo={"Olá, Aslay!"}
          subtitulo={
            <span>
              Saiba, que, com um pequeno valor mensal, você <br />
              <strong>pode adotar um pet vitualmente</strong>
            </span>
          }
        />
      </div>

      <Lista
        pets={[
          {
            id: 1,
            nome: "Bobby",
            historia: "Um cachorro muito bem cuidado",
            foto: "https://veja.abril.com.br/wp-content/uploads/2017/01/cao-labrador-3-copy.jpg",
          },
          {
            id: 2,
            nome: "Scobby",
            historia: "Cachorro cheiroso e alegre",
            foto: "https://veja.abril.com.br/wp-content/uploads/2017/01/cao-labrador-3-copy.jpg",
          },
        ]}
      />
    </>
  );
};

export default Home;
