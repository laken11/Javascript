// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯
import { monsters } from './monsters.js';

monsters.forEach((mons) => {
    showMonster(mons);
})

function showMonster(mons) {
    const monster = document.createElement('div');
    monster.className = 'monster'
    const img = document.createElement('img')
    img.src =`https://robohash.org/${mons.id}?set=set2`
    img.alt = `${mons.id}`
    const name = document.createElement('p')
    name.className = 'name'
    name.innerText = `${mons.name}`
    const email = document.createElement('p')
    email.className = 'email'
    email.innerText = `${mons.email}`
    monster.append(img, name, email)
    document.querySelector('.monsters').append(monster)

}

function notFound() {
    const notFoundDiv = document.createElement('div');
    notFoundDiv.className = 'p-5 not-found';
    notFoundDiv.style.display = 'none';
    const span = document.createElement('span');
    span.innerText = '404';
    const h1 = document.createElement('h1');
    h1.innerText = '🧟‍♂️ No Monster Found 🧟‍♂️';
    notFoundDiv.append(span, h1);
    document.querySelector('.monsters').append(notFoundDiv)
}

notFound()


document.querySelector('#search-monster').addEventListener('keyup', (e) => {
    let keyword = e.target.value.toLowerCase();
    
    let isFound = true;

    document.querySelectorAll('.monster').forEach((data) => {
        let name = data.children[1].innerText.toLowerCase();
        let email = data.children[2].innerText.toLowerCase();

        if (name.includes(keyword) || email.includes(keyword)) {
            data.style.display = 'block';
            isFound = false;
        }
        else {
            data.style.display = 'none';
        }
    })

    if (isFound) {
        console.log(document.querySelector('.not-found'))
        document.querySelector('.not-found').style.display = 'block';
    }
    else {
        console.log(document.querySelector('.not-found'))
        document.querySelector('.not-found').style.display = 'none';
    }

})


