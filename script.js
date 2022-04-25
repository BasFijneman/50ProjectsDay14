const toggles = document.querySelectorAll(".icon")

toggles.forEach(toggles => {
    toggles.addEventListener("click", () => {
        toggles.parentNode.classList.toggle("active")
    })
});