function gamePause() {
  const gamePause = document.addEventListener("keydown", (event) => {
    if (event.key === "p") {
      alert("pause");
    }
  });
  return gamePause;
}
gamePause();
