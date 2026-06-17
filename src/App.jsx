import { useEffect } from "react"
import heroImage from "./assets/images/retrato_acolhedor_em_ambiente_profissional.png"

const professional = {
  name: "Alexandra Xavier",
  role: "Psicóloga",
  crp: "CRP: em breve",
  phone: "(61) 99644-8228",
  location: "DF, Goiás e online",
  audience: "Adolescentes e adultos",
  whatsapp:
    "https://wa.me/5561996448228?text=Ol%C3%A1%2C%20Alexandra%21%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20atendimento%20psicol%C3%B3gico",
}

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Psicoterapia", href: "#psicoterapia" },
  { label: "Atendimento", href: "#atendimento" },
  { label: "Contato", href: "#contato" },
]

const heroDetails = [
  "Online e presencial",
  "DF, Goiás e online",
  "Adolescentes e adultos",
]

const floatingHeroCards = [
  "Escuta com sigilo",
  "Online e presencial",
  "Adolescentes e adultos",
]

const professionalData = [
  professional.crp,
  "Atendimento online e presencial",
  "Região: DF, Goiás e online",
  "Público: adolescentes e adultos",
]

const therapyMoments = [
  "Ansiedade",
  "Estresse",
  "Autoestima",
  "Insegurança",
  "Relacionamentos",
  "Cansaço mental",
  "Mudanças",
  "Autoconhecimento",
  "Desenvolvimento emocional",
  "Recomeços",
]

const processSteps = [
  {
    title: "Primeiro contato",
    text: "Você envia uma mensagem pelo WhatsApp e compartilha, com tranquilidade, o que busca neste momento.",
  },
  {
    title: "Alinhamento do formato",
    text: "Combinamos modalidade, horários e detalhes do atendimento online ou presencial.",
  },
  {
    title: "Sessão agendada",
    text: "O encontro acontece em um espaço reservado para escuta, fala e elaboração.",
  },
  {
    title: "Processo com sigilo e cuidado",
    text: "O acompanhamento respeita seu ritmo, sua história e os princípios éticos da profissão.",
  },
]

const developmentTopics = [
  "Autoconhecimento",
  "Regulação emocional",
  "Autoestima",
  "Forças pessoais",
  "Relacionamentos",
  "Bem-estar",
  "Clareza para escolhas",
  "Vida com mais sentido",
]

const positiveChips = ["Consciência", "Recursos internos", "Equilíbrio"]

function ButtonLink({ href, children, variant = "primary", className = "" }) {
  const variants = {
    primary:
      "border border-[#B76E79] bg-[#B76E79] text-white shadow-[0_14px_28px_rgba(183,110,121,0.2)] hover:border-[#9F5C66] hover:bg-[#9F5C66] hover:shadow-[0_16px_34px_rgba(159,92,102,0.22)]",
    secondary:
      "border border-[#B76E79] bg-white/20 text-[#B76E79] hover:bg-[#F3E6E4] hover:shadow-[0_12px_26px_rgba(90,71,71,0.07)]",
  }

  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-center text-sm font-bold leading-none transition duration-300 ease-out hover:-translate-y-px focus:outline-none focus:ring-4 focus:ring-[#D9A5A9]/45 ${variants[variant]} ${className}`}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      {children}
    </a>
  )
}

function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  )
}

function SectionHeader({ eyebrow, title, text, align = "center" }) {
  const alignment = align === "left" ? "text-left" : "text-center"
  const paragraph = align === "left" ? "max-w-2xl" : "mx-auto max-w-3xl"

  return (
    <div className={`mb-8 md:mb-10 ${alignment}`}>
      {eyebrow && (
        <p className="mb-4 text-sm font-bold uppercase text-[#B76E79]">
          {eyebrow}
        </p>
      )}
      <h2 className="font-['Playfair_Display'] text-3xl font-semibold leading-tight text-[#5A4747] sm:text-4xl">
        {title}
      </h2>
      {text && (
        <p className={`mt-5 text-base leading-8 text-[#6E5B5B] ${paragraph}`}>
          {text}
        </p>
      )}
    </div>
  )
}

