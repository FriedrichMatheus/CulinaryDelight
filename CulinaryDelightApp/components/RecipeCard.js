// import { allRecipes } from "../services/dbRead"
import { Text, View, Pressable, ImageBackground } from "react-native";
import style from "../styles/styles";
import { useEffect, useState } from "react";
import getRecipesList, { getImages } from "../services/dbRead";

function RecipeCard() {
  const [info, setInfo] = useState();
  const [images, setImages] = useState([""]);

  async function fetchRecipesList() {
    const recipesList = await getRecipesList();

    const data = recipesList.map((filteredData) => {
      return filteredData.data();
    });

    setInfo(data);
  }

  async function fetchImages() {
    const imagesList = await getImages();

    setImages(imagesList);
  }

  useEffect(() => {
    fetchRecipesList();
    fetchImages();
  }, []);

  return info?.map((recipe, index) => {
    return (
      <View key={index} style={style.recipeCard}>
        <View style={style.recipeAuthor}>
          <View style={style.recipeProfilePhoto}></View>
          <Text
            style={[
              style.commonTextColor,
              { fontFamily: "MontserratExtraBold" },
            ]}
          >
            {recipe.Autor}
          </Text>
        </View>
        <Text
          style={[
            style.commonTextColor,
            { fontFamily: "MontserratBlack", fontSize: 35 },
          ]}
        >
          {recipe.Titulo}
        </Text>
        <Text
          style={[
            style.commonTextColor,
            { fontFamily: "MontserratMedium", fontSize: 12 },
          ]}
        >
          {recipe.data}
        </Text>
        <View style={style.recipeInformationContainer}>
          <View style={style.recipeImage}>
            <ImageBackground
              style={{ width: "100%", height: "100%" }}
              source={{
                uri: images[index],
              }}
            />
          </View>
          <Text></Text>
          <View style={style.infoContainer}>
            <View>
              <Text style={style.cardInfoTitle}>Descrição</Text>
              <Text style={style.info}>{recipe.Descricao}</Text>
            </View>
            <View>
              <Text style={style.cardInfoTitle}>Lista de Ingredientes:</Text>
              <Text style={style.info}>
                {recipe.Ingredientes.map((ingrediente) => {
                  return `${ingrediente}; `;
                })}
              </Text>
              <Pressable>
                <Text style={style.hiperlink}>ver receita...</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View>
          <Text></Text>
        </View>
      </View>
    );
  });
}

export default RecipeCard;
