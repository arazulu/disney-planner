import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const UserColumn = (props) => {
  const cards = props.cards.map((element, index) => {
    return (
      <div className="card" key={index}>
        <button
          className="card-left-arrow"
          icon={faAngleLeft}
          onClick={props.moveCard}
          value={props.userIndex}
          name={-1}
          id={index}
        >
          <span>
            <FontAwesomeIcon icon={faAngleLeft} />
          </span>
        </button>
        {element}

        <button
          className="card-right-arrow"
          onClick={props.moveCard}
          value={props.userIndex}
          name={1}
          id={index}
        >
          <span>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
        </button>
      </div>
    );
  });

  return (
    <div className="board">
      <h1>{props.name}</h1>
      <button onClick={props.addCard} name={props.name}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <div className="card-wrapper">{cards}</div>
    </div>
  );
};

export default UserColumn;
