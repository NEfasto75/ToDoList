const data = {description: "buy oatmeal", done: false};
console.log(data)
fetch('http://localhost:3000/a61e5f6b-591e-4883-af14-dba6143c09ff', {
    method: 'GET',                          //GET cannot have body
    headers: {
        "Content-Type": "application/json",
    },
    /* body: JSON.stringify(data) */

}).then (res => {
    return res.json()
                                         /* (data => console.log(data)) */
}).then (document.getElementById("getTask").innerHTML = data.description)
.catch(error => console.log(error));



const data1 = {description: "blah", done: false};
console.log(data1)
fetch('http://localhost:3000/', {
    method: 'POST',                          
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data)

}).then (res => {
    return res.json()
                                         
}).then (document.getElementById("getTask2").innerHTML = data1.description)
.catch(error => console.log(error));


fetch('http://localhost:3000/54ee771a-34bd-4bff-8268-17459ac6314f', {
    method: 'DELETE'});