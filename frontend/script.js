const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "Light Mode";
  } else {
    toggleBtn.textContent = "Dark Mode";
  }
});

