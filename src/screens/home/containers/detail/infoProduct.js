import {View, Text, StyleSheet} from "react-native"
import React, {useState} from "react"
import Color from "@common/Color"
import {Button as ButtonSaveNews} from "react-native-elements"
import Icons from "@common/Icon"

const InfoProduct = ({itemDetails}) => {
  const [isFavorite, setIsFavorite] = useState(false)

  const heart = {
    name: Icons.Fontisto.heart,
    type: "fontisto",
    size: 15,
    color: Color.red,
  }
  const heartOutline = {
    name: Icons.Fontisto.heartoutline,
    type: "fontisto",
    size: 15,
    color: Color.red,
  }

  const onSaveNews = () => setIsFavorite(!isFavorite)

  return (
    <View style={styles.container}>
      <View style={styles.styleInfo}>
        <Text style={styles.textTitle}>{itemDetails.name}</Text>
        <Text style={styles.textPrice}>{itemDetails.price}</Text>
        <Text>{itemDetails.createdAt}</Text>
      </View>
      <ButtonSaveNews
        title="Lưu tin"
        icon={isFavorite ? heart : heartOutline}
        iconRight
        iconContainerStyle={styles.iconContainer}
        titleStyle={styles.iconTitle}
        onPress={onSaveNews}
        buttonStyle={styles.iconButton}
        containerStyle={styles.btnContainer}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    marginTop: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  textPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: Color.red,
  },
  iconButton: {
    backgroundColor: Color.white,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: Color.red,
  },
  iconTitle: {color: Color.red},
  iconContainer: {marginLeft: 10},
  btnContainer: {
    width: 100,
  },
  styleInfo: {flex: 1},
})
export default InfoProduct
