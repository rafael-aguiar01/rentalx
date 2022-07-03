import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase"

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {

    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        listAvailableCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory);
    });
    
    it("should be able to list all available cars", async () => {
        const car = await carsRepositoryInMemory.create({
                name:"Audi A3",
                description:"Carro top",
                daily_rate: 110.00,
                license_plate:"DEF-3455",
                fine_amount:80,
                brand:"Audi",
                category_id:"category_id"
        });
        const cars = await listAvailableCarsUseCase.execute({});

        expect(cars).toEqual([car]);
    });

    it("should be able to list all available cars by brand",  async() => {
        const car = await carsRepositoryInMemory.create({
            name:"car2",
            description:"Carro top",
            daily_rate: 110.00,
            license_plate:"DEF-123123",
            fine_amount:80,
            brand:"Audi_test",
            category_id:"category_id"
    });

    const cars = await listAvailableCarsUseCase.execute({
        brand: "Car_brand",
    });

    expect(cars).toEqual([car]);
    })

    it("should be able to list all available cars by name",  async() => {
        const car = await carsRepositoryInMemory.create({
            name:"car3",
            description:"Carro top",
            daily_rate: 110.00,
            license_plate:"DEF-127777",
            fine_amount:80,
            brand:"Audi_test",
            category_id:"category_id"
    });

    const cars = await listAvailableCarsUseCase.execute({
        name: "car3",
    });

    expect(cars).toEqual([car]);
    })

        it("should be able to list all available cars by category",  async() => {
        const car = await carsRepositoryInMemory.create({
            name:"car3",
            description:"Carro top",
            daily_rate: 110.00,
            license_plate:"DEF-127777",
            fine_amount:80,
            brand:"Audi_test",
            category_id:"123456"
    });

    const cars = await listAvailableCarsUseCase.execute({
        category_id: "12345",
    });

    expect(cars).toEqual([car]);
    })
})