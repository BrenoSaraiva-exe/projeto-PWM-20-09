// import style from "styled-components";
// import React from "react";
// //import axios from "axios";

// const PopUp = style.div`
//     width: 450px;
//     height: 200px;
//     padding: 20px;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform:translate(-50%,-50%);
//     background: #fff;
//     border-radius: 20px;
//     border-style: solid;
//     border-color: #ff6600;  
//     `
    
// const Button = style.button`
//     color: #ff6600;
    
// `

//  function remover(id){
//      axios.delete(`https://api-mpa-flightly-mn44.onrender.com/voo/${id}`).then(()=>carregaVoos());
//     }

// class DeletarPoP extends React.Component{

//     render(){
//         return(
//             <>
//             <PopUp>
//                 <div>
//                     <span>
//                         Gostaria de Excluir este arquivo ?
//                     </span>
//                     <Button type="submit" value="Excluir" onclick={remover(id)}/>
//                 </div>
//             </PopUp>
//             </>
//         )
//     }
// }

// export default DeletarPoP;