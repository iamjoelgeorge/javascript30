let inputs = document.querySelectorAll(".controls input");

funciton handleUpdate() {
    console.log(this.value);
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));