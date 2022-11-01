import { useState } from "react";
import Card from "./card";

const Cards = () => {
  const [activeCard, setActiveCard] = useState<string>("");
  return (
    <div className="w-[60%] flex">
      <Card
        className="card3"
        title="Contacts"
        activeCard={activeCard}
        setActiveCard={setActiveCard}
      >
        Discord: ... Instagram: ... Help: 514-213-1234 Need some dick: suck my
        dick
      </Card>

      <Card
        className="card1"
        title="About"
        activeCard={activeCard}
        setActiveCard={setActiveCard}
      >
        FullHouse Poker is a free online poker game where you and your friends
        can play together.
      </Card>
      <Card
        className="card2"
        title="Credits"
        activeCard={activeCard}
        setActiveCard={setActiveCard}
      >
        Founder: Eric Lu Front-end: Stephen, Mathew, Aly Back-end:...
      </Card>
    </div>
  );
};

export default Cards;
