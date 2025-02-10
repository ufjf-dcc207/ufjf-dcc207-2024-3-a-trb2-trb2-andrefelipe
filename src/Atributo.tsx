import "./Atributo.css";

function Atributo({ emoji, emoji2, emoji3, valor }: { emoji?: string; emoji2?: string; emoji3?: string; valor: number }) {
  return (
    <div className="status">
      {emoji && (
        <>
          <span>{emoji.repeat(valor)}</span>
          <span className="inativo">{emoji.repeat(5 - valor)}</span>
        </>
      )}

      {emoji2 && valor > 0 && (
        <>
          <span>{emoji2.repeat(valor)}</span>
          <span className="inativo">{emoji2.repeat(4 - valor)}</span>
        </>
      )}

      {emoji3 && <span>{emoji3}</span>}
    </div>
  );
}

export default Atributo;
