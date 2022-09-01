import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import Categories from "../screens/categories"
import News from "../screens/news"

const Stack = createNativeStackNavigator()

const AppNavigator = () => { 
    return (
        <Stack.Navigator>
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen name="News" component={News} />
        </Stack.Navigator>
    )
}

export default AppNavigator