export interface I_Product {
  _id?: string;
  clientId: string;
  name: string;
  description: string;
  price: number;
  type: string;
  quantity?: number;
}

export interface I_InvoiceProduct {
  id: string;
  quantity: number;
  name?: string;
  description?: string;
  price?: number;
  type?: string;
}
