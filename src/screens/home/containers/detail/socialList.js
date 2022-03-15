import {View, Text, StyleSheet} from "react-native"
import React from "react"
import Color from "@common/Color"
import {Divider} from "react-native-elements"
import SocialIcon from "@components/social"

const SocialList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>Chia sẻ tin đăng này cho bạn bè</Text>
      <Divider width={0.5} color={Color.grey} style={styles.styleDeviders} />

      <View style={styles.boxRow}>
        <SocialIcon
          size={50}
          uri={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
          }
        />
        <SocialIcon
          size={50}
          uri={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Messenger_logo_2018.svg/2048px-Facebook_Messenger_logo_2018.svg.png"
          }
        />
        <SocialIcon
          size={50}
          uri={
            "https://haitrieu.com/wp-content/uploads/2022/01/Logo-Zalo-Arc.png"
          }
        />
        <SocialIcon
          size={50}
          uri={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZKfuXbebrrQbDEi6_LeZ_elkwAKfb4-k-A_nhu1fxO-zo1RsigmE5DX3DI1ChQejlLC0&usqp=CAU"
          }
        />
        <SocialIcon
          size={50}
          uri={
            "https://banner2.cleanpng.com/20180509/scq/kisspng-sms-computer-icons-mobile-phones-internet-5af2c95d083834.8468469215258607010337.jpg"
          }
        />
        <SocialIcon
          size={50}
          uri={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-gyy6eXTvfKDUVD0iKAFoqKLNrvX8pIdxMYkroxnRPzbEYkSFK5mEHfEvG3JoU1zaizA&usqp=CAU"
          }
        />
      </View>
      <Divider width={0.6} color={Color.grey} style={styles.styleDeviders} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 5,
  },
  boxRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-around",
  },
  containerList: {
    flex: 1,
  },
  txtTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  styleDeviders: {marginTop: 5},
})

export default SocialList
