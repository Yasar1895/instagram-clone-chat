import {
  collection,
  addDoc,
  doc,
  getDoc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";

export function listenMessages(convId, callback) {
  const q = query(
    collection(db, "conversations", convId, "messages"),
    orderBy("createdAt")
  );
  return onSnapshot(q, (snapshot) => {
    const msgs = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    callback(msgs);
  });
}

export async function sendMessage(convId, fromId, text) {
  await addDoc(collection(db, "conversations", convId, "messages"), {
    from: fromId,
    text,
    createdAt: Date.now(),
  });
}

export async function getConversation(convId) {
  const docRef = doc(db, "conversations", convId);
  const snap = await getDoc(docRef);
  return snap.exists() ? snap.data() : null;
}
