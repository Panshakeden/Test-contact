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

