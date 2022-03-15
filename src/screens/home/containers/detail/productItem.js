import {View, Text, ImageBackground, StyleSheet} from "react-native"
import React from "react"
import {Icon} from "react-native-elements"

const ProductItem = ({title}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.mainImage}
        source={{
          uri: "https://nordiccoder.com/app/uploads/2020/01/6ab1641f-fb02-4f84-b09d-b8f001063b66.png",
        }}>
        <View style={styles.boxTopIcon}>
          <Icon name="camera-outline" type="ionicon" color="black" size={20} />
        </View>
        <View style={styles.viewBox}>
          <View style={styles.boxBottomIcon}>
            <Icon name="heart-outline" type="ionicon" color="red" size={20} />
          </View>
        </View>
      </ImageBackground>
      <View style={styles.boxRowTitle}>
        <View style={styles.boxLeft}>
          <Text style={styles.textTitle}>this is title</Text>
        </View>
      </View>
      <Text style={styles.textPrice}>100.000 đ</Text>
      <Text style={styles.textDate}>5 ngay truoc</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: 190,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 3,
    padding: 10,
    backgroundColor: "white",
  },
  mainImage: {
    height: 180,
    width: 180,
  },
  boxTopIcon: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  viewBox: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  boxBottomIcon: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  boxRowTitle: {
    flexDirection: "row",
    alignSelf: "flex-start",
  },
  boxLeft: {flex: 0.8},
  textTitle: {alignSelf: "flex-start", color: "black"},
  boxRight: {flex: 0.1},
  textPrice: {
    alignSelf: "flex-start",
    fontSize: 17,
    fontWeight: "bold",
    color: "red",
  },
  textDate: {alignSelf: "flex-start"},
})

export default ProductItem
