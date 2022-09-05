import React from "react"
import { Text, View } from "react-native"
import { NewsItemProps } from "./interface"
import Styles from "./styles"

const NewsItem = ({ item }: NewsItemProps) => {
    return (
        <View style={Styles.article}>
            <Text style={Styles.title}>{item.title}</Text>
            <Text style={Styles.content}>{item.description}</Text>
            <Text style={Styles.date}>{item.publishedAt.toDateString()}</Text>
        </View>
    )
}

export default NewsItem