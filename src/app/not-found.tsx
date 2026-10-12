import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center px-5 text-center">
      <div>
        <p className="eyebrow">404</p>
        <h1 className="display mt-4 text-5xl">That plate isn’t on the menu.</h1>
        <Link href="/" className="btn btn-primary mt-8">Back to the kitchen</Link>
      </div>
    </main>
  );
}
