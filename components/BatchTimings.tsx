"use client";

import { useState } from "react";

type Row = { age: string; option: string; days: string; time: string };
type Zone = { name: string; label: string; rows: Row[] };

// Timezone tabs; each tab shows one card per age group with its batch options.
export default function BatchTimings({ zones }: { zones: Zone[] }) {
  const [active, setActive] = useState(0);
  const zone = zones[active];
  const ages = [...new Set(zone.rows.map((r) => r.age))];

  return (
    <div className="ff-timings">
      <div className="ff-timings-tabs" role="tablist" aria-label="Time zone">
        {zones.map((z, i) => (
          <button
            key={z.name}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={i === active ? "is-active" : ""}
            onClick={() => setActive(i)}
          >
            <strong>{z.name}</strong>
            <span>{z.label}</span>
          </button>
        ))}
      </div>
      <div className="ff-timings-grid">
        {ages.map((age) => (
          <div key={age} className="ff-timings-card">
            <h3>{age === "Adults" ? "Adults" : `Ages ${age}`}</h3>
            <ul>
              {zone.rows
                .filter((r) => r.age === age)
                .map((r) => (
                  <li key={r.option}>
                    <span className="ff-timings-opt">{r.option}</span>
                    <span className="ff-timings-days">{r.days}</span>
                    <span className="ff-timings-time">
                      {r.time.split("|").map((t) => (
                        <b key={t}>{t.trim()}</b>
                      ))}
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
