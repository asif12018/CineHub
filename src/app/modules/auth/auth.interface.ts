import { Gender } from "../../../../generated/prisma";


export interface ILoginUserPayload{
    email: string;
    password: string;
}

export interface IRegisterUserPayload{
    name: string;
    email: string;
    password: string;
    image?: string;
    gender?:Gender;
}

export interface IChangePasswordPayload {
    currentPassword: string;
    newPassword: string;
}

export interface IUpdateUserPayload {
    name?: string;
    image?: string;
    gender?:Gender;
}

export interface IVerifyEmailOtpPayload{
    email: string;
    otp: string;
}