import { useState } from 'react';
import { Pet } from '../../@types/Pet';

function useIndex(){
    const [listaPets, setListaPets] = useState([
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
    ]),
    [petSelecionado, setPetSelecionado] = useState<Pet | null>(null),
    [email, setEmail] = useState(''),
    [valor, setValor] = useState(''),
    [mensagem, setMensagem] = useState('ugauga');

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