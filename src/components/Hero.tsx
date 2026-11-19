import { useState, type ReactNode } from "react"
import { Navbar } from "./Navbar"
import { useCanHover } from "../hooks/useCanHover"
import { useInView } from "../hooks/useInView"

import BlurPng from "../assets/Blur.png"
import HeroBackgroundPng from "../assets/hero-background.png"
import MysteryCrystalPng from "../assets/mystery-crystal-ball.png"
import MysteryOpenedPng from "../assets/mystery-opened-spellbook.png"
import MysteryOuijaPng from "../assets/mystery-ouija-planchette.png"

type MysteryItem = "book" | "ouija" | "crystal"

const noneActive: Record<MysteryItem, boolean> = { book: false, ouija: false, crystal: false }

function Highlight({
  on,
  onActivate,
  children,
}: {
  on: boolean
  onActivate: () => void
  children: ReactNode
}) {
  return (
    <strong
      onMouseEnter={onActivate}
      className={`inline-block cursor-default font-bold transition-colors duration-300 ${on ? "text-blue-light" : ""}`}
    >
      {children}
    </strong>
  )
}

export function Hero() {
  const canHover = useCanHover()
  const [mysteryRef, mysteryInView] = useInView<HTMLDivElement>({ threshold: 0.6 })
  const [active, setActive] = useState(noneActive)
  const [hoveringText, setHoveringText] = useState(false)

  // Mouse: cada palavra revela o seu ícone e o texto clareia enquanto o mouse está sobre ele.
  // Touch (sem hover): tudo é revelado em sequência quando o bloco entra na tela.
  const isLit = canHover ? hoveringText : mysteryInView
  const isOn = (item: MysteryItem) => (canHover ? active[item] : mysteryInView)
  const activate = (item: MysteryItem) => setActive((prev) => ({ ...prev, [item]: true }))
  const touchDelay = (index: number) => (canHover ? undefined : { transitionDelay: `${index * 150}ms` })

  return (
    <section
      className="relative isolate min-h-[clamp(960px,94vw,1350px)] overflow-hidden bg-shape-background pt-6 text-center text-body max-[719px]:min-h-[640px] max-[719px]:pt-[10px]"
      aria-labelledby="hero-title"
    >
      <img
        className="pointer-events-none absolute left-1/2 top-0 z-[-1] block h-auto w-[clamp(1024px,139vw,1440px)] max-w-none -translate-x-1/2 select-none max-[719px]:top-[10px] max-[719px]:w-[clamp(760px,215vw,900px)] animate-fade-in "
        src={HeroBackgroundPng}
        alt=""
        aria-hidden="true"
      />
      <img
        className="pointer-events-none absolute inset-0 z-[-1] h-full w-full object-cover select-none"
        src={BlurPng}
        alt=""
        aria-hidden="true"
      />

      <Navbar />

      <div className="relative z-[1] mx-auto mt-24 w-[min(90%,720px)] max-[719px]:mt-[56px] max-[719px]:w-[calc(100%-40px)]">
        <h1
          className="font-family-base m-0 text-title-lg   text-title max-[719px]:text-[clamp(1.5rem,7vw,1.875rem)] animate-fade-in "
          id="hero-title"
        >
          <span className="block">Desperte a sua imaginação</span>
          <span className="block">e explore novos mundos</span>
        </h1>

        <p className="mx-auto mt-5 text-body-lg font-normal text-body max-[719px]:mt-[15px] max-[719px]:max-w-[430px] max-[719px]:text-[0.8125rem]  animate-fade opacity-0">
          Junte-se ao clube de assinatura Encantos Literários e <br/> descubra maravilhas e aventuras a cada página
        </p>
      </div>

      <div
        ref={mysteryRef}
        onMouseLeave={() => setActive(noneActive)}
        className="relative z-[1] mx-auto mt-[clamp(450px,39vw,620px)] pb-16 max-[719px]:mt-[228px] max-[719px]:pb-14"
      >
        <img
          className="mystery-icon transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-30 mx-auto block h-14 w-14 object-contain rotate-20   max-[719px]:h-[38px] max-[719px]:w-[38px]"
          src={MysteryOpenedPng}
          alt=""
          aria-hidden="true"
          data-visible={isOn("book")}
          style={touchDelay(0)}
        />
        <p
          onMouseEnter={() => setHoveringText(true)}
          onMouseLeave={() => setHoveringText(false)}
          className={`hero-paragraph mx-auto mt-5 w-[min(92%,1050px)] text-[clamp(1.125rem,1.55vw,1.5rem)] leading-[1.75] font-medium max-[719px]:mt-3 max-[719px]:w-[calc(100%-40px)] max-[719px]:text-[0.9375rem] max-[719px]:leading-[1.8] ${isLit ? "text-title" : "text-body/50"}`}
        >
          Receba todo mês um{" "}
          <Highlight on={isOn("book")} onActivate={() => activate("book")}>livro surpresa</Highlight> do seu tema favorito,
          acompanhado de
          <br className="max-[719px]:hidden" />{" "}
          <Highlight on={isOn("ouija")} onActivate={() => activate("ouija")}>brindes exclusivos</Highlight> que tornarão a sua experiência
          literária <Highlight on={isOn("crystal")} onActivate={() => activate("crystal")}>encantadora</Highlight>
        </p>
        <img
          className="mystery-icon  absolute top-[150px] left-70 block h-auto w-14  rotate-100 transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-110  max-[719px]:top-auto max-[719px]:bottom-[8px] max-[719px]:left-[24px] max-[719px]:w-[34px]"
          src={MysteryOuijaPng}
          alt=""
          aria-hidden="true"
          data-visible={isOn("ouija")}
          style={touchDelay(1)}
        />
        <img
          className=" mystery-icon absolute top-[150px] right-70 block h-auto w-[52px] select-none rotate-345
          transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-355  hover: max-[719px]:top-auto max-[719px]:right-[24px] max-[719px]:bottom-[8px] max-[719px]:w-[32px] "
          src={MysteryCrystalPng}
          alt=""
          aria-hidden="true"
          data-visible={isOn("crystal")}
          style={touchDelay(2)}
        />
      </div>
    </section>
  )
}
