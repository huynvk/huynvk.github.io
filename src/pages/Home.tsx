import type { ComponentType } from "react"
import {
  SiEthereum,
  SiFirebase,
  SiGo,
  SiGooglecloud,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
} from "react-icons/si"
import { FaAws } from "react-icons/fa6"
import { HiArrowDown } from "react-icons/hi2"
import { Layout } from "@/components/Layout"
import { Seo } from "@/components/Seo"
import { SocialLinks, TezosIcon } from "@/components/icons"
import { site } from "@/site"

const principles = [
  {
    title: "Be nice and professional",
    content:
      "Be nice and respectful while playing as a team member and act professionally toward team goal.",
  },
  {
    title: "Transparent",
    content:
      "Confusion and misunderstanding can cause a lot of frustrations among the team. Be clear in vision can motivate tech team while transparency on difficulties and blockers can release frustrations for product owners and stakeholders.",
  },
  {
    title: "Customer collaboration",
    content:
      "A contract is important but no substitute for working closely with customers to discover what they need.",
  },
  {
    title: "Responding to changes",
    content:
      "Project plan is important, but it must not be too rigid to accommodate changes.",
  },
]

const domains = [
  {
    title: "Fintech",
    content:
      "Highly scalable fintech system which execute payments and installments for pet owners in the US and Canada.",
  },
  {
    title: "Blockchain",
    content:
      "Were part of highly skillable teams working on different interesting Crypto projects such as Crypto wallet or blockchain games. Work mainly on Ethereum and Tezos.",
  },
  {
    title: "Logistics",
    content: "Traveled and worked inside leading logistic company in Asia.",
  },
  {
    title: "Networking and IoT Devices",
    content:
      "Built products to help improving process inside manufacture, which focus on producing Networking and IoT devices.",
  },
  {
    title: "Automation Testing",
    content:
      "Built framework and wrote automation test scripts for enterprise applications.",
  },
]

const stack: {
  name: string
  href: string
  Icon: ComponentType<{ className?: string }>
  color: string
}[] = [
  { name: "Go", href: "https://go.dev/", Icon: SiGo, color: "#00ADD8" },
  {
    name: "Python",
    href: "https://www.python.org/",
    Icon: SiPython,
    color: "#3776AB",
  },
  {
    name: "Node.js",
    href: "https://nodejs.org/",
    Icon: SiNodedotjs,
    color: "#5FA04E",
  },
  {
    name: "React",
    href: "https://react.dev/",
    Icon: SiReact,
    color: "#149ECA",
  },
  {
    name: "Google Cloud",
    href: "https://cloud.google.com/",
    Icon: SiGooglecloud,
    color: "#4285F4",
  },
  {
    name: "AWS",
    href: "https://aws.amazon.com/",
    Icon: FaAws,
    color: "#FF9900",
  },
  {
    name: "Firebase",
    href: "https://firebase.google.com/",
    Icon: SiFirebase,
    color: "#DD2C00",
  },
  {
    name: "PostgreSQL",
    href: "https://www.postgresql.org/",
    Icon: SiPostgresql,
    color: "#4169E1",
  },
  {
    name: "MySQL",
    href: "https://www.mysql.com/",
    Icon: SiMysql,
    color: "#4479A1",
  },
  {
    name: "Ethereum",
    href: "https://ethereum.org/",
    Icon: SiEthereum,
    color: "#3C3C3D",
  },
  {
    name: "Tezos",
    href: "https://tezos.com/",
    Icon: TezosIcon,
    color: "#2C7DF7",
  },
]

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: string
}) {
  return (
    <div className="mb-12">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-500">
        {eyebrow}
      </p>
      <h2 className="mt-1 font-display text-5xl font-semibold uppercase leading-none text-brand-800">
        {title}
      </h2>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
      <div className="mx-auto flex min-h-[min(calc(100svh-4rem),56rem)] max-w-6xl flex-col items-center justify-center gap-10 px-5 py-16 md:flex-row md:gap-16">
        <img
          src="/huynvk.png"
          alt="Huy Ngo"
          className="w-56 shrink-0 drop-shadow-xl md:w-72"
          width={288}
          height={288}
        />
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-500">
            Hello, I'm
          </p>
          <h1 className="font-display text-7xl font-semibold uppercase leading-[0.85] text-brand-900 md:text-8xl">
            Huy Ngo
          </h1>
          <p className="mt-1 text-lg text-brand-600">({site.fullName})</p>
          <p className="mt-6 text-xl font-medium">
            Senior Fullstack Developer · Technical Leader
          </p>
          <blockquote className="mt-8 max-w-md font-quote text-2xl italic text-ink/70">
            “Programming is like jokes. When you have to explain, you failed”
          </blockquote>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href="/blog"
              className="rounded-full bg-brand-700 px-6 py-2.5 font-semibold text-white shadow transition-colors hover:bg-brand-800"
            >
              Read my blog
            </a>
            <SocialLinks className="text-ink/50" />
          </div>
        </div>
      </div>
      <a
        href="#principles"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 rounded-full border border-brand-600/40 p-2 text-brand-600 transition hover:bg-brand-600 hover:text-white md:block"
      >
        <HiArrowDown className="size-4" />
      </a>
    </section>
  )
}

function Principles() {
  return (
    <section id="principles" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading eyebrow="How I work" title="Working Principles" />
      <div className="grid gap-6 sm:grid-cols-2">
        {principles.map((p, i) => (
          <div
            key={p.title}
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5"
          >
            <div className="font-display text-4xl font-semibold leading-none text-accent-500">
              0{i + 1}
            </div>
            <h3 className="mt-3 text-lg font-semibold text-brand-800">
              {p.title}
            </h3>
            <p className="mt-2 text-ink/70">{p.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Domains() {
  return (
    <section id="domains" className="bg-brand-900 text-white">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
            Where I've been
          </p>
          <h2 className="mt-1 font-display text-5xl font-semibold uppercase leading-none">
            Experienced Domains
          </h2>
        </div>
        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((d) => (
            <div key={d.title} className="border-l-2 border-accent-500 pl-5">
              <h3 className="text-lg font-semibold">{d.title}</h3>
              <p className="mt-2 text-white/70">{d.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TechStack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading eyebrow="Tools of the trade" title="Technical Stack" />
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {stack.map(({ name, href, Icon, color }) => (
          <li key={name}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm ring-1 ring-ink/5 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span style={{ color }}>
                <Icon className="size-7" />
              </span>
              <span className="font-medium">{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="bg-brand-50">
      <div className="mx-auto max-w-3xl px-5 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-500">
          Let's talk
        </p>
        <h2 className="mt-1 font-display text-5xl font-semibold uppercase leading-none text-brand-800">
          Short Video Call
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-ink/70">
          Let me know your problems via a 15-minute call. A short call could be
          super helpful to identify the needs and see any way I can help you.
        </p>
        <a
          href={site.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-accent-500 px-7 py-3 font-semibold text-white shadow transition-colors hover:bg-accent-600"
        >
          Schedule a call
        </a>
        <SocialLinks
          className="mt-10 justify-center text-brand-700/70"
          iconClassName="size-6"
        />
      </div>
    </section>
  )
}

export function Component() {
  return (
    <Layout
      navItems={[
        { label: "Principles", href: "#principles" },
        { label: "Domains", href: "#domains" },
        { label: "Stack", href: "#stack" },
        { label: "Contact", href: "#contact" },
      ]}
      cta={{ label: "View my blog", href: "/blog" }}
    >
      <Seo />
      <Hero />
      <Principles />
      <Domains />
      <TechStack />
      <Contact />
    </Layout>
  )
}
