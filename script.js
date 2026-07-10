const scriptURL = "https://script.google.com/macros/s/AKfycbxcy0O_6KlF6YEJfkGN0k8pyc0Z63hoLVlYzDLyvut286s8c79ZxsXBIyTwcFOFR8jk/exec";

const form = document.getElementById("registerForm");
const success = document.getElementById("success");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        sex: document.getElementById("sex").value,
        country: document.getElementById("country").value,
        prefecture: document.getElementById("prefecture").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value
    };

    fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(() => {
        form.reset();
        success.style.display = "block";
    })
    .catch((error) => {
        alert("Registration failed. Please try again.");
        console.error(error);
    });
});
