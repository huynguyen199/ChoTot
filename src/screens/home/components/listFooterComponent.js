import {View, StyleSheet, ActivityIndicator} from "react-native"
import React from "react"
import Color from "@common/Color"

const ListFooterComponent = ({pagination}) => {
  return (
    pagination.page === pagination.totalPages && (
      <View style={styles.containerListFooter}>
        <ActivityIndicator size="large" color={Color.orange} />
      </View>
    )
  )
}
const styles = StyleSheet.create({
  containerListFooter: {alignItems: "center"},
})
export default ListFooterComponent
