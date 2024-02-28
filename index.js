const containerDiv = document.querySelector("#container");
const buttonGrid = document.querySelector("#button-grid");

buttonGrid.addEventListener('click', () => changeGrid());

const createGrid = (side) => {
    for (let i = 0; i < side; i++){
        const column = document.createElement("div");
        column.className = "column";
    
        for (let j = 0; j < side; j++) {
            const row = document.createElement("div");
            row.className = "row";
            row.addEventListener('mouseover', e => e.target.style.backgroundColor = 'red');
            column.appendChild(row);
        }
        containerDiv.appendChild(column);
    }
}

const changeGrid = () => {
    let side = Number(prompt("What will be the new side of the grid?"));
    console.log(side);
    while(side > 100) {
        console.log(side);
        side = Number(prompt("What will be the new side of the grid?"));
    }
    if(side){
        deleteChildren();
        createGrid(side);
    }
}

const deleteChildren = () => {
    let childColumn = containerDiv.lastElementChild;
    while(childColumn){
        let childRow = childColumn.lastElementChild;
        while(childRow){
            childColumn.removeChild(childRow);
            childRow = childColumn.lastElementChild;
        }
        containerDiv.removeChild(childColumn);
        childColumn = containerDiv.lastElementChild;
    }
}

createGrid(16);