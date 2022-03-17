/**
 * @format
 */

import {AppRegistry} from "react-native"
import App from "./App"
import {name as appName} from "./app.json"
import {LogBox} from "react-native"

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  "VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.",
])
AppRegistry.registerComponent(appName, () => App)
