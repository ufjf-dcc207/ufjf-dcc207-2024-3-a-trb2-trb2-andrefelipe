import { useState } from "react";
import Atributo from "./Atributo";
import "./Steve.css";

const STEVES = new Map<string, string>([
  ["happy", "😀"],
  ["sick", "🤢"],
  ["dead", "💀"],
]);

// Caminhos das imagens para o inventário
const IMAGENS1 = ["/assets/escudo.png", "/assets/escudo.png", "/assets/escudo.png", "/assets/escudo.png"];
const IMAGENS2 = ["/assets/maca.png", "/assets/escudo.png", "/assets/peitoral.png", "/assets/espada.png", "/assets/maca.png"];
const IMAGENS3 = ["/assets/escudo.png", "/assets/peitoral.png", "/assets/espada.png", "/assets/maca.png", "/assets/escudo.png"];

function Steve() {
  const [situacao, setSituacao] = useState("happy");
  const [saude, setSaude] = useState(3); 
  const [comida, setComida] = useState(3); 
  const [escudo, setEscudo] = useState(0); 
  const [armadura, setArmadura] = useState([false, false, false, false]); 

  function onAlimentar() {
    setComida((prevComida) => {
      const newComida = Math.min(prevComida + 1, 5);
      if (newComida === 5) {
        setSaude(5); 
      }
      return newComida;
    });
  }

  function onExplorar() {
    if (comida === 0) {
      setSaude((prevSaude) => Math.max(0, prevSaude - 1));
    } else {
      // Se houver comida, a saúde não diminui
      setSaude((prevSaude) => Math.min(5, prevSaude)); 
    }
    setComida((prevComida) => Math.max(0, prevComida - 1));

    
    if (saude === 0) {
      setSituacao("dead");
    }
  }

 // Função para lidar com o clique no item do inventário de armadura (escudo)
function onArmaduraClick(index: number) {
  setArmadura((prevArmadura) => {
    // Cria uma cópia do estado atual de armadura
    const newArmadura = [...prevArmadura];

    // Alterna entre true e false ao clicar
    newArmadura[index] = !newArmadura[index];

    // Atualiza o número de escudos com base nos itens ativos
    setEscudo(newArmadura.filter((item) => item).length);

    
    return newArmadura;
  });
}


  return (
    <div className="steve">
      <div className="situacao">{STEVES.get(situacao) || "🫥"}</div>

      <div className="status">
        <Atributo emoji="❤️" valor={saude}></Atributo>
        <Atributo emoji="🍖" valor={comida}></Atributo>
        <Atributo emoji2="🛡️" valor={escudo}></Atributo> 
      </div>

      <div className="acoes">
        <button onClick={onAlimentar}>Dar comida</button>
        <button onClick={onExplorar}>Explorar</button>
      </div>

     
      <div className="inventario">
        {IMAGENS1.map((img, i) => (
          <div
            key={i}
            className={`slot ${armadura[i] ? "ativo" : ""}`} 
            onClick={() => onArmaduraClick(i)} 
          >
            <img src={img} alt={`Escudo ${i + 1}`} />
          </div>
        ))}
      </div>

      {/* Inventário 2 - 5 Slots */}
      <div className="inventario2">
        {IMAGENS2.map((img, i) => (
          <div key={i} className="slot">
            <img src={img} alt={`Item ${i + 1}`} />
          </div>
        ))}
      </div>

      {/* Inventário 3 - 5 Slots */}
      <div className="inventario3">
        {IMAGENS3.map((img, i) => (
          <div key={i} className="slot">
            <img src={img} alt={`Item ${i + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Steve;
