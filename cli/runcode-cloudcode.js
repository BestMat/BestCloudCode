const admin = require('firebase-admin');
const serviceAccount = require('./cloudcode-bestmat-6cb8391fa0a7.json');
var fs = require("fs");var execSync = require('child_process').execSync;
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});const db = admin.firestore();module.exports.runCode = async function(pname,id) {
    const ref = db.collection(pname).doc(id);const doc = await ref.get();if (!doc.exists) {
      var obj = {
       "code": 404,
       "message": "undefined project"
      };
      console.log(obj);} else {var res = doc.data();
        fs.appendFile(`${id}`, res.code, function (err) {
            if (err) throw err;      
            
var cmd = "node " + id;
var options = {
  encoding: 'utf8'
};
console.log(execSync(cmd, options));
          });
          
    }
  }




  
