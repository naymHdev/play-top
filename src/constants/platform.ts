import { StaticImageData } from "next/image";

//  ------------- Platform Icons --------------- //
import android from "../assets/icons/ad.png";
import apple from "../assets/icons/ap.png";
import windows from "../assets/icons/ws.png";
import linux from "../assets/icons/lx.png";
import mac from "../assets/icons/mac-ico.png";

// Social Media Icons
import facebook from "../assets/icons/icons8-facebook-48.png";
import twitter from "../assets/icons/icons8-twitter-50.png";
import reddit from "../assets/icons/icons8-reddit-50.png";
import linkedin from "../assets/icons/icons8-linkedin-48.png";
import github from "../assets/icons/icons8-github-24.png";
import steam from "../assets/icons/icons8-steam-50.png";

export const platformIconMap: { [key: string]: StaticImageData } = {
  PC: windows,
  Android: android,
  Linux: linux,
  Apple: apple,
  Mac: mac,
};

export const socialIconMap: { [key: string]: StaticImageData } = {
  Facebook: facebook,
  X: twitter,
  Reddit: reddit,
  Linkedin: linkedin,
  Github: github,
  Steam: steam,
};

// --------------- Profile Social Links Icons --------------- //

export const socialIconProfile: { [key: string]: StaticImageData } = {
  Facebook: facebook,
  X: twitter,
  Reddit: reddit,
  Linkedin: linkedin,
  Github: github,
  Steam: steam,
};
