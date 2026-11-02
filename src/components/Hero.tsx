import { Navbar } from "./Navbar"

import HeroBackgroundPng from "../assets/hero-background.png"
import MysteryCrystalPng from "../assets/mystery-crystal-ball.png"
import MysteryOpenedPng from "../assets/mystery-opened-spellbook.png"
import MysteryOuijaPng from "../assets/mystery-ouija-planchette.png"
import "./Hero.css"

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <img className="hero__scene" src={HeroBackgroundPng} alt="" aria-hidden="true" />

      <Navbar />

      <div className="hero__intro">
        <h1 className="hero__title" id="hero-title">
          <span>Desperte a sua imaginação</span>
          <span>e explore novos mundos</span>
        </h1>
        <p className="hero__subtitle">
          Junte-se ao clube de assinatura Encantos Literários e descubra maravilhas e aventuras a cada página
        </p>
      </div>

      <div className="hero__benefits">
        <img className="hero__benefit-book" src={MysteryOpenedPng} alt="" aria-hidden="true" />
        <p className="hero__benefit-copy">
          Receba todo mês um <strong>livro surpresa</strong> do seu tema favorito, acompanhado de
          <br className="hero__desktop-break" /> <strong>brindes exclusivos</strong> que tornarão a sua experiência literária{" "}
          <strong>encantadora</strong>
        </p>
        <img
          className="hero__decoration hero__decoration--ouija"
          src={MysteryOuijaPng}
          alt=""
          aria-hidden="true"
        />
        <img
          className="hero__decoration hero__decoration--crystal"
          src={MysteryCrystalPng}
          alt=""
          aria-hidden="true"
        />
      </div>
    </section>
  )
}
