export class CreatedEntity {
  message = 'Successfully created:';

  constructor(entity: string) {
    this.message = `${this.message} ${entity}`;
  }
}

export class UpdatedEntity {
  message = 'Successfully edited:';

  constructor(entity: string) {
    this.message = `${this.message} ${entity}`;
  }
}

export class DeletedUserDto {
  message = 'Successfully deleted:';

  constructor(entity: string) {
    this.message = `${this.message} ${entity}`;
  }
}
