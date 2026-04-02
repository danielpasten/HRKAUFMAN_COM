import type { Metadata } from "next";
export const metadata: Metadata = { title: "Intellectual Property Litigation | Henry R. Kaufman, P.C." };
export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1
        className="text-[#7B2323] mb-2 pb-3 border-b border-[#7B2323]"
        style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "2rem" }}
      >
        Intellectual Property Litigation
      </h1>
      <p
        className="mt-8 text-[1rem] text-[#3A3A3A] italic"
        style={{ fontFamily: "'PT Serif', Georgia, serif" }}
      >
        Content coming soon.
      </p>
    </div>
  );
}
