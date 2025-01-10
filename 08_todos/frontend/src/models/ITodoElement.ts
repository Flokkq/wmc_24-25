import {ICategory } from "./ICategory";
import { Importance } from "./Importance";

export interface ITodoElement {
    id: number;
    title: string;
    description: string;
    catId: number;
    createDate: string;
    dueDate: string;
    isDone: boolean;
    category: ICategory;
    importance: Importance;
}
