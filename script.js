document.getElementById("color-mode-checkbox").addEventListener("change", function() {
    if (this.checked) {
        document.getElementById("myDiv").style.backgroundImage = 'None'
        document.getElementById("myDiv").style.backgroundColor = 'white'
        document.getElementById("myDiv").style.color = 'black'
    }else{
        document.getElementById("myDiv").style.backgroundImage = 'linear-gradient(to right, #e66465, #090f53)'
        document.getElementById("myDiv").style.backgroundColor = 'black'
        document.getElementById("myDiv").style.color = 'whitesmoke'
    }
    
}
)