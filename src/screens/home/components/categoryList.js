import {View, Text, ScrollView, StyleSheet} from "react-native"
import React, {useEffect} from "react"
import CategoryItem from "./categoryItem"
import {useTranslation} from "react-i18next"
import {useDispatch, useSelector} from "react-redux"
import {getCategories} from "@redux/slices/category"

const CategoryList = () => {
  const {t} = useTranslation()
  const dispatch = useDispatch()
  const data = useSelector((state) => state.category.data)

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{t("home:titleCategory")}</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal>
        <View style={styles.boxRow}>
          {data.map((item, i) => (
            <CategoryItem key={item._id} item={item} />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {marginTop: 10, backgroundColor: "white"},
  textTitle: {
    fontWeight: "bold",
    fontSize: 18,
    margin: 10,
    color: "black",
  },
  boxRow: {
    flexDirection: "row",
    width: 600,
    flexWrap: "wrap",
  },
})

export default CategoryList
