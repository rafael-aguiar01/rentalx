import dayjs from "dayjs";

import { RentalsRepositoryInMemory } from "@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementation/DayjsDateProvider";
import { AppError } from "@shared/errors/AppError";

import { CreateRentalUseCase } from "./CreateRentalUseCase"
import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

let createRentalUseCase: CreateRentalUseCase;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let dayJsProvider: DayjsDateProvider;

describe("Create Rental", () => {
    const dayAdd24Hours = dayjs().add(1, "day").toDate();
    
    beforeEach(() => {
        rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        dayJsProvider = new DayjsDateProvider();
        createRentalUseCase = new CreateRentalUseCase(
            rentalsRepositoryInMemory,
            dayJsProvider,
            carsRepositoryInMemory);
    })

    it(" shoud be able to create a new rental", async() => {
        const rental = await createRentalUseCase.execute({
            user_id:"12343",
            car_id: "12332123",
            expected_return_date: dayAdd24Hours
        });

        expect(rental).toHaveProperty("id");
        expect(rental).toHaveProperty("start_date");
    });

    it(" shoud not be able to create a new rental if there is another open to the same user", async() => {
        
        expect(async () => {
            await createRentalUseCase.execute({
                user_id:"12343",
                car_id: "12332123",
                expected_return_date: dayAdd24Hours
            });
    
            const rental = await createRentalUseCase.execute({
                user_id:"12343",
                car_id: "431431431",
                expected_return_date: dayAdd24Hours
            });
        }).rejects.toBeInstanceOf(AppError)
    })

    it(" shoud not be able to create a new rental if there is another open to the same car", async() => {
        
        expect(async () => {
            await createRentalUseCase.execute({
                user_id:"213233",
                car_id: "12332123",
                expected_return_date: dayAdd24Hours
            });
    
            const rental = await createRentalUseCase.execute({
                user_id:"12343",
                car_id: "12332123",
                expected_return_date: dayAdd24Hours
            });
        }).rejects.toBeInstanceOf(AppError)
    })

    it(" shoud not be able to create a new rental with invalid return time", async() => {
        
        expect(async () => {
            await createRentalUseCase.execute({
                user_id:"1234",
                car_id: "6788676",
                expected_return_date: dayjs().toDate(),
            });
        }).rejects.toBeInstanceOf(AppError)
    })
})
