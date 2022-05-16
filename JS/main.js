let allList = document.querySelectorAll("li");

allList.forEach(function (e) {

   e.onclick = function (e) {
      allList.forEach(function (e) {
         e.classList.remove("active")
      })
      this.classList.add("active");
   }

})