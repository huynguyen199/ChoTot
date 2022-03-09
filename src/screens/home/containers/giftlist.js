import {View, Text, ScrollView, StyleSheet} from "react-native"
import React from "react"
import {Avatar} from "react-native-elements"

const GiftList = () => {
  return (
    <ScrollView
      style={{backgroundColor: "white"}}
      horizontal
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <View
        style={{
          flexDirection: "row",
        }}>
        <View style={styles.itemGift}>
          <Avatar
            size={55}
            rounded
            icon={{
              name: "extension",
              type: "material",
              color: "#cdde20",
            }}
            containerStyle={{
              borderColor: "grey",
              borderStyle: "solid",
              borderWidth: 1,
            }}
          />
          <Text style={styles.textStyle}>Chương trình ưu đãi</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  itemGift: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    width: 80,
    textAlign: "center",
  },
})

export default GiftList
