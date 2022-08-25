let nameInput=document.getElementById("nameinput");
let orderInput=document.getElementById("orederinput");
let emailInput=document.getElementById("emailinput");
let errorText=document.getElementById("error");
let orderButton=document.getElementById("")
let orderArray=[];
if(localStorage.order!=null)
{
    orderArray=JSON.parse(localStorage.order)
}
else
{
    orderArray=[];
}

function Show()
{
    if(nameInput.value !="" && orderInput.value !="" && emailInput.value !="" )
    {
     let order =
         {
                ClientName:nameInput.value,
                OrderName:orderInput.value,
                Email:emailInput.value,
         }
         orderArray.push(order);
         localStorage.setItem("order",JSON.stringify(orderArray));
         ShowData();
         clearData();

     errorText.style.visibility="hidden";
    }
    else if(nameInput.value =="" || orderInput.value =="" || emailInput.value =="")
    {
        errorText.style.visibility="visible";
    }
}
function clearData()
{
    nameInput.value="";
    orderInput.value="";
    emailInput.value="";
}
function ShowData()
{
    let table="";
    for(let i=0;i<orderArray.length;i++)
    {
       table +=
       `
       <tr>
       <td>${orderArray[i].ClientName}</td>
       <td>${orderArray[i].OrderName}</td>
       <td>${orderArray[i].Email}</td>
       <td><button id="update" style="height: 25px;">update</button></td>
       <td><button id="delete" style="height: 25px;">delete</button></td>
       </tr>
      `
    }
    document.getElementById("tbody").innerHTML=table;
}
function ClearOrders()
{
    localStorage.clear();
    document.getElementById("tbody").innerHTML="";
}
ShowData();

