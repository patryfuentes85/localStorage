let nombre = document.getElementById('nombre'),
    email = document.getElementById('email'),
    enviar = document.getElementById('enviar'),
    eliminar = document.getElementById('eliminar'),
    contactos = document.getElementById('div'),
    mensaje = document.getElementById('mensaje');
// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyC30c3DZG4qgQe8BeIgL6Y_fGRes7Sk_YY",
    authDomain: "proyectoprueba-f67b1.firebaseapp.com",
    projectId: "proyectoprueba-f67b1",
    storageBucket: "proyectoprueba-f67b1.appspot.com",
    messagingSenderId: "75840391092",
    appId: "1:75840391092:web:7ba83e7ce4c7b908b814e1"
};
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   const db = firebase.firestore();
   const createUser = (user) => {
     db.collection("users")
       .add(user)
       .then((docRef) => console.log("Document written with ID: ", docRef.id))
       .catch((error) => console.error("Error adding document: ", error));
   };
   document.getElementById("enviar").addEventListener("click", (e) => {
    e.preventDefault()
    contactos.innerHTML= `Nombre = ${nombre.value}<br>
    Email = ${email.value}<br>
    Mensaje = ${mensaje.value}`;
    createUser({
       name: nombre.value,
       email: email.value,
       mensaje: mensaje.value
     });
});
function readOne(id) {
     db.collection("users")
       .doc(id)
       .get()
       .then((doc) => {
         if (doc.exists) {
           console.log("Document data:", doc.data());
         } else {
           // doc.data() will be undefined in this case
           console.log("No such document!");
         }
       })
       .catch((error) => {
         console.log("Error getting document:", error);
       });
}
function readOne(id) {
    db.collection("users")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
}
function eliminarUs(id){
    db.collection("users")
    .doc(id)
    .delete()
    .then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}
eliminar.addEventListener('click', (e)=>{
    e.preventDefault()
    eliminarUs(document.getElementById('id').value)
    console.log(document.getElementById('id').value)
});
function eliminarTodos(){
    db.collection("users").delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    })
}
let eliminarto2 = document.getElementById('eliminarto2')
eliminarto2.addEventListener('click', (e) =>{
    e.preventDefault()
    db.collection("users")
    .delete()
    .then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
})
function clearCollection(path) {
    const ref = firestore.collection(path)
    ref.onSnapshot((snapshot) => {
      snapshot.docs.forEach((doc) => {
        ref.doc(doc.id).delete()
      })
    })
}