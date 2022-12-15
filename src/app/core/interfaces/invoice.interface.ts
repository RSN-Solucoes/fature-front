import { I_Billing } from "./billing.interface";
import { I_Payment } from "./payment.interface";
import { I_InvoiceProduct } from "./product.interface";
import { I_InvoiceUser } from "./user.interface";

export interface I_Invoice {
  id?: string;
  clientId: string;
  user: I_InvoiceUser;
  products: I_InvoiceProduct[];
  billing: I_Billing;
  payment?: I_Payment;
  status?: string;
  meta?: any[];
}
