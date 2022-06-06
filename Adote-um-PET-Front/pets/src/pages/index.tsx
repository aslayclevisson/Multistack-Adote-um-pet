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

      <Lista />
    </>
  );
};

export default Home;
