function route(Route)
{  var xhr = new XMLHttpRequest();

    xhr.open("GET","/views/Admin/index.php");
  
    xhr.addEventListener("load",function(){
      if(this.readyState==4){
       alert("Success");
      
      }
    })
  
    xhr.send(null);
  }

