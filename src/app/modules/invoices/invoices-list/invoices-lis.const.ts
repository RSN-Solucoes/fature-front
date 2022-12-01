export const INVOICES_COLUMNS = [
    'Cliente',
    'Data referência',
    'Data vencimento',
    'Método pagamento',
    'Status',
    'Pago',
    'Valor',
    ];

export const INVOICES_FIELDS = [
    'client',
    'referringDate',
    'dueDate',
    'paymentMethod',
    'status',
    'paid',
    'value',
    ];

export const INVOICES_VALUE_SELECT_LIST = [
    {
        client: 'Ryan Sczayka',
        referringDate: '01/10/2022',
        dueDate: '31/10/2022',
        paymentMethod: 'Boleto, Pix, Credito, Debito',
        status: 'Autorizado',
        paid: 'Sim',
        value: 'R$ 200,00'
    },
    {
        client: 'Ryan Sczayka',
        referringDate: '06/10/2022',
        dueDate: '28/10/2022',
        paymentMethod: 'Pix',
        status: 'Autorizado',
        paid: 'Não',
        value: 'R$ 400,00'
    },
];

export const INVOICES_PIPES = ['', '', '', ''];
  