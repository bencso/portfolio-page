"use client";

import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");

  return (
    <div className="contact">
      <h3>Lépjen velem kapcsolatba!</h3>
      <form>
        <div>
          <label htmlFor="name">Teljes név / Cégnév:</label>
          <input required type="text" id="name" name="name" inputMode="text" autoComplete="billing name" tabIndex={1} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            required
            type="email"
            id="email"
            name="email"
            inputMode="email"
            autoComplete="email"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            tabIndex={2}
          />
        </div>
        <div>
          <label htmlFor="message">Üzenet:</label>
          <textarea id="message" name="message" maxLength={250} tabIndex={3} />
        </div>
        <button type="submit" tabIndex={4}>
          Küldés
        </button>
      </form>
    </div>
  );
}
