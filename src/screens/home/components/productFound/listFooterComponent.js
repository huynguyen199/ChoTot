import {View, ActivityIndicator} from "react-native"
import React from "react"
import Colors from "@common/Color"

const ListFooterComponent = ({pagination}) => {
  const page = pagination.page
  const totalPages = pagination.totalPages
  return (
    page < totalPages && (
      <View style={{backgroundColor: Colors.white}}>
        <ActivityIndicator size="large" color={Colors.orange} />
      </View>
    )
  )
}

export default ListFooterComponent
