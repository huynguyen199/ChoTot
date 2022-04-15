import {View, Text, StyleSheet} from "react-native"
import React from "react"
import {Icon} from "react-native-elements"
import Icons from "@common/Icon"

const LocationBar = ({isGrid, setIsGrid}) => {
  const onPressGrid = () => {
    setIsGrid(!isGrid)
  }

  return (
    <View style={styles.container}>
      <View style={styles.boxRow}>
        <Icon
          name={Icons.Ionicons.location}
          type="ionicon"
          color="black"
          size={20}
        />
        <Text style={styles.txtArea}>Khu vực: </Text>
        <Text style={styles.txtAddress}>Hà Nội</Text>
      </View>
      <View>
        <Icon
          onPress={onPressGrid}
          name={isGrid ? Icons.Ionicons.grid : Icons.Ionicons.list}
          type="ionicon"
          color="black"
          size={20}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  txtAddress: {marginLeft: 2, color: "black"},
  txtArea: {marginLeft: 5},
  boxRow: {flexDirection: "row"},
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
})

export default LocationBar
