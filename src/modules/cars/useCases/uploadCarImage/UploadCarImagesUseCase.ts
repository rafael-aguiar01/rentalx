import { CarImagesRepository } from "@modules/cars/infra/typeorm/repositories/CarsImageRepository";
import { ICarsImagesRepository } from "@modules/cars/repositories/ICarsImagesRepository";
import { IStorageProvider } from "@shared/container/providers/StorageProvider/IStorageProvider";
import { inject, injectable, injectAllWithTransform } from "tsyringe";

interface IRequest {
    car_id: string;
    images_name: string[];
}

@injectable()
class UploadCarImagesUseCase{
    constructor(
        @inject("CarsImagesRepository")
        private CarImagesRepository: ICarsImagesRepository,
        @inject("StorageProvider")
        private storageProvider: IStorageProvider
    ){}
    async execute({car_id, images_name}: IRequest): Promise<void>{
        
        images_name.map(async image => {
            await this.CarImagesRepository.create(car_id, image);
            await this.storageProvider.save(image, "cars");
        });
    }
}

export { UploadCarImagesUseCase }