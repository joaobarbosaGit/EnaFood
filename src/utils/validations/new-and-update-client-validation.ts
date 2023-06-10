export const newAndUpdateClientValidation = {
    name: {
        required: 'O campo do Nome do cliente é obrigatório',
        isString: true,
        min: 1,
        max: 200
    },
    cpf:{
        required: 'O campo do CPF do cliente é obrigatório',
        isString: true,
        min: 1,
        max: 11
    },
    phone:{
        required: 'O campo do Telefone do cliente é obrigatório',
        isString: true,
        min: 1,
        max: 15
    }
}
