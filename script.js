const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const contactList = document.getElementById('contactList');

let contacts = [];

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;

    if (name && email && phone) {
        const newContact = { name, email, phone };
        contacts.push(newContact);
        displayContacts();
        contactForm.reset();
    } else {
        alert('Please fill in all fields!');
    }
});

function displayContacts() {
    contactList.innerHTML = '';
    contacts.forEach((contact, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${contact.name}</span>
            <span>${contact.email}</span>
            <span>${contact.phone}</span>
            <button onclick="editContact(${index})">Edit</button>
            <button onclick="deleteContact(${index})">Delete</button>
        `;
        contactList.appendChild(li);
    });
}

function editContact(index) {
    const { name, email, phone } = contacts[index];
    nameInput.value = name;
    emailInput.value = email;
    phoneInput.value = phone;

    contacts.splice(index, 1);
    displayContacts();
}

function deleteContact(index) {
    contacts.splice(index, 1);
    displayContacts();
}
