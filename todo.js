var arr=[]
getfromlocal()
function addtask()
{
    
    let s=document.getElementById('inputtask').value
    if(s!="")
    {
        arr.push(s)
        let alltask=document.querySelector('.alltasks')
        let outerdiv=document.createElement('div')
        let task=document.createElement('div')
        let span=document.createElement('span')
        span.innerHTML='&#10006'
        span.id='s'+arr.length
        span.setAttribute('onclick','removetask(event)')
        outerdiv.id='task'+arr.length
        task.className='task'
        outerdiv.className='outerdiv'
        
        task.append(s)
        outerdiv.append(task)
        outerdiv.append(span)
        alltask.append(outerdiv)
        document.getElementById('inputtask').value=""
        
        localStorage.setItem('task',JSON.stringify(arr))
        updatetaskno()
    }
    
}

function enter(event){
    if(event.keyCode==13)
    {
        addtask()
    }
}


function display(s,i)
{
    let alltask=document.querySelector('.alltasks')
    let outerdiv=document.createElement('div')
    let task=document.createElement('div')
    let span=document.createElement('span')
    span.innerHTML='&#10006'
    span.id='s'+i
    span.setAttribute('onclick','removetask(event)')
    outerdiv.id='task'+i
    task.className='task'
    outerdiv.className='outerdiv'
    
    task.append(s)
    outerdiv.append(task)
    outerdiv.append(span)
    alltask.append(outerdiv)
    
}
function getfromlocal()
{
    arr=JSON.parse(localStorage.getItem('task'))
    if(arr!=null)
    {
        for(let i=0;i<arr.length;i++)
        {
            display(arr[i],i+1)
        }
        updatetaskno()
    }
    else
    {
        arr=[]
    }
}
function removetask(event)
{
    let x=event.target.id
    let d=document.querySelectorAll('.outerdiv')
    let i
    for(i=0;i<d.length;i++)
    {
        if(x.charAt(x.length-1)==d[i].id.charAt(d[i].id.length-1))
        {
            arr.splice(i,1)  
            break
        }
    }
    d[d.length-1].remove()
    d=document.querySelectorAll('.task')
    for(i=0;i<arr.length;i++)
    {
        d[i].innerHTML=arr[i]
    }
    updatetaskno()
    localStorage.setItem('task',JSON.stringify(arr))
}

function updatetaskno()
{
    document.querySelector('.totaltask').innerHTML='Total tasks <br>Remaining: '+arr.length
}