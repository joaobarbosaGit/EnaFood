db = db.getSiblingDB('enacom_db');

db.createCollection('client');
db.createCollection('product');

db.createUser(
    {
        user: "enacom_user",
        pwd: "enacom_pass",
        roles: [
            {
                role: "readWrite",
                db: "enacom_db"
            }
        ]
    }
);

db.client.insertMany([
    {
        "id": "64837fedc9dd49e063e60f25",
        "name": "cliente 1",
        "cpf": "37083294062",
        "phone": "(88)97245-7219",
        "created_at": "2023-06-09T19:39:25.633Z",
        "updated_at": "2023-06-09T19:39:25.633Z",
        "deleted_at": null,
        "address": [
            {
                "address": "Rua Santa Helena",
                "complement": "Numero 21",
                "zipCode": "69073070",
                "neighborhood": "Betânia"
            }
        ],
        "purchases": []
    },
    {
        "id": "64838039c9dd49e063e60f26",
        "name": "cliente 2",
        "cpf": "78973907050",
        "phone": "(61)98854-4192",
        "created_at": "2023-06-09T19:40:41.254Z",
        "updated_at": "2023-06-09T19:40:41.254Z",
        "deleted_at": null,
        "address": [
            {
                "address": "Alameda Itaci",
                "complement": "S/C",
                "zipCode": "66843576",
                "neighborhood": "Água Boa (Outeiro)"
            }
        ],
        "purchases": []
    },
    {
        "id": "64838074c9dd49e063e60f27",
        "name": "cliente 3",
        "cpf": "72533283029",
        "phone": "(24)98610-1933",
        "created_at": "2023-06-09T19:41:40.543Z",
        "updated_at": "2023-06-09T19:41:40.543Z",
        "deleted_at": null,
        "address": [
            {
                "address": "Rua Niterói",
                "complement": "Rua 51",
                "zipCode": "68908044",
                "neighborhood": "Infraero"
            }
        ],
        "purchases": []
    },
    {
        "id": "648380d6c9dd49e063e60f28",
        "name": "cliente 4",
        "cpf": "09753266006",
        "phone": "(63)98349-7578",
        "created_at": "2023-06-09T19:43:18.641Z",
        "updated_at": "2023-06-09T19:43:18.641Z",
        "deleted_at": null,
        "address": [
            {
                "address": "Rua Carmelita Vilard de Andrade",
                "complement": "S/C",
                "zipCode": "25575570",
                "neighborhood": "Jardim Metrópole"
            }
        ],
        "purchases": []
    },
    {
        "id": "6483812cc9dd49e063e60f29",
        "name": "cliente 5",
        "cpf": "14931697003",
        "phone": "(65)98230-3620",
        "created_at": "2023-06-09T19:44:44.698Z",
        "updated_at": "2023-06-09T19:44:44.698Z",
        "deleted_at": null,
        "address": [
            {
                "address": "Rua Parauna",
                "complement": "Lote 1",
                "zipCode": "79070534",
                "neighborhood": "Rua Parauna"
            }
        ],
        "purchases": []
    }
]);

db.product.insertMany([{
    "id": "64837de9c9dd49e063e60f20",
    "code": "5885ff8e-bc42-4b13-a17c-0027a16273ab",
    "name": "Produto 1",
    "description": "É um produto legal",
    "cost_value": 100.35,
    "sale_value": 200.5,
    "active": true,
    "created_at": "2023-06-09T19:30:49.537Z",
    "updated_at": "2023-06-09T19:30:49.537Z",
    "deleted_at": null,
    "category": [
        {
            "name": "tecnologia",
            "description": "produtos de tecnologia"
        }
    ]
},
{
    "id": "64837e10c9dd49e063e60f21",
    "code": "8789de07-778c-40d2-8e30-dbea02f7ef2d",
    "name": "Produto 2",
    "description": "melhor produto da loja",
    "cost_value": 15.6,
    "sale_value": 80,
    "active": true,
    "created_at": "2023-06-09T19:31:28.510Z",
    "updated_at": "2023-06-09T19:31:28.510Z",
    "deleted_at": null,
    "category": [
        {
            "name": "tecnologia",
            "description": "produtos de tecnologia"
        }
    ]
},
{
    "id": "64837e3cc9dd49e063e60f22",
    "code": "e9eb6ec0-0147-4840-99a8-7ca5ce55eb34",
    "name": "Produto 3",
    "description": "melhor performance e desempenho",
    "cost_value": 486.54,
    "sale_value": 1234.99,
    "active": true,
    "created_at": "2023-06-09T19:32:12.030Z",
    "updated_at": "2023-06-09T19:32:12.030Z",
    "deleted_at": null,
    "category": [
        {
            "name": "tecnologia",
            "description": "produtos de tecnologia"
        }
    ]
},
{
    "id": "64837e66c9dd49e063e60f23",
    "code": "c443cf75-b80d-40a6-9212-4c145b910001",
    "name": "Produto 4",
    "description": "custo beneficio",
    "cost_value": 115.65,
    "sale_value": 260,
    "active": true,
    "created_at": "2023-06-09T19:32:54.890Z",
    "updated_at": "2023-06-09T19:32:54.890Z",
    "deleted_at": null,
    "category": [
        {
            "name": "utilitarios",
            "description": "variados"
        }
    ]
},
{
    "id": "64837f3bc9dd49e063e60f24",
    "code": "38763d79-9978-4b32-85a7-27e6587da2ef",
    "name": "Produto 5",
    "description": "em oferta",
    "cost_value": 20.99,
    "sale_value": 45.59,
    "active": true,
    "created_at": "2023-06-09T19:36:27.718Z",
    "updated_at": "2023-06-09T19:36:27.718Z",
    "deleted_at": null,
    "category": [
        {
            "name": "utilitarios",
            "description": "variados"
        }
    ]
}]);