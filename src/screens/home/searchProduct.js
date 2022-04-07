import {View, Text, FlatList, StyleSheet} from "react-native"
import React from "react"
import {TouchableOpacity} from "react-native"

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

const Item = ({title}) => (
  <TouchableOpacity>
    <View style={styles.containerItem}>
      <Text>{title}</Text>
    </View>
  </TouchableOpacity>
)

const SearchProduct = () => {
  const renderItem = ({item}) => <Item title={item.title} />

  return (
    <View style={styles.container}>
      {/* bar on top */}
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default SearchProduct

const styles = StyleSheet.create({
  containerItem: {margin: 10},
  container: {
    flex: 1,
    backgroundColor: "yellow",
  },
})
