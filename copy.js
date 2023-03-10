const copyIcons = document.querySelectorAll(".copy-icon")
const copyButtons = document.querySelectorAll(".copy-button")
const texts = document.querySelectorAll(".text")

for (let index = 0; index < copyButtons.length; index++) {
    const element = copyButtons[index];
element.addEventListener("click", (e) => {
    
    console.log(texts[index].innerHTML);
    console.log(copyButtons[index].innerHTML);
    copyButtons[index].innerHTML = "Copied!"
    navigator.clipboard.writeText(texts[index].innerHTML)
    setTimeout(addCopy, 300)
    function addCopy(){
        copyButtons[index].innerHTML = "Copy"
    }
})
    
}