function SoftCard({ children, className = "", style }) {
  return (
    <div
      className={`soft-card relative rounded-lg border border-[#EAD6D3]/75 bg-white/82 shadow-[0_16px_38px_rgba(90,71,71,0.065)] ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}

function OrganicLine({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 180 52"
    >
      <path
        d="M2 38C26 8 49 7 70 25c18 15 36 27 62 11 16-10 28-26 46-19"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.4"
      />
    </svg>
  )
}

function OrganicShape({ className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-[42%_58%_52%_48%/48%_42%_58%_52%] border border-[#D9A5A9]/24 bg-[#D9A5A9]/10 ${className}`}
    />
  )
}

function SectionDivider({ className = "" }) {
  return (
    <div className={`pointer-events-none flex justify-center ${className}`} aria-hidden="true">
      <OrganicLine className="w-32 text-[#B76E79]/22" />
    </div>
  )
}

function MiniMark({ index = 0 }) {
  const variants = [
    "rounded-full",
    "rounded-[45%] rotate-12",
    "rounded-full -rotate-12",
    "rounded-[40%] rotate-45",
  ]

  return (
    <span
      aria-hidden="true"
      className={`flex h-8 w-8 shrink-0 items-center justify-center border border-[#D9A5A9] bg-[#F3E6E4] transition duration-300 group-hover:-translate-y-0.5 group-hover:border-[#B76E79] group-hover:bg-[#D9A5A9]/35 ${variants[index % variants.length]}`}
    >
      <span className="h-2 w-2 rounded-full bg-[#B76E79]/55" />
    </span>
  )
}

function ThoughtNote({ children, className = "" }) {
  return (
    <div
      className={`reveal relative mx-auto max-w-2xl overflow-hidden rounded-lg border border-[#EAD6D3]/80 bg-[#F3E6E4]/65 px-6 py-5 text-center shadow-[0_12px_28px_rgba(90,71,71,0.055)] ${className}`}
    >
      <span className="absolute left-5 top-3 font-['Playfair_Display'] text-5xl leading-none text-[#D9A5A9]/32">
        “
      </span>
      <span className="mx-auto mb-3 block h-px w-14 bg-[#B76E79]/25" />
      <p className="relative font-['Playfair_Display'] text-xl font-semibold leading-snug text-[#5A4747]">
        {children}
      </p>
    </div>
  )
}

function FloatingHeroCard({ children, className = "", index = 0 }) {
  return (
    <div
      className={`float-card hidden items-center gap-2 rounded-full border border-white/70 bg-[#FAF7F5]/82 px-4 py-2.5 text-xs font-bold text-[#6E5B5B] shadow-[0_10px_22px_rgba(90,71,71,0.075)] backdrop-blur-md md:flex ${className}`}
      style={{ "--float-delay": `${index * 0.7}s` }}
    >
      <span className="h-2 w-2 rounded-full bg-[#B76E79]/60" aria-hidden="true" />
      {children}
    </div>
  )
}

