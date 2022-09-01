import React from "react"
import { Pressable, Text } from "react-native"
import { CategoryItemProps } from "./interface"
import Styles from "./styles"

const CategoryItem = ({ item, onPress }: CategoryItemProps) => {

    return (
        <Pressable onPress={() => onPress(item)}>
            <Text style={Styles.content}>{item.name}</Text>
        </Pressable>
    )

}

export default CategoryItem