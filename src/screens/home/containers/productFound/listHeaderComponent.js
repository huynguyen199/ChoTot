import {View, StyleSheet} from "react-native"
import React from "react"
import Colors from "@common/Color"

const ListHeaderComponent = ({children}) => {
  return <View style={styles.listHeaderContainer}>{children}</View>
}

const styles = StyleSheet.create({
  listHeaderContainer: {backgroundColor: Colors.white},
})
export default ListHeaderComponent
