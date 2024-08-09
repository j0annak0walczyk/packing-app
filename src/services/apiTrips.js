import supabase from "./supabase.js";

export async function getTripsList() {
  let { data: trips, error } = await supabase.from("trips").select("*");

  if (error) {
    throw new Error("Trips could not get loaded");
  }

  return trips;
}

export async function createNewTrip({
  city,
  country,
  dateFrom,
  dateTo,
  createDate,
}) {
  const { data, error } = await supabase
    .from("trips")
    .insert([
      {
        createDate: createDate,
        city: city,
        country: country,
        dateFrom: dateFrom,
        dateTo: dateTo,
      },
    ])
    .select();

  if (error) {
    throw new Error("Trip could not be added");
  }

  return data;
}

export async function deleteTrip(id) {
  const { error } = await supabase.from("trips").delete().eq("id", id);

  if (error) {
    throw new Error("Trip could not be deleted");
  }
}

export async function updateTrip(obj) {
  const [id, column, value] = obj;
  const { data, error } = await supabase
    .from("trips")
    .update({ [column]: value })
    .eq("id", id)
    .select();

  if (error) {
    throw new Error("Trip could not be updated");
  }

  return data;
}
