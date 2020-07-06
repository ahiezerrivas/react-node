//function greeting(message) {
 // return alert(`${message} everyone`);
//}
//let greetting = (message) =>  alert(`${message} everyone`);
//geeting('Good morning');

let createBlog = (title, body) => {
  if(!title) {
    throw new Error('A title is required
