const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname")




function getData() {
    fetch("http://localhost:3000/data")
        .then(res => res.json())
        .then(data => console.log(data))
};


function postData() {
    fetch("http://localhost:3000/post", {
        method: "POST",
        body: JSON.stringify({
            firstname: fname.value,
            lastNmame: lname.value
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

