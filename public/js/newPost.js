async function newPost(event) {
  event.preventDefault();
  const title = document.querySelector("#exampleInputTitle").value.trim();

  const description = document
    .querySelector("#exampleInputDescription")
    .value.trim();

  if (descriptionText) {
    const response = await fetch("/dashboard/post", {
      method: "POST",
      body: JSON.stringify({ title, description, user_id: userId }),
      headers: { "Content-Type": "application/json" },
    });
  }
}

document.getElementById("submit").addEventListener("click", newPost);
