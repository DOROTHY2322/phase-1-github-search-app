var form = document.getElementById("github-form")
if(form){
  form.addEventListener('submit',function(e){
    e.preventDefault()

    var search = document.getElementById("search").value

document.getElementsByClassName("result").innerHTML=""

fetch("https://api.github.com/search/users?q=octocat")
.then((result)=> result.json())
.then((data) =>{
  console.log(data);

  document.getElementById("result").innerHTML =`
  <img <a target="_blank" href="https://www.github.com" <img src=""></a>
  `
})

  })
}


