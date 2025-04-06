const TITLE = "Uitnodiging Ceremonie van Hsin";
const CONTENT = `
Ik krijg de Nederlandse nationaliteit!
Ik nodig u graag uit voor een feestelijke (?) ceremonie in het stadhuis van Amsterdam.
Tijdens deze bijeenkomst word ik officieel een kaaskop.
In deze brief leest u wat de ceremonie voor u betekent en wat u moet doen.
(De tekst is eigenlijk van de gemeente Amsterdam, maar ik heb het een beetje aangepast.)
`.replaceAll("\n", " ");

export function Uitnodiging() {
  return (
    <>
      <div className="title">
        <span className="yellow">{TITLE}</span>
      </div>

      <div className="divider"> </div>

      <div className="content">
        <span className="yellow">▀ </span>
        <span className="cyan">
          Lieve Lenore,
          <br />
          <br />
        </span>
        <span className="yellow">▀ </span>
        <span className="cyan">
          {CONTENT}
          <br />
        </span>
        <span className="cyan">
          <br />
          Groetjes,
          <br />
          Hsin
          <br />
        </span>
      </div>
    </>
  );
}
