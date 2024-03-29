import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payment.js';
import { ListTemplate } from './classes/listTemplate.js';
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const amount = document.querySelector('#amount');
const details = document.querySelector('#details');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
