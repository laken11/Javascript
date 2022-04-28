// let headers = document.getElementsByTagName('h1');
// headers = Array.from(headers);
// headers.forEach((header, index) => {
//     console.log(header.className);
//     header.style.color = '#fff';
//     header.style.backgroundColor = '#333';
//     header.innerText = `Hi : ${index}`
// });

// let headerByTag = console.log(document.querySelector("h1"))
// let headerById = console.log(document.querySelector("#add-post-title-id"))
// let headerByClassName = console.log(document.querySelector(".header"))
// let tbody = document.querySelector("tbody")
// tbody.children[0].innerHTML = '<span>This is my text</span>'
// console.log(tbody.firstElementChild)

{/* <tr>
              <td class="post">post 1</td>
              <td>
                <span class="fa fa-times float-right pr-3"></span>
              </td>
</tr> */}

// let tr = document.createElement('tr')
// let td1 = document.createElement('td')
// td1.className = 'post'
// td1.innerText = 'post 6'
// td1.setAttribute('title', 'post-title')
// let td2 = document.createElement('td')
// let span = document.createElement('span')
// span.classList = 'fa fa-times float-right pr-3'
// td2.append(span)
// tr.append(td1, td2)
// document.querySelector('tbody').append(tr)

// const clearBtn = document.querySelector('.clear-post')

// clearBtn.addEventListener('click', (event) => {
//     console.log(event.target.innerText);
//     event.target.style.backgroundColor = '#333'
//     console.log("Hi");
// })
const users = [
    {
        name: 'ola',
        age: 20
    },
    {
        name: 'wale',
        age: 30
    }
]

localStorage.setItem('users', JSON.stringify(users))
let usersFrom = localStorage.getItem('users')
console.log(JSON.parse(usersFrom))
            