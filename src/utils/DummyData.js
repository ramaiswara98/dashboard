import User1 from "../assets/images/user1.png";
import User2 from "../assets/images/user2.png";
import User3 from "../assets/images/user3.png";
import User4 from "../assets/images/user4.png";
import User5 from "../assets/images/user5.png";
const dummy = {
  listTransaction: [
    {
      name: "Bessie Cooper",
      date: "02 July 2023",
      amount: "-$3,000",
      avatar: User3,
    },
    {
      name: "Guy Hawkins",
      date: "02 July 2023",
      amount: "-$1,970",
      avatar: User4,
    },
    {
      name: "Floyd Miles",
      date: "02 July 2023",
      amount: "-$5,000",
      avatar: User5,
    },
    {
      name: "Jessie Main",
      date: "02 March 2023",
      amount: "-$2,200",
      avatar: User3,
    },
    {
      name: "Juan Lopez",
      date: "02 February 2023",
      amount: "-$4,570",
      avatar: User4,
    },
    {
      name: "Maria Zeva",
      date: "02 January 2023",
      amount: "-$1,000",
      avatar: User5,
    },
  ],
  shoppingList: [
    {
      item: "Macbook",
      checked: true,
    },
    {
      item: "Motorcycle",
      checked: false,
    },
    {
      item: "Bycicle",
      checked: false,
    },
    {
      item: "Iphone 14 pro max",
      checked: true,
    },
  ],
  chatList: [
    {
      from: "me",
      text: "Are you ready ?",
      avatar: User1,
    },
    {
      from: "you",
      text: "I have prepared everything",
      avatar: User2,
    },
  ],
};

export { dummy };
