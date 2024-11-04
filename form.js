
let entries = JSON.parse(localStorage.getItem("entries")); 

function MyButton(event) {
    event.preventDefault();

    let userName = document.getElementById('userName').value;
    let password = document.getElementById('password').value;

    let nameError = document.getElementById('nameError');
    let passwordError = document.getElementById('passwordError');

    let valid = true;

    if (userName.trim() === "") {
        nameError.textContent = "Username is required*";
        nameError.style.color = "red";
        nameError.style.fontSize = "13px";
        nameError.style.paddingLeft = "15px";
        valid = false;
    } else {
        nameError.textContent = '';
    }

    if (password.trim() === "") {
        passwordError.textContent = "Password is required*";
        passwordError.style.color = "red";
        passwordError.style.fontSize = "13px";
        passwordError.style.paddingLeft = "15px";
        valid = false;
    } 
    else if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters.";
        passwordError.style.color = "red";
        passwordError.style.fontSize = "13px";
        passwordError.style.paddingLeft = "15px";
        valid = false;
    }
    else {
        passwordError.textContent = '';
    }

    if (valid) {
        entries.push({ userName, password });
        localStorage.setItem("entries", JSON.stringify(entries)); 
        renderTable();
        document.getElementById('form').reset();
    }
}

function renderTable() {
    const tableBody = document.getElementById("table2");
    let rowsHTML = '';

    for (let i = 0; i < entries.length; i++) {
        rowsHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${entries[i].userName}</td>
                <td>${entries[i].password}</td>
                <td>
                    <button class="btn btn-success" onclick="editRow(${i})">Edit</button>
                    <button class="btn btn-danger" onclick="deleteRow(${i})">Delete</button>
                </td>
            </tr>
        `;
    }
    tableBody.innerHTML = rowsHTML;
}

function editRow(index) {
    document.getElementById("userName").value = entries[index].userName;
    document.getElementById("password").value = entries[index].password;
    deleteRow(index);
}

function deleteRow(index) {
    entries.splice(index, 1);
    localStorage.setItem("entries", JSON.stringify(entries)); 
    renderTable();
}

window.onload = function() {
    renderTable();
}
