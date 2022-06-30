import { v4 as uuidV4 } from "uuid";

class Car {

    id: string;
    name: string;
    description: string;
    daily_rate: number;
    avaiable: boolean;
    license_plate: string;
    fine_aumount: number;
    brand: string;
    category_id: string;
    created_at: Date

    constructor(){
        if(!this.id){
            this.id = uuidV4();
            this.avaiable = true;
            this.created_at = new Date();
        }
    }
}

export { Car }