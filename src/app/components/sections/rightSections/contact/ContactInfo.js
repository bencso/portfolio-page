import { useEffect, useState } from "react";
import { FaMobile } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { MdEmail } from "react-icons/md";

export default function ContactInfo({ infoTag, infoHref }) {
  const [href, setHref] = useState("");

  useEffect(() => {
    const tags = {
      "Email cím": "mailto:",
      Telefonszám: "tel:",
    };

    if (tags[infoTag] && infoHref) setHref(tags[infoTag] + infoHref);
    else setHref(infoHref);
  }, [infoHref, infoTag]);

  return (
    <div className="contact-group">
      <div className="contact-group_icon">
        {infoTag == "Email cím" && <MdEmail />}
        {infoTag == "Telefonszám" && <FaMobile />}
        {infoTag !== "Telefonszám" && infoTag !== "Email cím" && (
          <IoMdContact />
        )}
      </div>
      <div>
        <h4>{infoTag}</h4>
        <p>
          <a href={href}>{infoHref}</a>
        </p>
      </div>
    </div>
  );
}
