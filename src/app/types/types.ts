export type UsersProps = {
    name: string
    email: string,
    isActive: boolean,
    phone: string,
    ravenue: number,
    agreedTerms: boolean
}[]

export type User = {
    name: string
    email: string,
    isActive: boolean,
    phone: string,
    ravenue: number,
    agreedTerms: boolean
}

export type PurchasesProps = {
    name: string,
    limit: number,
    term: number,
    isActive: boolean
}[]