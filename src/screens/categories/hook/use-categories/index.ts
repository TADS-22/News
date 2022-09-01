import { useEffect, useState } from "react"
import { CategoryDto } from "../../../../domain/dto/category"
import { categoryRepository } from "../../../../domain/repository"
import { UseCategoriesResult } from "./interface"

const useCategories = (): UseCategoriesResult => {
    const [categories, setCategories] = useState<CategoryDto[]>([])

    useEffect(() => {
        const result = categoryRepository.getCategories()
        setCategories(result)
    }, [])

    return {
        categories,
    }
}

export default useCategories