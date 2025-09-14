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
}

createDivs(16,16);