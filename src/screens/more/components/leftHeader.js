import React from "react"
import Icons from "@common/Icon"
import {Icon} from "react-native-elements"
import {StyleSheet, Text, View} from "react-native"
import Color from "@common/Color"
import {useNavigation} from "@react-navigation/native"

const LeftHeader = () => {
  const navigation = useNavigation()
  const onBackProfile = () => {
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <Icon
        onPress={onBackProfile}
        name={Icons.Ionicons.back}
        type="ionicon"
        color={Color.black}
        size={35}
      />
      <Text style={styles.txtTitle}>Cài đặt thông tin</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  txtTitle: {color: Color.black, fontWeight: "bold"},
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: 160,
  },
})

export default LeftHeader
