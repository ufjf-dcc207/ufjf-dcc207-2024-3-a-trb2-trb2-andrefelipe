import "./Atributo.css";

function Atributo({ emoji = "", emoji2, valor }: { emoji?: string; emoji2?: string; valor: number }) {
  return (
    <div className="status">
      <span>{emoji.repeat(valor)}</span>
      <span className="inativo">{emoji.repeat(5 - valor)}</span>

      {emoji2 && (
        <>
          <span>{emoji2.repeat(valor)}</span>
          <span className="inativo">{emoji2.repeat(4 - valor)}</span>
        </>
      )}
    </div>
  );
}

export default Atributo;
