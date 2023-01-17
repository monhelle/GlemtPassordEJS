
async function getUserInfo() {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value



    let result = await axios.get('http://localhost:80/logginnBruker', {
        params: {
            email: email,
            password: password
          }
      })
      .then(function (request, response) {
        if(request.data === true) {
          window.location.replace("/velkommen")
        }
        // console.log('response', response, 'request', request.data);
      })
      .catch(function (error) {
        console.log(error);
      });

      console.log(result)
}