import {View, Text, Image, Dimensions, StyleSheet} from "react-native"
import React from "react"
const {width} = Dimensions.get("window")

const ImageList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Chợ tốt có gì mới</Text>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
        }}>
        <Image
          style={{
            flex: 0.5,
            height: width / 2 - 50,
            borderRadius: 10,
            margin: 4,
          }}
          source={{
            uri: "http://chuongtrinh.chotot.com/wp-content/uploads/sites/9/2019/12/850_350.jpg",
          }}
        />
        <Image
          style={{
            flex: 0.5,
            height: width / 2 - 50,
            borderRadius: 10,
            margin: 4,
          }}
          source={{
            uri: "http://chuongtrinh.chotot.com/wp-content/uploads/sites/9/2019/12/850_350.jpg",
          }}
        />
      </View>
      <View style={{flexDirection: "row"}}>
        <Image
          style={{
            flex: 1,
            height: width / 2 - 50,
            borderRadius: 10,
            margin: 4,
          }}
          source={{
            uri: "http://chuongtrinh.chotot.com/wp-content/uploads/sites/9/2019/12/850_350.jpg",
          }}
        />
        <Image
          style={{
            flex: 1,
            height: width / 2 - 50,
            borderRadius: 10,
            margin: 4,
          }}
          source={{
            uri: "http://chuongtrinh.chotot.com/wp-content/uploads/sites/9/2019/12/850_350.jpg",
          }}
        />
        <Image
          style={{
            flex: 1,
            height: width / 2 - 50,
            borderRadius: 10,
            margin: 4,
          }}
          source={{
            uri: "http://chuongtrinh.chotot.com/wp-content/uploads/sites/9/2019/12/850_350.jpg",
          }}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {margin: 10, backgroundColor: "white", paddingBottom: 10},
  titleStyle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
    marginLeft: 5,
  },
})

export default ImageList
