import supabase, { supabaseUrl } from "./supabase";

console.log(supabaseUrl)


export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("cabins could not be loaded");
  }
  return data;
}
export async function createCabin(newCabin) {
  const imageFile = newCabin.image[0];
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/","");

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-image/${imageName}`;

  //1.create cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select()
    .single();

  if (error) {
    console.log(error);
    throw new Error("cabins could not be created");
  }
  //2.upload image to storage
  const { error: storageError } = await supabase.storage
    .from("cabin-image")
    .upload(imageName, newCabin.image);

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error("image could not be uploaded cabin was not created");
  }

  return data;
}
export async function deleteCabin(id) {

  const { data, error } = await supabase.from("cabins").delete().eq("id", id)
  

  if (error) {
    console.log(error);
    throw new Error("cabins could not be deleted");
  }
  return data;
}
