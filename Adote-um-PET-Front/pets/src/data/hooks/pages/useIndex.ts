import { useState, useEffect } from 'react';
import { Pet } from '../../@types/Pet';
import { ApiService } from '../../services/ApiService';

function useIndex(){
    const [listaPets, setListaPets] = useState([]),
    [petSelecionado, setPetSelecionado] = useState<Pet | null>(null),
    [email, setEmail] = useState(''),
    [valor, setValor] = useState(''),
    [mensagem, setMensagem] = useState('ugauga');
    
    /* ao preencher a lista com uma variável, vai indicar que quando aquela
    variável for alterada, a função acima é executada 
    caso contrário, a função vai ser executada assim que algum componente renderizar*/
    useEffect(()=>{
        ApiService.get('pets/')
        .then((resposta) => {setListaPets(resposta.data);})
    }, []) 

    function adotar(){}

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