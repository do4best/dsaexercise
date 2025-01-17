const users = [
    {
        name: "Meer Afzal",
        email: "do4best@gmail.com",
        job : "Developer",
        isActive : true
    },
    {
        name: "Aslum",
        email: "aslum1122@gmail.com",
        job : "Proprieter",
        isActive : false
    },
    {
        name: "Akram",
        email: "akramakram@gmail.com",
        job : "seller",
        isActive : false
    },
]
let user = []
for(let i=0; i<users.length; i++){
    if(users.isActive){
    user.push(user[i].name)}
}
console.log(user)
