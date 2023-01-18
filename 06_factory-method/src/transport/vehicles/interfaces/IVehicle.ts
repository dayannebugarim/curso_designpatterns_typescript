// Interface que é comum a todos os objetos que podem ser produzidos pelo criador e suas subclasses

export default interface IVehicle {
    startRoute(): void;
    getCargo(): void;
}