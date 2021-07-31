import { Entity , Column , ObjectIdColumn } from "typeorm";
import { ObjectId} from "mongodb";

@Entity()
export class Register{
    @ObjectIdColumn()
    id?: ObjectId;

    @Column()
    Email: string;

    @Column()
    Password: string;

}

export default Register;