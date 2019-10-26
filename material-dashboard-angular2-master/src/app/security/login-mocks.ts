import { AppUserAuth } from "./app-user-auth";

export const LOGIN_MOCKS: AppUserAuth[] = [
    {
        userName: "admin",
        bearerToken: "abi393kdkd9393ikd",
        isAuthenticated: true,
        canAccessProduccion: true,
        canAddProduccion: true,
        canSaveProduccion: true
    },
    {
        userName: "practicante",
        bearerToken: "sd9f923k3kdmcjkhd",
        isAuthenticated: true,
        canAccessProduccion: false,
        canAddProduccion: true,
        canSaveProduccion: false
    }
];
