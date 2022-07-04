import { RentalsRepositoryInMemory } from "@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateRentalUseCase } from "./CreateRentalUseCase"

let createRentalUseCase: CreateRentalUseCase;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;

describe("Create Rental", () => {
    beforeEach(() => {
        rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
        createRentalUseCase = new CreateRentalUseCase(rentalsRepositoryInMemory);
    })

    it(" shoud be able to create a new rental", async() => {
        const rental = await createRentalUseCase.execute({
            user_id:"12343",
            car_id: "12332123",
            expected_return_date: new Date()
        });

        expect(rental).toHaveProperty("id");
        expect(rental).toHaveProperty("start_date");
    });

    it(" shoud not be able to create a new rental if there is another open to the same user", async() => {
        
        expect(async () => {
            await createRentalUseCase.execute({
                user_id:"12343",
                car_id: "12332123",
                expected_return_date: new Date()
            });
    
            const rental = await createRentalUseCase.execute({
                user_id:"12343",
                car_id: "431431431",
                expected_return_date: new Date()
            });
        }).rejects.toBeInstanceOf(AppError)
    })

    it(" shoud not be able to create a new rental if there is another open to the same car", async() => {
        
        expect(async () => {
            await createRentalUseCase.execute({
                user_id:"213233",
                car_id: "12332123",
                expected_return_date: new Date()
            });
    
            const rental = await createRentalUseCase.execute({
                user_id:"12343",
                car_id: "12332123",
                expected_return_date: new Date()
            });
        }).rejects.toBeInstanceOf(AppError)
    })
})
