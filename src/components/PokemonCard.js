import React, { useState } from "react";
import { Card } from "semantic-ui-react";


function PokemonCard({ pokemon }) {
  const [clicked, setClicked] = useState(false)
  const { name, hp, sprites } = pokemon

  return (
    <Card >
      <div>
        <div className="image" onClick={() => {setClicked(!clicked)}}>
          <img src={clicked ? sprites.back : sprites.front} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
