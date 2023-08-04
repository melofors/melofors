const imageContainer = document.querySelector(".image-container");
    const label1 = document.getElementById("label1");
    const label2 = document.getElementById("label2");

    imageContainer.addEventListener("mousemove", (event) => {
        const rect = imageContainer.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        if (mouseX > 100 && mouseX < 200 && mouseY > 50 && mouseY < 100) {
            label1.style.display = "block";
        } else {
            label1.style.display = "none";
        }

        if (mouseX > 300 && mouseX < 400 && mouseY > 150 && mouseY < 200) {
            label2.style.display = "block";
        } else {
            label2.style.display = "none";
        }
    });