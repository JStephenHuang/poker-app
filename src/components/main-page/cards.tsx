import { useState } from "react";

interface CardProperties {
  className: string;
  title: string;
  children: React.ReactNode;
  activeCard: string;
  setActiveCard: (arg0: string) => void;
}

const Card = (props: CardProperties) => {
  if (props.activeCard === props.title) {
    return (
      <div
        className={`card ${props.className} z-[60]`}
        onClick={() => props.setActiveCard(props.title)}
      >
        <div className="flex flex-col justify-center h-full text-black p-5 text-center">
          <p className="text-[36px] font-semibold">{props.title}</p>
          <p className="text-[30px] font-medium">{props.children}</p>
        </div>
      </div>
    );
  } else
    return (
      <div
        className={`card ${props.className}`}
        onClick={() => props.setActiveCard(props.title)}
      >
        <div className="spacer card-back2 rounded-lg">
          <div className="grid place-items-center h-full">
            <p className="text-[30px] font-semibold">{props.title}</p>
          </div>
        </div>
      </div>
    );
};

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
