const todoList = [
    {
        name:"Buying Food",
        dueDate:"09/22/2024" ,
    },
        {
        name:"Cooking Food",
        dueDate:"02/25/2024",
    },
        {
        name: "Wash Dishes",
        dueDate: "07/21/2024"
    }];
renderList();


document.querySelector('.js-add-tn').addEventListener('click', ()=>{
    addTodo()
   
})


function renderList(){  
    let todoListHtml ='';

    todoList.forEach((todoObject,index)=>{
       
        const {name, dueDate} = todoObject;
        const html = `
        <div>${index+1} ${name} </div>
        <div>${dueDate} </div>
        <button class="delete-btn js-delete-btn">delete</button>
        `; 
        todoListHtml += html;

    })






// for (let i = 0; i < todoList.length; i++){
//     const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
//     const {name, dueDate} = todoObject;
//     const html = `
//     <div> ${name} </div>
//     <div>${dueDate} </div>
//     <button onclick="

//     todoList.splice(${i},1);
//     renderList();
    
//     " class="delete-btn">delete</button>
//     `; 
//     todoListHtml += html;
// }

document.querySelector('.js-todo').innerHTML =todoListHtml;

document.querySelectorAll('.js-delete-btn').forEach((deleteObject, index)=>{
    deleteObject.addEventListener('click',()=>{
        todoList.splice(index,1)
        renderList();
        
    })
})
}
function addTodo(){
    const inputEl = document.querySelector('.js-input');
    const name = inputEl.value;

    const dateEl= document.querySelector(".js-date");
    const dueDate= dateEl.value;
    
    todoList.push({name, dueDate});
    console.log(todoList)

    renderList();


    inputEl.value = '';

} 

// for(let i= 1; i<=9; i++) {
//     console.log(i)
// }


// let i=1
// while(i<=9){
//     console.log('times',i);
//     i++;
// }

// const students = ['keza', 'Kalisa', 'Kaneza','Masamba'];

// for(let i= 0; i< students.length; i++) {

//     const  student = students[i];
//     console.log(student)
// }

// let marks = [1,2,3,4,5,6];
// for (let i = 0; i < marks.length; i++) {
//     const doubledMarks = marks[i]*2;
//     console.log(doubledMarks)
// }

// function calculateArray(nums){

//     let numsDoubled = [];
//     for(let i = 1; i< nums.length; i++){
//         const num = nums[i];
//         numsDoubled.push(num*2)
//     }
//     console.log(numsDoubled)

// }

// calculateArray([1,2,3,4])
// calculateArray([4,4,5,6,7,8,6,4])

// setTimeout(function(){
//     console.log("Umuganda after 3sec")

// },1000)