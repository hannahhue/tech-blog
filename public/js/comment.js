//when clicked create input text then place that in container
async function commentForm(event) {
  event.preventDefault();
  const commentText = document.querySelector("#exampleInputText").value.trim();
}

document.getElementById("submit").addEventListener("click", commentForm);
