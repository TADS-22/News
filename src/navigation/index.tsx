import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import Categories from "../screens/categories"
import News from "../screens/news"
import { AppStackParamList } from "./interface"

const Stack = createNativeStackNavigator<AppStackParamList>()

const AppNavigator = () => { 
    return (
        <Stack.Navigator>
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen name="News" component={News} />
        </Stack.Navigator>
    )
}

export default AppNavigator