export interface IAddProductToPurchaseDTO {
    client_cpf: string
    product_code: string
    purchase_code: string
    name: string
    description: string 
    sale_value: number
}