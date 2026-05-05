// import { cn } from "@/lib/utils";

// export default function Testimonials({
//     title,
//     description,
//     testimonials,
//     className,
// }) {
//     return (
//         <section
//             className={cn(
//                 "bg-background text-foreground py-16",
//                 className
//             )}
//         >
//             <div className="mx-auto max-w-container flex flex-col gap-10">
//                 {/* Header */}
//                 <div className="text-center px-4">
//                     <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white">
//                         {title}
//                     </h2>
//                     <p className="mt-3 text-muted-foreground text-base sm:text-lg text-white">
//                         {description}
//                     </p>
//                 </div>

//                 {/* MARQUEE */}
//                 <div className="relative w-full overflow-hidden">
//                     <div className="marquee">
//                         <div className="marquee__inner">
//                             {[...testimonials, ...testimonials].map((t, i) => (
//                                 <TestimonialCard key={i} {...t} />
//                             ))}
//                         </div>
//                     </div>

//                     {/* Fade edges */}
//                     <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-black" />
//                     <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-black" />
//                 </div>

//             </div>
//         </section>
//     );
// }

// /* CARD */
// function TestimonialCard({ author, text }) {
//     return (
//         <div className="flex w-[280px] sm:w-[320px] md:w-[360px] shrink-0 flex-col rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4 sm:p-5 transition-colors hover:bg-white/10">
//             <div className="flex items-center gap-3">
//                 <img
//                     src={author.avatar}
//                     alt={author.name}
//                     className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover"
//                 />
//                 <div>
//                     <h3 className="text-sm font-semibold text-white">
//                         {author.name}
//                     </h3>
//                     <p className="text-xs text-white/70">
//                         {author.handle}
//                     </p>
//                 </div>
//             </div>

//             <p className="mt-3 sm:mt-4 text-sm text-white/80 leading-relaxed">
//                 {text}
//             </p>
//         </div>
//     );
// }


import { cn } from "@/lib/utils";

export default function Testimonials({
    title,
    description,
    testimonials,
    className,
}) {
    return (
        <section
            className={cn(
                "bg-background text-foreground py-16",
                className
            )}
        >
            <div className="mx-auto max-w-container flex flex-col gap-10">
                {/* Header */}
                <div className="text-center px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white">
                        {title}
                    </h2>
                    <p className="mt-3 text-muted-foreground text-base sm:text-lg text-white">
                        {description}
                    </p>
                </div>

                {/* MARQUEE */}
                <div className="relative w-full overflow-hidden">
                    <div className="marquee">
                        <div className="marquee__inner">
                            {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                                <TestimonialCard key={i} {...t} />
                            ))}
                        </div>
                    </div>

                    {/* Fade edges */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-black" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-black" />
                </div>

            </div>
        </section>
    );
}

/* CARD */
function TestimonialCard({ author, text }) {
    return (
        <div className="flex w-[280px] sm:w-[320px] md:w-[360px] shrink-0 flex-col rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4 sm:p-5 transition-colors hover:bg-white/10 mt-10">
            <div className="flex items-center gap-3">
                <img
                    src={author.avatar || "/placeholder.svg"}
                    alt={author.name}
                    className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover"
                />
                <div>
                    <h3 className="text-sm font-semibold text-white">
                        {author.name}
                    </h3>
                    <p className="text-xs text-white/70">
                        {author.handle}
                    </p>
                </div>
            </div>

            <p className="mt-3 sm:mt-4 text-sm text-white/80 leading-relaxed">
                {text}
            </p>
        </div>
    );
}
