import { AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import IconButton from "./buttons/IconButton";

export default function ItsMeBlock() {
  return (
    <div className="itsme-block">
      <div className="itsme-block_flex">
        <h2>It&apos;s me</h2>
       <IconButton text="Who are you?"/>
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
