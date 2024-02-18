import { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";

export const PackingListItem = ({ itemsList }) => {
  const [detailsItemId, setDetailsItemId] = useState("");

  const getItemDetails = function (id) {
    return id;
  };

  const packedItemsToRender = itemsList.map((item) => (
    <tr key={item.id}>
      <td>{item.country}</td>
      <td>{item.cityName}</td>
      <td>{item.item}</td>
      <td>
        <Link to={`/list/${item.id}`}>
          <Button>See details </Button>
        </Link>
      </td>
    </tr>
  ));

  return <>{packedItemsToRender}</>;
};
