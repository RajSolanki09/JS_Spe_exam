let users = [];

const uimaker = () => {
  document.getElementById("tableBody").innerHTML = "";
  for (let i = 0; i < users.length; i++) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = users[i].name;
    let td2 = document.createElement("td");
    td2.innerText = users[i].age;
    let td3 = document.createElement("td");
    td3.innerText = users[i].email;
    tr.append(td1, td2, td3);
    document.getElementById("tableBody").append(tr);
  }
};

const data = (e) => {
  e.preventDefault();
  let user = {
    name: document.getElementById("name").value,
    age: Number(document.getElementById("age").value),
    email: document.getElementById("email").value,
  };
  users.push(user);
};
document.getElementById("userData").addEventListener("submit", data);
