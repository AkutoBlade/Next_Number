function Create(){
    let container = document.getElementById("container");
    
    container.innerHTML=`<form>
    <h1>AddUp</h1>
    <label>List:
    <div id="List" type="text" placeholder="age">
     
    </div>
    <br>
    <br>
    </label>
    <label>Answer:
         <div id="Answer1" type="text">
         
        </div>
        </label>
        <label>Answer:
         <div id="Answer2" type="text">
         
        </div>
        </label>
        <label>Answer:
         <div id="Answer3" type="text">
         
        </div>
        </label>
        <br>
        <button id="Button" type="button" onclick="Converter()">Converter</button>
    </form>`
    
    }
    
    Create()
    
    const array = [1, 2, 3];
    const iterator = array.values(); 
    document.getElementById('List').innerHTML= array;   
    let one = iterator.next().value;  
    let two = iterator.next().value;
    let three = iterator.next().value;
    

function Converter(){
    document.getElementById('Answer1').innerHTML= one ; 
    document.getElementById('Answer2').innerHTML= two ; 
    document.getElementById('Answer3').innerHTML= three; 
}


