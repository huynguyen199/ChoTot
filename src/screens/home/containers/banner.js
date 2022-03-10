import {View, Image, Dimensions, StyleSheet} from "react-native"
import React from "react"
import Swiper from "react-native-swiper"

const {width} = Dimensions.get("window")

const Banner = () => {
  return (
    <Swiper autoplay style={styles.styleSwiper}>
      <View style={styles.container}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: "http://chuongtrinh.chotot.com/wp-content/uploads/sites/9/2019/03/SSA-850x350.png",
          }}
        />
      </View>
      <View style={styles.imageStyle}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: "http://chuongtrinh.chotot.com/wp-content/uploads/sites/9/2019/03/SSA-850x350.png",
          }}
        />
      </View>
    </Swiper>
  )
}
const styles = StyleSheet.create({
  container: {backgroundColor: "white", flex: 1},
  styleSwiper: {height: width / 2.2},
  imageStyle: {flex: 1},
})

export default Banner
