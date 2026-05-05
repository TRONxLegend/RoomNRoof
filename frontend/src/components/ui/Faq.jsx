import { useState } from "react";

const faqs = [
    {
        question: "How do you identify the right property opportunities?",
        answer:
            "We analyze market signals like pricing trends, location demand, and risk factors, then validate high-impact opportunities early so decisions are driven by insight, not speculation.",
        meta: "Market Signals",
    },
    {
        question: "How do we work together once the search begins?",
        answer:
            "You work with a dedicated advisor who provides regular updates, clear comparisons, and a shared view of shortlisted properties—so every step stays transparent and focused.",
        meta: "Collaboration",
    },
    {
        question: "Can you work with my budget, location, or investment strategy?",
        answer:
            "Yes. We tailor every recommendation to your budget, preferred locations, and long-term goals without pushing irrelevant listings.",
        meta: "Fit",
    },
    {
        question: "How do you ensure a property is a good decision?",
        answer:
            "Each property is evaluated for legal clarity, pricing accuracy, future appreciation, and livability before it’s recommended.",
        meta: "Confidence",
    },
];


export default function FAQMonochrome() {
    const [openIndex, setOpenIndex] = useState(-1);
    const [glow, setGlow] = useState({ x: "50%", y: "50%" });

    return (
        <section className="relative min-h-screen w-full bg-black text-white px-5 sm:px-6 py-24 overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]" />

            <div className="relative mx-auto max-w-5xl space-y-14">
                <div className="flex justify-center mb-12">
                    <div className="rounded-full border border-white/15 bg-white/5 px-6 py-2 text-[15px] tracking-[0.35em] text-white/80 backdrop-blur mb-4"
                    > SIGNAL FAQ
                    </div>
                </div>
                <header className="max-w-2xl">
                    <p className="text-[14px] uppercase tracking-[0.35em] text-white/40">
                        What Matters
                    </p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-2">
                        Clarity in every square foot
                    </h1>
                </header>
                <ul className="mt-8 space-y-6">
                    {faqs.map((item, index) => {
                        const open = index === openIndex;

                        return (
                            <li
                                key={item.question}
                                onMouseEnter={() => setOpenIndex(index)}
                                onMouseLeave={() => setOpenIndex(-1)}
                                onMouseMove={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    setGlow({
                                        x: `${((e.clientX - rect.left) / rect.width) * 100}%`,
                                        y: `${((e.clientY - rect.top) / rect.height) * 100}%`,
                                    });
                                }}
                                style={{
                                    "--x": glow.x,
                                    "--y": glow.y,
                                }}
                                className={`relative rounded-2xl overflow-hidden transition-all duration-300
								bg-white/5 border border-white/10 mt-4
								${open ? "ring-1 ring-white/20" : ""}

								before:absolute before:inset-0
								before:bg-[radial-gradient(600px_circle_at_var(--x)_var(--y),rgba(255,255,255,0.12),transparent_40%)]
								before:opacity-0 hover:before:opacity-100
								before:transition-opacity before:duration-300
								`}
                            >
                                <div className="relative px-6 sm:px-8 py-6">
                                    <div className="flex items-center gap-4">
                                        <span
                                            className={`flex h-9 w-9 items-center justify-center rounded-full border text-lg transition-all ${open
                                                ? "border-white/30 bg-white/10"
                                                : "border-white/15 bg-white/5"
                                                }`}
                                        >
                                            {open ? "×" : "+"}
                                        </span>

                                        <h2 className="text-base sm:text-lg md:text-xl font-medium">
                                            {item.question}
                                        </h2>

                                        <span className="ml-auto rounded-full border border-white/15 px-3 py-1 text-[10px] tracking-[0.35em]">
                                            {item.meta}
                                        </span>
                                    </div>

                                    <div
                                        className={`grid transition-all duration-500 ${open
                                            ? "grid-rows-[1fr] mt-4 opacity-100"
                                            : "grid-rows-[0fr] opacity-0"
                                            }`}
                                    >
                                        <div className="overflow-hidden text-lg text-white/55 max-w-3xl">
                                            {item.answer}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
