import { useState, useEffect } from 'react';
import { Pet } from '../../@types/Pet';
import { ApiService } from '../../services/ApiService';
import { AxiosError } from 'axios';

function useIndex(){
    const [listaPets, setListaPets] = useState([]),
    [petSelecionado, setPetSelecionado] = useState<Pet | null>(null),
    [email, setEmail] = useState(''),
    [valor, setValor] = useState(''),
    [mensagem, setMensagem] = useState('');
    
    // ao preencher a lista com uma variável, vai indicar que quando aquela
    // variável for alterada, a função acima é executada 
    // caso contrário, a função vai ser executada assim que algum componente renderizar
    useEffect(()=>{
        ApiService.get('pets/')
        .then((resposta) => {setListaPets(resposta.data);})
    }, []) 

    useEffect(()=>{
        if (petSelecionado === null){
            limpaDadosFormulario();
        }
    }, [petSelecionado]);

    function adotar(){
        if (petSelecionado){
            if (validaDadosPreenchidos()){
                ApiService.post('adocao/cad/', {
                    pet_id: petSelecionado.id,
                    valor: valor,
                    email: email,
                }).then(()=>{
                    setMensagem('Adoção realizada com sucesso!');
                    setPetSelecionado(null);
                }).catch((error: AxiosError)=>{ // caso ocorra algum erro no back end, é possível captar aqui
                    setMensagem(error.response?.data.message);
                })
            }
            else {
                setMensagem('É necessário preencher todos os campos');
            }
        }
            
    }
    function validaDadosPreenchidos(){
        if (email.length === 0 || valor.length === 0) {
            return false;
        }
        if (email.trim() === '' || valor.trim() === '') {
            return false;
        }

        return true
    }

    function limpaDadosFormulario(){
        setEmail('');
        setValor('');
    }

    return {
        listaPets,
        petSelecionado,
        setPetSelecionado,
        email,
        setEmail,
        valor,
        setValor,
        mensagem,
        setMensagem,
        adotar
    };
}

export default useIndex;