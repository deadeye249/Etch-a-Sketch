function createDivs(rows,columns)
{
    let container_div = document.querySelector(".container");
    for(let i=0;i<rows;i++)
    {
        let new_row = document.createElement("div");
        new_row.className = `grid-row pos${i+1}`;
        for(let j=0;j<columns;j++)
        {
            let new_column = document.createElement("div");
            new_column.className = `grid-column pos${j+1}`;
            new_row.appendChild(new_column);
        }
        container_div.appendChild(new_row);
    }

    let grid_objects = document.querySelectorAll(".grid-column");
    grid_objects.forEach(obj=>{
            obj.addEventListener("mouseenter",()=>{
            obj.style.backgroundColor = "black";
        })});

}

function destroyDivs()
{
    let container_div = document.querySelector(".container");
    container_div.replaceChildren();
}

createDivs(16,16);

let reset_object = document.querySelector("button");
reset_object.addEventListener("click",()=>{
    let input = prompt("Provide the grid size (Max: 100)");
    input = Math.min(100,input);
    input = Math.max(5,input);
    destroyDivs();
    createDivs(input,input);         
    });