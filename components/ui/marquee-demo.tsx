import { Marquee } from "@/components/ui/marquee"
import { LucideCloud, LucideFeather, LucideRocket, LucideServer } from "lucide-react"

const Logos = [
  <LucideCloud className="h-8 w-8 text-sky-500" />,
  <LucideFeather className="h-8 w-8 text-primary" />,
  <LucideRocket className="h-8 w-8 text-yellow-500" />,
  <LucideServer className="h-8 w-8 text-gray-500" />,
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