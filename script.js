let circles = document.querySelectorAll(".circle");
let lines = document.querySelectorAll(".line");
let nextBtn = document.querySelector("#next")
let prevBtn = document.querySelector("#prev");

let currentActive = 1;


nextBtn.addEventListener("click", ()=>{
     currentActive++;
     if(currentActive > circles.length){
            currentActive = circles.length;
     }

     ui_Update()
})

prevBtn.addEventListener("click" , ()=>{
    currentActive--;
    if(currentActive < 1){
         currentActive = 1;
    }

    ui_Update()
})

function ui_Update(){
    circles.forEach((circle, index)=>{
           if(index < currentActive){
                circle.classList.add("active")
           }
           else{
               circle.classList.remove("active")
           }
    })

    lines.forEach((line, index)=>{
          if(index < currentActive-1){
                line.classList.add("active")
          }
          else{
             line.classList.remove("active")
          }
       })

       if(currentActive === 1){
           prevBtn.disabled = true;
      }
      else if(currentActive === circles.length){
          nextBtn.disabled = true;
      }
      else{
            nextBtn.disabled = false
            prevBtn .disabled = false
      }
}
