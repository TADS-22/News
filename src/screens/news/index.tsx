import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useCallback, useEffect } from "react";
import { ActivityIndicator, FlatList, ListRenderItemInfo, View } from "react-native";
import { ArticleDto } from "../../domain/dto/article";
import { NewsRouteProps } from "../../navigation/interface";
import NewsItem from "./components/item";
import useNews from "./hook/use-news";
import Styles from "./styles";

type ArticleItemInfo = ListRenderItemInfo<ArticleDto>

const News = () => {
    const navigation = useNavigation()

    const { params: { category } } = useRoute<NewsRouteProps>()
    const { loading, articles } = useNews({ categoryId: category.id })

    const renderArticle = useCallback(({ item }: ArticleItemInfo) =>
        <NewsItem item={item} />
        , [])

    const articleKeyExtractor = useCallback(
        (_: ArticleDto, index: number) => index.toString()
        , [])

    useEffect(() => {
        navigation.setOptions({
            title: category.name,
        })
    }, [navigation])

    if (loading) {
        return (
            <ActivityIndicator size='large' style={Styles.loading} />
        )
    }

    return (
        <FlatList
            data={articles}
            renderItem={renderArticle}
            keyExtractor={articleKeyExtractor} />
    )
}

export default News