// gittest
//define UI variables
const form = document.querySelector('#task-form');
const tasklist = document.querySelector('.collection');
const cleartask = document.querySelector(".clear-tasks");
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');
loadEventListeners();
//loading event listeners function
function loadEventListeners(){
  form.addEventListener('submit',addTask);
  tasklist.addEventListener('click',removeTask);
  cleartask.addEventListener('click',clrTask);
  filter.addEventListener('keyup',Filteration);



} 


 //Add task function 
 function addTask(e){
   if(taskInput.value === ''){
     alert('Please type the task');
   }
   //create li elements
   const li = document.createElement('li');
   //add class of the added li element
   li.className = 'collection-item';
   //create text and append to list
   li.appendChild(document.createTextNode(taskInput.value));

  //create new link element
  const link = document.createElement('a');
  //link element class
  link.className='delete-item secondary-content';
  //creating small cross button to remove the task
  link.innerHTML= '<i class= "fa fa-remove"></i>';
 console.log(link)
  //append the link to li
  li.appendChild(link);
  //append li to ul
 console.log(li)
  tasklist.appendChild(li );
  //clear input
  taskInput.value= '';

  e.preventDefault();

 }
 function removeTask(e){
   if(e.target.parentElement.classList.contains('delete-item')){
     if(confirm('Are you sure?')){
       e.target.parentElement.parentElement.remove();
     }
   }

 }
 function clrTask(e){
  //  tasklist.innerHTML = '';
  while(tasklist.firstChild){
    tasklist.removeChild(tasklist.firstChild);
  }


 } function Filteration(e){
   const text = e.target.value.toLowerCase();
   console.log(text);

   document.querySelectorAll('.collection-item').forEach(
     function(task){
       const item = task.firstChild.textContent;

       if(item.toLowerCase().indexOf(text)!= -1){
         task.style.display ='block';
       }else {
         task.style.display= 'none'
       }
     }

   );
  

 }