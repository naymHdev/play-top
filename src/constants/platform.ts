import { StaticImageData } from "next/image";
import android from "../assets/icons/android.png";
import apple from "../assets/icons/apple.png";
import windows from "../assets/icons/windows.png";
import linux from "../assets/icons/linux.png";

export const platformIconMap: { [key: string]: StaticImageData } = {
  PC: windows,
  Android: android,
  Linux: linux,
  Mac: apple,
};
