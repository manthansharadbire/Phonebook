function addContact() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    if (!name || !phone) {
        alert("Both fields are required!");
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `${name}: ${phone} <button class="delete-btn" onclick="deleteContact(this)">Delete</button>`;

    document.getElementById('contact-list').appendChild(li);

    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
}

function deleteContact(button) {
    const li = button.parentElement;
    li.remove();
}
