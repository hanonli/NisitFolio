import { Column, Entity } from "typeorm";

@Entity()
class mainUserSkillAnalys {
  @Column()
  SkillName: string; 
  
  @Column()
  SkillScore: number ;
}

export default mainUserSkillAnalys ;