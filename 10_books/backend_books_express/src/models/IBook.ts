import { ObjectId } from "mongoose";

export interface IBook {
    id: number;
    title: string;
    isbn: string;
    authoren: string[]
}