function createNode(tag) {
   return document.createElement(tag);
}

function append(parent, el) {
    return parent.appendChild(el);
}

let ul = document.getElementById('list-group');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        let people = data;

        return people.map(person => {
            let li = createNode('li')
                span = createNode('span');

            li.innerHTML = person.name;
            span.innerHTML = person.email;

            append(li, span);
            append(ul, li);
        })
    })