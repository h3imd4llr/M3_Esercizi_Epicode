const div = document.createElement("div")
div.classList.add("container")
document.body.appendChild(div)
const table = document.createElement("table")
table.classList.add("table")
table.classList.add("table-striped")
table.classList.add("table-bordered")
div.appendChild(table)

function createThead(){
    const thead = document.createElement("thead")
    table.appendChild(thead)
    const tr = document.createElement("tr")
    thead.appendChild(tr)
    for (let i = 0; i < tabella.length; i++) {
        var tab = tabella[i]
        let th = document.createElement("th")
        th.setAttribute("scope", "col")
        th.innerText = (tab)
        tr.appendChild(th)
    }
}

createThead()

function addTrack(){
    var track = document.getElementById("numeroTraccia").value
    var title = document.getElementById("titolo").value
    var art = document.getElementById("artista").value
    var trackTime = document.getElementById("durataTraccia").value
    //create Tbody
    const tbody = document.createElement("tbody")
    table.appendChild(tbody)
    const trBody = document.createElement("tr")
    trBody.setAttribute("id", track)
    tbody.appendChild(trBody)
    const thBody = document.createElement("th")
    thBody.setAttribute("scope", "row")
    thBody.innerText = (track)
    trBody.appendChild(thBody)
    let tdBody = document.createElement("td")
    let tdBody1 = document.createElement("td")
    let tdBody2 = document.createElement("td")
    let tdBodyBtn = document.createElement("td")
    let button = document.createElement("button")
    button.innerText = ("Elimina traccia")
    button.classList.add("btn")
    button.classList.add("btn-danger")
    button.setAttribute("id", "buttonDelete")
    button.addEventListener('click', function(event)
    {
        var button = event.target;
        button.parentNode.parentNode.parentNode.removeChild(button.parentNode.parentNode);
    });
    let titolo = title
    let artista = art
    let durata = trackTime
    tdBody.innerText = (titolo)
    tdBody1.innerText = (artista)
    tdBody2.innerText = (durata)
    trBody.appendChild(tdBody)
    trBody.appendChild(tdBody1)
    trBody.appendChild(tdBody2)
    trBody.appendChild(tdBodyBtn)
    tdBodyBtn.appendChild(button)
    alert("Hai aggiunto una nuova traccia: "+ titolo)
}

