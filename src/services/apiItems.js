import supabase from "./supabase.js";

export async function getItemsTripList(trip) {
  let { data: items, error } = await supabase
    .from("items")
    .select("*")
    .eq("trip", trip);

  if (error) {
    throw new Error("Item could not get loaded");
  }

  return items;
}

export async function getItemsList() {
  let { data: items, error } = await supabase.from("items").select("*");

  if (error) {
    throw new Error("Items could not get loaded");
  }

  return items;
}

export async function updateItem(obj) {
  const { id, updateColumn, updateValue } = obj;
  const { data, error } = await supabase
    .from("items")
    .update({ [updateColumn]: updateValue })
    .eq("id", id)
    .select();

  if (error) {
    throw new Error("Item could not be updated");
  }

  return data;
}

export async function addItem({ checked, item, note, quantity, trip }) {
  const { data, error } = await supabase
    .from("items")
    .insert([
      {
        checked: checked,
        item: item,
        note: note,
        quantity: quantity,
        trip: trip,
      },
    ])
    .select();

  if (error) {
    throw new Error("Item could not be added");
  }

  return data;
}

export async function deleteItem(id) {
  const { error } = await supabase.from("items").delete().eq("id", id);

  if (error) {
    throw new Error("Item could not be deleted");
  }
}
