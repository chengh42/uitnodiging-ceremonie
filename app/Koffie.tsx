const KOFFIE = `
           ▒▒▒▒▒▒▒▒
         ▒▒▒      ▒▒▒
        ▒▒   ▒▒▒▒  ▒░▒
       ▒▒   ▒▒  ▒▒  ▒░▒
      ▒▒░▒      ▒▒  ▒░▒
        ▒░▒    ▒▒  ▒░▒
          ▒▒▒▒▒▒   ▒▒
     ▒▒▒▒        ▒▒
   ▒▒▒░░▒▒▒     ▒▒  ▓▓▓▓▓
  ▒▒     ▒▒▒    ▒▒▓▓▓░░░░▓▓  ▓▓▓▓
 ▒   ▒▒    ▒▒ ▓▓▒░░░░░░█▓▒▓▓▓▓░░▓▓▓
▒▒  ▒ ▒▒   ▓▒▒░░▒░░░░██▓▓▒▒▓░░░░░░▓▓
░▒▒   ▒ ▓▓▓░▒░░░░░░██▓▓▒▒▒▒▓▓▓▓▓░░▓▓
  ▒▒▒▒ ▓▓░░░░░░█████▓▓▒▒▒▒▒▓   ▓▓░▓▓
      ▓▓░░░░░░███████▒▒▒▒▒▒▒▓  ▓░░▓▓
     ▓▓░░░░░███████▓▓▒▒▒▒▒▒▒▓▓▓░░▓▓
    ▓▓░░░░██████▓▓▓▓▒▒▒▒▒▒▒▒▓░░░▓▓
    ▓▓▓░████▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓
     ▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓
      ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓
         ▓▓▓▒▒▒▒▒▒▒▒▒▓▓▓▓
           ▓▓▓▓▓▓▒▒▒▒▓▓
`;

export function Koffie() {
  return (
    <div>
      <span className="yellow">▀ </span>
      <span className="cyan">
        Hsin&apos;s traktatie bij Espressobar Puccini, Staalstraat 21.
      </span>
      <br />
      <span>{KOFFIE}</span>
      <br />
    </div>
  );
}
