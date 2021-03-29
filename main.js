const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

const createHtmlTemplate = todo => {

    const html = `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
    `;

    list.innerHTML += html;
};


addForm.addEventListener('submit', e => {
    e.preventDefault();

    const todo = addForm.add.value.trim();
    // it's a extra code cuz the todo.length get a number maybe 5 or 0(if be blank) and in JS 0 is false
    // if(todo.length){ createHtmlTemplate(todo); addForm.reset();} is enough
    if (todo.length == '') {
        alert("Enter your Item");
    } else {
        createHtmlTemplate(todo);
        addForm.reset();
    }
});