const KOFFIE = `
░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░█████████████░░░░░░
░░░░░███████████████░░░░
░░░░░████████████░░██░░░
░░░░░░████████████░██░░░
░░░░░░░█████████─███░░░░
░░░░░░░░███████░░░░░░░░░
░░░░███████████████░░░░░
░░░░░█████████████░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░
`;

export function Koffie() {
  return (
    <>
      <span className="yellow">▀ </span>
      <span className="cyan">
        Hsin&apos;s traktatie bij Espressobar Puccini, Staalstraat 21.
      </span>
      <br />
      <div className="koffie">
        <span>{KOFFIE}</span>
      </div>
      <br />
    </>
  );
}
