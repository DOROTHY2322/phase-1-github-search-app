var form = document.getElementById("github-form")
if(form){
  form.addEventListener('submit',function(e){
    e.preventDefault()

    var search = document.getElementById("search").value



fetch("https://api.github.com/search/users?q=octocat")
.then((result)=> result.json())
.then((data) =>{
  console.log(data);
})

  })
}


