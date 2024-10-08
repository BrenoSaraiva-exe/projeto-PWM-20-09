import axios from 'axios';
import './style.css';
import '../../../index.js';
import {MdDelete, MdEdit} from 'react-icons/md';
import { useNavigate } from 'react-router';

const Voo = ({valor, carregaVoos, isDelete, isEdit}) =>{
    const navigate = useNavigate()
    
        return (
            <div className="card">
                <h3 className="titulo">{valor.companhia}</h3>
                <hr></hr>
                <div className='linha-resultado'>
                    <span className="subTitulo">Aeroporto ida: </span> 
                    <span className='resultado'>{valor.aeroportoIda}</span>
                </div>
                <div className='linha-resultado'>
                    <span className="subTitulo">Aeroporto volta: </span>
                    <span className='resultado'>{valor.aeroportoVolta}</span>
                </div>
                <div className='linha-resultado'>
                    <span className="subTitulo">Data ida: </span>
                    <span className='resultado'>{valor.dataIda.split('T')[0]}</span>
                </div>
                <div className='linha-resultado'>
                    <span className="subTitulo">Data volta: </span>
                    <span className='resultado'>{valor.dataVolta.split('T')[0]}</span>
                </div>
                <div className='linha-resultado'>
                    <span className="subTitulo">Horario ida: </span>
                    <span className='resultado'>{valor.horaIda}</span>
                </div>
                <div className='linha-resultado'>
                    <span className="subTitulo">Horario volta: </span>
                    <span className='resultado'>{valor.horaVolta}</span>
                </div>
                <hr></hr>
                <MdDelete className='icone' display={`${isDelete ? 'none' : 'block'}`} onClick={()=>remover(valor._id)}/>
                <MdEdit className='icone' display={`${isDelete ? 'block' : 'none'}`} onClick={()=>atualizar(valor)}/>
            </div>
        );


        function remover(id){
            alert("Voo de " + valor.aeroportoIda + " pela " + valor.companhia + " deletado!")
            let api = "https://api-mpa-flightly-mn44.onrender.com/voo";
            axios.delete(`${api}/${id}`).then(()=>carregaVoos());
        }

        function atualizar(valor){
            
            navigate('/Paginas/Atualizar', {state: valor})
        }
            
}
    

export default Voo;