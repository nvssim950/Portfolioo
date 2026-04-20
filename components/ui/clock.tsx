"use client";

import { useEffect, useState } from "react";

export function Clock({ tz = "Africa/Algiers" }: { tz?: string }) {
  const [time, setTime] = useState<string>(() => "");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: tz,
    });
    const update = () => setTime(fmt.format(new Date()));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [tz]);

  return (
    <span className="font-mono tabular-nums text-foreground/70">
      {time || "--:--:--"} <span className="text-foreground/40">GMT+1</span>
    </span>
  );
}
