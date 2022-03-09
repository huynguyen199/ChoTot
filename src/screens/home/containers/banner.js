import {View, Image, Dimensions} from "react-native"
import React from "react"
import Swiper from "react-native-swiper"

const {width} = Dimensions.get("window")

const Banner = () => {
  return (
    <Swiper autoplay style={{height: width / 2.2}}>
      <View style={{backgroundColor: "white", flex: 1}}>
        <Image
          style={{flex: 1}}
          source={{
            uri: "http://chuongtrinh.chotot.com/wp-content/uploads/sites/9/2019/03/SSA-850x350.png",
          }}
        />
      </View>
      <View style={{flex: 1}}>
        <Image
          style={{flex: 1}}
          source={{
            uri: "http://chuongtrinh.chotot.com/wp-content/uploads/sites/9/2019/03/SSA-850x350.png",
          }}
        />
      </View>
    </Swiper>
  )
}

export default Banner
