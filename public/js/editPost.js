//create input form
function openMenu(event) {
  event.preventDefault();

  const formHolder = document.getElementById("formHolder");
  const descriptionInput = document.createElement("input");

  descriptionInput.setAttribute("class", "form-control");
  descriptionInput.setAttribute("type", "text");
  descriptionInput.setAttribute("placeholder", "Description Input");
  descriptionInput.setAttribute("id", "descriptionInput");

  const submitBtn = document.createElement("button");

  submitBtn.setAttribute("class", "submitBtn");
  submitBtn.setAttribute("id", event.target.getAttribute("id"));

  submitBtn.innerText = "Submit";

  formHolder.appendChild(descriptionInput);
  formHolder.appendChild(submitBtn);

  [...document.querySelectorAll(".submitBtn")].forEach((el) => {
    el.addEventListener("click", editPost);
  });
}

//take info from form and replace old info
async function editPost(event) {
  event.preventDefault();

  const description = document.getElementById("descriptionInput").value.trim();

  const res = await fetch(`/api/post/${event.target.getAttribute("id")}`, {
    method: "PUT",
    body: JSON.stringify({ description }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to update!");
  }
}

[...document.querySelectorAll(".editbtn")].forEach((el) => {
  el.addEventListener("click", openMenu);
});
