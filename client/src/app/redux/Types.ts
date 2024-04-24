export interface Users {
    id: number | string;
    name: string;
    email: string;
    phone: string;
};

export interface Events {
    id: number | string;
    title: string;
    city: string;
    date: string;
	content: string;
    active: boolean;
};