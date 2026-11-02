import LogoSvg from "../assets/logo.svg"

export function Navbar() {
  return (
    <nav aria-label="Navegação principal" className="hero__nav">
      <img className="hero__logo" src={LogoSvg} alt="Encantos Literários" />

      <button
        type="button"
        className="hero__subscribe"
      >
        Assinar
      </button>
    </nav>
  )
}
