const scriptURL = "https://script.google.com/macros/s/AKfycbzJtZOdm3C5E1FaGe_d9vOQyPBefJGREZ3Zu93ovIFk-2H2wzxjTIT5Swn8H4-3TbeC/exec";

const form = document.getElementById("registerForm");
const success = document.getElementById("success");

form.addEventListener("submit", function(e) {
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
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain"
    },
    body: JSON.stringify(data)
  })
  .then(() => {
    form.reset();
    success.style.display = "block";
  })
  .catch(err => {
    alert("Registration failed");
    console.error(err);
  });
});
