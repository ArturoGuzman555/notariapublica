import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Credential from "./CredentialsEntity";
import Appointment from "./AppointmentEntity";

@Entity({
    name: "users"
})
class User {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    name!: string;
    @Column()
    email!: string;
    @Column()
    birthdate!: string;
    @Column()
    nDni!: number;
    
    @OneToOne(() => Credential)
    @JoinColumn({name: "credential_id"})
    credential!: Credential;

    @OneToMany(() => Appointment, appointment => appointment.user)
    @JoinColumn({name: "appointment_id"})
    appointments!: Appointment[];
}

export default User