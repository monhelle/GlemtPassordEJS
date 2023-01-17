
async function getUserInfo() {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value



    let result = await axios.get('http://localhost:80/logginn', {
        params: {
            email: email,
            password: password
          }
      })
      .then(function (response) {
        console.log('response', response);
      })
      .catch(function (error) {
        console.log(error);
      });

      console.log(result)
}