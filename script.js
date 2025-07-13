document.addEventListener("DOMContentLoaded", () => {
  /**
   * Catálogo de materias y prerrequisitos
   * key: id interno (string sin espacios)
   * name: nombre visible
   * prereq: lista de ids que deben estar completados
   */
  const subjects = {
    // Primer ciclo
    matematica_aplicada: {
      name: "Matemática Aplicada",
      prereq: [],
    },
    quimica_biofisica: {
      name: "Química Biofísica",
      prereq: [],
    },
    anatomia_animal_i: {
      name: "Anatomía Animal I",
      prereq: [],
    },
    introduccion_med_vet: {
      name: "Introducción a la Medicina Veterinaria",
      prereq: [],
    },
    embriologia_histologia_animal: {
      name: "Embriología e Histología Animal",
      prereq: [],
    },
    expresion_oral_escrita: {
      name: "Expresión Oral y Escrita",
      prereq: [],
    },
    biologia_celular_molecular: {
      name: "Biología Celular y Molecular",
      prereq: [],
    },

    // Segundo ciclo
    anatomia_animal_ii: {
      name: "Anatomía Animal II",
      prereq: ["anatomia_animal_i"],
    },
    bioquimica_i: {
      name: "Bioquímica I",
      prereq: ["quimica_biofisica"],
    },
    practicas_laborales_i: {
      name: "Prácticas Laborales I",
      prereq: [],
    },
    metodologia_investigacion: {
      name: "Metodología de la Investigación",
      prereq: ["matematica_aplicada", "expresion_oral_escrita"],
    },
    ecologia_ambiente: {
      name: "Ecología y Ambiente",
      prereq: [],
    },
    derechos_humanos: {
      name: "Derechos Humanos y Ciudadanía",
      prereq: [],
    },

    // Tercer ciclo
    microbiologia: {
      name: "Microbiología",
      prereq: ["bioquimica_i"],
    },
    bioquimica_ii: {
      name: "Bioquímica II",
      prereq: ["bioquimica_i"],
    },
    fisiologia_animal_i: {
      name: "Fisiología Animal I",
      prereq: ["anatomia_animal_ii"],
    },
    etologia_bienestar_animal: {
      name: "Etología y Bienestar Animal",
      prereq: [],
    },
    bioestadistica: {
      name: "Bioestadística",
      prereq: ["metodologia_investigacion"],
    },
    pastos_forrajes: {
      name: "Pastos y Forrajes",
      prereq: ["ecologia_ambiente"],
    },

    // Cuarto ciclo
    fisiologia_animal_ii: {
      name: "Fisiología Animal II",
      prereq: ["fisiologia_animal_i"],
    },
    inmunologia: {
      name: "Inmunología",
      prereq: ["bioquimica_ii"],
    },
    genetica_mejoramiento: {
      name: "Genética y Mejoramiento Animal",
      prereq: [
        "embriologia_histologia_animal",
        "biologia_celular_molecular",
        "fisiologia_animal_i",
      ],
    },
    nutricion_animal: {
      name: "Nutrición Animal",
      prereq: ["bioquimica_ii", "pastos_forrajes"],
    },
    equinos: {
      name: "Equinos",
      prereq: [],
    },
    analisis_diseno_exper: {
      name: "Análisis y Diseño de Experimentos",
      prereq: ["bioestadistica"],
    },

    // Quinto ciclo
    bioetica_legislacion: {
      name: "Bioética y Legislación Agropecuaria",
      prereq: ["etologia_bienestar_animal"],
    },
    proped_semio_zootecnicos: {
      name: "Proped. y Sem. Animales de Interés Zootécnico",
      prereq: ["fisiologia_animal_ii"],
    },
    fisiopatologia: {
      name: "Fisiopatología",
      prereq: ["fisiologia_animal_ii"],
    },
    farmacologia_i: {
      name: "Farmacología y Toxicología I",
      prereq: ["bioquimica_ii"],
    },
    porcinos: {
      name: "Porcinos",
      prereq: ["ecologia_ambiente", "etologia_bienestar_animal"],
    },
    practicas_laborales_ii: {
      name: "Prácticas Laborales II",
      prereq: ["practicas_laborales_i"],
    },
    caviacultura: {
      name: "Caviacultura",
      prereq: ["biologia_celular_molecular"],
    },

    // Sexto ciclo
    parasitologia_enfermedades: {
      name: "Parasitología y Enfermedades Parasitarias",
      prereq: [
        "inmunologia",
        "farmacologia_i",
        "proped_semio_zootecnicos",
      ],
    },
    proped_semio_compania: {
      name: "Proped. y Sem. Animales de Compañía",
      prereq: ["proped_semio_zootecnicos"],
    },
    anestesiologia: {
      name: "Itinerario 2: Anestesiología",
      prereq: [],
    },
    patologia: {
      name: "Patología",
      prereq: ["fisiopatologia"],
    },
    enfermedades_infecciosas_i: {
      name: "Enfermedades Infecciosas I",
      prereq: ["inmunologia", "farmacologia_i"],
    },
    farmacologia_ii: {
      name: "Farmacología y Toxicología II",
      prereq: ["farmacologia_i"],
    },

    // Séptimo ciclo
    bovinos: {
      name: "Bovinos",
      prereq: ["nutricion_animal"],
    },
    enfermedades_infecciosas_ii: {
      name: "Enfermedades Infecciosas II",
      prereq: [
        "parasitologia_enfermedades",
        "enfermedades_infecciosas_i",
      ],
    },
    reproduccion_animal: {
      name: "Reproducción Animal",
      prereq: ["genetica_mejoramiento", "farmacologia_ii"],
    },
    diagnostico_imagen: {
      name: "Diagnóstico por Imagen",
      prereq: ["proped_semio_compania"],
    },
    practicas_laborales_iii: {
      name: "Prácticas Laborales III",
      prereq: ["practicas_laborales_ii"],
    },
    patologia_clinica: {
      name: "Patología Clínica",
      prereq: ["patologia"],
    },

    // Octavo ciclo
    fauna_silvestre: {
      name: "Fauna Silvestre",
      prereq: ["etologia_bienestar_animal", "ecologia_ambiente"],
    },
    produccion_patologia_aviar: {
      name: "Producción y Patología Aviar",
      prereq: ["patologia_clinica"],
    },
    calidad_produccion_pecuaria: {
      name: "Calidad de la Producción Pecuaria",
      prereq: ["enfermedades_infecciosas_ii", "bioetica_legislacion"],
    },
    cirugia_i: {
      name: "Cirugía I",
      prereq: ["diagnostico_imagen"],
    },
    medicina_interna_compania: {
      name: "Medicina Interna Animales Compañía",
      prereq: ["proped_semio_compania"],
    },
    proyectos_pecuarios: {
      name: "Proyectos Pecuarios",
      prereq: ["analisis_diseno_exper"],
    },
    diseno_anteproyectos: {
      name: "Diseño de Anteproyectos",
      prereq: ["analisis_diseno_exper"],
    },

    // Noveno ciclo
    epidemiologia_salud: {
      name: "Epidemiología y Salud Pública",
      prereq: ["bioetica_legislacion"],
    },
    cirugia_ii: {
      name: "Cirugía II",
      prereq: ["cirugia_i"],
    },
    medicina_interna_zootecnicos: {
      name: "Medicina Interna Animales Interés Zoot.",
      prereq: ["proped_semio_zootecnicos", "farmacologia_ii"],
    },
    medicina_interna_compania_ii: {
      name: "Itinerario 2: Medicina Interna Compañía II",
      prereq: ["anestesiologia"],
    },
    practicas_servicio_comunitario: {
      name: "Prácticas de Servicio Comunitario",
      prereq: [],
    },
    desarrollo_tic_i: {
      name: "Desarrollo TIC I",
      prereq: ["diseno_anteproyectos"],
    },

    // Décimo ciclo
    traumatologia: {
      name: "Itinerario 2: Traumatología",
      prereq: ["medicina_interna_compania_ii"],
    },
    practicas_laborales_iv: {
      name: "Prácticas Laborales IV",
      prereq: ["practicas_laborales_iii"],
    },
    extension_rural: {
      name: "Extensión Rural",
      prereq: [],
    },
    desarrollo_tic_ii: {
      name: "Desarrollo TIC II",
      prereq: ["desarrollo_tic_i"],
    },
    emprendimiento_gestion: {
      name: "Emprendimiento y Gestión Empresa Pecuaria",
      prereq: ["proyectos_pecuarios"],
    },
  };

  /**
   * Estructura visual por ciclos
   */
  const cycles = [
    {
      title: "Primer Ciclo",
      items: [
        "matematica_aplicada",
        "quimica_biofisica",
        "anatomia_animal_i",
        "introduccion_med_vet",
        "embriologia_histologia_animal",
        "expresion_oral_escrita",
        "biologia_celular_molecular",
      ],
    },
    {
      title: "Segundo Ciclo",
      items: [
        "anatomia_animal_ii",
        "bioquimica_i",
        "practicas_laborales_i",
        "metodologia_investigacion",
        "ecologia_ambiente",
        "derechos_humanos",
      ],
    },
    {
      title: "Tercer Ciclo",
      items: [
        "microbiologia",
        "bioquimica_ii",
        "fisiologia_animal_i",
        "etologia_bienestar_animal",
        "bioestadistica",
        "pastos_forrajes",
      ],
    },
    {
      title: "Cuarto Ciclo",
      items: [
        "fisiologia_animal_ii",
        "inmunologia",
        "genetica_mejoramiento",
        "nutricion_animal",
        "equinos",
        "analisis_diseno_exper",
      ],
    },
    {
      title: "Quinto Ciclo",
      items: [
        "bioetica_legislacion",
        "proped_semio_zootecnicos",
        "fisiopatologia",
        "farmacologia_i",
        "porcinos",
        "practicas_laborales_ii",
        "caviacultura",
      ],
    },
    {
      title: "Sexto Ciclo",
      items: [
        "parasitologia_enfermedades",
        "proped_semio_compania",
        "anestesiologia",
        "patologia",
        "enfermedades_infecciosas_i",
        "farmacologia_ii",
      ],
    },
    {
      title: "Séptimo Ciclo",
      items: [
        "bovinos",
        "enfermedades_infecciosas_ii",
        "reproduccion_animal",
        "diagnostico_imagen",
        "practicas_laborales_iii",
        "patologia_clinica",
      ],
    },
    {
      title: "Octavo Ciclo",
      items: [
        "fauna_silvestre",
        "produccion_patologia_aviar",
        "calidad_produccion_pecuaria",
        "cirugia_i",
        "medicina_interna_compania",
        "proyectos_pecuarios",
        "diseno_anteproyectos",
      ],
    },
    {
      title: "Noveno Ciclo",
      items: [
        "epidemiologia_salud",
        "cirugia_ii",
        "medicina_interna_zootecnicos",
        "medicina_interna_compania_ii",
        "practicas_servicio_comunitario",
        "desarrollo_tic_i",
      ],
    },
    {
      title: "Décimo Ciclo",
      items: [
        "traumatologia",
        "practicas_laborales_iv",
        "extension_rural",
        "desarrollo_tic_ii",
        "emprendimiento_gestion",
      ],
    },
  ];

  const gridEl = document.getElementById("grid");

  // Construir la malla en el DOM
  cycles.forEach((cycle) => {
    const section = document.createElement("section");
    section.className = "cycle";

    const h2 = document.createElement("h2");
    h2.textContent = cycle.title;
    section.appendChild(h2);

    cycle.items.forEach((key) => {
      const subj = subjects[key];
      const box = document.createElement("div");
      box.className = "subject";
      box.dataset.key = key;
      box.textContent = subj.name;
      section.appendChild(box);
    });

    gridEl.appendChild(section);
  });

  // Estado persistente usando localStorage
  const completed = new Set(
    JSON.parse(localStorage.getItem("malla-progress") || "[]")
  );

  // Actualiza las clases visuales según los prerrequisitos y materias aprobadas
  function updateUI() {
    document.querySelectorAll(".subject").forEach((box) => {
      const key = box.dataset.key;
      const subj = subjects[key];

      if (completed.has(key)) {
        box.classList.remove("locked", "unlocked");
        box.classList.add("completed");
        box.style.pointerEvents = "auto";
        return;
      }

      // Verifica si todas las prerrequisitos están aprobados
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
    });
  }

  updateUI();

  // Gestiona clics para aprobar/desaprobar materias
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

  // Botón para resetear todo
  document.getElementById("reset").addEventListener("click", () => {
    completed.clear();
    localStorage.remove }}">
