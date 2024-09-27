import Voos from '../ItemVoo/index.js';

const ListaVoos = ({ voos, carregaVoos, isDelete }) => {
    return(
        <> 
            {voos.map(
             (v)=> (<Voos valor={v} carregaVoos={carregaVoos} isDelete={isDelete}></Voos>) 
            )} 
        </>
    );
}

export default ListaVoos;