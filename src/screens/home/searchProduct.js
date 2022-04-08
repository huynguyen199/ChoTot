import {View, Text, FlatList, StyleSheet} from "react-native"
import React from "react"
import {TouchableOpacity} from "react-native"

const Item = ({item, search}) => {
  return (
    <TouchableOpacity>
      <View style={styles.containerItem}>
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const SearchProduct = ({products, search}) => {
  const renderItem = ({item}) => <Item item={item} search={search} />

  return (
    <View style={styles.container}>
      {/* bar on top */}
      <FlatList
        data={products}
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
    backgroundColor: "white",
  },
})
