import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react"
import { db } from "../firebase/config";


export const useQueryByName = (collectionName, queryName) => {
    const [contact, setContact] = useState({ id: '', nameContact: '', jobContact: '', numberContact: '' })

    const handleUpdate = () => {
        const ref = collection(db, collectionName)
        const q = query(ref, where('name', "==", queryName))
        getDocs(q).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setContact({ id: doc.id, nameContact: doc.data().name, jobContact: doc.data().job, numberContact: doc.data().number })
            });
        });
    }

    useEffect(() => {
        handleUpdate()
    }, [])

    return { contact, setContact }
}