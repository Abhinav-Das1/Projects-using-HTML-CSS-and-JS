let inputTask = document.querySelector("#inputTask");
let list = document.querySelector("#list");

inputTask.addEventListener("keyup", function(event){
    if(event.key === "Enter"){
        addItem(this.value);
        this.value = "";
    }
})

let addItem = (inputTask) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${inputTask} <i></i>`;

    listItem.addEventListener("click", function(){
        this.classList.toggle('done');
    })

    listItem.querySelector("i").addEventListener("click", function(){
        listItem.remove();
    })

    list.appendChild(listItem)
}