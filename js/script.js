let gridContainerEl = document.getElementById("grid-container");
let startButtonEl = document.getElementById("start");
let difficultyEl = document.getElementById("difficulty")
let newCellEl;

gridContainerEl.style.display = "none";


startButtonEl.addEventListener("click", function(){

    gridContainerEl.style.display = "flex";
    //oppure 
    //gridContainerEl.innerHTML o innerText = "";

    
    let difficulty = difficultyEl.value

    if (difficulty == "Normal") {

        let cellTotal = 100;

        //se non do let i = 1; e i < cellTotal + 1; a questo ciclo for partirà a numerarmile celle da 0 a 99
        for (let i = 1; i < cellTotal + 1; i++) {

        let newCellEl = generateCell(i);

        newCellEl.addEventListener("click", function(){
            
            newCellEl.classList.toggle("blue");
             console.log(i);
            
        })

        gridContainerEl.append(newCellEl);


    }} else if (difficulty == "Hard") {

        let cellTotal = 81;
        
        for (let i = 1; i < cellTotal + 1; i++) {
    
            let newCellEl = generateCell(i);
        
            newCellEl.addEventListener("click", function(){
                
                newCellEl.classList.toggle("blue");
                 console.log(i);
                
            })
    
            gridContainerEl.append(newCellEl);
    
        }} else if (difficulty == "Champion") {
        
        let cellTotal = 49;
        
        for (let i = 1; i < cellTotal + 1; i++) {
    
            let newCellEl = generateCell(i);
        
            newCellEl.addEventListener("click", function(){
                
                newCellEl.classList.toggle("blue");
                 console.log(i);
                
            })
    
            gridContainerEl.append(newCellEl);
    
        }

    }
    
})


function generateCell(number) {

    let cell = document.createElement("div");

    cell.classList.add("cella");

    //cell.style.backgroundColor = "yellow";

    cell.textContent = number;
    
    return cell;

}



