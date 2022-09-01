import React from "react";
import { FlatList, ListRenderItemInfo, Text, View } from "react-native";
import { CategoryDto } from "../../domain/dto/category";
import CategoryItem from "./components/item";
import useCategories from "./hook/use-categories";

const Categories = () => {
    const { categories } = useCategories()

    const renderCategory = (item: CategoryDto) =>
        <CategoryItem item={item} onPress={() => null}/>

    const categoryKeyExtractor = (item: CategoryDto) => item.id

    return (
        <View>
            <FlatList
                data={categories}
                renderItem={({ item }) => renderCategory(item)}
                keyExtractor={categoryKeyExtractor}
            />
        </View>
    )
}

export default Categories