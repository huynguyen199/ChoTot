import {View, StyleSheet} from "react-native"
import React from "react"
import {Divider, Header} from "react-native-elements"
import PanelTop from "./components/news/panelTop"
import Color from "@common/Color"
import ContainerTabs from "./components/news/containerTabs"
import LeftHeader from "./components/news/leftHeader"
import RightHeader from "./components/news/rightHeader"

const News = () => {
  return (
    <View style={styles.container}>
      <Header
        leftComponent={<LeftHeader />}
        backgroundColor={"orange"}
        rightComponent={<RightHeader />}
      />
      <PanelTop />
      <Divider width={1.2} color={Color.ghostWhite} />

      <ContainerTabs />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {flex: 1},
})
export default News
