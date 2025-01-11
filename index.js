async function getData() {
    const res = await fetch("http://localhost:4000/animals");
    const data = await res.json();
    console.log(data);
}

async function postData() {
    const res = await fetch("http://localhost:4000/animals", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ animal: "dog", name: "pluto", age: 14 }),
    });
    const data = await res.json();
    console.log(data);
}
postData();
getData();