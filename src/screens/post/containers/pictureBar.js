import {View, Text, StyleSheet} from "react-native"
import React from "react"
import {Icon} from "react-native-elements"
import Icons from "@common/Icon"
import Color from "@common/Color"
import PictureList from "./pictureList"

const PictureBar = () => {
  return (
    <View>
      <Text style={styles.txtTitle}>Hình ảnh</Text>
      <View style={styles.boxRow}>
        <View style={styles.boxCamera}>
          <Icon
            name={Icons.Material.addAPhoto}
            type="material"
            color={Color.orange}
            size={40}
          />
        </View>
        <PictureList />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  txtTitle: {fontWeight: "bold", fontSize: 12},
  boxRow: {
    flexDirection: "row",
    marginTop: 10,
  },
  boxCamera: {
    borderColor: Color.orange,
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 20,
  },
})

export default PictureBar
