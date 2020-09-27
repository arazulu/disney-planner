import React from "react";
import UserColumn from "./UserColumn";

class UsersBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { name: "Clothing", cards: [] },
        { name: "Reservations", cards: [] },
        { name: "Schedule", cards: [] },
        { name: "Toiletries", cards: [] },
      ],
    };
  }

  addCard = (e) => {
    const targetName = e.currentTarget.name;
    const cardText = prompt("Please add information for a new Card:");
    const newState = this.state.users.map((curr) => {
      if (curr.name === targetName) {
        curr.cards.push(cardText);
      }
      return curr;
    });
    if (cardText !== null) {
      return this.setState((prevState) => {
        return { ...this.state, users: newState };
      });
    }
  };

  moveCard = (e) => {
    const targetName = parseInt(e.currentTarget.name); // -1(left) or 1(right)
    const targetIndex = parseInt(e.currentTarget.id); // index of target user.cards
    const targetValue = parseInt(e.currentTarget.value); // index of target user;

    let savedCard;
    if (
      targetName + targetValue < 0 ||
      targetName + targetValue > this.state.users.length - 1
    )
      return;

    let newState = this.state.users.map((curr, index) => {
      if (index === targetValue) {
        savedCard = curr.cards.splice(targetIndex, 1);
      }
      return curr;
    });
    newState[targetName + targetValue].cards.push(savedCard);

    return this.setState((prevState) => {
      return { ...prevState, users: newState };
    });
  };

  render() {
    const users = this.state.users.map((user, index) => {
      return (
        <UserColumn
          key={index}
          userIndex={index}
          name={user.name}
          cards={user.cards}
          addCard={this.addCard}
          moveCard={this.moveCard}
        />
      );
    });
    return <div id="column-wrapper">{users}</div>;
  }
}
export default UsersBoard;
