import {View, FlatList, RefreshControl} from "react-native"
import React from "react"
import ProductItem from "./productItem"
import Colors from "@common/Color"
import ProductColumnGrid from "./productIColumnItem"
import ListEmptyComponent from "./ListEmptyComponent"

const ProductList = ({children, isGrid}) => {
  const [refreshing] = React.useState(false)

  const onRefresh = React.useCallback(() => {}, [])

  const data = [
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

  const handleOnEndReached = () => {}

  const renderGridItem = ({item}) => <ProductItem item={item} />
  const renderColumnItem = ({item}) => <ProductColumnGrid item={item} />

  return (
    <>
      {isGrid ? (
        <FlatList
          data={data}
          key={"*"}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={renderGridItem}
          keyExtractor={(item) => item._id}
          ListEmptyComponent={<ListEmptyComponent />}
          ListHeaderComponent={
            <View style={{backgroundColor: Colors.white}}>{children}</View>
          }
          contentContainerStyle={{
            backgroundColor: Colors.ghostWhite,
          }}
          onEndReached={handleOnEndReached}
        />
      ) : (
        <FlatList
          data={data}
          key={"#"}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          renderItem={renderColumnItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item._id}
          ListEmptyComponent={<ListEmptyComponent />}
          ListHeaderComponent={
            <View style={{backgroundColor: Colors.white}}>{children}</View>
          }
          contentContainerStyle={{
            backgroundColor: Colors.ghostWhite,
          }}
          onEndReached={handleOnEndReached}
        />
      )}
    </>
  )
}

export default ProductList
