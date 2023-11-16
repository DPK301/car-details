function store(){
    var details={
        brand:brand.value,
        price:price.value,
        key:key.value
    }
    console.log(details);
    if(details.brand==''||details.price==''||details.key==''){
        alert('Please enter all details')
    }
    else{
        if(details.key in localStorage){
            alert("Key already exists")
        }else{
            localStorage.setItem(details.key,JSON.stringify(details));
            document.getElementById('form1').reset();
            alert('Details added successfully');
       
    
        }

    }
}

function search(){
    let a=retrieve.value;
    console.log(a);
    if(a in localStorage){
        var data=JSON.parse(localStorage.getItem(a));
        view.innerHTML=`<div class="card" style="width: 100% ">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Brand:${data.brand}</li>
          <li class="list-group-item">Price:${data.price}</li>
          <li class="list-group-item">Key:${data.key}</li>
        </ul>
      </div>`
      retrieve.value='';
    }
    else{
         retrieve.value=' ';
        alert('key not found');
       
    }

}

function remove(){
    localStorage.removeItem(move.value)
    move.value="";
    alert('Details removed successfully')
   
}

function clearall(){
    var c=confirm("Are you confirm ")
    if(c){
        localStorage.clear();
    }

}