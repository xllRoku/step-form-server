import { FastifyReply, FastifyRequest } from 'fastify';
import { injectable, inject } from 'inversify';
import uuid from 'uuid-random';
import { ContainerSymbols } from '../../../symbols';
import { UserRegisterUseCase } from '../../application/use-cases/user-register.usecase';
import { EmailVO } from '../../domain/value-objects/email.vo';
import { NameVO } from '../../domain/value-objects/name.vo';
import { PasswordVO } from '../../domain/value-objects/password.vo';
import { PhoneVO } from '../../domain/value-objects/phone.vo';
import { UuidVO } from '../../domain/value-objects/uuid.vo';

interface UserRegisterDTO {
    name: string;
    email: string;
    password: string;
    phone: string;
}

@injectable()
export class UserRegisterController {
    constructor(
        @inject(ContainerSymbols.UserRegisterUseCase)
        private userRegisterUseCase: UserRegisterUseCase
    ) {}

    async execute(
        request: FastifyRequest<{ Body: UserRegisterDTO }>,
        replay: FastifyReply
    ): Promise<void> {
        const { email, name, password, phone } = request.body;
        const id = uuid();

        await this.userRegisterUseCase.execute(
            new UuidVO(id),
            new NameVO(name),
            new EmailVO(email),
            await PasswordVO.create(password),
            new PhoneVO(phone)
        );

        replay.statusCode = 201;
    }
}
