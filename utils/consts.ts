import {
  faFacebook,
  faBehance,
  faDribbble,
  faInstagram,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Consts = {
  personalLinks: [
    {
      title: "Facebook",
      href: process.env.NEXT_PUBLIC_FACEBOOK_URL,
      icon: faFacebook,
    },
    {
      title: "Behance",
      href: process.env.NEXT_PUBLIC_BEHANCE_URL,
      icon: faBehance,
    },
    {
      title: "Dribbble",
      href: process.env.NEXT_PUBLIC_DRIBBBLE_URL,
      icon: faDribbble,
    },
    {
      title: "Youtube",
      href: process.env.NEXT_PUBLIC_YOUTUBE_URL,
      icon: faYoutube,
    },
    {
      title: "Instagram",
      href: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
      icon: faInstagram,
    },
    {
      title: "Github",
      href: process.env.NEXT_PUBLIC_GITHUB_URL,
      icon: faGithub,
    },
  ],
};

export default Consts;
