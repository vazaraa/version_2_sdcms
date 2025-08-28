import { Marquee } from "@/components/ui/marquee"
import { LucideCloud, LucideFeather, LucideRocket, LucideServer } from "lucide-react"

const Logos = [
  <LucideCloud className="h-8 w-8 text-brand-red" />,
  <LucideFeather className="h-8 w-8 text-brand-red" />,
  <LucideRocket className="h-8 w-8 text-brand-yellow" />,
  <LucideServer className="h-8 w-8 text-brand-navy/60" />,
]

export function MarqueeDemo() {
  return (
    <Marquee>
      {Logos.map((Logo, index) => (
        <div
          key={index}
          className="relative h-full w-fit mx-[4rem] flex items-center justify-start"
        >
          {Logo}
        </div>
      ))}
    </Marquee>
  )
} 