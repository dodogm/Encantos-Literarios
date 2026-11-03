import LogoSvg from "../assets/logo.svg"

export function Navbar() {
  return (
    <nav
      aria-label="Navegação principal"
      className="relative z-[1] mx-auto flex h-14 w-[min(80%,1120px)] items-center justify-between max-[719px]:h-12 max-[719px]:w-[calc(100%-40px)]"
    >
      <img
        className="block h-auto w-[122px] shrink-0 max-[719px]:w-[112px]"
        src={LogoSvg}
        alt="Encantos Literários"
      />

      <button
        type="button"
        className="flex h-[23px] w-[49px] cursor-pointer items-center justify-center rounded-[5px] border-0 bg-pink-dark text-[8px] leading-none font-bold text-title [font-family:var(--font-family-base)] transition-[background-color] duration-[160ms] ease-[ease] hover:bg-pink-base focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-[3px] focus-visible:outline-pink-light max-[719px]:h-[30px] max-[719px]:w-[64px] max-[719px]:text-[10px]"
      >
        Assinar
      </button>
    </nav>
  )
}
