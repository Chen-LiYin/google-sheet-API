const validUsers = [
  { username: "admin", password: "1234" },
  { username: "user1", password: "abcd" },
];

document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = validUsers.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    sessionStorage.setItem("loggedInUser", username);
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error-msg").innerText = "帳號或密碼錯誤";
  }
});
