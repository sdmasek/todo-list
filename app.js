let taskInput = document.querySelector("#task-input");
const taskBtn = document.querySelector(".submit");
const listContainer = document.querySelector(".list-container");

let listGroup = document.createElement("ul");
listGroup.className = "list-group";

taskInput.addEventListener("keyUp", getWords);
taskBtn.addEventListener("click", submitTask);


function getWords() {

    let inputValue = taskInput.value;
    console.log(inputValue);

}

function submitTask() {
    let inputValue = taskInput.value;
    if (inputValue !== "") {
        listGroup.innerHTML += `<li class="list-item">${inputValue}
        <button class="delete">Trash</button></li>`;

        listContainer.appendChild(listGroup);
        setBackToDefault();
    }
    if (listGroup.innerHTML === "") {
        listContainer.removeChild(listGroup);
    }



    let trashBtn = listGroup.querySelector(".delete");
    listGroup.addEventListener("click", trashTask, { caputre: true });



}



function trashTask(e) {
    let item = e.target;
    //selecting the LI
    const trashParent = item.parentElement;
    //selcting the UL
    const trashParentUL = trashParent.parentElement;

    let trashBtn = listGroup.querySelector(".delete");


    console.log(item);
    console.log(trashParent);
    //removing only one LI
    if (trashBtn) {
        trashParentUL.removeChild(trashParent);
    }


}

function setBackToDefault() {
    taskInput.value = "";
}