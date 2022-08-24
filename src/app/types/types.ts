export type UsersListProps = {
    id: number,
    name: string,
    email: string,
    phone: string,
    cpf: string
}[]

export type UserProps = {
    id: number,
    name: string,
    email: string,
    phone: string,
    cpf: string
}

export type PurchaseProps = {
    purchase_id: number,
    user_id: number,
    products: []
}

export type PurchasesListProps = {
    purchase_id: number,
    user_id: number,
    products: []
}[]