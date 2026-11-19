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
    <footer className=" relative isolate max-h-[415px] overflow-hidden max-[900px]:min-h-0">
      <img
        className="pointer-events-none absolute inset-0 z-[-1] h-full w-full object-cover object-top"
        src={BookTraceBackgroundPng}
        alt=""
        aria-hidden="true"
      />

      <div className="relative mx-auto flex p-40 justify-between pt- max-[900px]:w-[calc(100%-40px)] max-[900px]:flex-col max-[900px]:gap-12 max-[900px]:pt-24 max-[900px]:pb-12">
        <div className="w-[330px] max-w-full">
          <img
            className="block h-auto w-full max-w-[330px] max-[900px]:max-w-[230px]"
            src={LogoSvg}
            alt="Encantos Literários"
          />

          <div className="mt-[21px] border-t border-shape-stroke/70 pt-6 max-[900px]:max-w-[230px]">
            <ul className="flex items-center justify-between px-3 max-[900px]:px-0">
              {socialLinks.map(({ name, icon }) => (
                <li key={name} className="footer-social relative cursor-pointer">
                  <span
                    className="block h-6 w-6 bg-blue-light max-[900px]:h-5 max-[900px]:w-5"
                    role="img"
                    aria-label={name}
                    title={name}
                    style={{
                      mask: `url("${icon}") center / contain no-repeat`,
                      WebkitMask: `url("${icon}") center / contain no-repeat`,
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <nav
          className="flex gap-[124px] pt-[5px] max-[900px]:justify-between max-[900px]:gap-6 max-[900px]:pt-0"
          aria-label="Links do rodapé"
        >
          {footerGroups.map(({ title, links }) => (
            <div key={title} className="min-w-[108px]">
              <h2 className="m-0 text-[20px] leading-[1.3] font-bold text-title max-[900px]:text-lg">
                {title}
              </h2>
              <ul className="mt-[26px] space-y-[20px] max-[900px]:mt-4 max-[900px]:space-y-3">
                {links.map((link) => (
                  <li
                    key={link}
                    className="cursor-pointer text-[17px] leading-[1.3] font-medium text-blue-light transition-colors duration-250 ease-in-out hover:text-title max-[900px]:text-sm"
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
