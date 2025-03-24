 const STORAGE_KEY = 'feedback-form-state';


const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageTextarea = form.elements.message;


let formData = {
  email: '',
  message: '',
};


const saveToLocalStorage = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};


const updateFormData = event => {
  formData[event.target.name] = event.target.value;
  saveToLocalStorage();
};


emailInput.addEventListener('input', updateFormData);
messageTextarea.addEventListener('input', updateFormData);

const populateFormFromLocalStorage = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email;
    messageTextarea.value = formData.message;
  }
};


populateFormFromLocalStorage();


form.addEventListener('submit', event => {
  event.preventDefault();

 
  if (!formData.email || !formData.message) {
    alert('Будь ласка, заповніть усі поля.');
    return;
  }

 
  console.log('Дані форми:', formData);


  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
});
 <script type="module" src="./js/form.js"></script>