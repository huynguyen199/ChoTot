import {View, Text, StyleSheet} from "react-native"
import React from "react"
import Color from "@common/Color"
import {Button} from "react-native-elements"

const WithoutAccount = () => {
  return (
    <View style={styles.containers}>
      <Text>Vui lòng đăng nhập để thực hiện chức năng này</Text>
      <Button
        title="ĐĂNG NHẬP/ĐĂNG KÝ"
        buttonStyle={styles.btnStyle}
        type="outline"
        titleStyle={styles.titleStyle}
        containerStyle={styles.containerStyle}
      />
    </View>
  )
}

export default WithoutAccount

const styles = StyleSheet.create({
  btnStyle: {
    borderColor: Color.orange,
  },
  titleStyle: {color: Color.orange, fontSize: 14},
  containerStyle: {
    width: 200,
    marginHorizontal: 50,
    marginVertical: 10,
  },
  containers: {
    flex: 1,
    backgroundColor: Color.ghostWhite,
    alignItems: "center",
    justifyContent: "center",
  },
})
