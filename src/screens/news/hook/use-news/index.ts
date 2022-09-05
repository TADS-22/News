import { useCallback, useEffect, useState } from "react";
import { ArticleDto } from "../../../../domain/dto/article";
import { newsRepository } from "../../../../domain/repository";
import { UseNewsProps, UseNewsResult } from "./interface";

const useNews = ({ categoryId }: UseNewsProps): UseNewsResult => {
    const [loading, setLoading] = useState(false)
    const [articles, setArticles] = useState<ArticleDto[]>([])

    const loadArticles = useCallback(async () => {
        setLoading(true)

        const result = await newsRepository.getHeadlines(categoryId)
        
        setArticles(result)
        setLoading(false)
    }, [categoryId])

    useEffect(() => {
        loadArticles()
    }, [])

    return {
        loading,
        articles,
    }
}

export default useNews