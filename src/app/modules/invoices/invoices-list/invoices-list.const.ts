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
    'user',
    'referringDate',
    'dueDate',
    'paymentMethod',
    'status',
    'paid',
    'value',
    ];

export const INVOICES_PIPES = ['', 'date', 'date', '', '', 'paid', 'price'];
  