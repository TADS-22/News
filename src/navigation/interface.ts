import { RouteProp } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { NewsRouteParams } from "../screens/news/interface"

export type AppStackParamList = {
    Categories: undefined,
    News: NewsRouteParams,
}

export type NewsRouteProps = RouteProp<AppStackParamList, 'News'>

export type AppNavigationProp = NativeStackNavigationProp<AppStackParamList>
