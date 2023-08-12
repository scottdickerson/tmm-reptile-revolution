import Image from "next/image";
import timeIcon from "./TimeIcon.svg";
import funFactIcon from "./FunFact.svg";
import locationIcon from "./Location.svg";
import sizeIcon from "./Size.svg";
import verticalLineIcon from "./VerticalLine.svg";
import learnMoreArrow from "./LearnMoreArrow.svg";
import connectorFunFact1 from "./ConnectorFunFact1.svg";
import connectorFunFact2 from "./ConnectorFunFact2.svg";
import connectorLocation from "./ConnectorLocation.svg";
import connectorSize from "./ConnectorSize.svg";
import connectorTime from "./ConnectorTime.svg";
import classNames from "classnames";

import Link from "next/link";
import "./results-switcher.css";

export enum ResultCategory {
  SUMMARY = "summary",
  TIME = "time",
  FUN_FACT_1 = "fun-fact1",
  LOCATION = "location",
  SIZE = "size",
  FUN_FACT_2 = "fun-fact2",
}
interface ResultsSwitcherProps {
  category: ResultCategory;
  className?: string;
}

export const ConnectorLine = ({ category }: { category?: ResultCategory }) => {
  let connectorSrc = learnMoreArrow;
  switch (category) {
    case ResultCategory.TIME:
      connectorSrc = connectorTime;
      break;
    case ResultCategory.FUN_FACT_1:
      connectorSrc = connectorFunFact1;
      break;
    case ResultCategory.LOCATION:
      connectorSrc = connectorLocation;
      break;
    case ResultCategory.SIZE:
      connectorSrc = connectorSize;
      break;
    case ResultCategory.FUN_FACT_2:
      connectorSrc = connectorFunFact2;
      break;
  }

  return (
    connectorSrc && (
      <Image
        className={classNames("absolute", "resultsConnector", "z-10", {
          resultsConnectorFunFact2: category === ResultCategory.FUN_FACT_2,
          resultsConnectorSummary: category === ResultCategory.SUMMARY,
        })}
        src={connectorSrc}
        alt="Connector line"
      ></Image>
    )
  );
};

export const ResultsSwitcher = ({
  category = ResultCategory.SUMMARY,
  className,
}: ResultsSwitcherProps) => {
  return (
    <div className={`resultsSwitcher relative flex-shrink-0 ${className}`}>
      <>
        <ConnectorLine category={category}></ConnectorLine>
        {category === ResultCategory.SUMMARY && (
          <Link
            className="absolute learnMore"
            href={`./${ResultCategory.TIME}`}
          >
            Learn <br></br>more
          </Link>
        )}
      </>
      <div className="flex flex-col items-center relative">
        <Link href={`./${ResultCategory.TIME}`}>
          <Image src={timeIcon} alt="Time"></Image>
        </Link>
        <Image src={verticalLineIcon} alt="Vertical line"></Image>
        <Link href={`./${ResultCategory.FUN_FACT_1}`}>
          <Image src={funFactIcon} alt="Fun fact"></Image>
        </Link>
        <Image src={verticalLineIcon} alt="Vertical line"></Image>
        <Link href={`./${ResultCategory.LOCATION}`}>
          <Image src={locationIcon} alt="Location"></Image>
        </Link>
        <Image src={verticalLineIcon} alt="Vertical line"></Image>
        <Link href={`./${ResultCategory.SIZE}`}>
          <Image src={sizeIcon} alt="Size"></Image>
        </Link>
        <Image src={verticalLineIcon} alt="Vertical line"></Image>
        <Link href={`./${ResultCategory.FUN_FACT_2}`}>
          <Image src={funFactIcon} alt="Fun fact 2"></Image>
        </Link>
      </div>
    </div>
  );
};
