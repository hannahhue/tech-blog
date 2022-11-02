async function deletePost(event) {
  event.preventDefault();
  console.log("hi");
  const res = await fetch(`/api/post/${event.target.getAttribute("id")}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to delete!");
  }
}

//on click do function
[...document.querySelectorAll(".deletebtn")].forEach((el) => {
  el.addEventListener("click", deletePost);
});
