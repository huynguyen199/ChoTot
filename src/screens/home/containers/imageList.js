import {View, Text, Image, Dimensions, StyleSheet} from "react-native"
import React from "react"
import Color from "@common/Color"
import {useTranslation} from "react-i18next"

const {width} = Dimensions.get("window")

const ImageList = () => {
  const {t} = useTranslation()
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{t("home:whatsNews")}</Text>
      <View style={styles.boxImageTop}>
        <Image
          style={styles.imageTop}
          source={{
            uri: "http://chuongtrinh.chotot.com/wp-content/uploads/sites/9/2019/12/850_350.jpg",
          }}
        />
        <Image
          style={styles.imageTop}
          source={{
            uri: "http://chuongtrinh.chotot.com/wp-content/uploads/sites/9/2019/12/850_350.jpg",
          }}
        />
      </View>
      <View style={styles.boxImageBottom}>
        <Image
          style={styles.imageBottom}
          source={{
            uri: "http://chuongtrinh.chotot.com/wp-content/uploads/sites/9/2019/12/850_350.jpg",
          }}
        />
        <Image
          style={styles.imageBottom}
          source={{
            uri: "http://chuongtrinh.chotot.com/wp-content/uploads/sites/9/2019/12/850_350.jpg",
          }}
        />
        <Image
          style={styles.imageBottom}
          source={{
            uri: "http://chuongtrinh.chotot.com/wp-content/uploads/sites/9/2019/12/850_350.jpg",
          }}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {backgroundColor: Color.white, paddingBottom: 10},
  titleStyle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
    marginLeft: 5,
  },
  boxImageTop: {
    flexDirection: "row",
    marginTop: 10,
  },
  imageTop: {
    flex: 0.5,
    height: width / 2 - 50,
    borderRadius: 10,
    margin: 4,
  },
  imageBottom: {
    flex: 1,
    height: width / 2 - 50,
    borderRadius: 10,
    margin: 4,
  },
  boxImageBottom: {flexDirection: "row"},
})

export default ImageList
