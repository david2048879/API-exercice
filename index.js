// /Using the fetch api, attempt to get the users from the APIs
// and display them on the DOM using the previous functionalities (e.g createElement...)





const API_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

//USING FETCH API

 var mainUser;

fetch(API_ENDPOINT).then((Response)=>{
    return Response.json();
}).then((users)=>{
    mainUser=users;

    for(var i=0; i<users.length; i++){
    const{id,name,username, email, phone}=mainUser[i];


    //create element

    const user=document.querySelector('.getUsers');
    const userList=document.createElement('div');
    userList.className='user-List';
    user.appendChild(userList);
    
    const userId=document.createElement('p');
    userId.innerText='ID: ' + id;
    const Name=document.createElement('p');
    Name.innerHTML='name: ' +name ;
    const userName=document.createElement('p');
    userName.innerHTML='username: ' +username ;
    const userEmail=document.createElement('p');
    userEmail.innerHTML='email: ' +email ;
    const userphone=document.createElement('p');
    userphone.innerHTML='phone: ' +phone ;
   
    // console.log(userEmail);
    
    userList.appendChild(userId);
    userList.appendChild(Name);
    userList.appendChild(userName);
    userList.appendChild(userEmail);
    userList.appendChild(userphone);
  

   

    }

    
}).finally(()=>{
    console.log("done");
});
