
export const CLIENT_COLUMNS_TABLE_SELECT_LIST = [
    'Nome',
    'E-mail',
    'Telefone',
    'CEP',
    'Cidade',
    'UF',
];

export const CLIENT_VALUE_SELECT_LIST = [
    {
        nome: 'Luiz André Bragança Santos',
        email: 'Luiz@gmail.com',
        telefone: '+55 11 988756644',
        cep: '01415001',
        cidade: 'São Paulo',
        uf: 'SP',
    },
    {
        nome: 'Luiz André Bragança Santos',
        email: 'Luiz@gmail.com',
        telefone: '+55 11 988756644',
        cep: '01415001',
        cidade: 'São Paulo',
        uf: 'SP',
    },
];

export const CLIENT_ACTIONS_SELECT_LIST = [
    {
        label: 'Visualizar',
        icon: "pi eye",
        route: "painel/clientes/visualizar"
    },
    {
        label: 'Deletar',
        icon: "pi delete",
        route: "painel/clientes/delete"
    },
]


export const CLIENT_PIPES_SELECT_LIST = [
    '', '', '', 'tel'
];