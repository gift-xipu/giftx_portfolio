import Link from "next/link"
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"

const ProfilePicture = () => {
  return (
    <img src="/Me.jpg" alt="Profile picture of Gift" className="bg-gradient-to-br  rounded-full w-[350px] md:w-2/5 p-3" />
  )
}

const BulletPoints = () => {
  return (
    <ul className="space-y-1 text-xl text-center md:text-left">
      <li>💻 I love coding</li>
      <li>🎓 IT graduate</li>
      <li>🛠️ Skilled in database management and API development</li>
      <li>📝 Download my <a className="link link-primary" href="/GIFT_MARKUS_XIPU_CV.pdf" download="GiftResume">resume</a></li>
    </ul>
  )
}

const WavingHand = () => {
  return (
    <span className="animate-wave inline-block">🤚🏻</span>
  )
}

const socials = [
  {
    icon: <FaGithub />,
    href: "https://github.com/giftdev/"
  },
  {
    icon: <FaLinkedin />,
    href: "https://linkedin.com/in/giftdev/"
  },
  {
    icon: <FaXTwitter />,
    href: "https://x.com/giftdev"
  }
]

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
      {/* picture of me */}
      <ProfilePicture />
      {/* little bio */}
      <div>
        <div className="text-center md:text-left mb-4">
          <h1 className="text-5xl">
            Hi, I'm <span className="bg-gradient-to-tl from-green-500 to-teal-500 text-transparent bg-clip-text font-bold">Gift</span><WavingHand />
          </h1>
          <h2 className="text-3xl">I'm a software developer.</h2>
        </div>
        <BulletPoints />
        {/* socials */}
        <ul className="flex justify-center md:justify-start text-3xl gap-10 mt-6">
          {socials.map((social, index) => (
            <li key={index} className="hover:scale-125 hover:text-white transition-all ease-in-out"><Link href={social.href} target="_blank">{social.icon}</Link></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
