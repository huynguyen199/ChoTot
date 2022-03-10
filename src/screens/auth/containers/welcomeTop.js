import {View, Text, StyleSheet, Image} from "react-native"
import React from "react"
import Color from "@common/Color"

const WelcomeTop = () => {
  return (
    <View style={styles.containerHeader}>
      <View style={styles.boxLeft}>
        <Text style={styles.textTitle}>Đăng nhập</Text>
        <Text style={styles.textDescription}>Chào bạn đã quay lại</Text>
      </View>
      <View>
        <Image
          style={styles.logo}
          source={{
            uri: "https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/eb670969f81f721875ffce93d219ef68.png",
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textTitle: {
    color: "orange",
    fontWeight: "bold",
    fontSize: 32,
  },
  textDescription: {
    fontSize: 20,
    color: Color.grey,
  },
  boxLeft: {
    marginTop: 20,
  },
  logo: {width: 100, height: 100},
})

export default WelcomeTop
