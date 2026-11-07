import PricingBackgroundPng from "../assets/pricing-background.png"
import LogoSvg from "../assets/logo.svg"
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
      className={`relative flex min-h-[252px] flex-col rounded-[18px] border border-shape-stroke bg-[#001324] px-[18px] pt-[19px] pb-[15px] text-left shadow-[0_12px_30px_rgba(0,0,0,0.16)] transition-colors max-[700px]:min-h-[236px] max-[700px]:rounded-2xl max-[700px]:px-5 ${plan.popular ? "z-20 min-h-[264px] border-blue-dark bg-blue-low pt-[21px] max-[700px]:min-h-[250px]" : "z-10"}`}
      aria-label={`Plano ${plan.name}`}
    >
      <div className="flex items-center justify-between">
        <h3 className={`m-0 text-[11px] leading-none font-bold ${accentColor}`}>{plan.name}</h3>
        {plan.popular && (
          <span className="rounded-full bg-blue-dark px-3 py-[5px] text-[7px] leading-none font-bold text-title">
            POPULAR
          </span>
        )}
      </div>

      <p className="mt-[19px] flex items-baseline gap-1 whitespace-nowrap text-title">
        <span className="text-[25px] leading-none font-bold max-[700px]:text-[24px]">R$ {plan.price}</span>
        <span className="text-[9px] leading-none font-medium">/mês</span>
      </p>
      <p className="mt-[7px] text-[9px] leading-none font-normal text-label">
        R$ {plan.annualPrice} por ano
      </p>

      <ul className="mt-auto space-y-[7px] pt-[19px]">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-[6px] text-[8px] leading-[1.25] text-body">
            <img
              className={`mt-px h-[10px] w-[10px] shrink-0 ${plan.accent === "blue" ? "hue-rotate-[-95deg]" : ""}`}
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
        className={`mt-[13px] flex min-h-[30px] w-full items-center justify-center rounded-[7px] px-2 text-[9px] leading-none font-bold text-title transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-light ${buttonColor}`}
      >
        {plan.action}
      </button>
    </article>
  )
}

export function PlansSection() {
  return (
    <section
      className="relative isolate min-h-[max(768px,100svh)] overflow-hidden bg-shape-background px-5 pt-[135px] pb-16 font-[family-name:var(--font-family-base)] text-body max-[700px]:min-h-0 max-[700px]:px-4 max-[700px]:pt-20"
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
          className="m-0 text-[18px] leading-[1.25] font-bold text-title max-[700px]:text-xl"
          id="plans-title"
        >
          Assinatura
          <br />
          Encantos Literários
        </h2>
      </header>

      <div className="relative mx-auto mt-[82px] grid w-full max-w-[560px] grid-cols-3 items-center gap-[10px] max-[700px]:mt-10 max-[700px]:max-w-[360px] max-[700px]:grid-cols-1 max-[700px]:gap-5">
        <div className="relative z-10 translate-y-[17px] -rotate-[8deg] max-[700px]:translate-y-0 max-[700px]:rotate-0">
          <PlanCard plan={plans[0]} />
        </div>

        <div className="relative z-20 -translate-y-[8px] max-[700px]:translate-y-0">
          <div className="pointer-events-none absolute -top-[31px] left-1/2 z-20 h-[36px] w-[34px] -translate-x-1/2 overflow-hidden max-[700px]:left-5 max-[700px]:translate-x-0">
            <img className="absolute left-0 top-0 h-auto w-[138px] max-w-none" src={LogoSvg} alt="" aria-hidden="true" />
          </div>
          <PlanCard plan={plans[1]} />
        </div>

        <div className="relative z-10 translate-y-[17px] rotate-[8deg] max-[700px]:translate-y-0 max-[700px]:rotate-0">
          <PlanCard plan={plans[2]} />
        </div>

        <img
          className="pointer-events-none absolute -top-2 -left-7 h-[24px] w-[24px] -rotate-12 max-[700px]:hidden"
          src={StarSvg}
          alt=""
          aria-hidden="true"
        />
        <img
          className="pointer-events-none absolute -right-7 -bottom-5 h-[24px] w-[24px] rotate-12 max-[700px]:hidden"
          src={StarSvg}
          alt=""
          aria-hidden="true"
        />
      </div>
    </section>
  )
}