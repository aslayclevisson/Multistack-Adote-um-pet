import type { NextPage } from "next";
import Titulo from "../ui/components/Titulo/Titulo";
import Lista from "../ui/components/Lista/Lista";
import {
  Dialog,
  TextField,
  DialogActions,
  Button,
  Snackbar,
} from "@mui/material";

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

        <Lista
          pets={[
            {
              id: 1,
              nome: "Bobby",
              historia:
                "Um cachorro muito bem cuidado e...... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi ullam ex ducimus, deleniti architecto, saepe eligendi consequatur amet, atque perferendis quod unde quae! Ipsa magni fugit debitis omnis consequatur rem!",
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
        {/* sx viabiliza o uso do css */}
        <Dialog open={false} fullWidth PaperProps={{ sx: { padding: "40px" } }}>
          <TextField
            label={"E-mail"}
            type={"email"}
            sx={{ pb: "10px" }}
            fullWidth
          />
          <TextField label={"Quantia por mês"} type={"number"} fullWidth />

          <DialogActions>
            <Button>Cancelar</Button>
            <Button variant={"contained"}>Confirmar adoção</Button>
          </DialogActions>
        </Dialog>

        <Snackbar open={false} message={"Você acaba de adotar um animal"} />
      </div>
    </>
  );
};

export default Home;
