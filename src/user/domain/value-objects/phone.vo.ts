import { VOFormatException } from '../errors/vo-format.exception';
import { ValueObject } from './value-object';

export class PhoneVO extends ValueObject<string> {
    public equals(valueObject: PhoneVO) {
        return this.value === valueObject.value;
    }

    protected assertIsValid(value: string) {
        if (value.length < 0 && value.length > 10 && value.includes(' ')) {
            throw new VOFormatException(PhoneVO.name, value);
        }
    }
}
