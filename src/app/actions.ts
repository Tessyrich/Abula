"use server";

export type ReserveState = {
  ok: boolean;
  message?: string;
  errors?: Partial<Record<"name" | "phone" | "date" | "time" | "guests", string>>;
  summary?: { name: string; date: string; time: string; guests: string };
};

const PHONE_RE = /^[+()\d\s-]{9,20}$/;

export async function reserve(_prev: ReserveState, formData: FormData): Promise<ReserveState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const date = String(formData.get("date") ?? "").trim();
  const time = String(formData.get("time") ?? "").trim();
  const guests = String(formData.get("guests") ?? "").trim();
  const note = String(formData.get("note") ?? "").trim().slice(0, 500);

  // Honeypot: real users never fill this in.
  if (String(formData.get("company") ?? "")) return { ok: true, message: "Thanks." };

  const errors: ReserveState["errors"] = {};
  if (name.length < 2) errors.name = "Please tell us your name.";
  if (!PHONE_RE.test(phone)) errors.phone = "Enter a phone number we can reach you on.";
  if (!date) errors.date = "Pick a date.";
  else {
    const d = new Date(date + "T12:00:00");
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (Number.isNaN(d.getTime()) || d < today) errors.date = "Pick a date from today onwards.";
  }
  if (!time) errors.time = "Pick a time.";
  else {
    const [h] = time.split(":").map(Number);
    if (h < 12 && h !== 0) errors.time = "We open at 12:00.";
  }
  const g = Number(guests);
  if (!g || g < 1 || g > 20) errors.guests = "Between 1 and 20 guests. For more, call us.";

  if (Object.keys(errors).length) return { ok: false, errors };

  // TODO(production): forward to email (Resend) / WhatsApp / a bookings table.
  console.info("[reservation]", { name, phone, date, time, guests, note });

  return {
    ok: true,
    message: "Request received. We’ll confirm by phone or text shortly.",
    summary: { name, date, time, guests },
  };
}
