const admin = require('firebase-admin');
const serviceAccount = require('./cloudcode-bestmat-6cb8391fa0a7.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();
module.exports.createProject = async function (pname, filename, code) {
    const docRef = db.collection(pname).doc(filename);  
    await docRef.set({
     code: code,
     lang: "js"
    });
  }
