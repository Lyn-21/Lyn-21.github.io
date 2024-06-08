const btnlike1 = document.getElementById("btnlike1")
const btnlike1 = document.getElementById("btnlike2")
const countlikes1 = document.getElementById("countlike1")                                       
const countlikes2 = document.getElementById("countlike2")                                       

function hitlike1() {
  let nolike1 = parsent(countlike1.value) + 1
  countlike1.textContent = totallike1.toString()
}
btnlike1.addEventListener("click,hitlikes1()








const submit = document.getElementById("submit")
const comment = document.getElementById("comment")
const commentbox = document.getElementById("commentbox")
function submitcomment(){
     commentbox.textcontent += comment.value.toString() + "\n"
}
submit.addEventLister("click",submitComment)
