import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/entities/user.entity';
import { Connection } from 'typeorm';

export default class Seeder {
  public static async run(connection: Connection): Promise<void> {
    const userRepository = connection.getRepository(User);

    const default_user: CreateUserDto = {
      email: 'default_user@gmail.com',
      name: 'admin',
      password: 'admin',
      login: 'admin',
    };

    if ((await userRepository.find()).length === 0) {
      await userRepository.insert(default_user);
    }
  }
}
