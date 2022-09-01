import { CategoryDto } from "../../dto/category"

const CATEGORIES: CategoryDto[] = [
    { id: 'general', name: 'Geral'},
    { id: 'sports', name: 'Esportes'},
    { id: 'business', name: 'Negócios'},
    { id: 'technology', name: 'Tecnologia'},
    { id: 'science', name: 'Ciência'},
    { id: 'health', name: 'Saúde'},
    { id: 'entertainment', name: 'Entretenimento'},
]

export const getCategories = (): CategoryDto[] => {
    return CATEGORIES
}