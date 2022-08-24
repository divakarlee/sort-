
const courses = [
    {
     name :"JavaScript",
     price :"2.9"
    },
    {
     name : "Angular",
     price : "2.6"
    },
    {
     name : "react",
     price : "2.4"
    },
    {
     name : "HTML",
     price : "2.6"
    }
 ]
 
 function generateLIST(){
      const ul = document.querySelector(".list-group");
      ul.innerHTML =""
      courses.forEach((course=>{
         const li = document.createElement("li");
         li.classList.add("list-group-item");
 
         const name = document.createTextNode(course.name);
         li.appendChild(name);
 
         const span = document.createElement("span");
         span.classList.add("float-right")
 
         const price = document.createTextNode(course.price);
         span.appendChild(price);
 
         li.appendChild(span);
         ul.appendChild(li)
 
      }))
 }
 
 window.addEventListener("load",generateLIST);
 
 const button = document.querySelector(".sort-btn");
 
 button.addEventListener("click",()=>{
     courses.sort((a,b)=> a.price - b.price)
     generateLIST();
 });
 
 const button2 = document.querySelector(".sort-btn2");
 
 button2.addEventListener("click",()=>{
     courses.sort((a,b)=> b.price - a.price)
     generateLIST();
 })
 
 
 