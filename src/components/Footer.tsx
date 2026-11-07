import LogoSvg from "../assets/logo.svg"
import DiscordSvg from "../assets/icons/discord.svg"
import FacebookSvg from "../assets/icons/facebook.svg"
import InstagramSvg from "../assets/icons/instagram.svg"
import MailSvg from "../assets/icons/mail.svg"
import TwitterSvg from "../assets/icons/twitter.svg"
import WhatsappSvg from "../assets/icons/whatsapp.svg"
import BookTraceBackgroundPng from "../assets/book-trace-background.png"

const socialLinks = [
  { name: "Instagram", icon: InstagramSvg },
  { name: "X", icon: TwitterSvg },
  { name: "Facebook", icon: FacebookSvg },
  { name: "Discord", icon: DiscordSvg },
  { name: "WhatsApp", icon: WhatsappSvg },
  { name: "E-mail", icon: MailSvg },
]

const footerGroups = [
  {
    title: "Conteúdos",
    links: ["Kits passados", "Clube de membros", "Blog"],
  },
  {
    title: "Ajuda",
    links: ["Central de ajuda", "Regulamentos", "Suporte"],
  },
]

export function Footer() {
  return (
    <footer className="relative isolate min-h-[508px] overflow-hidden  font-[family-name:var(--font-family-base)] max-[700px]:min-h-0">
      <img
        className="pointer-events-none absolute inset-0 z-[-1] h-full w-full object-cover object-top"
        src={BookTraceBackgroundPng}
        alt=""
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-[min(82%,1416px)] justify-between pt-[235px] max-[700px]:w-[calc(100%-40px)] max-[700px]:flex-col max-[700px]:gap-12 max-[700px]:pt-24 max-[700px]:pb-12">
        <div className="w-[330px] max-w-full">
          <img
            className="block h-auto w-full max-w-[330px]"
            src={LogoSvg}
            alt="Encantos Literários"
          />

          <div className="mt-[21px] border-t border-shape-stroke/70 pt-6">
            <ul className="flex items-center justify-between px-3">
              {socialLinks.map(({ name, icon }) => (
                <li key={name}>
                  <img
                    className="h-6 w-6"
                    src={icon}
                    alt={name}
                    title={name}
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(53%) sepia(28%) saturate(1391%) hue-rotate(159deg) brightness(94%) contrast(85%)",
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <nav
          className="flex gap-[124px] pt-[5px] max-[900px]:gap-12 max-[700px]:justify-between max-[700px]:gap-6 max-[700px]:pt-0"
          aria-label="Links do rodapé"
        >
          {footerGroups.map(({ title, links }) => (
            <div key={title} className="min-w-[108px]">
              <h2 className="m-0 text-[20px] leading-[1.3] font-bold text-title max-[700px]:text-lg">
                {title}
              </h2>
              <ul className="mt-[26px] space-y-[20px]">
                {links.map((link) => (
                  <li
                    key={link}
                    className="text-[17px] leading-[1.3] font-medium text-blue-light max-[700px]:text-sm"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  )
}