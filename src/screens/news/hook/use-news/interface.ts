import { ArticleDto } from "../../../../domain/dto/article";

export interface UseNewsProps {
    categoryId: string,
}

export interface UseNewsResult {
    loading: boolean,
    articles: ArticleDto[],
}
