let inputs = document.querySelectorAll("#controls input");


inputs.forEach(item => item.addEventListener("change", update));
inputs.forEach(item => item.addEventListener("mousemove", update));

function update() {
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}