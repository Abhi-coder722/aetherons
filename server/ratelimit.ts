/** Einfaches Fenster-Limit je Schlüssel (im Speicher). Für mehrere Instanzen einen Proxy-Limiter ergänzen. */
export class RateLimiter {
  private hits = new Map<string, number[]>();
  private max: number;
  private windowMs: number;
  private now: () => number;

  constructor(max: number, windowMs: number, now: () => number = Date.now) {
    this.max = max;
    this.windowMs = windowMs;
    this.now = now;
  }

  /** true = erlaubt (und gezählt), false = Limit erreicht. */
  take(key: string): boolean {
    const t = this.now();
    const recent = (this.hits.get(key) ?? []).filter((ts) => t - ts < this.windowMs);
    if (recent.length >= this.max) {
      this.hits.set(key, recent);
      return false;
    }
    recent.push(t);
    this.hits.set(key, recent);
    if (this.hits.size > 10_000) this.prune(t);
    return true;
  }

  private prune(t: number) {
    for (const [key, list] of this.hits) {
      if (list.every((ts) => t - ts >= this.windowMs)) this.hits.delete(key);
    }
  }
}
