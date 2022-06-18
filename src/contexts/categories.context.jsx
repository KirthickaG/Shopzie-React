import { useState, useEffect, createContext } from "react";
// import SHOP_DATA from '../shop-data.js'
// import {addCollectionAndDocuments} from '../utils/firebase/firebase.utils'

import {getCategoriesDocuments} from '../utils/firebase/firebase.utils'

export const CategoriesContext = createContext(
    {
        categoriesMap : {}
    }
)

export const CategoriesProvider = ({children}) =>
{
    // To Run Below only Once to store data in DB as part of backend
    // useEffect(() => 
    // {
    //     addCollectionAndDocuments('categories',SHOP_DATA);
    // },[])
    
    const [categoriesMap, setProducts] = useState({});
    const value = {categoriesMap}

    useEffect(() =>
    {
        const getDocs = async () =>
        {
           const result =  await getCategoriesDocuments();
            setProducts(result)
        }
        getDocs();

    },[])

    return <CategoriesContext.Provider value={value}>
        {children}
    </CategoriesContext.Provider>
}