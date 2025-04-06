const NR_CHAR_PER_LINE = 34;

const TITLE = "Uitnodiging Ceremonie van Hsin";
const CONTENT = `
Ik krijg de Nederlandse nationaliteit!
Ik nodig u graag uit voor een feestelijke (?) ceremonie in het stadhuis van Amsterdam.
Tijdens deze bijeenkomst word ik officieel een kaaskop.
In deze brief leest u wat de ceremonie voor u betekent en wat u moet doen.
(De tekst is eigenlijk van de gemeente Amsterdam, maar ik heb het een beetje aangepast.)
`.replaceAll("\n", " ");

export function Uitnodiging() {
  const wrappedContent = wrapText(CONTENT, NR_CHAR_PER_LINE);

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
        {wrappedContent.map((line) => (
          <span key={line} className="cyan">
            {line}
            <br />
          </span>
        ))}
        <span className="cyan">
          <br />
          Groetjes,
          <br />
          Hsin
        </span>
      </div>
    </>
  );
}

function wrapText(text: string, maxCharsPerLine: number): string[] {
  const words = text.split(" ");
  const lines = [];
  let currentLine = "";

  for (const word of words) {
    if ((currentLine + word).length < maxCharsPerLine) {
      currentLine += (currentLine ? " " : "") + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  if (currentLine) lines.push(currentLine);
  return lines;
}
