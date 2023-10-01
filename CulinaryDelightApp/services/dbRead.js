import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { storage } from "./firebaseConfig";
import { getDownloadURL, listAll, ref } from "@firebase/storage";

export async function getRecipesList() {
  const recipesList = [];
  const receitas = await getDocs(collection(db, "receitas"));

  receitas.forEach((doc) => {
    recipesList.push(doc);
  });

  return recipesList;
}

export async function getImages() {
  const recipeRef = ref(storage, "recipe-images");

  const folderList = await listAll(recipeRef);

  const folderPathList = folderList.prefixes.map((i) => i.fullPath);

  const imageLinks = await Promise.all(
    folderPathList.map(async (folderPath) => {
      const folderRefPath = ref(storage, folderPath);

      const imageRefPathList = await listAll(folderRefPath);

      const urlList = await Promise.all(
        imageRefPathList.items.map(
          async (item) => await getDownloadURL(ref(storage, item.fullPath))
        )
      );

      return urlList;
    })
  );

  return imageLinks.map((i) => i[0]);
}

export default getRecipesList;
