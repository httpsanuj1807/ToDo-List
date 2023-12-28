const arr=[];
const addButtonElement = document.querySelector(".add-btn");
addButtonElement.addEventListener("click", function (event) {
  const inputBoxElement = document.querySelector(".to-do-input-box");
  const todoObj = {
    taskName:'',
    dueDate:''
    };
    if(inputBoxElement.value!=''){
      todoObj.taskName=inputBoxElement.value;
      const dateBoxElement = document.querySelector(".date");
      todoObj.dueDate=dateBoxElement.value;
      arr.push(todoObj);
      inputBoxElement.value='';
      dateBoxElement.value='';
      renderTask();
    }
    else{
      addButtonError();
    }
});



function renderTask(){
    let totalHtml='';
    for(let i=0;i<arr.length;i++)
    {
        const html = `<p>${arr[i].taskName}</p><p>${arr[i].dueDate}</p>
        <button onclick="
        arr.splice(${i},1);
        renderTask(); " class="delete-btn">Delete</button>`;
        totalHtml += html;
    }
    document.querySelector(".to-do-div").innerHTML = totalHtml;
}



function addButtonError(){
    const inputBoxElement = document.querySelector(".to-do-input-box");
    inputBoxElement.classList.add('error-class');
    const mandatoryPara=document.querySelector('.mandatory-text');
    mandatoryPara.innerHTML=`<p><sup>*</sup>Task name mandatory</p>`;
}

document.querySelector('.to-do-input-box').addEventListener('click', (event)=>{
  const inputBoxElement = document.querySelector(".to-do-input-box");
  const mandatoryPara=document.querySelector('.mandatory-text');
  inputBoxElement.classList.remove('error-class');
  mandatoryPara.innerHTML='';
})



