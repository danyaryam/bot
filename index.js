const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const looders = document.getElementById("looders")
const container = document.getElementsByClassName("container")

let init = 0

const bootSay = () => {
    return [
        "Halo kakak, perkenalkan nama saya DanyBot. Siapa nama kamu?",
        `haloo ${data?.nama}, berapa usia kamu?`,
        `Ohh ${data?.usia}, hobi kamu apa yaa?`,
        `Iyaa kahh? ${data?.hobi} keren banget, btw kamu punya pacar gak??`,
        `Ohh ${data?.pacar}, yaudah kalo gitu. udahan yah?`
    ]
}

pertanyaan.innerHTML = bootSay()[0]

let userData= []

// Initialize the game
function bootStart() {
    if(jawaban.value < 1) return alert("isi jawaban dulu dongg")
    init++
    if (init === 1) {
        bootDelay({ nama: jawaban.value})
    } else if (init === 2) {
        bootDelay({ usia: jawaban.value})
    } else if (init === 3) {
        bootDelay({ hobi: jawaban.value})
    } else if (init === 4) {
        bootDelay({ pacar: jawaban.value})
    } else if (init === 5) {
        finishing()
    } else {
        bootEnd()
        console.log("Game Over");
    }
}

function bootDelay(jawabanUser) {
    looders.style.display = "block"
    container[0].style.flter = "blur(8px)"
    setTimeout(() => {
        pertanyaan.innerHTML = bootSay(jawabanUser)[init]
        looders.style.display = "none"
        container[0].style.flter = "none"
    }, [1250])
    userData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
    pertanyaan.innerHTML = `Thank u ya ${userData[0]} udah main ke DanyBot`
    jawaban.value = "siap thanks yaaa..."
}

function bootEnd() {
    alert(`terimakasih ${userData[0]} sudah berkenjung, dahh...`)
    window.location.reload()
}

// nih bonus blablablabla, di save yaa
// tambahkan nanti di finishing