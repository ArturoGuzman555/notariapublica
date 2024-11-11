export enum AppointmentStatus{
    ACTIVE = 'active',
    CANCELLED = 'cancelled'
}

interface ICreateAppointmentDto {
    date: string;
    time: string;
    userId: number;
    status: AppointmentStatus;
    description: string;
}

export default ICreateAppointmentDto;