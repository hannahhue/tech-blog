async function newPost(event) {
  event.preventDefault();
  const title = document.querySelector("#exampleInputTitle").value.trim();

  const description = document
    .querySelector("#exampleInputDescription")
    .value.trim();

  if (title && description) {
    const response = await fetch("/api/post", {
      method: "POST",
      body: JSON.stringify({ title, description, user_id: userId }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("failed to post ):");
    }
  }
}

document.getElementById("submit").addEventListener("click", newPost);
