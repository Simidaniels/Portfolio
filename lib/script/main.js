// still working on the javascript.
// alert('Hello Mr Daniel');


fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'content-Type': 'application/json' //remember when you're doing anything with json data posting to the server,
                                        // make sure you set the header to the correct content-Type of application json 
                                        // and you also need to stringify the body so you can't just send a javascript object
                                        // you have to convert it t a json string
    },
    body: JSON.stringify({
        name: 'Daniel'
    })
}) .then(res => {
       return res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.error('ERROR'))