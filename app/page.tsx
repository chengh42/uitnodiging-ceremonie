const NR_CHAR_PER_LINE = 40;

const TITLE = "Uitnodiging Ceremonie van Hsin";
const CONTENT = [
  "Ik krijg de Nederlandse nationaliteit!",
  "Ik nodig u graag uit voor een feestelijke (?) ceremonie in het stadhuis van Amsterdam.",
  "Tijdens deze bijeenkomst word ik officieel een kaaskop.",
  "In deze brief leest u wat de ceremonie voor u betekent en wat u moet doen.",
].join(" ");

export default function Home() {
  const wrappedContent = wrapText(CONTENT, NR_CHAR_PER_LINE);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-2">
          <pre className="IoJup">
            <div className="subtext">
              <span className="green">Hsin&apos;s Teletekst </span>
              <span className="yellow">
                <a className="yellow">101</a>
              </span>
            </div>
            <div className="divider"> </div>

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
                <span className="yellow">▀ </span>
                Met vriendelijke groet,
                <br />
                <span className="yellow">▀ </span>
                Hsin
              </span>
            </div>

            <div className="divider"> </div>

            <div className="footer flex flex-row">
              <span className="red">
                <a className="red">belangrijk</a>
              </span>
              <span className="green">
                <a className="green">koffie na afloop</a>
              </span>
              <span className="cyan">
                <a
                  className="cyan"
                  href="https://github.com/chengh42/uitnodiging-ceremonie"
                >
                  code
                </a>
              </span>
            </div>
          </pre>
        </div>
      </main>
    </div>
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
