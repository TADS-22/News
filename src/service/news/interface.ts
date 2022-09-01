export interface Article {
    title: string,
    description: string,
    url: string,
    publishedAt: Date
}

export interface Headlines { 
    articles: Article[]
}