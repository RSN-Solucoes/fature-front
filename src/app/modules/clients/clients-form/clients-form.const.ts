export const SENT_EMAILS_COLUMNS = [
    'Título',
    'Destino',
    'Data',
    ];

export const SENT_EMAILS_FIELDS = [
    'title',
    'destination',
    'date',
    ];

export const SENT_EMAILS_PIPES = ['', '', ''];

export const PAYMENTS_COLUMNS = [
    'Data referência',
    'Data vencimento',
    'Método pagamento',
    'Status',
    'Pago',
    'Valor',
    ];

export const PAYMENTS_FIELDS = [
    'referringDate',
    'dueDate',
    'paymentMethod',
    'status',
    'paid',
    'value',
    ];

export const PAYMENTS_PIPES = ['date', 'date', '', '', 'paid', 'price'];
  