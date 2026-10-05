// Base de datos completa del Plan de Estudios - Ingeniería de Sistemas (Uniamazonia)
// Base de datos completa del Plan de Estudios - Ingeniería de Sistemas (Uniamazonia)
const curriculumData = [
  {
    semester: 1, //
    subjects: [
      { code: "9900011", name: "MATEMÁTICAS I", credits: 3, type: "Ciencias Básicas", desc: "Asignatura de primer semestre." }, //[cite: 1]
      { code: "9900020", name: "FISICA I", credits: 3, type: "Ciencias Básicas", desc: "Asignatura de primer semestre." }, //[cite: 1]
      { code: "9900030", name: "BIOLOGIA GENERAL", credits: 3, type: "Ciencias Básicas", desc: "Asignatura de primer semestre." }, //[cite: 1]
      { code: "9900033", name: "INTRODUCCIÓN A LA INGENIERIA", credits: 2, type: "Básicas de Ingeniería", desc: "Asignatura de primer semestre." }, //[cite: 1]
      { code: "9900036", name: "LOGICA Y ALGORITMOS I", credits: 3, type: "Básicas de Ingeniería", desc: "Asignatura de primer semestre." }, //[cite: 1]
      { code: "9900001", name: "COMUNICACIÓN", credits: 2, type: "Socio Humanísticas", desc: "Asignatura de primer semestre." }, //[cite: 1]
      { code: "9900008", name: "DEPORTES Y CULTURA", credits: 2, type: "Socio Humanísticas", desc: "Asignatura de primer semestre." } //[cite: 1]
    ]
  },
  {
    semester: 2, //[cite: 1]
    subjects: [
      { code: "9900012", name: "MATEMÁTICAS II", credits: 3, type: "Ciencias Básicas", desc: "Asignatura de segundo semestre." }, //[cite: 1]
      { code: "9900021", name: "FISICA II", credits: 3, type: "Ciencias Básicas", desc: "Asignatura de segundo semestre." }, //[cite: 1]
      { code: "9900026", name: "QUIMICA I", credits: 3, type: "Ciencias Básicas", desc: "Asignatura de segundo semestre." }, //[cite: 1]
      { code: "9900038", name: "TEORIA GENERAL DE SISTEMAS", credits: 3, type: "Básicas de Ingeniería", desc: "Asignatura de segundo semestre." }, //[cite: 1]
      { code: "9900037", name: "LOGICA Y ALGORITMOS II", credits: 3, type: "Básicas de Ingeniería", desc: "Asignatura de segundo semestre." }, //[cite: 1]
      { code: "9900002", name: "CONSTITUCIÓN Y DEMOCRACIA", credits: 2, type: "Socio Humanísticas", desc: "Asignatura de segundo semestre." } //[cite: 1]
    ]
  },
  {
    semester: 3, //[cite: 1]
    subjects: [
      { code: "9900050", name: "ALGEBRA LINEAL", credits: 3, type: "Básicas de Ingeniería", desc: "Asignatura de tercer semestre." }, //[cite: 1]
      { code: "72030301", name: "MATEMATICAS DISCRETAS", credits: 4, type: "Básicas de Ingeniería", desc: "Asignatura de tercer semestre." }, //[cite: 1]
      { code: "72030302", name: "ANALISIS DE SISTEMAS", credits: 4, type: "Básicas de Ingeniería", desc: "Asignatura de tercer semestre." }, //[cite: 1]
      { code: "72030303", name: "ESTRUCTURAS DE DATOS I", credits: 4, type: "Básicas de Ingeniería", desc: "Asignatura de tercer semestre." }, //[cite: 1]
      { code: "9900009", name: "IDIOMA EXTRANJERO I", credits: 2, type: "Socio Humanísticas", desc: "Asignatura de tercer semestre." } //[cite: 1]
    ]
  },
  {
    semester: 4, //[cite: 1]
    subjects: [
      { code: "72030401", name: "ECUACIONES DIFERENCIALES", credits: 3, type: "Básicas de Ingeniería", desc: "Asignatura de cuarto semestre." }, //[cite: 1]
      { code: "72030402", name: "ESTADISTICA PARA INGENIERIA", credits: 4, type: "Básicas de Ingeniería", desc: "Asignatura de cuarto semestre." }, //[cite: 1]
      { code: "72030403", name: "INGENIERIA DE SOFTWARE I", credits: 4, type: "Ingeniería Aplicada", desc: "Asignatura de cuarto semestre." }, //[cite: 1]
      { code: "72030405", name: "ESTRUCTURAS DE DATOS II", credits: 4, type: "Básicas de Ingeniería", desc: "Asignatura de cuarto semestre." }, //[cite: 1]
      { code: "72030404", name: "SISTEMAS OPERATIVOS", credits: 3, type: "Básicas de Ingeniería", desc: "Asignatura de cuarto semestre." } //[cite: 1]
    ]
  },
  {
    semester: 5, //[cite: 1]
    subjects: [
      { code: "72030501", name: "MÉTODOS NUMÉRICOS", credits: 4, type: "Básicas de Ingeniería", desc: "Asignatura de quinto semestre." }, //[cite: 1]
      { code: "72030502", name: "INGENIERIA DE SOFTWARE II", credits: 4, type: "Ingeniería Aplicada", desc: "Asignatura de quinto semestre." }, //[cite: 1]
      { code: "72030503", name: "PROGRAMACIÓN WEB", credits: 4, type: "Ingeniería Aplicada", desc: "Asignatura de quinto semestre." }, //[cite: 1]
      { code: "72030504", name: "DISEÑO DE BASE DE DATOS", credits: 4, type: "Ingeniería Aplicada", desc: "Asignatura de quinto semestre." }, //[cite: 1]
      { code: "9900010", name: "IDIOMA EXTRANJERO II", credits: 2, type: "Socio Humanísticas", desc: "Asignatura de quinto semestre." } //[cite: 1]
    ]
  },
  {
    semester: 6, //[cite: 1]
    subjects: [
      { code: "72030601", name: "MODELOS DETERMINISTICOS", credits: 4, type: "Ingeniería Aplicada", desc: "Asignatura de sexto semestre." }, //[cite: 1]
      { code: "72030602", name: "INGENIERIA DE SOFTWARE III", credits: 4, type: "Ingeniería Aplicada", desc: "Asignatura de sexto semestre." }, //[cite: 1]
      { code: "72030603", name: "PROGRAMACIÓN MOVIL", credits: 4, type: "Ingeniería Aplicada", desc: "Asignatura de sexto semestre." }, //[cite: 1]
      { code: "72030604", name: "REDES INFORMATICAS I", credits: 4, type: "Ingeniería Aplicada", desc: "Asignatura de sexto semestre." }, //[cite: 1]
      { code: "9900003", name: "FILOSOFIA E HISTORIA DE LA CIENCIA", credits: 2, type: "Socio Humanísticas", desc: "Asignatura de sexto semestre." } //[cite: 1]
    ]
  },
  {
    semester: 7, //[cite: 1]
    subjects: [
      { code: "72030701", name: "PROYECTOS SOFTWARE", credits: 4, type: "Ingeniería Aplicada", desc: "Asignatura de séptimo semestre." }, //[cite: 1]
      { code: "72030702", name: "INTELIGENCIA COMPUTACIONAL I", credits: 4, type: "Ingeniería Aplicada", desc: "Asignatura de séptimo semestre." }, //[cite: 1]
      { code: "72030703", name: "REDES INFORMATICAS II", credits: 4, type: "Ingeniería Aplicada", desc: "Asignatura de séptimo semestre." }, //[cite: 1]
      { code: "72030704", name: "ADMINISTRACION DE BASE DE DATOS", credits: 4, type: "Ingeniería Aplicada", desc: "Asignatura de séptimo semestre." }, //[cite: 1]
      { code: "9900034", name: "METODOLOGIA DE LA INVESTIGACIÓN I", credits: 2, type: "Socio Humanísticas", desc: "Asignatura de séptimo semestre." } //[cite: 1]
    ]
  },
  {
    semester: 8, //[cite: 1]
    subjects: [
      { code: "72030801", name: "PESI", credits: 4, type: "Ingeniería Aplicada", desc: "Asignatura de octavo semestre." }, //[cite: 1]
      { code: "72030802", name: "INTELIGENCIA COMPUTACIONAL II", credits: 4, type: "Ingeniería Aplicada", desc: "Asignatura de octavo semestre." }, //[cite: 1]
      { code: "72030803", name: "TALLER: EMPRENDIMIENTO E INNOVACIÓN", credits: 3, type: "Socio Humanísticas", desc: "Asignatura de octavo semestre." }, //[cite: 1]
      { code: "9900035", name: "METODOLOGIA DE LA INVESTIGACIÓN II", credits: 2, type: "Socio Humanísticas", desc: "Asignatura de octavo semestre." }, //[cite: 1]
      { code: "9900006", name: "ETICA", credits: 2, type: "Socio Humanísticas", desc: "Asignatura de octavo semestre." }, //[cite: 1]
      { code: "9900004", name: "DESARROLLO HUMANO", credits: 3, type: "Socio Humanísticas", desc: "Asignatura de octavo semestre." } //[cite: 1]
    ]
  },
  {
    semester: 9, //[cite: 1]
    subjects: [
      { code: "72030903", name: "ELECTIVA I", credits: 4, type: "Ingeniería Aplicada", desc: "Asignatura de noveno semestre." }, //[cite: 1]
      { code: "72030904", name: "ELECTIVA II", credits: 4, type: "Ingeniería Aplicada", desc: "Asignatura de noveno semestre." }, //[cite: 1]
      { code: "72030901", name: "GESTIÓN TECNOLÓGICA", credits: 3, type: "Ingeniería Aplicada", desc: "Asignatura de noveno semestre." }, //[cite: 1]
      { code: "72030902", name: "TALLER ESCRITURA CIENTIFICA", credits: 4, type: "Socio Humanísticas", desc: "Asignatura de noveno semestre." }, //[cite: 1]
      { code: "9900005", name: "UNIVERSIDAD REGIÓN Y MEDIO AMBIENTE", credits: 3, type: "Socio Humanísticas", desc: "Asignatura de noveno semestre." } //[cite: 1]
    ]
  },
  {
    semester: 10, //[cite: 1]
    subjects: [
      { code: "72031001", name: "ELECTIVA III", credits: 4, type: "Ingeniería Aplicada", desc: "Asignatura de décimo semestre." }, //[cite: 1]
      { code: "72031002", name: "ELECTIVA IV", credits: 4, type: "Ingeniería Aplicada", desc: "Asignatura de décimo semestre." }, //[cite: 1]
      { code: "72031003", name: "OPCIÓN DE GRADO", credits: 10, type: "Ingeniería Aplicada", desc: "Requisito final para optar por el título." } //[cite: 1]
    ]
  }
];

