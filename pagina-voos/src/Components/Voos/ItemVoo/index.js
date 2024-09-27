import axios from 'axios';
import './style.css';
import '../../../index.js';
import {MdDelete} from 'react-icons/md';

const Voo = ({valor, carregaVoos,isDelete}) =>{

        return (
            <div className="card">
                <h3 className="titulo">-{valor.dataIda}</h3>
                <p className="subTitulo">-Aeroporto ida: {valor.aeroportoIda}</p>
                <p className="subTitulo">-Aeroporto volta: {valor.aeroportoVolta}</p>
                <p className="subTitulo">-Data: volta {valor.dataVolta}</p>
                <p className="subTitulo">-Horario ida: {valor.horarioIda}</p>
                <p className="subTitulo">-Horario volta: {valor.horarioVolta}</p>
                <MdDelete className={isDelete ? 'icone active' : 'icone inactive'} onClick={()=>remover(valor._id)}/>
            </div>
        )


        function remover(id){
            let api = "https://api-mpa-flightly-mn44.onrender.com/voo";
            axios.delete(`${api}/${id}`).then(()=>carregaVoos());
        }
}

export default Voo;