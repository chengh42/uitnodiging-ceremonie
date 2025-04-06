"use client";

import {useState} from "react";
import {Uitnodiging} from "./Uitnodiging";
import {Ceremonie} from "./Ceremonie";
import {Koffie} from "./Koffie";

type Page = "uitnodiging" | "ceremonie" | "koffie";

export default function Home() {
  const [page, setPage] = useState<Page>("uitnodiging");
  const teletesktNr = teletekstNummer(page);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="teleteskt flex flex-col gap-2">
          <pre className="IoJup">
            <div className="subtext">
              <span className="green">Hsin&apos;s Teletekst </span>
              <span className="yellow">{teletesktNr}</span>
            </div>
            <div className="divider"> </div>
            {page == "uitnodiging" && <Uitnodiging />}
            {page == "ceremonie" && <Ceremonie />}
            {page == "koffie" && <Koffie />}

            <div className="divider"> </div>

            <div className="footer flex flex-row">
              {page != "uitnodiging" && (
                <button
                  className="menu red"
                  onClick={() => setPage("uitnodiging")}
                >
                  uitnodiging
                </button>
              )}
              {page != "ceremonie" && (
                <button
                  className={page == "uitnodiging" ? "menu red" : "menu green"}
                  onClick={() => setPage("ceremonie")}
                >
                  de ceremonie
                </button>
              )}
              {page != "koffie" && (
                <button
                  className="menu green"
                  onClick={() => setPage("koffie")}
                >
                  koffie na afloop
                </button>
              )}
              <span>
                <a href="https://github.com/chengh42/uitnodiging-ceremonie">
                  💻
                </a>
              </span>
            </div>
          </pre>
        </div>
      </main>
    </div>
  );
}

function teletekstNummer(page: Page) {
  switch (page) {
    case "uitnodiging":
      return 101;
    case "ceremonie":
      return 102;
    case "koffie":
      return 103;
    default:
      return 101;
  }
}