// Estado global del filtro activo
let activeSemester = 1;

// Función para renderizar los botones de los 10 semestres
function renderSemesterButtons() {
  const container = document.getElementById("semester-buttons");
  if (!container) return;

  container.innerHTML = "";

  curriculumData.forEach((sem) => {
    const btn = document.createElement("button");
    const isActive = sem.semester === activeSemester;

    btn.className = `px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
      isActive
        ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30 scale-105"
        : "bg-white text-slate-600 hover:bg-slate-200 hover:text-slate-900 border border-slate-200"
    }`;

    btn.textContent = `Semestre ${sem.semester}`;
    btn.onclick = () => {
      activeSemester = sem.semester;
      // Limpiar el buscador cuando se cambia de semestre
      const searchInput = document.getElementById("search-subject");
      if (searchInput) searchInput.value = "";
      renderSemesterButtons();
      renderSubjects();
    };

    container.appendChild(btn);
  });
}

// Función para renderizar las materias del semestre activo o de la búsqueda
function renderSubjects(filterQuery = "") {
  const container = document.getElementById("subjects-container");
  if (!container) return;

  container.innerHTML = "";

  let subjectsToDisplay = [];

  if (filterQuery.trim() !== "") {
    // Buscar en TODOS los semestres si hay texto en la caja de búsqueda
    const query = filterQuery.toLowerCase();
    curriculumData.forEach((sem) => {
      sem.subjects.forEach((sub) => {
        if (
          sub.name.toLowerCase().includes(query) ||
          sub.type.toLowerCase().includes(query) ||
          sub.code.includes(query)
        ) {
          subjectsToDisplay.push({ ...sub, semesterNum: sem.semester });
        }
      });
    });
  } else {
    // Mostrar únicamente las materias del semestre seleccionado
    const currentSemData = curriculumData.find((s) => s.semester === activeSemester);
    if (currentSemData) {
      subjectsToDisplay = currentSemData.subjects.map((sub) => ({
        ...sub,
        semesterNum: activeSemester
      }));
    }
  }

  // Si no se encuentran resultados
  if (subjectsToDisplay.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12 bg-white rounded-2xl border border-slate-200">
        <p class="text-slate-500 font-medium">No se encontraron asignaturas que coincidan con "${filterQuery}".</p>
      </div>
    `;
    return;
  }

  // Crear tarjeta HTML para cada asignatura
  subjectsToDisplay.forEach((sub) => {
    const card = document.createElement("div");
    card.className = "bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all subject-card flex flex-col justify-between";

    card.innerHTML = `
      <div>
        <div class="flex justify-between items-start mb-3">
          <span class="inline-block px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 font-mono text-xs font-bold">
            Código: ${sub.code}
          </span>
          <span class="inline-block px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">
            ${sub.type}
          </span>
        </div>
        <h4 class="text-lg font-bold text-slate-900 mb-2">${sub.name}</h4>
        <p class="text-slate-600 text-xs leading-relaxed mb-4">${sub.desc}</p>
      </div>

      <div class="pt-4 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500">
        <span class="font-medium text-emerald-600">Semestre ${sub.semesterNum}</span>
        <span class="font-bold text-slate-800 bg-slate-100 px-2 py-1 rounded-md">${sub.credits} Créditos</span>
      </div>
    `;

    container.appendChild(card);
  });
}

// Inicialización de la aplicación al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
  // Inicializar iconos de Lucide
  if (window.lucide) {
    lucide.createIcons();
  }

  // Cargar botones y materias
  renderSemesterButtons();
  renderSubjects();

  // Listener para el buscador en tiempo real
  const searchInput = document.getElementById("search-subject");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderSubjects(e.target.value);
    });
  }
});