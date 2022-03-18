const targetDiv1 = document.getElementById("dropdown-content1");
targetDiv1.style.display="none";
const btn1 = document.getElementById("drop1");
btn1.onclick = function() {
    if (targetDiv1.style.display == "none") {
        targetDiv1.style.display = "block";
        console.log("shoild be block")
    } else {
        targetDiv1.style.display = "none";
        console.log("should be none")
    }
}

const targetDiv2 = document.getElementById("dropdown-content2");
targetDiv2.style.display="none";
const btn2 = document.getElementById("drop2");
btn2.onclick = function() {
    if (targetDiv2.style.display !== "none") {
        targetDiv2.style.display = "none";
    } else {
        targetDiv2.style.display = "block";
    }
}