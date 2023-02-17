import { EmailVO } from '../value-objects/email.vo';
import { NameVO } from '../value-objects/name.vo';
import { PasswordVO } from '../value-objects/password.vo';
import { PhoneVO } from '../value-objects/phone.vo';
import { PlainPasswordVO } from '../value-objects/plain-password.vo';
import { UuidVO } from '../value-objects/uuid.vo';

export class UserModel {
    /**
     * Constructor
     * @param id User unique identifier
     * @param name User name
     * @param email User email
     * @param password User hashed password
     * @param profilePic User profile picture URL
     */
    constructor(
        public readonly id: UuidVO,
        public name: NameVO,
        public email: EmailVO,
        public password: PasswordVO,
        public phone: PhoneVO
    ) {}

    static createUser(
        id: UuidVO,
        name: NameVO,
        email: EmailVO,
        password: PasswordVO,
        phone: PhoneVO
    ) {
        return new UserModel(id, name, email, password, phone);
    }

    public comparePassword(password: PlainPasswordVO) {
        return this.password.compare(password);
    }
}
