import { Source } from "src/sources/entities/source.entity";
import { Tag } from "src/tags/entities/tag.entity";

export class CreateRevenueDto {
    name: string;
    coin: number;
    value: number;
    payMethod: payMethod;
    date: Date;
    description: string;
    typeRevenue: typeRevenue;
    userId: string;
    source: Source;
    tag: Tag;
}
