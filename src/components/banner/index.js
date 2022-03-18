import {View, Image, StyleSheet} from "react-native"
import React from "react"
import Swiper from "react-native-swiper"

const Banner = ({width = width, height, data}) => {
  return (
    <View style={{width: width, height: height}}>
      <Swiper autoplay style={styles.styleSwiper}>
        {data.map((item, index) => {
          return (
            <View key={index} style={styles.container}>
              <Image
                style={styles.imageStyle}
                source={{
                  uri: item,
                }}
              />
            </View>
          )
        })}
      </Swiper>
    </View>
  )
}
const styles = StyleSheet.create({
  imageStyle: {flex: 1},
  container: {flex: 1},
})

export default Banner
