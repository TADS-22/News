import { newsService } from "../../../service";
import { parseDate } from "../../../utils/date";
import { ArticleDto } from "../../dto/article";

export const getHeadlines = async (idCategory: string): Promise<ArticleDto[]> => {
    const headlines = await newsService.getHeadlines(idCategory)
    
    return headlines.articles.map<ArticleDto>(article => ({
        title: article.title,
        description: article.description,
        url: article.url,
        publishedAt: parseDate(article.publishedAt),
    }))
}