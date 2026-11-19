import { useInView } from "../hooks/useInView"
import BookPng from "../assets/book.png"
import BookmarkPurplePng from "../assets/bookmark-purple.png"
import BookmarkYellowPng from "../assets/bookmark-yellow.png"
import PinPng from "../assets/pin.png"
import ArrowOne from "../assets/arrow-1.svg"
import ArrowTwo from "../assets/arrow-2.svg"
import Arrow from "../assets/arrow.svg"
import StarSvg from "../assets/icons/star.svg"
import BlurTwoPng from "../assets/Blur-2.png"

export function KitSection() {
  // Dois gatilhos de rolagem, como no protótipo: o grupo de cima (marcadores) entra primeiro,
  // o de baixo (broche e marca páginas) quando o usuário rola mais. Reinicia ao sair da tela.
  const [topRef, showTop] = useInView<HTMLDivElement>({ threshold: 0.12, rootMargin: "0px 0px -20% 0px" })
  const [bottomRef, showBottom] = useInView<HTMLParagraphElement>({ threshold: 0, rootMargin: "0px 0px -15% 0px" })

  return (
    <section
      className="relative isolate min-h-[clamp(1160px,108vw,1550px)] overflow-hidden bg-shape-background px-5 pt-[clamp(190px,20vw,290px)] text-body max-[719px]:min-h-[620px] max-[719px]:pt-[76px]"
      aria-labelledby="kit-title"
    >
      <img
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-70"
        src={BlurTwoPng}
        alt=""
        aria-hidden="true"
      />

      <header className="relative z-10 text-center">
        <div className="flex items-center justify-center gap-2">
          <img className="h-8 w-8 max-[600px]:h-6 max-[600px]:w-6" src={StarSvg} alt="" aria-hidden="true" />
          <h2
            className="m-0 text-[clamp(1.25rem,1.75vw,1.625rem)] leading-[1.2] font-bold text-title max-[600px]:text-base"
            id="kit-title"
          >
            Conheça o kit mensal
          </h2>
          <img className="h-8 w-8 max-[600px]:h-6 max-[600px]:w-6" src={StarSvg} alt="" aria-hidden="true" />
        </div>
        <p className="mt-2 text-[clamp(0.625rem,0.8vw,0.75rem)] leading-[1.4] font-normal text-label max-[600px]:mt-1 max-[600px]:text-[9px]">
          Receba uma caixa surpresa todos os meses
        </p>
      </header>

      <div
        ref={topRef}
        data-kit-top={showTop}
        data-kit-bottom={showBottom}
        className="relative mx-auto mt-[clamp(48px,5vw,76px)] h-[clamp(680px,58vw,835px)] w-full max-w-[1080px] max-[719px]:mt-8 max-[719px]:h-[490px] max-[719px]:max-w-[768px]"
      >
        <p className="kit-fade kit-fade-top absolute top-[38px] left-[18%] z-20 m-0 text-[12px] leading-none text-body max-[600px]:top-2 max-[600px]:left-0 max-[600px]:text-[8px]">
          Livro em capa dura
        </p>
        <img
          className="kit-fade kit-fade-top pointer-events-none absolute top-[48px] left-[23%] z-20 h-[68px] w-[142px] max-[600px]:top-[13px] max-[600px]:left-[14%] max-[600px]:h-[34px] max-[600px]:w-[72px]"
          src={ArrowTwo}
          alt=""
          aria-hidden="true"
        />

        <img
          className="absolute top-[125px] left-1/2 z-30 h-auto w-[332px] -translate-x-1/2 max-[600px]:top-[78px] max-[600px]:w-[160px] max-[380px]:w-[145px]"
          src={BookPng}
          alt="Livro de capa dura O Castelo da Colina"
        />
        <img
          className="kit-bookmark kit-bookmark-yellow absolute top-[42px] left-[calc(50%+110px)] z-20 h-auto w-[148px] rotate-[12deg] max-[600px]:top-[22px] max-[600px]:left-[calc(50%+20px)] max-[600px]:w-[60px] max-[380px]:left-[calc(50%+10px)] max-[380px]:w-[50px]"
          src={BookmarkYellowPng}
          alt="Marcador amarelo com ilustração de castelo"
        />
        <img
          className="kit-bookmark kit-bookmark-purple absolute top-[118px] left-[calc(50%+212px)] z-0 h-auto w-[142px] rotate-[23deg] max-[600px]:top-[92px] max-[600px]:left-[calc(50%+60px)] max-[600px]:w-[58px] max-[380px]:left-[calc(50%+20px)] max-[380px]:w-[45px]"
          src={BookmarkPurplePng}
          alt="Marcador roxo Encantos Literários"
        />
        <p
          ref={bottomRef}
          className="kit-fade kit-fade-bottom absolute top-[350px] left-[20%] z-20 m-0 text-[12px] leading-none text-body max-[600px]:top-[276px] max-[600px]:left-0 max-[600px]:text-[8px]"
        >
          Broche exclusivo
        </p>
        <img
          className="kit-fade kit-fade-bottom pointer-events-none absolute top-[378px] left-[18%] z-20 h-[110px] w-[90px] max-[600px]:top-[290px] max-[600px]:left-[8%] max-[600px]:h-[55px] max-[600px]:w-[46px]"
          src={ArrowOne}
          alt=""
          aria-hidden="true"
        />
        <img
          className="kit-fade kit-pin absolute top-[455px] left-[calc(50%-275px)] z-20 h-auto w-[148px] max-[600px]:top-[320px] max-[600px]:left-[calc(50%-132px)] max-[600px]:w-[75px] max-[380px]:left-[calc(50%-110px)] max-[380px]:w-[68px]"
          src={PinPng}
          alt="Broche exclusivo com ilustração de castelo"
        />

        <img
          className="kit-fade kit-fade-bottom pointer-events-none absolute top-[548px] right-[17%] z-20 h-[120px] w-[120px]  max-[600px]:top-[354px] max-[600px]:right-[7%] max-[600px]:h-[56px] max-[600px]:w-[56px]"
          src={Arrow}
          alt=""
          aria-hidden="true"
        />
        <p className="kit-fade kit-fade-bottom absolute top-[682px] right-[24%] z-20 m-0 text-[12px] leading-none text-body max-[600px]:top-[420px] max-[600px]:right-[14%] max-[600px]:text-[8px]">
          Marca páginas temático
        </p>
      </div>
    </section>
  )
}
