import { useState } from "react";
import Atributo from "./Atributo";
import "./Steve.css";

const STEVES = new Map<string, string>([
  ["happy", "😀"],
  ["sick", "🤢"],
  ["dead", "💀"],
]);

const IMAGENS1 = ["/assets/escudo.png", "/assets/escudo.png", "/assets/escudo.png", "/assets/escudo.png"];
const IMAGENS2 = ["/assets/bola.png", "/assets/escudo.png", "/assets/peitoral.png", "/assets/espada.png", "/assets/maca.png"];
const IMAGENS3 = ["/assets/escudo.png", "/assets/peitoral.png", "/assets/espada.png", "/assets/maca.png", "/assets/escudo.png"];

function Steve() {
  const [situacao, setSituacao] = useState("happy");
  const [saude, setSaude] = useState(3);
  const [comida, setComida] = useState(3);
  const [escudo, setEscudo] = useState(0);
  const [armadura, setArmadura] = useState([false, false, false, false]);
  const [bolaLaranja, setBolaLaranja] = useState(false); 

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
      setSaude((prevSaude) => {
        const novaSaude = Math.max(0, prevSaude - 1);

        if (novaSaude === 0 && bolaLaranja) {
          setBolaLaranja(false); 
          setSituacao("happy"); // ✅ Steve volta a ficar "happy" ao reviver
          return 5; 
        }

        return novaSaude;
      });
    }

    setComida((prevComida) => Math.max(0, prevComida - 1));

    if (saude === 0) {
      setSituacao("dead");
    }
  }

  function onArmaduraClick(index: number) {
    setArmadura((prevArmadura) => {
      const newArmadura = [...prevArmadura];
      newArmadura[index] = !newArmadura[index];
      setEscudo(newArmadura.filter((item) => item).length);
      return newArmadura;
    });
  }

  function onBolaLaranjaClick() {
    setBolaLaranja((prev) => !prev);
  }

  return (
    <div className="steve">
      <div className="situacao">{STEVES.get(situacao) || "🫥"}</div>

      <div className="status">
        <Atributo emoji="❤️" valor={saude} />
        <Atributo emoji="🍖" valor={comida} />
        <Atributo emoji2="🛡️" valor={escudo} /> 
        <Atributo emoji3={bolaLaranja ? "🟠" : ""} valor={1} />
      </div>

      <div className="acoes">
        <button onClick={onAlimentar}>Dar comida</button>
        <button onClick={onExplorar}>Explorar</button>
      </div>

      <div className="inventario">
        {IMAGENS1.map((img, i) => (
          <div key={i} className={`slot ${armadura[i] ? "ativo" : ""}`} onClick={() => onArmaduraClick(i)}>
            <img src={img} alt={`Escudo ${i + 1}`} />
          </div>
        ))}
      </div>

      <div className="inventario2">
        {IMAGENS2.map((img, i) => (
          <div key={i} className={`slot ${i === 0 && bolaLaranja ? "ativo" : ""}`} onClick={i === 0 ? onBolaLaranjaClick : undefined}>
            <img src={img} alt={`Item ${i + 1}`} />
          </div>
        ))}
      </div>

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
