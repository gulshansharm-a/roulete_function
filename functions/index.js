const functions = require('firebase-functions');
// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();
const database = admin.database();


exports.tryfunction= functions.https.onRequest((req, res) => {
    database.ref('ALGO_HIGH').get().then(s=>{
        var arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        var array =[];
        s.forEach(s=>{
            console.log(s)
            array.push(s);
        })
        res.send(array)
    })
});