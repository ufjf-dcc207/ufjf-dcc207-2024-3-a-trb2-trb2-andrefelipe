import { useState } from "react";
import Atributo from "./Atributo";
import "./Steve.css";

const STEVES = new Map<string, string>([
  ["happy", "😀"],
  ["sick", "🤢"],
  ["dead", "💀"],
]);

const IMAGENS1 = ["/assets/espada.png", "/assets/maca.png", "/assets/escudo.png", "/assets/peitoral.png"];
const IMAGENS2 = ["/assets/maca.png", "/assets/escudo.png", "/assets/peitoral.png", "/assets/espada.png", "/assets/maca.png"];
const IMAGENS3 = ["/assets/escudo.png", "/assets/peitoral.png", "/assets/espada.png", "/assets/maca.png", "/assets/escudo.png"];

function Steve() {
  const [situacao, setSituacao] = useState("happy");
  const [saude, setSaude] = useState(3);
  const [comida, setComida] = useState(3);

  function onAlimentar() {
    setComida(Math.min(comida + 1, 5));
  }

  function onCiclo() {
    setComida(Math.max(0, comida - 1));

    if (comida === 0) {
      setSaude((s) => Math.max(0, s - 1));
    }
    if (saude === 0) {
      setSituacao("dead");
    }
  }

  return (
    <div className="steve">
      <div className="situacao">{STEVES.get(situacao) || "🫥"}</div>

      <div className="status">
        <Atributo emoji="❤️" valor={saude}></Atributo>
        <Atributo emoji="🍖" valor={comida}></Atributo>
      </div>

      <div className="acoes">
        <button onClick={onAlimentar}>Dar comida</button>
        <button onClick={onCiclo}>Ciclo</button>
      </div>

      {/* Inventário 1 - 4 Slots */}
      <div className="inventario">
        {IMAGENS1.map((img, i) => (
          <div key={i} className="slot">
            <img src={img} alt="Item" />
          </div>
        ))}
      </div>

      {/* Inventário 2 - 5 Slots */}
      <div className="inventario2">
        {IMAGENS2.map((img, i) => (
          <div key={i} className="slot">
            <img src={img} alt="Item" />
          </div>
        ))}
      </div>

      {/* Inventário 3 - 5 Slots */}
      <div className="inventario3">
        {IMAGENS3.map((img, i) => (
          <div key={i} className="slot">
            <img src={img} alt="Item" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Steve;
