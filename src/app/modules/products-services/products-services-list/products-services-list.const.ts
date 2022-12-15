export const PRODUCTS_SERVICES_TABLE_COLUMNS = [
    'Nome',
    'Tipo',
    'Descrição',
    'Valor',
    'Criado em',
    'Última alteração',
  ];
  
  export const PRODUCTS_SERVICES_TABLE_FIELDS = [
    'name',
    'type',
    'description',
    'price',
    'created_at',
    'update_at',
  ];
  
  export const PRODUCTS_SERVICES_VALUE_SELECT_LIST = [
    {
        name: 'Pacote design system',
        type: 'Serviço',
        description: 'Serviço de design',
        value: 'R$ 5.000,00',
        created_at: '10/11/2022',
        lastChange: '10/11/2022'
    },
    {
        name: 'Caixa surpresa 01',
        type: 'Produto',
        description: 'Caixa surpresa natal',
        value: 'R$ 200,00',
        created_at: '10/11/2022',
        lastChange: '10/11/2022'
    },
  ];
  
  export const PRODUCTS_SERVICES_TABLE_PIPES = ['', 'type', '', 'price', 'date', 'date'];
  