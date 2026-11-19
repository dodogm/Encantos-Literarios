import { useEffect, useState } from "react"
import { useInView } from "../hooks/useInView"
import PricingBackgroundPng from "../assets/pricing-background.png"
import BunnySvg from "../assets/icons/Bunny.svg"
import StarSvg from "../assets/icons/star.svg"

type Plan = {
  name: string
  price: string
  annualPrice: string
  features: string[]
  action: string
  accent: "blue" | "pink"
  popular?: boolean
}

const plans: Plan[] = [
  {
    name: "Mensal",
    price: "59,90",
    annualPrice: "718,80",
    features: [
      "Kit mensal com livro temático",
      "Broche e marca páginas exclusivo",
      "Acesso à comunidade literária",
    ],
    action: "Assinar mensal",
    accent: "blue",
  },
  {
    name: "Semestral",
    price: "52,90",
    annualPrice: "634,80",
    features: [
      "Kit mensal com livro temático",
      "Broche e marca páginas exclusivo",
      "Acesso à comunidade literária",
      "Membro premium do clube",
    ],
    action: "Assinar semestral",
    accent: "pink",
    popular: true,
  },
  {
    name: "Anual",
    price: "48,90",
    annualPrice: "586,80",
    features: [
      "Kit mensal com livro temático",
      "Broche e marca páginas exclusivo",
      "Acesso à comunidade literária",
      "Membro premium do clube",
      "Planner anual de leitura",
    ],
    action: "Assinar anual",
    accent: "blue",
  },
]

function PlanCard({ plan }: { plan: Plan }) {
  const accentColor = plan.accent === "pink" ? "text-pink-base" : "text-blue-base"
  const buttonColor = plan.accent === "pink" ? "bg-pink-dark hover:bg-pink-base" : "bg-blue-dark hover:bg-blue-mid"

  return (
    <article
      className={`relative flex min-h-[352px] flex-col rounded-[24px] borderborder-shape-stroke bg-shape-base hover:bg-shape-hover px-[25px] pt-[27px] pb-5 text-left shadow-lg shadow-shape-base/50 transition-colors max-[700px]:min-h-[326px] max-[700px]:rounded-[20px] max-[700px]:px-[26px] max-[700px]:pt-7 max-[700px]:pb-5`}
      aria-label={`Plano ${plan.name}`}
    >
      <div className="flex items-center justify-between">
        <h3 className={`m-0 text-[14px] leading-none font-bold ${accentColor} `}>{plan.name}</h3>
        {plan.popular && (
          <span className="rounded-full bg-blue-dark px-3 py-[6px] text-[8px] leading-none font-bold text-title ">
            POPULAR
          </span>
        )}
      </div>

      <p className="mt-6 flex items-baseline gap-1 whitespace-nowrap text-title ">
        <span className="text-[34px] leading-none font-bold ">R$ {plan.price}</span>
        <span className="text-[11px] leading-none font-medium ">/mês</span>
      </p>
      <p className="mt-2 text-[11px] leading-none font-normal text-label  ">
        R$ {plan.annualPrice} por ano
      </p>

      <ul className="mt-auto space-y-[9px] pt-6 ">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-[10px] leading-[1.25] text-body ">
            <img
              className={`mt-px h-3 w-3 shrink-0  ${plan.accent === "blue" ? "hue-rotate-[-95deg]" : ""}`}
              src={StarSvg}
              alt=""
              aria-hidden="true"
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className={`mt-[18px] flex min-h-[40px] w-full items-center justify-center rounded-[9px] px-2 text-[11px] leading-none font-bold text-title transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-light  ${buttonColor}`}
      >
        {plan.action}
      </button>
    </article>
  )
}

export function PlansSection() {
  // Como no protótipo: só o card central aparece e os laterais "abrem em leque" a partir dele.
  // Abre ao passar o mouse / focar no card central; sem interação, abre sozinho depois de um instante.
  const [gridRef, gridInView] = useInView<HTMLDivElement>({ threshold: 0.5 })
  const [opened, setOpened] = useState(false)

  useEffect(() => {
    if (!gridInView || opened) return
    const timer = window.setTimeout(() => setOpened(true), 1800)
    return () => window.clearTimeout(timer)
  }, [gridInView, opened])

  return (
    <section
      className="relative isolate min-h-[clamp(900px,78vw,1120px)] overflow-hidden bg-shape-background px-5 pt-[clamp(160px,16vw,230px)] pb-20 text-body max-[700px]:min-h-[640px] max-[700px]:px-5 max-[700px]:pt-[90px] max-[700px]:pb-12"
      aria-labelledby="plans-title"
    >
      <img
        className="pointer-events-none absolute inset-0 z-[-1] h-full w-full object-cover opacity-45"
        src={PricingBackgroundPng}
        alt=""
        aria-hidden="true"
      />

      <header className="relative z-10 text-center">
        <h2
          className="m-0 text-[clamp(1.5rem,2vw,2rem)] leading-[1.25] font-bold text-title "
          id="plans-title"
        >
          Assinatura
          <br />
          Encantos Literários
        </h2>
      </header>

      <div
        ref={gridRef}
        data-fan={opened ? "open" : "closed"}
        className="relative mx-auto mt-[clamp(96px,9vw,130px)] grid w-full max-w-[800px] grid-cols-3 items-center gap-4 max-[700px]:mt-10 max-[700px]:ml-6 max-[700px]:flex max-[700px]:w-[calc(100%-24px)] max-[700px]:max-w-none max-[700px]:snap-x max-[700px]:snap-mandatory max-[700px]:gap-4 max-[700px]:overflow-x-auto max-[700px]:pb-2"
      >
        <div className="plan-fan plan-fan-left relative z-10 translate-y-6 -rotate-[8deg] max-[700px]:w-[222px] max-[700px]:shrink-0 max-[700px]:snap-start max-[700px]:translate-y-0 max-[700px]:rotate-0">
          <PlanCard plan={plans[0]} />
           <img
          className="plan-twinkle pointer-events-none absolute -top-2 -left-7 h-[24px] w-[24px] -rotate-12 max-[700px]:hidden"
          src={StarSvg}
          alt=""
          aria-hidden="true"
        />
        </div>

        <div
          onMouseEnter={() => setOpened(true)}
          onFocus={() => setOpened(true)}
          className="relative z-20 -translate-y-[11px] max-[700px]:w-[222px] max-[700px]:shrink-0 max-[700px]:snap-start max-[700px]:translate-y-0"
        >
          <div className="pointer-events-none absolute -top-[47px] left-10 z-20 h-[50px] w-[48px] -translate-x-1/2 overflow-hidden max-[700px]:hidden">
            <img className="" src={BunnySvg} alt="" aria-hidden="true" />
          </div>
          <PlanCard plan={plans[1]} />
        </div>

        <div className="plan-fan plan-fan-right relative z-10 translate-y-6 rotate-[8deg] max-[700px]:w-[222px] max-[700px]:shrink-0 max-[700px]:snap-start max-[700px]:translate-y-0 max-[700px]:rotate-0">
            <img
          className="plan-twinkle plan-twinkle-delayed pointer-events-none absolute -right-7 -bottom-5 h-[24px] w-[24px] rotate-12 max-[700px]:hidden"
          src={StarSvg}
          alt=""
          aria-hidden="true"
        />
          <PlanCard plan={plans[2]} />
        </div>

       
      
      </div>
    </section>
  )
}
