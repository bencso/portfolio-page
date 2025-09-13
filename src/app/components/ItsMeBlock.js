import { AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import IconButton from "./buttons/IconButton";

export default function ItsMeBlock({setTab,tab}) {

  function onClick(){
    setTab("about");
  }

  return (
    <div className="itsme-block">
      <div className="itsme-block_flex">
        {
          tab != "about" && <h2>It&apos;s me</h2>
        }
        {
          tab == "about" && <h1>Bábolnai<br/>Bence</h1>
        }
       {tab!="about" && <IconButton text="Who are you?" action={onClick}/>}
      </div>
      <Image
        src={"/images/me.png"}
        alt="Its me :) "
        width={208}
        height={100}
        loading="eager"
        className="itsme-block_image"
        draggable={false}
      />
    </div>
  );
}
