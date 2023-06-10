export const newProductValidation = {
    name: {
        required: 'O campo do Nome do produto é obrigatório',
        isString: true,
        min: 1,
        max: 200
    },
    description: {
        isString: true,
        min: 1,
        max: 200
    },
    cost_value: {
        required: 'O campo do valor de custo do produto é obrigatório',
        isNumber: true
    },
    sale_value: {
        required: 'O campo do valor de venda do produto é obrigatório',
        isNumber: true
    }
}