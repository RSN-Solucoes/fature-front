export interface I_User {
  _id?: string;
  clientId: string;
  name: string;
  email: string;
  tel: string;
  document: string;
  address: string;
  addressNumber: string;
  addressComplement?: string;
  cep: string;
  district: string;
  city: string;
  uf: string;
  codeIbge: string;
}

export interface I_InvoiceUser {
  id: string;
  name?: string;
  document?: string;
  email?: string;
  tel?: string;
}
