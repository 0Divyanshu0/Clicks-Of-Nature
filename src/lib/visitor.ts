import { doc, runTransaction, getDoc } from 'firebase/firestore';
import { db } from './firebase';

const VISIT_DOC = doc(db, 'stats', 'visits');

/**
 * Increment the global visit counter. Uses a transaction so the document
 * will be created if it doesn't exist and increments atomically.
 */
export async function incrementVisit(): Promise<void> {
  await runTransaction(db, async (transaction) => {
    const snapshot = await transaction.get(VISIT_DOC);
    if (snapshot.exists()) {
      transaction.update(VISIT_DOC, { count: (snapshot.data().count || 0) + 1 });
    } else {
      transaction.set(VISIT_DOC, { count: 1 });
    }
  });
}

/**
 * Read the current visit count. Returns 0 if the document doesn't exist.
 */
export async function getVisitCount(): Promise<number> {
  const snapshot = await getDoc(VISIT_DOC);
  if (!snapshot.exists()) return 0;
  const data = snapshot.data();
  return typeof data.count === 'number' ? data.count : 0;
}
