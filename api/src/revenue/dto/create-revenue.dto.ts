export class CreateRevenueDto {
    name: string;
    coin: number;
    value: number;
    payMethod: payMethod;
    date: Date;
    description: string;
    typeRevenue: typeRevenue;
    userId: string;
    source: string;
    tag: string;
}
