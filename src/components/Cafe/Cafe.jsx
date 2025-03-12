// Gmaps URL example: `https://www.google.com/maps/search/?api=1&query=Starbucks Meguro,Tokyo`;

// /// Card example data ///
// picture: "https://laptopfriendly.co/images/places/tokyo/ddsk-saigon-kitchen/ddsk-saigon-kitchen--tokyo.jpg",
// title: "DDSK SAIGON KITCHEN",
// address: "ss, 135-0061, Tokyo",
// criteria: ["Power sockets", "Quiet"]

import React from "react";
import "./Cafe.css";

function Cafe({ cafe }) {
  const gmapUrl = `https://www.google.com/maps/search/?api=1&query=${cafe.title},${cafe.address}`;
  return (
    <div className="cafe-card">
      <img src={cafe.picture} alt={cafe.title} />
      <div>
        <div>
          <h5>{cafe.title}</h5>
          <p>
            { cafe.criteria.map( crit => <span key={crit}>{crit}</span> )}
          </p>
        </div>
        <a className="btn btn-success" target="_blank" href={gmapUrl}>Show the map </a>
      </div>
    </div>
  );
}

export default Cafe;
