import {View, Text, StyleSheet} from "react-native"
import React, {useEffect} from "react"
import {
  Avatar,
  Badge,
  Button as ButtonWatchPage,
  Rating,
} from "react-native-elements"
import Color from "@common/Color"
import Icons from "@common/Icon"

import {useDispatch, useSelector} from "react-redux"
import {getProfileInfo} from "../../../../redux/slices/auth"

const InfoPage = ({itemDetails}) => {
  const userInfo = useSelector((state) => state.auth.user)
  console.log(
    "DEBUG: - file: infoPage.js - line 17 - InfoPage - userInfo",
    userInfo,
  )
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProfileInfo())
  }, [dispatch])
  return (
    <View style={styles.container}>
      <View style={styles.rowInfoContainer}>
        <View style={styles.leftAvatar}>
          <Avatar size={64} rounded source={{uri: userInfo?.avatarUrl ?? ""}} />
        </View>
        <View style={styles.rightInfo}>
          <Text style={styles.txtName}>{userInfo?.name ?? ""}</Text>
          <View style={styles.viewRowActivity}>
            <Badge badgeStyle={styles.badgeStyle} />
          </View>
        </View>
        <View style={styles.endInfo}>
          <ButtonWatchPage
            title="Lưu tin"
            iconContainerStyle={styles.iconContainer}
            titleStyle={styles.iconTitle}
            buttonStyle={styles.iconButton}
            containerStyle={styles.btnContainer}
          />
        </View>
      </View>
      <View style={styles.groupBox}>
        <View style={styles.boxInfo}>
          <Text>Cá nhân</Text>
          <Avatar
            size={30}
            rounded
            icon={{name: Icons.Ionicons.user, type: "ionicon"}}
            containerStyle={styles.containerStyle}
          />
        </View>

        <View style={styles.boxInfo}>
          <Text>Đánh giá</Text>
          <Rating imageSize={20} readonly startingValue="{3.3}" />
        </View>
        <View style={styles.boxInfo}>
          <Text>Phản hồi chat</Text>
          <Text style={styles.txtStatus}>Thỉnh thoảng</Text>
        </View>
      </View>
      {/* box description */}
      <View style={styles.boxDescription}>
        <Text style={styles.txtDescription}>Miêu tả</Text>
        <Text>{itemDetails.description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  txtDescription: {color: Color.black, fontSize: 16, fontWeight: "bold"},
  container: {
    flex: 1,
    marginTop: 10,
    marginVertical: 20,
  },
  rowInfoContainer: {
    flexDirection: "row",
  },
  leftAvatar: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  rightInfo: {
    height: 80,
    flex: 1,
    justifyContent: "center",
    left: 10,
  },
  endInfo: {
    height: 80,
    width: 100,
    justifyContent: "center",
  },
  txtName: {
    fontSize: 18,
    color: Color.black,
    fontWeight: "bold",
  },
  iconTitle: {color: Color.orange},
  iconButton: {
    backgroundColor: Color.white,
    borderColor: Color.orange,
    borderWidth: 1,
    borderRadius: 30,
  },
  btnContainer: {
    width: 100,
  },
  viewRowActivity: {flexDirection: "row", alignItems: "center", marginTop: 3},
  badgeStyle: {backgroundColor: Color.grey, width: 10, height: 10},
  boxInfo: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  txtStatus: {color: Color.black, fontWeight: "bold"},
  groupBox: {flexDirection: "row", height: 60},
  containerStyle: {backgroundColor: "black"},
  boxDescription: {backgroundColor: Color.white, marginTop: 10},
  styleActivity: {marginLeft: 5},
})

export default InfoPage
