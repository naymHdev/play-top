import { StaticImageData } from "next/image";
import android from "../assets/icons/icons8-android-os-50.png";
import apple from "../assets/icons/apple-laptop-computer-white.png";
import windows from "../assets/icons/icons8-windows-32.png";
import linux from "../assets/icons/icons8-linux-50.png";
import mac from "../assets/icons/apple-laptop-computer-white.png";

// Social Media Icons
import facebook from "../assets/icons/facebook.png";
import twitter from "../assets/icons/twitter.png";
import reddit from "../assets/icons/reddit.png";
import linkedin from "../assets/icons/linkedin.png";
import github from "../assets/icons/github.png";
import steam from "../assets/icons/steam.png";

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
