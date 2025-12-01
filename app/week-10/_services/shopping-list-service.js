import { db } from "../../utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";


export async function getItems(userId) {
  const items = [];

  try {
    const itemsRef = collection(db, "users", userId, "items");
    const q = query(itemsRef);

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return items;
  } catch (err) {
    console.error("Error loading items:", err);
    return [];
  }
}

export async function addItem(userId, item) {
  try {
    const itemsRef = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsRef, item);
    return docRef.id;
  } catch (err) {
    console.error("Error adding item:", err);
    throw err;
  }
}
