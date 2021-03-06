const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const deleteItems = document.querySelector('.delete');
const searching = document.querySelector('.search input');

// Add new Todo
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

// Delete an Item
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

// search methods
const searched = (term) => {
    Array.from(list.children)
        .filter((item) => { return item.textContent.toLowerCase().includes(term) })
        .forEach(item => { item.classList.remove('filtered') });

    Array.from(list.children)
        .filter((item) => { return !item.textContent.toLowerCase().includes(term) })
        .forEach(item => { item.classList.add('filtered') });

};

// keyup event
searching.addEventListener('keyup', () => {
    const term = searching.value.trim();
    searched(term);
});

// const searched = (searchLetter) => {
//     const filter = Array.from(list.children).filter((searchLetter) => {
//         if (searchLetter == list.children) {
//             list.children.style = "block";
//             console.log(list.children)

//         } else {
//             list.children.style = "none"
//         }
//     }).map(filter => { alert(filter.value) })
// };

// searching.addEventListener('keyup', e => {
//     e.preventDefault();

//     const searchLetter = searching.search.value.trim();
//     searched(searchLetter);
// })