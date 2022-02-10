fetch('https://jsonplaceholder.typicode.com/users')
.then(res => {
   if (res.ok) {
     return res.json();
   } else {
      throw {
         status: res.status,
         message: res.statusText
      }
   }
})
.then(data => {
   /* data.forEach(user => {
      document.write(user.address.city + " <br>")
   }); */
   console.log(data);
})
.catch(e => console.error(e.message))