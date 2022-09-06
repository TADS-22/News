import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { FlatList, ListRenderItemInfo, Text, View } from "react-native";
import Divider from "../../components/Divider";
import { CategoryDto } from "../../domain/dto/category";
import { AppNavigationProp } from "../../navigation/interface";
import CategoryItem from "./components/item";
import useCategories from "./hook/use-categories";

type CategoryItemInfo = ListRenderItemInfo<CategoryDto>

const Categories = () => {
    const { categories } = useCategories()

    const navigation = useNavigation<AppNavigationProp>()

    const openNews = useCallback((category: CategoryDto) =>
        navigation.navigate('News', { category }), [])

    const renderCategory = useCallback(
        ({ item }: CategoryItemInfo) =>
            <CategoryItem item={item} onPress={() => openNews(item)} />
        , [])

    const categoryKeyExtractor = (item: CategoryDto) => item.id

    return (
        <View>
            <FlatList
                data={categories}
                renderItem={renderCategory}
                keyExtractor={categoryKeyExtractor}
                ItemSeparatorComponent={Divider}
            />
        </View>
    )
}

export default Categories