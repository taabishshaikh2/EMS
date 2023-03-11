import { collection } from "firebase/firestore";
import { db } from "../firebase";

export const empCollectionRef = collection(db, "employees");