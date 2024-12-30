const inputBox = document.getElementById("input-box")
const listContiner = document.getElementById("list-contianer")



function addTask() {
    if(inputBox.value === ''){
        alert("Enter a valid value!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContiner.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        
    }
    inputBox.value="";
    saveData();
}


listContiner.addEventListener("click", function(o){
    if(o.target.tagName === "LI"){
        o.target.classList.toggle("checked");
        saveData();
    }
    else if(o.target.tagName==="SPAN"){
        o.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContiner.innerHTML);
}

function showData(){
    listContiner.innerHTML= localStorage.getItem("data");
}
showData();