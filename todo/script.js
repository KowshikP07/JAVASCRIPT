        let btn=document.getElementById("btn");
        let show=document.getElementById("showtask");
        let texting=document.getElementById("taskin");
        btn.addEventListener("click",()=>{
            console.log(texting.value);
            let addtask=document.createElement("div");
            addtask.classList.add("addtask");
            show.appendChild(addtask);
            let para=document.createElement("p");
            para.textContent=texting.value;
            console.log(para);
            addtask.appendChild(para);
            let line=1;
            para.addEventListener("click",()=>{
                if(line===1){
                    para.style.textDecoration="line-through";
                    line=0;
                }
                else{
                    para.style.textDecoration="none";
                    line=1;
                }
            })
            let del=document.createElement("div");
            addtask.appendChild(del);
            del.classList.add("del");
            del.innerHTML=`<i class="bx bx-trash"></i> `;
            del.addEventListener("click",()=>{
                show.removeChild(addtask);
            })
            texting.value='';
        })