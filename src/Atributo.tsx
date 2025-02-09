import "./Atributo.css"

function Atributo({emoji, valor} : {emoji: string, valor: number}){
   return(
      <div className="status">
         <span>{emoji.repeat(valor)}</span>
         <span className="inativo">{emoji.repeat(5-valor)}</span>
      </div>
   );
}

export default Atributo;