export interface IUserDetails {
    id: string
    createdAt: string
    createdBy: string
    updatedAt: string
    updatedBy: string
    clientId: string
    profilePhoto: string
    userName: string
    name: string
    email: string
    phone: string
    password: string
    roleId: string
    role: string
    departmentId: string
    department: string
    gender: string
    place: string
    isActive: string
}

export interface User {
    id?: string
    createdAt?: string
    createdBy?: string
    updatedAt?: string
    updatedBy?: string
    clientId?: string
    profilePhoto?: string
    photoUrl?: string
    userName?: string
    name?: string
    email?: string
    countryCode?:string;
    phone?: string
    password: string
    roleId?: string
    role?: string
    departmentId?: string
    department?: string
    gender?: string
    place?: string
    isActive?: string
}