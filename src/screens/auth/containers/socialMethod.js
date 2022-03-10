import {View, Text, StyleSheet} from "react-native"
import React from "react"
import SocialIcon from "./icon/socialIcon"

const SocialMethod = () => {
  return (
    <View style={styles.boxBottom}>
      <Text style={styles.textStyle}>hoặc sử dụng</Text>
      <View style={styles.container}>
        <SocialIcon
          style={styles.iconStyle}
          uri={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
          }
        />
        <SocialIcon
          style={styles.iconStyle}
          uri={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
          }
        />
        <SocialIcon
          style={styles.iconStyle}
          uri={
            "https://haitrieu.com/wp-content/uploads/2022/01/Logo-Zalo-Arc.png"
          }
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  iconStyle: {marginHorizontal: 10},
  textStyle: {
    fontSize: 16,
  },
  boxBottom: {alignItems: "center", marginVertical: 40},
})
export default SocialMethod
