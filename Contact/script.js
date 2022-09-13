function sendMail(params){
    var tmpParams = {
        from_name : document.getElementById('name').value,
        email_id : document.getElementById('email').value,
        message : document.getElementById('message').value
    }
    emailjs.send('service_upp91nv', 'template_h5eg11f', tmpParams).then(function (res){
        alert("Success!" +res.status);
    })
}