import supabase from "./supabase.js";

export async function getItemsList() {
  let { data, error } = await supabase.from("items-list").select("*");

  if (error) {
    throw new Error("Items could not get loaded");
  }

  return data;
}

export async function addItem({ id, item, country, city, note, quantity }) {
  const { data, error } = await supabase
    .from("items-list")
    .insert([
      {
        id: id,
        item: item,
        country: country,
        city: city,
        note: note,
        quantity: quantity,
      },
    ])
    .select();

  if (error) {
    throw new Error("Item could not be added");
  }

  return data;
}

export async function deleteItem(id) {
  const { error } = await supabase.from("items-list").delete().eq("id", id);

  if (error) {
    throw new Error("Item could not be deletad");
  }
}
