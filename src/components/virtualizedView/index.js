import {FlatList} from "react-native"
import React from "react"

const VirtualizedView = (props) => {
  return (
    <FlatList
      data={[]}
      ListEmptyComponent={null}
      keyExtractor={() => "dummy"}
      renderItem={null}
      ListHeaderComponent={() => <>{props.children}</>}
    />
  )
}

export default VirtualizedView
