import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./UserEntity";

export enum AppointmentStatus{
    ACTIVE = 'active',
    CANCELLED = 'cancelled'}
@Entity({
    name:"appointments"
})
class Appointment {
    
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    date!: string;
    @Column()
    time!: string;
    @Column({
        default: AppointmentStatus.ACTIVE
    })
    status!: string;
    @Column()
    description!: string

    @ManyToOne(() => User, user => user.appointments)
    @JoinColumn({name: "user_id"})
    user!: User
}

export default Appointment;