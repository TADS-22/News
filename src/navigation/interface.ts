import { RouteProp } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { NewsRouteParams } from "../screens/news/interface"

export type AppStackParamList = {
    Categories: undefined,
    News: NewsRouteParams,
}

export type NewsRouteProps = RouteProp<AppStackParamList, 'News'>

export type AppNavigationProp = NativeStackScreenProps<AppStackParamList>