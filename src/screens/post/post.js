import {View, ScrollView, Dimensions} from "react-native"
import React, {useEffect, useRef, useState} from "react"
import {StyleSheet} from "react-native"
import {Header, Icon} from "react-native-elements"
import Icons from "@common/Icon"
import Color from "@common/Color"
import Category from "./containers/category"
import InfoDetail from "./containers/infoDetail"
import AddressModal from "./containers/addressModal"
import {useTranslation} from "react-i18next"
import {Modalize} from "react-native-modalize"
import HeaderModal from "@components/headerModal"
import CategoryItem from "@containers/tabBarIconPost/categoryItem"
import {getCategories} from "@redux/slices/category"
import {useDispatch, useSelector} from "react-redux"
import {useNavigation, useRoute} from "@react-navigation/native"
import {clearDetails, getProductDetails} from "../../redux/slices/product"
import Loading from "@components/loading"

const {height} = Dimensions.get("window")

const Post = () => {
  //prarams
  const route = useRoute()
  const {category, productId} = route.params
  const {t} = useTranslation()
  const ref = useRef(null)
  const modalizeRef = useRef(null)
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.category.data)
  const navigation = useNavigation()
  const product = useSelector((state) => state.product.item)
  const [categoryItem, setCategoryItem] = useState(category)
  const [addressText, setAddressText] = useState(null)

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getProductDetails(productId))
  }, [dispatch, productId])

  const onSelectItem = (item) => {
    setCategoryItem(item)
    onCloseCategory()
  }

  const onCloseCategory = () => {
    modalizeRef.current.close()
  }
  const onOpenCategory = () => {
    modalizeRef.current.open()
  }

  const onOpen = () => {
    ref.current.open()
  }

  const onClose = () => {
    ref.current.close()
  }
  const onGoBackHome = () => {
    navigation.goBack()
    dispatch(clearDetails())
  }

  return (
    <View style={styles.container}>
      <Header
        backgroundColor={"orange"}
        centerComponent={{text: t("home:post"), style: styles.heading}}
        rightComponent={
          <Icon
            onPress={onGoBackHome}
            name={Icons.Ionicons.close}
            type="ionicon"
            color="black"
            size={26}
          />
        }
      />
      {product === null && productId ? (
        <Loading />
      ) : (
        <ScrollView>
          <Category categoryItem={categoryItem} onPress={onOpenCategory} />
          <InfoDetail
            product={product}
            productId={productId}
            categoryItem={categoryItem}
            addressText={addressText}
            setAddressText={setAddressText}
            onOpen={onOpen}
          />
        </ScrollView>
      )}
      <AddressModal
        onClose={onClose}
        setAddressText={setAddressText}
        modalizeRef={ref}
      />

      <Modalize
        HeaderComponent={
          <HeaderModal
            title={t("home:chooseCategory")}
            onClose={onCloseCategory}
          />
        }
        ref={modalizeRef}
        modalHeight={height - 50}
        withHandle={false}>
        {categories.map((item, index) => (
          <CategoryItem
            onPress={() => onSelectItem(item)}
            key={item._id}
            item={item}
          />
        ))}
      </Modalize>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  heading: {
    color: Color.black,
    fontSize: 22,
    fontWeight: "bold",
  },
})

export default Post
