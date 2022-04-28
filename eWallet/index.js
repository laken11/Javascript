// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯

let getFormattedTime = () => {
    let now = new Date().toLocaleTimeString('en-us', {
        month: 'short',
        day: 'numeric',
        minute: '2-digit',
        hour: '2-digit'
    })

    let nowArray = now.split(",")[0].split(" ")
    let formattedDate = `${nowArray[1]} ${nowArray[0]}, ${now.split(",")[1]}`
    return formattedDate;
}

document.querySelector("#ewallet-form").addEventListener('submit', (event) => {
    event.preventDefault();
    let type = document.querySelector(".add__type").value
    let des = document.querySelector(".add__description").value
    let val = document.querySelector(".add__value").value
    if (des.length > 0 && val.length > 0) {
        addItem(type, des, val)
    }
    
})

let showItem = () => {
    let items = getItemsFromLs();
    for (const item of items) {
        const newHtml = `<div class="item">
          <div class="item-description-time">
            <div class="item-description">
              <p>${item.description}</p>
            </div>
            <div class="item-time">
              <p>${item.time}</p>
            </div>
          </div>
          <div class="item-amount ${item.type === "+" ? 'income-amount' : 'expense-amount'}">
            <p>${item.type}$${sep(item.value)}</p>
          </div>
        </div>`
    document.querySelector(".collection").insertAdjacentHTML("afterbegin", newHtml)
    }
}

let addItem = (type, description, amount) => {
    let time = getFormattedTime();
    const newHtml = `<div class="item">
          <div class="item-description-time">
            <div class="item-description">
              <p>${description}</p>
            </div>
            <div class="item-time">
              <p>${time}</p>
            </div>
          </div>
          <div class="item-amount ${type === "+" ? 'income-amount' : 'expense-amount'}">
            <p>${type}$${sep(amount)}</p>
          </div>
        </div>`
    document.querySelector(".collection").insertAdjacentHTML("afterbegin", newHtml)
    restForm()
    addItemToLS(type, description, amount, time)
    
    showTotalIncome()
    showTotalExpense()
    getTotalBalance()
}

let restForm = () => {
    document.querySelector(".add__type").value = '+'
    document.querySelector(".add__description").value = ''
    document.querySelector(".add__value").value = ''
}

let getItemsFromLs = () => {
    let items = localStorage.getItem('items');
    if (items) {
        items = JSON.parse(items)
    }
    else {
        items = []
    }
    return items
}

let addItemToLS = (type, description, value, time) => {
    let items = getItemsFromLs()
    items.push({ type, description, value, time })
    localStorage.setItem("items", JSON.stringify(items))
}

let showTotalIncome = () => {
    let items = getItemsFromLs();
    let totalIncome = 0;
    items.forEach(item => {
        if (item.type === "+") {
            totalIncome += parseInt(item.value);
        }
    });
    document.querySelector('.income__amount p').innerText = `$${sep(totalIncome)}`
}

let showTotalExpense = () => {
    let items = getItemsFromLs();
    let totalExpense = 0;
    items.forEach(item => {
        if (item.type === "-") {
            totalExpense += parseInt(item.value);
        }
    });
    document.querySelector('.expense__amount p').innerText = `$${sep(totalExpense)}`
}

let getTotalBalance = () => {
    let items = getItemsFromLs();
    let balance = 0;
    items.forEach(item => {
        if (item.type === "-") {
            balance -= parseInt(item.value);
        } else {
            balance += parseInt(item.value);
        }
    });
    document.querySelector('.balance__amount p').innerText = `$${sep(balance)}`
    document.querySelector("header").className = (balance > 0) ? 'green' : 'red'
}
let sep = (amount) => {
    amount = parseInt(amount).toLocaleString();
    return amount
}
showItem()
showTotalIncome()
showTotalExpense()
getTotalBalance()