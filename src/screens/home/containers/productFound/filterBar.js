import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import React from "react"
import {Icon} from "react-native-elements"
import Colors from "@common/Color"
import Icons from "@common/Icon"

const FilterBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxRow}>
        <Icon
          name={Icons.Fontisto.filter}
          type="ionicon"
          color="black"
          size={20}
        />
        <Text style={styles.txtFilter}> Lọc</Text>
      </View>
      <View style={styles.btnContainer}>
        <Text style={styles.txtTitle}>Đồ gia dụng </Text>
        <Icon
          name={Icons.Ionicons.caretDown}
          type="ionicon"
          color="grey"
          size={14}
        />
      </View>
      <TouchableOpacity style={styles.btnPrice}>
        <Text style={styles.txtPrice}>Giá +</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  txtTitle: {color: "black"},
  txtFilter: {color: "black"},
  txtPrice: {color: "black"},
  btnPrice: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    padding: 8,
    borderWidth: 0.5,
    borderRadius: 5,
    marginLeft: 5,
  },
  btnContainer: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    padding: 8,
    borderWidth: 0.5,
    borderRadius: 5,
    marginLeft: 5,
    alignItems: "center",
  },
  boxRow: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    padding: 8,
    borderWidth: 0.5,
    borderRadius: 5,
  },
  container: {
    flexDirection: "row",
    marginTop: 5,
    padding: 5,
  },
})
export default FilterBar
