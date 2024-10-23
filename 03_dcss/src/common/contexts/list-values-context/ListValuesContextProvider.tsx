import React, {PropsWithChildren, useEffect, useState} from "react";
import {ListValuesContext, listValuesContextDefaultValue, ListValuesContextValue} from "./ListValuesContext";
import {get} from "../../helpers/firebase-rest-helper/firebase-rest-helper";
import {Genre} from "../../models/genre.model";

const ListValuesContextProvider: React.FC<PropsWithChildren<{}>> = (props) => {
    const [listValues, setListValues] = useState<ListValuesContextValue>(listValuesContextDefaultValue)

    useEffect(() => {
        void (async () => {
            const genres = await get<Genre>("genres")
            const _listValues: ListValuesContextValue = {
                genres
            }
            setListValues(_listValues)
        })()
    }, [get])

    return (
        <ListValuesContext.Provider value={listValues}>
            {props.children}
        </ListValuesContext.Provider>
    )
}

export default ListValuesContextProvider
