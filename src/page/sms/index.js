import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import { signInWithPhoneNumber } from "firebase/auth";

import { auth } from "../../services/firebaseConnection"

export default function PhoneSignIn() {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  if (!confirm) {
    return (
      <Button
        title="Phone Number Sign In"
        onPress={() => signInWithPhoneNumber('+5515996453463')}
      />
    );
  }

  return (
    <>
      <TextInput value={code} onChangeText={text => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </>
  );
}



// export default function PhoneSignIn() {

//   const [confirm, setConfirm] = useState(null);

//   const [code, setCode] = useState('');

//   async function signInWithPhoneNumber(phoneNumber) {
//     const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//     setConfirm(confirmation);
//   }



//   async function confirmCode() {
//     try {
//       await confirm.confirm(code);
//     } catch (error) {
//       console.log('Invalid code.');
//     }
//   }






//   return <>

//     <View style={styles.container}>

//       <View style={styles.containerSendSMS}>

//         <Text>Insira o numero do telefone</Text>


//         <TextInput
//           placeholder="DDD"
//           placeholderTextColor="#313131"
//           style={styles.input}
//         />

//         <TextInput
//           placeholder="Telefone"
//           placeholderTextColor="#313131"
//           style={styles.input}
//         />

//         <Button
//           title="ENVIAR SMS"
//           onPress={() => signInWithPhoneNumber('+5515996453463')}
//         />

//       </View>

//       <View style={styles.containerCode}>
//         <TextInput
//           placeholder='Insira o código'
//           style={styles.input}
//           value={code}
//           onChangeText={text => setCode(text)} />
//         <Button title="Confirm Code" onPress={() => confirmCode()} />
//       </View>


//     </View>



 
//   </>


// }



// const styles = StyleSheet.create({
//   container: {
//     width: "80%",
//     height: 500,
//     margin: 'auto',
//     justifyContent: "space-around",
//     alignItems: 'center'
//   },
//   containerSendSMS: {
//     width: "100%",
//     borderWidth: 1,

//   },
//   containerCode: {
//     width: "100%",
//     borderWidth: 1,
//   },
//   input: {
//     borderBottomWidth: 1,
//     borderBottomColor: "#313131",
//     marginTop: 5,
//     width: "80%",
//     height: 50
//   }
// })