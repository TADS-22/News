export interface Article {
    title: string,
    description: string,
    url: string,
    publishedAt: string
}

export interface Headlines { 
    articles: Article[]
}