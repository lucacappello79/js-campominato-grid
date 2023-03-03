let gridContainerEl = document.getElementById("grid-container");
let startButtonEl = document.getElementById("start");
let cellTotal = 100
let newCellEl;

gridContainerEl.style.display = "none";

startButtonEl.addEventListener("click", function(){

    gridContainerEl.style.display = "flex";

    for (let i = 0; i < cellTotal; i++) {

        let newCellEl = generateCell(i);

        
        newCellEl.addEventListener("click", function(){
            
            newCellEl.classList.toggle("blue");
            
        })

        gridContainerEl.append(newCellEl);

    }


})







function generateCell(number) {

    let cell = document.createElement("div");

    cell.classList.add("cella");

    //cell.style.backgroundColor = "yellow";

    cell.textContent = number;
    
    return cell;

}