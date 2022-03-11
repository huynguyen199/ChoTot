import {View, Text, ScrollView, StyleSheet} from "react-native"
import React from "react"
import {Avatar} from "react-native-elements"

const GiftList = () => {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <View style={styles.boxRow}>
        <View style={styles.itemGift}>
          <Avatar
            size={55}
            rounded
            icon={{
              name: "extension",
              type: "material",
              color: "#cdde20",
            }}
            containerStyle={styles.iconAvatar}
          />
          <Text style={styles.textStyle}>Chương trình ưu đãi</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {backgroundColor: "white"},
  itemGift: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    width: 80,
    textAlign: "center",
  },
  iconAvatar: {
    borderColor: "grey",
    borderStyle: "solid",
    borderWidth: 1,
  },
  boxRow: {
    flexDirection: "row",
  },
})

export default GiftList
