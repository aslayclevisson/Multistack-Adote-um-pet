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
import useIndex from "../data/hooks/pages/useIndex";

const Home: NextPage = () => {
  const {
    listaPets,
    petSelecionado,
    setPetSelecionado,
    email,
    setEmail,
    valor,
    setValor,
    mensagem,
    setMensagem,
    adotar,
  } = useIndex();

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

        <Lista pets={listaPets} onAdotar={(pet) => setPetSelecionado(pet)} />
        {/* sx viabiliza o uso do css */}
        <Dialog
          open={petSelecionado != null}
          fullWidth
          PaperProps={{ sx: { padding: "40px" } }}
          onClose={() => setPetSelecionado(null)}
        >
          <TextField
            label={"E-mail"}
            type={"email"}
            sx={{ pb: "10px" }}
            fullWidth
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            label={"Quantia por mês"}
            type={"number"}
            fullWidth
            value={valor}
            onChange={(event) => setValor(event.target.value)}
          />

          <DialogActions>
            <Button onClick={() => setPetSelecionado(null)}>Cancelar</Button>
            <Button variant={"contained"} onClick={() => adotar()}>
              Confirmar adoção
            </Button>
          </DialogActions>
        </Dialog>

        <Snackbar
          open={mensagem.length > 0}
          message={mensagem}
          autoHideDuration={3000}
          onClose={() => setMensagem("")}
        />
      </div>
    </>
  );
};

export default Home;
