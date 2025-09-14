"use client";

import { Fragment, useRef, useState } from "react";

const services = [
  "UI/UX design",
  "Webfejlesztés (Kóddal)",
  "Webfejlesztés (CMS-el)",
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interess, setInteress] = useState([]);
  const [message, setMessage] = useState("");
  const checkboxesRef = useRef("checkboxesRef");

  function sendForm() {
    let array = Array.from(checkboxesRef.current.children);
    let someChecked = array.some((e) => e.firstChild.checked);

    if (name.length <= 0) {
      alert("Kérem adja meg a nevét!");
    } else if (email.length <= 0) {
      alert("Kérem adja meg az email címét!");
    } else if (!someChecked && interess.length <= 0) {
      alert("Kérem jelöljön be legalább egy szolgáltatást!");
    } else {
      console.log(name, email, message, interess.join(","));
    }
  }

  return (
    <div className="contact">
      <h3>Lépjen velem kapcsolatba!</h3>
      <div className="contact-form">
        <div>
          <label htmlFor="name">Teljes név / Cégnév:</label>
          <input
            required
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            name="name"
            placeholder="Példa Béla"
            value={name}
            inputMode="text"
            autoComplete="billing name"
            tabIndex={1}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            required
            type="email"
            id="email"
            name="email"
            inputMode="email"
            placeholder="bela@pelda.hu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            tabIndex={2}
          />
        </div>
        <div>
          <label htmlFor="message">Üzenet:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Üzenet..."
            name="message"
            maxLength={250}
            tabIndex={3}
          />
        </div>
        <div>
          <label>Szolgáltatás:</label>
          <div ref={checkboxesRef} className="services">
            {services.map((service, idx) => {
              return (
                <Fragment key={idx}>
                  <div className="service">
                    <input
                      type="checkbox"
                      onChange={() => {
                        if (interess.includes(service))
                          setInteress(interess.filter((e) => e != service));
                        else setInteress([...interess, service]);
                      }}
                      id={service}
                      name="services"
                      value={service}
                    />
                    <label htmlFor={service}>{service}</label>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
        <button onClick={() => sendForm()} tabIndex={4}>
          Küldés
        </button>
      </div>
    </div>
  );
}
