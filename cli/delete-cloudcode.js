const admin = require('firebase-admin');
const serviceAccount = require('./cloudcode-bestmat-6cb8391fa0a7.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();
module.exports.deleteFile = async function (p,f) {
  const res = await db.collection(p).doc(f).delete();
  console.log('Delete: ', res);
}