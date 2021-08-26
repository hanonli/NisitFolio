<<<<<<< HEAD
import { Entity, Column, ObjectIdColumn,OneToMany } from 'typeorm'; 
import { ObjectId } from 'mongodb';
import itest from './1test.entity';


@Entity("otest")
export class otest {
  @ObjectIdColumn()
  id?: ObjectId;
  
  @OneToMany(type => itest, photo => photo.list)
  list: itest[];

}

=======
import { Entity, Column, ObjectIdColumn,OneToMany } from 'typeorm'; 
import { ObjectId } from 'mongodb';
import itest from './1test.entity';


@Entity("otest")
export class otest {
  @ObjectIdColumn()
  id?: ObjectId;
  
  //@OneToMany(type => itest, itest => itest.list)
  @Column()
  list: itest[];

}

>>>>>>> 286637a521e1d2471ac8141c7d6651cafc14af48
export default otest;