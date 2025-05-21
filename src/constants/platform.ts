import { StaticImageData } from "next/image";
import android from "../assets/icons/android.png";
import apple from "../assets/icons/apple.png";
import windows from "../assets/icons/windows.png";
import linux from "../assets/icons/linux.png";
import mac from "../assets/icons/mac.png";

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
