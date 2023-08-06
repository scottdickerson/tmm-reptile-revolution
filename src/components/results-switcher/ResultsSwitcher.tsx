import Image from "next/image";
import timeIcon from "./TimeIcon.svg";
import funFactIcon from "./FunFact.svg";
import locationIcon from "./Location.svg";
import sizeIcon from "./Size.svg";
import verticalLineIcon from "./VerticalLine.svg";
import Link from "next/link";

export const ResultsSwitcher = () => {
  return (
    <div className="flex flex-col items-center">
      <Link href="/time">
        <Image src={timeIcon} alt="Time"></Image>
      </Link>
      <Image src={verticalLineIcon} alt="Vertical line"></Image>
      <Link href="fun-fact1">
        <Image src={funFactIcon} alt="Fun fact"></Image>
      </Link>
      <Image src={verticalLineIcon} alt="Vertical line"></Image>
      <Link href="location">
        <Image src={locationIcon} alt="Location"></Image>
      </Link>
      <Image src={verticalLineIcon} alt="Vertical line"></Image>
      <Link href="size">
        <Image src={sizeIcon} alt="Size"></Image>
      </Link>
      <Image src={verticalLineIcon} alt="Vertical line"></Image>
      <Link href="fun-fact2">
        <Image src={funFactIcon} alt="Fun fact 2"></Image>
      </Link>
    </div>
  );
};
