import { useState, useEffect } from "react";
export default function Nav({}) {
  const [quote, setQuote] = useState(
    "I hate when I'm on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible for this water bottle"
  );
  useEffect(() => {});
  function handleClick(event) {
    const url = "https://api.kanye.rest";
    var audio = new Audio("https://spotifydata.com/kanye_ugh.m4a");
    audio.play();
    fetch(url)
      .then((r) => r.json())
      .then((r) => r["quote"])
      .then((r) => setQuote(r))
      .then((r) => console.log(quote))
      .catch((e) => setQuote(null));
  }
  function photoClick(event) {
    var audio = new Audio(
      "https://www.myinstants.com/media/sounds/poop-de-scoop-de-poop-de-woop.mp3"
    );
    audio.play();
  }
  return (
    <div>
      <div>
        <button onClick={handleClick}>Get Kanye Quote</button>
      </div>
      <div>
        {quote === null ? (
          "No such quote"
        ) : quote ? (
          <span>{quote}</span>
        ) : (
          "Not loaded"
        )}
      </div>
      <div>
        <img
          alt=""
          src="https://cdn.vox-cdn.com/thumbor/oHGx5DXpwuhJZewDORnZSSKDAU8=/0x15:2039x1544/1200x800/filters:focal(0x15:2039x1544)/cdn.vox-cdn.com/uploads/chorus_image/image/38741704/KANYE.0.jpg"
          onClick={photoClick}
          style={{ "pointer-events": "all" }}
        />
      </div>
      <footer>
        *Make sure sound is on and click the photo for a fun surprise!
      </footer>
    </div>
  );
}
