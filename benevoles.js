const data = [
    {
        nom: "LaTortue",
        prenom: "Franklin",
        description: "",
        telephone:"0606060606"
    },
    {
        nom:"Lerat",
        prenom:"Splinter",
        description:"",
        telephone:"0707070707"
    }
    ,{
        nom:"Aubry",
        prenom:"Martine",
        description:"",
        telephone:"0706070607"
    },{
        nom:"Tuile",
        prenom:"Jean-Claudette",
        description:"",
        telephone:"0992099309"
    }
]
const button = document.querySelector('button');



function supprime(i){
    let index = String(i)
  let deleteBenevole = document.getElementById(`benevole${index}`)
      console.log(`benevole${i}`)
    console.log(deleteBenevole)
    deleteBenevole.remove();
}

let benevolesList = document.getElementById("benevolesPrenom");
for (i = 0 ; i < data.length; i++) {
    console.log({i})
    let index = Number(i)
    let benevole = data[i];
    let listItem = document.createElement("li");
    let benevolePrenom = benevole.prenom
    console.log(benevolePrenom)
    let benevoleNom = benevole.nom
    console.log(benevoleNom)
    let benevoleTel = benevole.telephone
    console.log(benevoleTel)
    listItem.textContent = benevoleNom + " " + benevolePrenom + " - " + benevoleTel
    listItem.id = "benevole" + index.toString();
    let buttonItem = document.createElement("button");
    buttonItem.textContent = "x"
    buttonItem.onclick = () => supprime(index)
    listItem.appendChild(buttonItem);
    benevolesList.appendChild(listItem);
    console.log(data[i].prenom)
    console.log(i)
}
 