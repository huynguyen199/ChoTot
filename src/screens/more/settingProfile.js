import {View, StyleSheet} from "react-native"
import React, {useEffect, useState} from "react"
import Color from "@common/Color"
import {Header} from "react-native-elements"
import LeftHeader from "./components/leftHeader"
import FormProfile from "./components/formProfile"
import {useDispatch, useSelector} from "react-redux"
import {getProfileInfo} from "@redux/slices/auth"
import {selectProfileInfo} from "@redux/selector/auth"

const SettingProfile = () => {
  const userInfo = useSelector(selectProfileInfo)
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProfileInfo())
      .unwrap()
      .then((profile) => {
        if (profile) {
          setLoading(false)
        }
      })
  }, [dispatch])

  return (
    <View style={styles.container}>
      <Header leftComponent={<LeftHeader />} backgroundColor={Color.orange} />
      <FormProfile loading={loading} userInfo={userInfo} />
    </View>
  )
}

export default SettingProfile

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Color.ghostWhite},
})
