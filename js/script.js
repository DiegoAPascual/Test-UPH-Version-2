const activePage = localStorage.getItem("activePage");

const pages = document.querySelectorAll('section[id^="page-"]');

if (activePage) {
  pages.forEach((page) => {
    if (page.id === activePage) {
      page.style.display = "block";
    } else {
      page.style.display = "none";
    }
  });
}

const paginationLinks = document.querySelectorAll(".pagination .page-link");
paginationLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetPageId = this.getAttribute("href").substring(1);

    // Ocultar todas las secciones excepto la seleccionada
    pages.forEach((page) => {
      if (page.id === targetPageId) {
        page.style.display = "block";
      } else {
        page.style.display = "none";
      }
    });

    // Marcar el enlace de paginación como activo
    paginationLinks.forEach((link) =>
      link.parentElement.classList.remove("active")
    );
    this.parentElement.classList.add("active");

    localStorage.setItem("activePage", targetPageId);

    window.scrollTo(0, 0);
  });
});

const careers = {
  logisticaTransporte: {
    name: "Ingeniería en Logística y transporte",
    points: 0,
  },
  agroindustrial: { name: "Ingeniería Agroindustrial", points: 0 },
  energia: { name: "Ingeniería en Energía", points: 0 },
  laet: {
    name: "Licenciatuta en Administración de Empresas Turiticas (LAET)",
    points: 0,
  },
  arquitecturaBioclimatica: { name: "Arquitectura Bioclimática", points: 0 },
  ingenieriaIndustrial: { name: "Ingeniería Industrial", points: 0 },
  ingenieriaTextilModa: {
    name: "Ingeniería en Diseño Textil y Moda",
    points: 0,
  },
};

const questionsToCareers = {
  q1: ["logisticaTransporte"],
  q2: ["agroindustrial"],
  q3: ["energia"],
  q4: ["laet"],
  q5: ["arquitecturaBioclimatica"],
  q6: ["ingenieriaIndustrial"],
  q7: ["ingenieriaTextilModa"],
  q8: ["logisticaTransporte"],
  q9: ["agroindustrial"],
  q10: ["energia"],
  q11: ["laet"],
  q13: ["ingenieriaIndustrial"],
  q14: ["ingenieriaTextilModa"],
  q18: ["laet"],
  q19: ["arquitecturaBioclimatica"],
  q20: ["ingenieriaIndustrial"],
  q21: ["ingenieriaTextilModa"],
  q22: ["logisticaTransporte"],
  q24: ["energia"],
  q25: ["laet"],
  q27: ["ingenieriaIndustrial"],
  q28: ["ingenieriaTextilModa"],
  q30: ["agroindustrial"],
  q31: ["energia"],
  q32: ["laet"],
  q33: ["arquitecturaBioclimatica"],
  q34: ["ingenieriaIndustrial"],
  q35: ["ingenieriaTextilModa"],
  q36: ["logisticaTransporte"],
  q37: ["agroindustrial"],
  q38: ["energia"],
  q39: ["laet"],
  q40: ["arquitecturaBioclimatica"],
  q43: ["logisticaTransporte"],
  q44: ["agroindustrial"],
  q47: ["arquitecturaBioclimatica"],
  q48: ["ingenieriaIndustrial"],
  q49: ["ingenieriaTextilModa"],
  q50: ["logisticaTransporte"],
  q54: ["arquitecturaBioclimatica"],
  q55: ["ingenieriaIndustrial"],
  q58: ["agroindustrial"],
  q60: ["laet"],
  q62: ["ingenieriaIndustrial"],
  q63: ["ingenieriaTextilModa"],
  q64: ["logisticaTransporte"],
  q65: ["agroindustrial"],
  q66: ["energia"],
  q69: ["ingenieriaIndustrial"],
  q71: ["logisticaTransporte"],
  q72: ["agroindustrial"],
  q73: ["energia"],
  q75: ["arquitecturaBioclimatica"],
  q77: ["ingenieriaTextilModa"],
  q80: ["energia"],
  q81: ["laet"],
  q82: ["arquitecturaBioclimatica"]
};

function cerrarAlerta() {
  const alertDiv = document.getElementById("validation-alert");
  alertDiv.style.display = "none";
}

function guardarResultadoEnBD(idEncuestado, nombreCarrera) {
  // Realizar una solicitud AJAX para enviar el resultado al servidor
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "guardar_resultado.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    }
  };

  // Construir la cadena de datos a enviar
  const data =
    "idEncuestado=" +
    encodeURIComponent(idEncuestado) +
    "&nombreCarrera=" +
    encodeURIComponent(nombreCarrera);

  // Enviar la solicitud AJAX
  xhr.send(data);
}

function calcularCarrera() {
  // Obtener el ID del encuestado del campo oculto en tu página HTML
  const idEncuestado = document.getElementById("idEncuestado").value;
  const formElements = document.querySelectorAll("input[type=radio]:checked");
  const totalQuestions = Object.keys(questionsToCareers).length;
  const alertDiv = document.getElementById("validation-alert");

  // Verifica si todas las preguntas han sido respondidas
  if (formElements.length !== totalQuestions) {
    alertDiv.style.display = "block";
    return;
  } else {
    alertDiv.style.display = "none";
  }

  formElements.forEach((formElement) => {
    const question = formElement.name;
    const answer = formElement.value;
    const careersToAddPoints = questionsToCareers[question];

    if (answer === "si") {
      careersToAddPoints.forEach((career) => {
        careers[career].points += 1;
      });
    }
  });

  const maxPoints = Math.max(
    ...Object.values(careers).map((career) => career.points)
  );

  // Encuentra todas las carreras con la puntuación máxima
  const tiedCareers = Object.values(careers).filter(
    (career) => career.points === maxPoints
  );

  // console.log("Carreras con la puntuación máxima:");
  // tiedCareers.forEach((career) => {
  //   console.log(`${career.name}: ${career.points}`);
  // });

  // Después de calcular la carrera, obtener el nombre de la carrera recomendada
  let nombreCarrera = "";

  if (tiedCareers.length > 1) {
    const winningCareer = tiedCareers[0]; // Tomar la primera carrera empatada
    nombreCarrera = `Basado en sus respuestas, le recomendamos la siguiente carrera: ${winningCareer.name}.`;

    // Guardar las dos primeras carreras en la base de datos
    const savedCareers = tiedCareers.slice(0, 2).map((career) => career.name);
    // Guardar solo los nombres de las carreras en la base de datos
    guardarResultadoEnBD(idEncuestado, savedCareers);
  } else {
    const winningCareer = tiedCareers[0];
    nombreCarrera = `Basado en sus respuestas, le recomendamos la siguiente carrera: ${winningCareer.name}.`;
    // Guardar solo la carrera ganadora en la base de datos
    guardarResultadoEnBD(idEncuestado, [winningCareer.name]);
  }

  // Mostrar el nombre de la carrera recomendada
  document.getElementById("nombreCarrera").innerText = nombreCarrera;
  $("#resultadoModal").modal("show");
}

document.getElementById("cerrarModal").addEventListener("click", function () {
  localStorage.setItem("activePage", "page-1");
  window.location.href = "index.php";
});