function App() {
  useEffect(() => {
    document.documentElement.classList.add("js")
    const elements = document.querySelectorAll(".reveal")

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    )

    elements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove("js")
    }
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FAF7F5] text-[#5A4747]">
      <header className="sticky top-0 z-40 border-b border-[#EAD6D3] bg-[#FAF7F5]/95 backdrop-blur-md">
        <Container className="flex flex-wrap items-center justify-between gap-4 py-4 lg:flex-nowrap">
          <a
            href="#inicio"
            className="min-w-0 leading-none"
            aria-label="Ir para o início da página de Alexandra Xavier"
          >
            <span className="block truncate font-['Playfair_Display'] text-2xl font-semibold text-[#5A4747]">
              {professional.name}
            </span>
            <span className="mt-1 block text-xs font-bold uppercase text-[#B76E79]">
              Psicóloga
            </span>
          </a>

          <nav
            className="hidden items-center gap-7 text-sm font-bold text-[#6E5B5B] lg:flex"
            aria-label="Navegação principal"
          >
            {navItems.map((item) => (
              <a
                className="transition duration-200 hover:text-[#9F5C66]"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <ButtonLink
            className="w-full px-5 min-[431px]:w-auto"
            href={professional.whatsapp}
          >
            Agendar atendimento
          </ButtonLink>
        </Container>

        <Container className="pb-3 lg:hidden">
          <nav
            className="grid grid-cols-2 gap-2 text-center text-xs font-bold text-[#6E5B5B] min-[430px]:grid-cols-4"
            aria-label="Navegação principal mobile"
          >
            {navItems.map((item) => (
              <a
                className="rounded-full border border-[#EAD6D3] bg-white/55 px-3 py-2 transition duration-200 hover:bg-[#F3E6E4] hover:text-[#9F5C66]"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </Container>
      </header>

      <main>
        <section
          id="inicio"
          className="reveal section-texture relative isolate overflow-hidden bg-[linear-gradient(135deg,#FAF7F5_0%,#F3E6E4_46%,rgba(217,165,169,0.28)_100%)]"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20 opacity-[0.16] [background-image:radial-gradient(#B76E79_0.7px,transparent_0.7px)] [background-size:22px_22px]"
          />
          <OrganicShape className="-left-28 top-4 -z-10 h-80 w-80 bg-[#D9A5A9]/12" />
          <OrganicShape className="-right-20 top-10 -z-10 h-72 w-72 rotate-12 bg-white/28" />
          <OrganicLine className="absolute left-[34%] top-32 -z-10 hidden w-44 text-[#B76E79]/18 lg:block" />
          <OrganicLine className="absolute bottom-10 right-[18%] -z-10 hidden w-52 text-[#B76E79]/22 lg:block" />

          <Container className="grid items-start gap-10 pb-10 pt-5 sm:pb-12 sm:pt-7 lg:grid-cols-[0.98fr_0.92fr] lg:gap-14 lg:pb-16 lg:pt-6">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <p className="mb-6 inline-flex rounded-full border border-[#D9A5A9] bg-white/70 px-4 py-2 text-sm font-bold text-[#9F5C66] shadow-sm">
                Atendimento psicológico online e presencial
              </p>

              <h1 className="font-['Playfair_Display'] text-[2.45rem] font-semibold leading-[1.08] text-[#5A4747] sm:text-5xl lg:text-6xl">
                Um espaço de acolhimento, escuta e cuidado para a sua saúde
                emocional.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5A4747]">
                Psicoterapia para adolescentes e adultos que desejam compreender
                melhor o que sentem e encontrar formas mais conscientes de lidar
                com a vida.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#6E5B5B]">
                Um encontro para olhar para si com gentileza, organizar
                pensamentos e fortalecer recursos pessoais, sem pressa e sem
                julgamentos.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink className="w-full sm:w-auto" href={professional.whatsapp}>
                  Agendar atendimento
                </ButtonLink>
                <ButtonLink
                  className="w-full sm:w-auto"
                  href={professional.whatsapp}
                  variant="secondary"
                >
                  Falar pelo WhatsApp
                </ButtonLink>
              </div>

              <div className="mt-10 flex flex-col gap-3 border-l border-[#D9A5A9]/80 pl-4 sm:flex-row sm:flex-wrap sm:border-l-0 sm:pl-0">
                {heroDetails.map((detail) => (
                  <div
                    className="rounded-full border border-white/80 bg-white/56 px-4 py-3 text-sm font-semibold text-[#6E5B5B] shadow-[0_8px_22px_rgba(90,71,71,0.055)]"
                    key={detail}
                  >
                    {detail}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[28.5rem] lg:ml-auto lg:pt-6">
              <OrganicShape className="-left-8 top-8 h-24 w-24 bg-white/18" />
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 h-full w-full rounded-[28px] bg-[#D9A5A9]/14"
              />
              <OrganicLine className="absolute -left-8 top-10 z-10 hidden w-36 text-white/80 sm:block" />
              <FloatingHeroCard
                className="absolute left-5 top-6 z-20"
                index={0}
              >
                {floatingHeroCards[0]}
              </FloatingHeroCard>
              <FloatingHeroCard
                className="absolute right-5 top-[46%] z-20"
                index={1}
              >
                {floatingHeroCards[1]}
              </FloatingHeroCard>
              <FloatingHeroCard
                className="absolute bottom-20 left-6 z-20"
                index={2}
              >
                {floatingHeroCards[2]}
              </FloatingHeroCard>
              <figure className="soft-card relative overflow-hidden rounded-[24px] border border-white/85 bg-[#F3E6E4] shadow-[0_22px_56px_rgba(90,71,71,0.11)]">
                <img
                  className="aspect-[6/7] h-full w-full object-cover object-[50%_42%]"
                  src={heroImage}
                  alt="Retrato de Alexandra Xavier em ambiente profissional acolhedor"
                />
                <figcaption className="border-t border-[#F3E6E4] bg-[#FAF7F5]/96 p-5 text-sm leading-7 text-[#6E5B5B]">
                  <span className="font-bold text-[#B76E79]">
                    Escuta cuidadosa
                  </span>{" "}
                  com sigilo, ética e respeito ao tempo de cada história.
                </figcaption>
              </figure>
              <div className="mt-4 grid gap-2 md:hidden">
                {floatingHeroCards.slice(0, 2).map((item) => (
                  <div
                    className="rounded-full border border-[#EAD6D3] bg-white/75 px-4 py-3 text-center text-xs font-bold text-[#6E5B5B] shadow-sm"
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="reveal relative overflow-hidden border-y border-[#EAD6D3]/50 bg-[#F3E6E4]/82 py-12 sm:py-14 lg:py-16">
          <OrganicShape className="-left-14 top-6 h-32 w-32" />
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <OrganicLine className="mx-auto mb-4 w-28 text-[#B76E79]/35" />
              <h2 className="font-['Playfair_Display'] text-3xl font-semibold leading-tight text-[#5A4747] sm:text-4xl">
              Cuidar da mente também é cuidar da vida.
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#5A4747]">
              Você não precisa esperar tudo ficar difícil demais para buscar
              apoio. A terapia é um espaço seguro para se escutar, se
              compreender e desenvolver novas formas de lidar com os desafios da
              vida.
              </p>
            </div>
          </Container>
        </section>

        <SectionDivider className="-mb-5 mt-4" />

        <section id="sobre" className="reveal relative py-12 sm:py-16 lg:py-18">
          <Container className="grid items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
            <div className="relative flex">
              <div
                aria-hidden="true"
                className="absolute -right-3 -top-3 h-24 w-24 rounded-full border border-[#D9A5A9]/35"
              />
              <SoftCard className="relative flex w-full flex-col justify-between overflow-hidden bg-[linear-gradient(145deg,#F3E6E4_0%,#FAF7F5_100%)] p-6 sm:p-8">
                <span className="absolute left-0 top-8 h-12 w-1 rounded-r-full bg-[#D9A5A9]/50" />
                <p className="mb-4 text-sm font-bold uppercase text-[#B76E79]">
                  Sobre
                </p>
                <h2 className="font-['Playfair_Display'] text-3xl font-semibold leading-tight text-[#5A4747] sm:text-4xl">
                  Olá, sou Alexandra Xavier.
                </h2>
                <p className="mt-5 leading-8 text-[#6E5B5B]">
                  Atuo com adolescentes e adultos em atendimentos online e
                  presenciais, com uma escuta atenta à singularidade de cada
                  pessoa.
                </p>

                <div className="mt-8 flex flex-wrap gap-2.5">
                  {professionalData.map((item) => (
                    <span
                      className="rounded-full border border-white/85 bg-white/58 px-4 py-2 text-sm font-semibold leading-5 text-[#6E5B5B]"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </SoftCard>
            </div>

            <div className="flex flex-col justify-center space-y-4 text-[15px] leading-8 text-[#5A4747] sm:text-base">
              <p>
                Meu trabalho é auxiliar você em seu caminho de
                autoconhecimento, fortalecimento pessoal e construção de
                escolhas mais coerentes com a sua história.
              </p>
              <p>
                A terapia pode ajudar a nomear sentimentos, reconhecer padrões e
                criar novas formas de responder às situações que hoje parecem
                pesadas ou confusas.
              </p>
              <p>
                A Psicologia Positiva orienta esse olhar para recursos,
                valores, forças e possibilidades, sem desconsiderar dores ou
                dificuldades reais.
              </p>
              <SoftCard className="overflow-hidden border-[#D9A5A9]/90 bg-[#FAF7F5] p-5 sm:p-6">
                <span className="absolute right-5 top-5 h-10 w-10 rounded-full border border-[#D9A5A9]/25" />
                <p className="text-sm font-bold uppercase text-[#B76E79]">
                  Diferencial
                </p>
                <p className="mt-2 font-['Playfair_Display'] text-2xl font-semibold leading-snug text-[#5A4747]">
                  Psicologia Positiva como apoio para reconhecer forças,
                  desenvolver recursos internos e construir caminhos possíveis.
                </p>
              </SoftCard>
              <ThoughtNote className="mt-1 max-w-none px-5 py-4">
                Seu tempo importa.
              </ThoughtNote>
            </div>
          </Container>
        </section>

        <section
          id="psicoterapia"
          className="reveal section-texture relative overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.58)_0%,#FAF7F5_100%)] py-12 sm:py-16 lg:py-18"
        >
          <OrganicShape className="-right-20 top-20 h-48 w-48 bg-[#D9A5A9]/8" />
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div className="lg:sticky lg:top-32">
                <SectionHeader
                  align="left"
                  eyebrow="Psicoterapia"
                  title="A psicoterapia pode ajudar você em momentos como:"
                  text="Nem sempre é fácil nomear o que sentimos. Falar sobre isso em um espaço reservado pode ser o primeiro passo para entender melhor o que acontece por dentro."
                />
                <SoftCard className="hidden overflow-hidden border-[#EAD6D3]/80 bg-[#F3E6E4]/82 p-5 lg:block">
                  <span className="absolute bottom-4 right-4 h-12 w-12 rounded-full border border-[#D9A5A9]/25" />
                  <p className="font-['Playfair_Display'] text-2xl font-semibold leading-snug text-[#5A4747]">
                    Algumas questões não precisam ser carregadas em silêncio.
                  </p>
                </SoftCard>
              </div>

              <div className="grid auto-rows-fr gap-4 sm:grid-cols-2">
                {therapyMoments.map((item, index) => (
                  <div
                    className="reveal group relative flex min-h-[5.25rem] items-center gap-4 rounded-lg border border-[#EAD6D3]/70 bg-[#FAF7F5]/92 p-4 shadow-[0_10px_24px_rgba(90,71,71,0.045)] transition duration-300 hover:-translate-y-1 hover:border-[#D9A5A9] hover:bg-white hover:shadow-[0_18px_38px_rgba(90,71,71,0.085)]"
                    style={{ "--reveal-delay": `${index * 55}ms` }}
                    key={item}
                  >
                    <span className="absolute left-0 top-1/2 hidden h-8 w-px -translate-y-1/2 bg-[#D9A5A9]/35 sm:block" />
                    <MiniMark index={index} />
                    <span className="font-semibold leading-6 text-[#5A4747]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <SectionDivider className="-mb-5 mt-2" />

        <section className="reveal py-8 sm:py-12 lg:py-14">
          <Container>
            <div className="section-texture relative overflow-hidden rounded-lg border border-[#EAD6D3] bg-[linear-gradient(135deg,#F3E6E4_0%,#FAF7F5_52%,rgba(217,165,169,0.28)_100%)] p-6 shadow-[0_20px_48px_rgba(90,71,71,0.075)] sm:p-7 lg:p-8">
              <div
                aria-hidden="true"
                className="absolute -right-14 -top-14 h-36 w-36 rounded-full border border-[#D9A5A9]/40"
              />
              <OrganicLine className="absolute bottom-8 right-10 hidden w-36 text-[#B76E79]/25 md:block" />

              <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                <div>
                  <p className="mb-4 text-sm font-bold uppercase text-[#B76E79]">
                    Psicologia Positiva
                  </p>
                  <h2 className="font-['Playfair_Display'] text-3xl font-semibold leading-tight text-[#5A4747] sm:text-4xl">
                    Psicologia Positiva não é sobre ‘ser positivo’ o tempo todo.
                  </h2>
                </div>

                <div className="space-y-3.5 text-[15px] leading-8 text-[#5A4747] sm:text-base">
                  <p>
                    É sobre reconhecer a realidade com mais consciência,
                    desenvolver recursos emocionais e fortalecer aquilo que pode
                    ajudar você a lidar melhor com a vida.
                  </p>
                  <p>
                    Durante o processo terapêutico, você encontra um espaço para
                    falar sobre suas dificuldades, compreender suas emoções e
                    construir possibilidades mais saudáveis para o seu dia a dia.
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {positiveChips.map((chip) => (
                      <span
                        className="rounded-full border border-[#EAD6D3] bg-white/55 px-4 py-2 text-sm font-bold text-[#6E5B5B] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#D9A5A9] hover:bg-[#F3E6E4] hover:text-[#9F5C66] hover:shadow-[0_14px_30px_rgba(90,71,71,0.09)]"
                        key={chip}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                  <div className="rounded-lg border border-[#D9A5A9]/90 bg-white/68 p-5 shadow-[0_12px_28px_rgba(90,71,71,0.045)] sm:p-6">
                    <p className="font-['Playfair_Display'] text-xl font-semibold leading-snug text-[#5A4747] sm:text-2xl">
                      Não é sobre ignorar a dor. É sobre reconhecer sua história
                      e desenvolver recursos para seguir com mais consciência,
                      equilíbrio e cuidado.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section
          id="atendimento"
          className="reveal relative overflow-hidden border-y border-[#EAD6D3]/50 bg-[#F3E6E4]/88 py-12 sm:py-16 lg:py-18"
        >
          <OrganicLine className="absolute left-8 top-12 hidden w-32 text-[#B76E79]/18 lg:block" />
          <Container>
            <SectionHeader
              eyebrow="Atendimento"
              title="Como funciona o atendimento"
              text="Um percurso simples, com combinados claros desde o primeiro contato."
            />

            <div className="relative mx-auto grid w-full gap-5 md:grid-cols-4">
              <div
                aria-hidden="true"
                className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-px bg-[#D9A5A9]/45 md:block"
              />
              {processSteps.map((step, index) => (
                <div
                  className="reveal group relative flex flex-col items-center"
                  key={step.title}
                  style={{ "--reveal-delay": `${index * 90}ms` }}
                >
                  <div className="mb-5 flex h-12 items-center justify-center">
                    <span className="z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#D9A5A9] bg-[#FAF7F5] text-sm font-bold text-[#B76E79] shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:border-[#B76E79] group-hover:bg-white group-hover:text-[#9F5C66]">
                      {index + 1}
                    </span>
                  </div>
                  <SoftCard className="flex h-full min-h-52 w-full flex-col items-center justify-center overflow-hidden bg-[#FAF7F5] p-6 text-center">
                    <span className="absolute right-4 top-4 h-8 w-8 rounded-full border border-[#D9A5A9]/20" />
                    <h3 className="max-w-[13rem] font-['Playfair_Display'] text-[1.45rem] font-semibold leading-tight text-[#5A4747]">
                      {step.title}
                    </h3>
                    <p className="mt-4 max-w-[13.5rem] text-[0.98rem] leading-8 text-[#5A4747]">
                      {step.text}
                    </p>
                  </SoftCard>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="reveal py-12 sm:py-16 lg:py-18">
          <Container>
            <SectionHeader
              eyebrow="No processo"
              title="O que você pode desenvolver na terapia"
              text="Cada percurso é singular. A terapia pode favorecer reflexões e habilidades importantes para a relação consigo, com os outros e com a própria vida."
            />

            <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {developmentTopics.map((topic, index) => (
                <SoftCard
                  className="reveal flex min-h-20 items-center justify-center overflow-hidden px-5 py-4 text-center"
                  style={{ "--reveal-delay": `${index * 55}ms` }}
                  key={topic}
                >
                  <span className="absolute left-1/2 top-0 h-px w-10 -translate-x-1/2 bg-[#D9A5A9]/45" />
                  <p className="font-bold leading-6 text-[#5A4747]">{topic}</p>
                </SoftCard>
              ))}
            </div>
          </Container>
        </section>

        <section id="contato" className="reveal pb-12 sm:pb-16 lg:pb-18">
          <Container>
            <div className="section-texture relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-[#EAD6D3] bg-[linear-gradient(135deg,#F3E6E4_0%,#FAF7F5_58%,rgba(217,165,169,0.3)_100%)] px-6 py-10 text-center shadow-[0_20px_48px_rgba(90,71,71,0.075)] sm:px-10 sm:py-12">
              <div
                aria-hidden="true"
                className="absolute left-6 top-6 h-16 w-16 rounded-full border border-[#D9A5A9]/45"
              />
              <OrganicLine className="absolute bottom-8 right-8 hidden w-28 text-[#B76E79]/25 sm:block" />
              <p className="text-sm font-bold uppercase text-[#B76E79]">
                Agendamento
              </p>
              <h2 className="mx-auto mt-4 max-w-3xl font-['Playfair_Display'] text-3xl font-semibold leading-tight text-[#5A4747] sm:text-4xl">
                Você não precisa passar por tudo sozinho(a).
              </h2>
              <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#6E5B5B]">
                Se você sente que precisa de apoio, acolhimento ou um espaço
                para organizar seus pensamentos e emoções, a psicoterapia pode
                ser um caminho possível.
              </p>
              <div className="mt-8 flex justify-center">
                <ButtonLink className="w-full sm:w-auto" href={professional.whatsapp}>
                  Conversar pelo WhatsApp
                </ButtonLink>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t border-[#EAD6D3] bg-white/48 py-9">
        <Container className="grid gap-7 text-sm text-[#5A4747] sm:grid-cols-2 lg:grid-cols-[1.05fr_1.05fr_0.9fr_1.4fr]">
          <div>
            <p className="font-['Playfair_Display'] text-xl font-semibold text-[#5A4747]">
              {professional.name}
            </p>
            <p className="mt-2">{professional.role}</p>
            <p className="mt-1">{professional.crp}</p>
          </div>

          <div>
            <p className="font-bold text-[#B76E79]">Atendimento</p>
            <p className="mt-2">Online e presencial</p>
            <p className="mt-1">Região: {professional.location}</p>
            <p className="mt-1">Público: {professional.audience}</p>
          </div>

          <div>
            <p className="font-bold text-[#B76E79]">Contato</p>
            <p className="mt-2">WhatsApp</p>
            <a
              className="mt-1 inline-flex text-[#5A4747] underline decoration-[#D9A5A9] underline-offset-4 transition hover:text-[#9F5C66]"
              href={professional.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              {professional.phone}
            </a>
          </div>

          <div>
            <p className="font-bold text-[#B76E79]">Aviso informativo</p>
            <p className="mt-2 max-w-sm leading-6 text-[#6E5B5B]">
              Este site tem finalidade informativa e não substitui atendimento
              emergencial. Em situações de crise, procure um serviço de
              emergência da sua região.
            </p>
          </div>
        </Container>
      </footer>

    </div>
  )
}

export default App
