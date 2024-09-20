const screen = document.querySelector(".screen");
const btn = document.querySelectorAll(".btn");

btn.forEach(buttons =>{

    buttons.addEventListener("click",() =>{
        const pressButton = buttons.textContent;

        if(buttons.id === "c"){
            screen.textContent = "0";
            return;
        }
        if(buttons.id === "delete"){
            if(screen.textContent.length === 1 || screen.textContent === "ERROR"){
                screen.textContent === "0";
            } else {
                screen.textContent.slice(0, -1)
            }
            return;
        } 

        if(buttons.id === "equals"){
            try{
                screen.textContent = eval(screen.textContent);
            } catch {
                screen.textContent = "ERROR"
            }
            return;
        } 
         
        if (screen.textContent === "0" || screen.textContent === "ERROR"){
            screen.textContent = pressButton;
        } else { 
            screen.textContent += pressButton;
        }
        

    })

})