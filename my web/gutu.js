let x = 0
let y = 0
let z = 0
let t = 0
setInterval(kidDivMove, 5)
setInterval(secDivMove, 5)
a = setInterval(thrdDivMove, 5)

function kidDivMove() {
    document.getElementById("kidDiv").style.top = x + "px"
    if ( x !== (motherDiv.offsetHeight - kidDiv.offsetHeight)) {
        x++
    }
    else {
        clearInterval(kidDivMove)
    }
}
function secDivMove() {
    document.getElementById("secDiv").style.left = y + "px"
    if ( y !== 350) {
        y++
    }
    else {
        clearInterval(secDivMove)
    }
}
function thrdDivMove()  {
    document.getElementById("thrdDiv").style.left = z + "px"
    document.getElementById("thrdDiv").style.top = t + "px"
    if ( z !== 350 && t !== 350) {
        z++
        t++
    }
    else {
        z = 0
        t = 0
    }
    
}
function resetSecDiv() {
    y = 0
}
function resetKidDiv() {
    x = 0
}
function resetThrdDiv() {
    z = 0
    t = 0
}
function stopThrdDiv() {
    clearInterval(a)
}
function startThrdDiv() {
    a = setInterval(thrdDivMove, 5)
}
