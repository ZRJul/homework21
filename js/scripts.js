/*Пишемо форму для реєстрації

Поля:
Ім'я, Прізвище (Текстові поля)
Дата народження (Текстове поле)
Стать (radio)
Місто (select)
Адреса (textarea)
Мови, якими володіє (checkbox)
….
Кнопка "Зберегти"

Після натискання на кнопку, замість форми повинна виводитися "таблиця" з даними, які ввів користувач.*/

function saveForm() {

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let birthDate = document.getElementById("birth").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let city = document.getElementById("city").value;
    let address = document.getElementById("address").value;
    let languages = document.querySelectorAll('input[name="languages"]:checked');

    let table = document.createElement("table");
    let tbody = document.createElement("tbody");

    let row1 = document.createElement("tr");
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");
    cell1.innerHTML = "First Name:";
    cell2.innerHTML = firstName;
    row1.appendChild(cell1);
    row1.appendChild(cell2);
    tbody.appendChild(row1);

    let row2 = document.createElement("tr");
    let cell3 = document.createElement("td");
    let cell4 = document.createElement("td");
    cell3.innerHTML = "Last Name:";
    cell4.innerHTML = lastName;
    row2.appendChild(cell3);
    row2.appendChild(cell4);
    tbody.appendChild(row2);

    let row3 = document.createElement("tr");
    let cell5 = document.createElement("td");
    let cell6 = document.createElement("td");
    cell5.innerHTML = "Date of Birth:";
    cell6.innerHTML = birthDate;
    row3.appendChild(cell5);
    row3.appendChild(cell6);
    tbody.appendChild(row3);

    let row4 = document.createElement("tr");
    let cell7 = document.createElement("td");
    let cell8 = document.createElement("td");
    cell7.innerHTML = "Gender:";
    cell8.innerHTML = gender;
    row4.appendChild(cell7);
    row4.appendChild(cell8);
    tbody.appendChild(row4);

    let row5 = document.createElement("tr");
    let cell9 = document.createElement("td");
    let cell10 = document.createElement("td");
    cell9.innerHTML = "City:";
    cell10.innerHTML = city;
    row5.appendChild(cell9);
    row5.appendChild(cell10);
    tbody.appendChild(row5);

    let row6 = document.createElement("tr");
    let cell11 = document.createElement("td");
    let cell12 = document.createElement("td");
    cell11.innerHTML = "Address:";
    cell12.innerHTML = address;
    row6.appendChild(cell11);
    row6.appendChild(cell12);
    tbody.appendChild(row6);

    let row7 = document.createElement("tr");
    let cell13 = document.createElement("td");
    let cell14 = document.createElement("td");
    cell13.innerHTML = "Knowledge of languages:";
    let languagesList = "";
    for (let i = 0; i < languages.length; i++) {
        languagesList += languages[i].value + ", ";
    }
    cell14.innerHTML = languagesList.slice(0, -2); // Видаляємо останню кому
    row7.appendChild(cell13);
    row7.appendChild(cell14);
    tbody.appendChild(row7);

    table.appendChild(tbody);


    let form = document.getElementById("registrationForm");
    form.parentNode.replaceChild(table, form);
}
