import * as dateFns from 'date-fns'

export const parseDate = (value: string): Date => {
    return dateFns.parse(value, "yyyy-MM-dd'T'HH:mm:ss'Z'", new Date())
}

export const formatDate = (date: Date): string => {
    return dateFns.format(date, 'dd/MM/yyyy HH:mm:ss')
}