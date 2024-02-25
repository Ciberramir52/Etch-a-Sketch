const containerDiv = document.querySelector("#container");
for (let i = 0; i < 4; i++){
    const column = document.createElement("div");
    column.className = "column";

    for (let j = 0; j < 4; j++) {
        const row = document.createElement("div");
        row.className = "row";
        column.appendChild(row);
    }
    containerDiv.appendChild(column);
}
