import React, { useState } from "react";

import "./ShoppingList.css";
import Label from "../../atoms/Label/Label";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import ShoppingItems from "../../molecules/ShoppingItems/ShoppingItems";
import { dummy } from "../../../utils/DummyData";

function ShoppingList() {
  const [shopingList, setShopingList] = useState(dummy.shoppingList);
  const [checkedItemsCount, setCheckedItemCount] = useState(
    shopingList.reduce((count, item) => {
      return item.checked ? count + 1 : count;
    }, 0)
  );

  const handleCheckBoxClicked = (index) => {
    const newshoppingList = [...shopingList];
    newshoppingList[index].checked = !newshoppingList[index].checked;
    setShopingList(newshoppingList);
    const newCheckedItemsCount = newshoppingList.reduce((count, item) => {
      return item.checked ? count + 1 : count;
    }, 0);

    setCheckedItemCount(newCheckedItemsCount);
  };

  return (
    <div className="shopping-list-container">
      <Label bold={true} size={"16px"}>
        List of items to buy
      </Label>
      <div className="shopping-list-first-row">
        <div>
          <Label bold={true} size={"16px"}>
            02:00
          </Label>
          <Label size={"12px"} color={"var(--darkGray)"}>
            Sat, August 12
          </Label>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="shopping-list-right-icon"
          />
        </div>
        <div>
          <Label bold={true} size={"16px"}>
            05:00
          </Label>
          <Label size={"12px"} color={"var(--darkGray)"}>
            Sat, September 12
          </Label>
        </div>
      </div>
      <div className="shopping-list-second-row">
        <div className="shopping-list-count">
          <Label color={"var(--darkGray)"}>
            {checkedItemsCount}/{shopingList.length}{" "}
          </Label>
          <Label size={"regular-bold"}>Shopping List</Label>
        </div>
        <div className="shopping-list-count">
          <FontAwesomeIcon icon={faPlus} className="shopping-list-plus-icon" />
          <Label size={"regular-bold"}>Add an Item</Label>
        </div>
      </div>
      <div className="shopping-item-list">
        {shopingList.map((item, index) => {
          return (
            <ShoppingItems
              items={item.item}
              checked={item.checked}
              onClick={handleCheckBoxClicked}
              index={index}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ShoppingList;
