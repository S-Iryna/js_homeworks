var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

var regex = /^[A-Za-z0-9]+(\.[A-Za-z0-9]+)*@(gmail\.com|yahoo\.com)$/;

var trustedEmails = [];

for (var i = 0; i < arr.length; i++) {
    var email = arr[i].email;
    if (regex.test(email)) {
        trustedEmails.push(email);
    }
}

console.log(trustedEmails);