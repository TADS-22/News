import newsApi from "../../config/api";
import { Headlines } from "./interface";

export const getHeadlines = async (idCategory: string): Promise<Headlines> => {
    const url = `/top-headlines?country=br&category=${idCategory}`
    return await newsApi.get(url)
}