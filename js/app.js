const form = document.querySelector(".form")
const inpUser = document.querySelector(".form input[type=text]")
const inpPassword = document.querySelector(".form input[type=password]")


const BASE_URL = "https://dummyjson.com"

form.addEventListener("submit", e => {
    e.preventDefault()
    let user = {
        username: inpUser.value,
        password: inpPassword.value
    }
    fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
        
    })
    .then(response => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error("Invalid credentials")
        }
    })
    .then(response => {
        console.log(response);
        open("/kun.html", "_self")
        
    })
    .catch(error => {
        console.error("Error:", error);
    })
}
    
)