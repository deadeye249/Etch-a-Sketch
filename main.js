function createDivs(rows,columns)
{   
    let total_boxes = rows*columns;
    let container_div = document.querySelector(".container");
    for(let i=0;i<total_boxes;i++)
    {
        let new_box = document.createElement("div");
        new_box.className = "boxes";
        new_box.style.cssText= `width: ${100/columns}%; padding-bottom: ${100/columns}%;`
        container_div.appendChild(new_box);
    }
}

createDivs(5,5);