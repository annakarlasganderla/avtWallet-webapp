export interface Tags {
    id: string;
    createdAt: string;
    updatedAt?: null;
    deletedAt?: null;
    name: string;
}

export interface TagsDto {
    name: string;
}
