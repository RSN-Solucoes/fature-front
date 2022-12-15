export interface I_Client {
  id?: string;
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

export interface I_InvoiceClient {
  id: string;
  name?: string;
  document?: string;
  email?: string;
  tel?: string;
}
