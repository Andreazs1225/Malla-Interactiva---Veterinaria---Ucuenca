document.addEventListener("DOMContentLoaded", () => {
  // ... (resto sin cambios hasta updateUI)

  function updateUI() {
    document.querySelectorAll(".subject").forEach((box) => {
      const key = box.dataset.key;
      const subj = subjects[key];
      const input = box.querySelector("input");

      if (completed.has(key)) {
        box.classList.remove("locked", "unlocked");
        box.classList.add("completed");
        box.style.pointerEvents = "auto";
      } else {
        const unlocked = subj.prereq.every((p) => completed.has(p));
        if (unlocked) {
          box.classList.remove("locked");
          box.classList.add("unlocked");
          box.style.pointerEvents = "auto";
        } else {
          box.classList.remove("unlocked", "completed");
          box.classList.add("locked");
          box.style.pointerEvents = "none";
        }
      }

      if (input) {
        input.disabled = box.classList.contains("locked");
      }
    });
  }

  updateUI();

  gridEl.addEventListener("click", (e) => {
    const box = e.target.closest(".subject");
    if (!box || box.classList.contains("locked")) return;
    const key = box.dataset.key;

    if (completed.has(key)) {
      completed.delete(key);
    } else {
      completed.add(key);
    }

    localStorage.setItem("malla-progress", JSON.stringify([...completed]));
    updateUI();
  });

  document.getElementById("reset").addEventListener("click", () => {
    completed.clear();
    localStorage.removeItem("malla-progress");
    localStorage.removeItem("malla-notas");
    updateUI();
    document.querySelectorAll(".subject input").forEach((i) => (i.value = ""));
  });

  // Manejo de notas
  const notas = JSON.parse(localStorage.getItem("malla-notas") || "{}");

  Object.entries(subjects).forEach(([key, subj]) => {
    const box = document.querySelector(`.subject[data-key="${key}"]`);
    const input = document.createElement("input");
    input.type = "number";
    input.placeholder = "Nota";
    input.value = notas[key] || "";
    input.addEventListener("change", () => {
      const val = parseInt(input.value);
      if (!isNaN(val)) {
        notas[key] = val;
        if (val >= 60) {
          completed.add(key);
        } else {
          completed.delete(key);
        }
        localStorage.setItem("malla-progress", JSON.stringify([...completed]));
        localStorage.setItem("malla-notas", JSON.stringify(notas));
        updateUI();
      }
    });
    box.appendChild(input);
  });
});
