import { inject, injectable } from 'inversify';
import { ContainerSymbols } from '../../../symbols';
import { UserModel } from '../../domain/model/user.model';
import { IUserRepository } from '../../domain/repository/user.repository';
import { EmailVO } from '../../domain/value-objects/email.vo';
import { NameVO } from '../../domain/value-objects/name.vo';
import { PasswordVO } from '../../domain/value-objects/password.vo';
import { PhoneVO } from '../../domain/value-objects/phone.vo';
import { UuidVO } from '../../domain/value-objects/uuid.vo';
import { UserEmailAlreadyInUseException } from '../errors/user-email-already-in-use.exception';
import { UserIdAlreadyInUseException } from '../errors/user-id-already-in-use.exception';

@injectable()
export class UserRegisterUseCase {
    constructor(
        @inject(ContainerSymbols.UserRepository)
        private userRepository: IUserRepository
    ) {}
    async execute(
        id: UuidVO,
        name: NameVO,
        email: EmailVO,
        password: PasswordVO,
        phone: PhoneVO
    ): Promise<void> {
        const newUser = UserModel.createUser(id, name, email, password, phone);

        const existingUserById = await this.userRepository.findById(id);
        if (existingUserById) throw new UserIdAlreadyInUseException();

        const existingUserByEmial = await this.userRepository.findByEmail(
            email
        );
        if (existingUserByEmial) throw new UserEmailAlreadyInUseException();

        await this.userRepository.create(newUser);
    }
}
