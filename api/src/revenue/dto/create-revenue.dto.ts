import { PayMethod } from '../enum/payMethod';
import { typeRevenue } from '../enum/typeRevenue';

export class CreateRevenueDto {
  name: string;
  coin: number;
  value: number;
  source: string;
  tag: string;
  payMethod: PayMethod;
  date: Date;
  description: string;
  typeRevenue: typeRevenue;
  userId: string;
}
