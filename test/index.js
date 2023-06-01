function init(){
  p = document.getElementById("p");
  p.addEventListener("mouseover",
    function(){
      this.style.backgroundColor = "orchid";
    }
  );
  p.addEventListener("mouseout",
    function(){
      this.style.backgroundColor = "white";
    }
  );
}