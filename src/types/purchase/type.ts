import { ProductType } from '../product/type';

export type PurchaseStatus = -1 | 1 | 2 | 3 | 4 | 5;
export type PurchaseListStatus = 0 | PurchaseStatus;

export type PurchaseType = {
  _id: string;
  buy_count: number;
  price: number;
  price_before_discount: number;
  status: PurchaseStatus;
  user: string;
  product: ProductType;
  createdAt: string;
  updatedAt: string;
};

export type PurchaseBodyType = {
  product_id: string;
  buy_count: number;
};

export const statusPurchase = {
  inCart: -1,
  all: 0,
  waitForConfirmation: 1,
  waitForGetting: 2,
  inProgress: 3,
  delivered: 4,
  cancelled: 5,
};

export interface IExtendedPurchase extends PurchaseType {
  disabled: boolean;
  checked: boolean;
}
