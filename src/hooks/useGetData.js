import { collection, getDocs, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase/config"

export const useGetData = (collectionName) => {


    const [data, setData] = useState([])

    useEffect(() => {
        const ref = collection(db, collectionName)
        const getContacts = () => {
            onSnapshot(ref, (querySnapshot) => setData(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))

            ))
        }
        getContacts()

    }, [collectionName])
    return { data }
}






