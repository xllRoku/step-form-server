const Repositories = {
    UserRepository: Symbol.for('UserRepository'),
};

const UseCases = {
    UserRegisterUseCase: Symbol.for('UserRegisterUseCase'),
};

const Controllers = {
    UserRegisterController: Symbol.for('UserRegisterController'),
};

const ContainerSymbols = {
    ...Repositories,
    ...UseCases,
    ...Controllers,
};

export { ContainerSymbols };
