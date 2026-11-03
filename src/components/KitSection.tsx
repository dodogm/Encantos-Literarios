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
  return (
    <section
      className="relative isolate min-h-[max(768px,100svh,min(984px,calc(32vw+506.6px)))] overflow-hidden bg-shape-background px-5 pt-[147px] text-body max-[719px]:min-h-[max(720px,calc(810px-14.8vw))] max-[719px]:pt-[113px]"
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
          <img className="h-6 w-6" src={StarSvg} alt="" aria-hidden="true" />
          <h2
            className="m-0 text-[18px] leading-[1.2] font-bold text-title max-[600px]:text-base"
            id="kit-title"
          >
            Conheça o kit mensal
          </h2>
          <img className="h-6 w-6" src={StarSvg} alt="" aria-hidden="true" />
        </div>
        <p className="mt-1 text-[9px] leading-[1.4] font-normal text-label">
          Receba uma caixa surpresa todos os meses
        </p>
      </header>

      <div className="relative mx-auto mt-[40px] h-[540px] w-full max-w-[768px] max-[719px]:mt-8 max-[719px]:h-[490px]">
        <p className="absolute top-[38px] left-[18%] z-20 m-0 text-[9px] leading-none text-body max-[600px]:top-2 max-[600px]:left-0 max-[600px]:text-[8px]">
          Livro em capa dura
        </p>
        <img
          className="pointer-events-none absolute top-[32px] left-[23%] z-20 h-[48px] w-[100px] max-[600px]:top-[13px] max-[600px]:left-[14%] max-[600px]:h-[34px] max-[600px]:w-[72px]"
          src={ArrowTwo}
          alt=""
          aria-hidden="true"
        />

        <img
          className="absolute top-[88px] left-1/2 z-30 h-auto w-[234px] -translate-x-1/2 max-[600px]:top-[78px] max-[600px]:w-[160px] max-[380px]:w-[145px]"
          src={BookPng}
          alt="Livro de capa dura O Castelo da Colina"
        />
        <img
          className="absolute top-[30px] left-[calc(50%+78px)] z-20 h-auto w-[104px] rotate-[12deg] max-[600px]:top-[22px] max-[600px]:left-[calc(50%+20px)] max-[600px]:w-[60px] max-[380px]:left-[calc(50%+10px)] max-[380px]:w-[50px]"
          src={BookmarkYellowPng}
          alt="Marcador amarelo com ilustração de castelo"
        />
        <img
          className="absolute top-[83px] left-[calc(50%+150px)] z-0 h-auto w-[100px] rotate-[23deg] max-[600px]:top-[92px] max-[600px]:left-[calc(50%+60px)] max-[600px]:w-[58px] max-[380px]:left-[calc(50%+20px)] max-[380px]:w-[45px]"
          src={BookmarkPurplePng}
          alt="Marcador roxo Encantos Literários"
        />
        <span className="absolute top-[332px] left-[calc(50%+61px)] z-30 -rotate-[12deg] rounded-sm bg-pink-base px-2 py-1 text-[14px] leading-none font-bold text-title shadow-sm max-[600px]:top-[292px] max-[600px]:left-[calc(50%+35px)] max-[600px]:text-[10px]">
          172 × 536
        </span>

        <p className="absolute top-[247px] left-[20%] z-20 m-0 text-[9px] leading-none text-body max-[600px]:top-[276px] max-[600px]:left-0 max-[600px]:text-[8px]">
          Broche exclusivo
        </p>
        <img
          className="pointer-events-none absolute top-[267px] left-[18%] z-20 h-[78px] w-[64px] max-[600px]:top-[290px] max-[600px]:left-[8%] max-[600px]:h-[55px] max-[600px]:w-[46px]"
          src={ArrowOne}
          alt=""
          aria-hidden="true"
        />
        <img
          className="absolute top-[320px] left-[calc(50%-194px)] z-20 h-auto w-[104px] max-[600px]:top-[320px] max-[600px]:left-[calc(50%-132px)] max-[600px]:w-[75px] max-[380px]:left-[calc(50%-110px)] max-[380px]:w-[68px]"
          src={PinPng}
          alt="Broche exclusivo com ilustração de castelo"
        />

        <img
          className="pointer-events-none absolute top-[386px] right-[17%] z-20 h-[84px] w-[84px] -rotate-[90deg] max-[600px]:top-[354px] max-[600px]:right-[7%] max-[600px]:h-[56px] max-[600px]:w-[56px]"
          src={Arrow}
          alt=""
          aria-hidden="true"
        />
        <p className="absolute top-[480px] right-[24%] z-20 m-0 text-[9px] leading-none text-body max-[600px]:top-[420px] max-[600px]:right-[14%] max-[600px]:text-[8px]">
          Marca páginas temático
        </p>
      </div>
    </section>
  )
}