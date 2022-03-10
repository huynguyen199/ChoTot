import {View, Text, StyleSheet} from "react-native"
import React from "react"
import {FlatList} from "react-native-gesture-handler"
import ProductItem from "./productItem"

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
  {
    id: "58694a0f-3da1-471f-bd96-145571e2s9d72",
    title: "Third Item",
  },
]

const ProductList = () => {
  const renderItem = ({item}) => <ProductItem title={item.title} />

  return (
    <View style={styles.container}>
      <View style={styles.boxHeader}>
        <Text style={styles.textTitle}>Tin đăng mới</Text>
        <FlatList
          numColumns={2}
          data={DATA}
          columnWrapperStyle={styles.flatColumnWapper}
          contentContainerStyle={styles.flatContent}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {marginTop: 5, backgroundColor: "white"},
  textTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
    marginLeft: 10,
  },
  boxHeader: {marginTop: 10},
  flatContent: {marginHorizontal: 12},
  flatColumnWapper: {justifyContent: "space-between"},
})

export default ProductList
