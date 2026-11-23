"use client";
import { useState } from "react";
import { Icon } from "./icons";

const AMOUNTS = ["R150", "R300", "R500", "R1,000", "R2,500"];

export function GiftWidget({ donateUrl }: { donateUrl: string }) {
  const [selected, setSelected] = useState("R500");

  return (
    <div className="ch-gift-box">
      <div className="ch-gift-amounts" role="group" aria-label="Select support amount">
        {AMOUNTS.map((amt) => (
          <button
            key={amt}
            type="button"
            className={`ch-amt-btn ${selected === amt ? "active" : ""}`}
            onClick={() => setSelected(amt)}
          >
            {amt}
          </button>
        ))}
      </div>
      <a className="ch-btn ch-btn-primary" href={donateUrl}>
        Donate {selected} <Icon name="arrow" size={16} />
      </a>
    </div>
  );
}
