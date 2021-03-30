const admin = require('firebase-admin');
const serviceAccount = require('./cloudcode-bestmat-6cb8391fa0a7.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});const db = admin.firestore();var print = (a) => { console.log(a) };module.exports.readCode = async function(pname,id) {
    const ref = db.collection(pname).doc(id);
    const doc = await ref.get();
    if (!doc.exists) {
      var obj = {
       "code": 404,
       "message": "undefined project"
      };
      console.log(obj);
    } else {
      var res = doc.data();
      print(res);
      return res
    }
  }



  
