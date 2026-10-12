"use client";

import { useActionState, useEffect, useState } from "react";
import { CheckCircle2, Phone } from "lucide-react";
import { reserve, type ReserveState } from "@/app/actions";
import { business } from "@/lib/data";

const initial: ReserveState = { ok: false };

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-cream/90">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-clay-2">{error}</span>}
    </label>
  );
}

export function Reserve() {
  const [state, action, pending] = useActionState(reserve, initial);
  const e = state.errors ?? {};
  const [today, setToday] = useState<string>();
  useEffect(() => setToday(new Date().toISOString().slice(0, 10)), []);

  return (
    <section id="reserve" className="bg-ink py-20 text-cream sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <p className="eyebrow !text-gold">Reservations</p>
          <h2 className="display mt-3 text-4xl sm:text-6xl">Book a table. Bring people.</h2>
          <p className="mt-6 max-w-md text-lg text-cream/85">
            Tables for up to 20. Birthdays, after-parties and Sunday families welcome. Bigger group or
            catering? Call us.
          </p>
          <a href={business.phoneHref} className="btn btn-outline-light mt-8">
            <Phone className="size-4" aria-hidden /> {business.phone}
          </a>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-10">
          {state.ok && state.summary ? (
            <div className="flex flex-col items-start gap-4 py-6" role="status">
              <CheckCircle2 className="size-10 text-palm" aria-hidden />
              <h3 className="display text-3xl">See you soon, {state.summary.name.split(" ")[0]}.</h3>
              <p className="text-cream/90">
                {state.summary.guests} guest{state.summary.guests === "1" ? "" : "s"} on{" "}
                {new Date(state.summary.date + "T12:00:00").toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" })}{" "}
                at {state.summary.time}.
              </p>
              <p className="text-sm text-cream/85">{state.message}</p>
            </div>
          ) : (
            <form action={action} className="grid gap-5 sm:grid-cols-2" noValidate>
              <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
              <div className="sm:col-span-2">
                <Field label="Name" error={e.name}>
                  <input name="name" className="field" placeholder="Your name" autoComplete="name" required aria-invalid={!!e.name} />
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field label="Phone" error={e.phone}>
                  <input name="phone" type="tel" className="field" placeholder="07… or +44…" autoComplete="tel" required aria-invalid={!!e.phone} />
                </Field>
              </div>
              <Field label="Date" error={e.date}>
                <input name="date" type="date" className="field" min={today} required aria-invalid={!!e.date} />
              </Field>
              <Field label="Time" error={e.time}>
                <input name="time" type="time" className="field" min="12:00" step={900} required aria-invalid={!!e.time} />
              </Field>
              <Field label="Guests" error={e.guests}>
                <select name="guests" className="field" defaultValue="2" aria-invalid={!!e.guests}>
                  {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>
                  ))}
                </select>
              </Field>
              <Field label="Anything we should know?">
                <input name="note" className="field" placeholder="Birthday, allergies, high chair…" maxLength={500} />
              </Field>
              <div className="mt-2 flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" disabled={pending} className="btn btn-primary disabled:opacity-60">
                  {pending ? "Sending…" : "Request a table"}
                </button>
                <p className="text-xs text-cream/85">We confirm every booking by phone or text.</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
