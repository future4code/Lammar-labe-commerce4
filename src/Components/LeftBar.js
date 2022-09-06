// import React, {useState} from "react";
// import { mockDb } from "../MockUpDados";
// export function LeftBar(props){
//     const [listaProdutos, setListaProdutos] = useState(mockDb)
//     const [busca, setBusca] = useState("")
   
    
//     {listaProdutos.filter((item)=>{
//           return item.name.includes(busca)
//         }).map(item =>{
//           return <div key = {item.name} item={item} />
//         })
//     }
    
//     function handleNome (event) {
//         setBusca(event.target.value)
//     }
    
//     return (
//             <input
//             value={busca}
//             onChange={handleNome}/>
//             )



// }
