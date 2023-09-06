/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede */






const team = [
    {
        name: 'Wayne Barnett',
        position: 'Founder & CEO',
        photo: "wayne-barnett-founder-ceo.jpg",
    },
    {
        name: 'Angela Caroll',
        position: 'Chief Editor',
        photo: "angela-caroll-chief-editor.jpg",
    },
    {
        name: 'Walter Gordon',
        position: 'Office Manager',
        photo: "walter-gordon-office-manager.jpg",
    },
    {
        name: 'Angela Lopez',
        position: 'Social Media Manager',
        photo: "angela-lopez-social-media-manager.jpg",
    },
    {
        name: 'Scott Estrada',
        position: 'Developer',
        photo: "scott-estrada-developer.jpg",
    },
    {
        name: 'Barbara Ramos',
        position: 'Graphic Designer',
        photo: "barbara-ramos-graphic-designer.jpg",
    },

];



for (const key in team) {

    console.log(key);
    console.log(team[key]);
}



const roeElement = document.querySelector('.member');


for (let i = 0; i < team.length; i++) {
    const member = team[i];

    console.log(member.name);
    console.log(member.position);
    console.log(member.photo);

    const markup =
        `<div class="col-4 mb-5">
        <div class="card">
            <img src="./assets/img/${member.photo}">
            <div class="card-body">
                <h4>${member.name}</h4>
                <p> ${member.position}</p>
            </div>
        </div>
    </div>`

    roeElement.insertAdjacentHTML('beforeend', markup);


}

document.getElementById('button').addEventListener('click', function (e) {



    let newMemberName = document.getElementById("newName").value;
    let newMemberPosition = document.getElementById("newPosition").value;
    let newPhoto = "https://picsum.photos/seed/picsum/700/400";
    let newMemberObject = {
        name: newMemberName,
        position: newMemberPosition,
        photo: newPhoto,
    }

    team.push(newMemberObject);
    console.log(team);


    




})