import {View, Image, StyleSheet} from "react-native"
import React from "react"
import Swiper from "react-native-swiper"

const Banner = ({width = width, height, data}) => {
  return (
    <View style={{width: width, height: height}}>
      <Swiper autoplay style={styles.styleSwiper}>
        <View style={styles.container}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: "http://chuongtrinh.chotot.com/wp-content/uploads/sites/9/2019/03/SSA-850x350.png",
            }}
          />
        </View>
        <View style={styles.container}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: "http://chuongtrinh.chotot.com/wp-content/uploads/sites/9/2019/03/SSA-850x350.png",
            }}
          />
        </View>
      </Swiper>
    </View>
  )
}
const styles = StyleSheet.create({
  imageStyle: {flex: 1},
  container: {flex: 1},
})

export default Banner
