document.addEventListener('DOMContentLoaded', function() {
    refreshBenevoleList()
})

const data = [
    {
        nom: "LaTortue",
        prenom: "Franklin",
        telephone: "0606060606"
    },
    {
        nom: "Lerat",
        prenom: "Splinter",
        telephone: "0707070707"
    },
    {
        nom: "Aubry",
        prenom: "Martine",
        telephone: "0706070607"
    },
    {
        nom: "Tuile",
        prenom: "Jean-Claudette",
        telephone: "0992099309"
    }
]


const refreshBenevoleList = () => {
    const list = document.getElementById('benevolesPrenom')
    while (list.firstChild) {
        list.removeChild(list.firstChild)
    }
    data.forEach((element, index) => {
        const buttonItem = document.createElement("button")
        buttonItem.textContent = 'X'
        buttonItem.onclick = () => updateBenevoleList('delete', index)
        const listItem = document.createElement("li")
        listItem.textContent = element.nom + " " + element.prenom + " " + element.telephone
        list.appendChild(listItem)
        listItem.appendChild(buttonItem)
    } )
}

const addBenevoleToData = () => {
    const action = 'add'
    const form = document.getElementById('benevoleForm')
    let firstName = document.getElementById('prenomBenevole')
    let lastName = document.getElementById('nomBenevole')
    let phone = document.getElementById('telephoneBenevole')
    
    const input = {
        nom: lastName.value,
        prenom: firstName.value,
        telephone: phone.value
    }
    
    updateBenevoleList(action, input)
}

const updateBenevoleList = (action, item) => {
    if (action == 'add') {
        data.push(item)
    }
    else if (action == 'delete') {
        data.splice(item, 1)
    }
    else {
        console.log("pas d'action précisée")
    }
    refreshBenevoleList()
}