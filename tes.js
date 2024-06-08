const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const looders = document.getElementById("looders")
const container = document.getElementsByClassName("container")

let init = 0
let userData = {}

const bootSay = (data) => {
    return [
        "Halo kakak, perkenalkan nama saya DanyBot. Siapa nama kamu?",
        `Haloo ${data?.nama}, berapa usia kamu?`,
        `Ohh ${data?.usia}, hobi kamu apa yaa?`,
        `Iyaa kahh? ${data?.hobi} keren banget, btw kamu punya pacar gak??`,
        `Ohh ${data?.pacar}, yaudah kalo gitu. udahan yah?`,
        `Thank u ya ${userData.nama} udah main ke DanyBot`
    ]
}

pertanyaan.innerHTML = bootSay({})[0]

// Initialize the game
function bootStart() {
    if(jawaban.value < 1) return alert("isi jawaban dulu dongg")
    if (init === 0) {
        userData.nama = jawaban.value
    } else if (init === 1) {
        userData.usia = jawaban.value
    } else if (init === 2) {
        userData.hobi = jawaban.value
    } else if (init === 3) {
        userData.pacar = jawaban.value
    } else if (init === 4) {
        userData.nama = jawaban.value
    } else {
        bootEnd()
        console.log("Game Over");
    }
    bootDelay()
    init++
}

function bootDelay() {
    looders.style.display = "block"
    container[0].style.filter = "blur(5px)"
    setTimeout(() => {
        pertanyaan.innerHTML = bootSay(userData)[init]
        looders.style.display = "none"
        container[0].style.filter = "none"
    }, 1250)
    jawaban.value = ""
    // init++
}

// function finishing() {
//     pertanyaan.innerHTML = 
//     jawaban.value = ""
// }

function bootEnd() {
    alert(`terimakasih ${userData.nama} sudah berkenjung, dahh...`)
    window.location.reload()
}

// Add event listener for the enter key
jawaban.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        bootStart()
    }
})
