

let links = [document.querySelectorAll('.searchable')]
let videos = {}

for (let i = 0; i < links.length; i++) {
    for (let j = 0; j < links[i].length; j++) {
        let text = links[i][j].innerText.toLowerCase()

        let location = links[i][j].href
        videos[text] = location
    }
}

let subbutton = document.getElementById('submit')
let input = ""
let searchbar = document.getElementById('searchbar')

subbutton.addEventListener('click', () => {
    input = searchbar.value.toLowerCase()
    let found = search(videos, input)
    updateTable(found)


})



function search(dict, input) {
    list = Object.keys(dict)
    let matches = {}
    for (let i = 0; i < list.length; i++) {
        if (list[i].includes(input)) {
            matches[list[i]] = dict[list[i]]
        }
    }
    return matches
}





function updateTable(dict) {
    let table = document.getElementById('tbody')
    tbody.innerHTML = ''
    for (let i = 0; i < Object.keys(dict).length; i++) {
        let tr = document.createElement('tr')
        let td = document.createElement('td')
        let link = document.createElement('a')
        link.href = dict[Object.keys(dict)[i]]
        link.innerText = Object.keys(dict)[i]
        link.classList.add('h4', 'text-decoration-none', 'nav-item', 'text-capitalize')

        let random = Math.floor(Math.random() * 900 + 100)
        if (random == 123) {
            link.innerText = Object.keys(dict)[i] + " ..... Whoa"
        }

        td.appendChild(link)
        tr.appendChild(td)
        table.appendChild(tr)
    }
}
k = search(videos, '')
updateTable(k)
