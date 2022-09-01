import { CategoryDto } from "../../../../domain/dto/category";

export interface CategoryItemProps {
    item: CategoryDto,
    onPress: (category: CategoryDto) => void
}