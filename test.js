const EventEmitter=require('events');
class MyownEmitterClass extends EventEmitter {}
const myEmitter = new MyownEmitterClass();

myEmitter.on('cloudSEK',()=>{
  console.log("hey the best practise");
})
myEmitter.emit('cloudSEK')

// function Pro(a) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (a == 5) resolve(`hey the num is ${a}`);
//       reject(`hey the num is ${a}  and not 5`);
//     }, 2000);
//   });
// }

// async function checking(a) {
//   console.log("Entering thi fn bro");
//   console.log("Entering thi fn bro");
//   console.log("Entering thi fn bro");
//   try {
//     console.log("into the try Block before await");
//     const rst = await Pro(a);
//     console.log(rst);
//     console.log("into the try Block After await");
//   } catch (err) {
//     console.log(err);
//   }
//   console.log("Exciting thi fn bro");
//   console.log("Entg thi fn bro");
//   console.log("exiting thi fn bro");
// }

//checking(5);
console.log("hello ji kaise ho aap");
