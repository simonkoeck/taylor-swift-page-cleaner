function clearPageIfTaylorSwift() {
  if (
    document.body &&
    document.body.innerText.toLocaleLowerCase().includes("taylor swift")
  ) {
    document.body.innerText = "Nope, not this girl again.";
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", clearPageIfTaylorSwift);
} else {
  clearPageIfTaylorSwift();
}
