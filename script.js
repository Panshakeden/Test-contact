//getting input id
const contactForm= document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const contactList = document.getElementById('contactList');
 
//declearing as an array
let contacts= [];

contactForm.addEventListener('submit',(e)=>{
    e.preventDefault();

// getting contact value
const name = nameInput.value;
const email = emailInput.value;
const phone = phoneInput.value;

// condition for validation
if (name && email && phone) {
    const newContact={name,email,phone}
    contacts.push(newContact);
   //creating a function to handle display of contact
   displayContacts();
    contactForm.reset();
} else {
    alert('Please kindly add all fields')
    
}
});

//display function
function displayContacts(){
    contactList.innerHTML=" ";
    contacts.forEach((contact,index)=>{
        const li= document.createElement('li');

        li.innerHTML=`
        <span>${contact.name}</span> <br>
        <span>${contact.email}</span> <br>
        <span>${contact.phone}</span>
        
        ///button for edit and delete
        <button onclick="editContact(${index})">Edit</button>
            <button onclick="deleteContact(${index})">Delete</button>
    `;
    contactList.appendChild(li)
        });
}

//edit form function
function editContact(index){
    const{name,email ,phone}=[index];
    nameInput.value=name;
    emailInput.value=email;
    phoneInput.value=phone;

    contacts.splice(index,1);
    displayContacts();
}
