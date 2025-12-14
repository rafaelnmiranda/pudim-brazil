"use client";

import { useEffect, useRef } from "react";

type InstagramEmbedProps = {
  url: string;
  className?: string;
};

// Carrega o script do Instagram apenas uma vez
let scriptLoaded = false;
let scriptLoading = false;

function loadInstagramScript() {
  if (scriptLoaded || scriptLoading) return;
  
  scriptLoading = true;
  const script = document.createElement("script");
  script.src = "https://www.instagram.com/embed.js";
  script.async = true;
  script.onload = () => {
    scriptLoaded = true;
    scriptLoading = false;
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  };
  document.body.appendChild(script);
}

export function InstagramEmbed({ url, className }: InstagramEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Carrega o script se ainda não foi carregado
    if (!scriptLoaded && !scriptLoading) {
      loadInstagramScript();
    } else if (window.instgrm) {
      // Se o script já está carregado, processa imediatamente
      window.instgrm.Embeds.process();
    }
  }, [url]);

  return (
    <div ref={containerRef} className={className}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: "0",
          borderRadius: "3px",
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px",
          maxWidth: "100%",
          minWidth: "326px",
          padding: "0",
          width: "99.375%",
        }}
      >
        <div style={{ padding: "16px" }}>
          <a
            href={url}
            style={{
              background: "#FFFFFF",
              lineHeight: "0",
              padding: "0 0",
              textAlign: "center",
              textDecoration: "none",
              width: "100%",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Carregando post do Instagram...
          </a>
        </div>
      </blockquote>
    </div>
  );
}

// Declaração de tipo para window.instgrm
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}
