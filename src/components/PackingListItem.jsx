import { Button } from "./Button";

export const PackingListItem = ({ itemsList }) => {
  const packedItemsToRender = itemsList.map((item) => (
    <tr key={item.id}>
      <td>{item.country}</td>
      <td>{item.cityName}</td>
      <td>{item.item}</td>
      <td>
        <Button>Delete</Button>
      </td>
    </tr>
  ));

  return <>{packedItemsToRender}</>;
};
