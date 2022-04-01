import {View, Text, ImageBackground, StyleSheet} from "react-native"
import React from "react"
import Icons from "@common/Icon"
import {Icon} from "react-native-elements"
import Color from "@common/Color"
const image = {
  uri: "https://cdn.didongviet.vn/pub/media/catalog/product//i/p/iphone-13-256gb-didongviet_1.jpg",
}

const NewsItem = () => {
  return (
    <View style={styles.containers}>
      <View style={styles.boxRow}>
        <View style={styles.leftImage}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.imageStyle}
          />
        </View>
        <View style={styles.contentCenter}>
          <Text style={styles.txtTitle}>dssadsadsa</Text>
          <Text style={styles.txtPrice}>20000</Text>

          <Text>dsa</Text>
        </View>
        <View style={styles.rightIcon}>
          <Icon
            name={Icons.Ionicons.ellipsisVerticalFilled}
            type="ionicon"
            color={Color.black}
            size={24}
            style={styles.styleRightIcon}
          />
        </View>
      </View>
    </View>
  )
}

export default NewsItem

const styles = StyleSheet.create({
  imageStyle: {width: 100, height: 100},
  styleRightIcon: {marginTop: 10},
  txtPrice: {color: Color, fontSize: 16, fontWeight: "bold"},
  txtTitle: {color: "black", fontSize: 18},
  rightIcon: {
    backgroundColor: "white",
    flex: 0.1,
  },
  contentCenter: {
    backgroundColor: Color.white,
    flex: 0.6,
    padding: 10,
  },
  leftImage: {
    backgroundColor: Color.white,
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  boxRow: {flexDirection: "row"},
  containers: {backgroundColor: Color.white, marginTop: 5},
})
