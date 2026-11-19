import LogoSvg from "../assets/logo.svg"

export function Navbar() {
  return (
    <nav
      aria-label="Navegação principal"
      className="relative z-[1] m-auto flex h-16 w-[min(80%,1120px)] items-center justify-between max-[719px]:h-12 max-[719px]:w-[calc(100%-40px)]"
    >
      <img
        className="block h-14.5 w-57.5 shrink-0 max-[719px]:hidden"
        src={LogoSvg}
        alt="Encantos Literários"
      />

      <div className="hidden h-10 w-[52px] shrink-0 overflow-hidden max-[719px]:block" aria-label="Encantos Literários">
        <img className="h-auto w-[154px] max-w-none" src={LogoSvg} alt="" aria-hidden="true" />
      </div>

      <button
        type="button"
        className="flex h-10 w-22.25 cursor-pointer items-center justify-center rounded-[5px] border-0 bg-pink-dark text-button leading-none font-bold text-title transition-[background-color] duration-[160ms] ease-[ease] hover:bg-pink-base focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-[3px] focus-visible:outline-pink-light"
      >
        Assinar
      </button>
    </nav>
  )
}
