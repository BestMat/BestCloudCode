const admin = require('firebase-admin');
const serviceAccount = require('./cloudcode-bestmat-6cb8391fa0a7.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();
module.exports.updateProject = async function (pname, filename, code) {
    const a = db.collection(pname).doc(filename);
    const res = await a.update({code: code});
    return res;
  }