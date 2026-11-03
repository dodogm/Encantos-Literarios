import { Navbar } from "./Navbar"

import BlurPng from "../assets/Blur.png"
import HeroBackgroundPng from "../assets/hero-background.png"
import MysteryCrystalPng from "../assets/mystery-crystal-ball.png"
import MysteryOpenedPng from "../assets/mystery-opened-spellbook.png"
import MysteryOuijaPng from "../assets/mystery-ouija-planchette.png"

export function Hero() {
  return (
    <section
      className="relative isolate min-h-[max(768px,100svh)] overflow-hidden bg-shape-background pt-[14px] text-center font-[family-name:var(--font-family-base)] text-body max-[719px]:min-h-[720px] max-[719px]:pt-[10px]"
      aria-labelledby="hero-title"
    >
      <img
        className="pointer-events-none absolute left-1/2 top-0 z-[-1] block h-auto w-[clamp(1024px,139vw,1440px)] max-w-none -translate-x-1/2 select-none max-[719px]:top-[10px] max-[719px]:w-[clamp(760px,215vw,900px)]"
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

      <div className="relative z-[1] mx-auto mt-[78px] w-[min(90%,620px)] max-[719px]:mt-[56px] max-[719px]:w-[calc(100%-40px)]">
        <h1
          className="m-0 text-[clamp(1.7rem,2vw,2rem)] leading-[1.18] font-bold text-title max-[719px]:text-[clamp(1.5rem,7vw,1.875rem)]"
          id="hero-title"
        >
          <span className="block">Desperte a sua imaginação</span>
          <span className="block">e explore novos mundos</span>
        </h1>
        <p className="mx-auto mt-[15px] max-w-[350px] text-[clamp(0.75rem,1vw,0.875rem)] leading-[1.35] font-normal text-body max-[719px]:max-w-[430px] max-[719px]:text-[0.8125rem]">
          Junte-se ao clube de assinatura Encantos Literários e descubra maravilhas e aventuras a cada página
        </p>
      </div>

      <div className="relative z-[1] mx-auto mt-[clamp(322px,calc(32vw+76px),540px)] pb-12 max-[719px]:mt-[228px] max-[719px]:pb-14">
        <img
          className="mx-auto block h-[42px] w-[42px] object-contain max-[719px]:h-[38px] max-[719px]:w-[38px]"
          src={MysteryOpenedPng}
          alt=""
          aria-hidden="true"
        />
        <p className="mx-auto mt-[13px] w-[min(92%,900px)] text-[1.0625rem] leading-[2] font-medium text-body max-[719px]:mt-3 max-[719px]:w-[calc(100%-40px)] max-[719px]:text-[0.9375rem] max-[719px]:leading-[1.8]">
          Receba todo mês um <strong className="font-bold text-blue-light">livro surpresa</strong> do seu tema favorito,
          acompanhado de
          <br className="max-[719px]:hidden" />{" "}
          <strong className="font-bold text-blue-light">brindes exclusivos</strong> que tornarão a sua experiência
          literária <strong className="font-bold text-blue-light">encantadora</strong>
        </p>
        <img
          className="pointer-events-none absolute top-[120px] left-[clamp(24px,11.4vw,180px)] block h-auto w-[40px] select-none max-[719px]:top-auto max-[719px]:bottom-[8px] max-[719px]:left-[24px] max-[719px]:w-[34px]"
          src={MysteryOuijaPng}
          alt=""
          aria-hidden="true"
        />
        <img
          className="pointer-events-none absolute top-[120px] right-[clamp(24px,7.5vw,160px)] block h-auto w-[36px] select-none max-[719px]:top-auto max-[719px]:right-[24px] max-[719px]:bottom-[8px] max-[719px]:w-[32px]"
          src={MysteryCrystalPng}
          alt=""
          aria-hidden="true"
        />
      </div>
    </section>
  )
}
