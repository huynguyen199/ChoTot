import {View, FlatList, StyleSheet} from "react-native"
import React from "react"
import Color from "@common/Color"
import NewsItem from "./containers/newsItem"

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
]

const Display = () => {
  const renderItem = ({item}) => <NewsItem title={item.title} />
  return (
    <View style={styles.containers}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  containers: {backgroundColor: Color.ghostWhite, flex: 1},
})

export default Display
