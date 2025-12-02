// Fetch image from backend
window.onload = async () => {
    const img = document.getElementById("backend-image");
    const loader = document.getElementById("loader");
  
    try {
      const response = await fetch("http://127.0.0.1:8080/backend/static/img.jpg");
      const blob = await response.blob();
      img.src = URL.createObjectURL(blob);
  
      loader.style.display = "none";
      img.style.display = "block";
    } catch (err) {
      loader.style.display = "none";
      img.alt = "Failed to load image";
    }
  };



console.log("DevOps Final Project Loaded Successfully!");


