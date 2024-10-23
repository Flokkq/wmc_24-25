import {Genre} from "../../models/genre.model";
import {createContext, useContext} from "react";

export interface ListValuesContextValue {
    genres: Genre[]
}

export const listValuesContextDefaultValue: ListValuesContextValue = {
    genres: []
}

export const ListValuesContext = createContext<ListValuesContextValue>(listValuesContextDefaultValue)
export const useListValuesContext = (): ListValuesContextValue => useContext(ListValuesContext)
