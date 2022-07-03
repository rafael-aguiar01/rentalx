import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Category } from "./Category";
import { Specification } from "./Specification";

@Entity("cars")
class Car {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    daily_rate: number;
    
    @Column()
    available: boolean;
    
    @Column()
    license_plate: string;
    
    @Column()
    fine_amount: number;
    
    @Column()
    brand: string;

    @ManyToMany(() => Category)
    @JoinColumn({name: "category_id"})
    category: Category;

    @Column()
    category_id: string;

    @ManyToMany(() => Specification)
    @JoinTable({
        name: "specifications_cars", // Nome da tabela de relacionamento
        joinColumns: [{name:"car_id"}], // Nome da coluna da tabela de relacionamento que referencia essa tabela que está
        inverseJoinColumns:[{name: "specification_id"}] // Outra coluna que referencia que estamos colocando no relacionamento
    })
    specifications: Specification[];
    
    @CreateDateColumn()
    created_at: Date

    constructor(){
        if(!this.id){
            this.id = uuidV4();
            this.available = true;
        }
    }
}

export { Car }