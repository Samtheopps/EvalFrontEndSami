export interface User {
    id: number;
    firstName: string;
    lastName: string;
    image: string;
    email: string;
    age: number;
    gender: string;
    phone: string;
    username: string;
    birthDate: string;
    address: {
        address: string;
        city: string;
        postalCode: string;
        state: string;
        country: string;
    };
}
export interface UsersResponse {
    users: User[];
    total: number;
    skip: number;
    limit: number;
}