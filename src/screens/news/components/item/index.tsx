import React from "react"
import { Linking, Pressable, Text } from "react-native"
import { formatDate } from "../../../../utils/date"
import { NewsItemProps } from "./interface"
import Styles from "./styles"

const NewsItem = ({ item }: NewsItemProps) => {

    const openLink = () => {
        Linking.openURL(item.url)
    }

    return (
        <Pressable style={Styles.article} onPress={openLink}>
            <Text style={Styles.title}>{item.title}</Text>
            <Text style={Styles.content}>{item.description}</Text>
            <Text style={Styles.date}>{formatDate(item.publishedAt)}</Text>
        </Pressable>
    )
}

export default NewsItem