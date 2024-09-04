const formBtn=document.querySelector(".inputForm "); 
formBtn.onsubmit=function(e){
    e.preventDefault();
    
    let textAdded=document.querySelector(".inputForm .taskText ").value;
    localStorage.setItem("TasksSaved",textAdded); 
    if(textAdded){
    const list=document.querySelector(".list");
    list.innerHTML+=`<li><input type="checkbox"><span>${textAdded}</span></li>`;
    document.querySelector(".inputForm .taskText ").value="";
    }


let checkBoxes=document.querySelectorAll(".list li input");
    for(let i=0;i<checkBoxes.length;i++)
        checkBoxes[i].onclick=deleteTask;
}
  

  

function deleteTask(e){
    const deletedTask=e.target.nextElementSibling;
    deletedTask.classList.toggle("deleteTask");
}