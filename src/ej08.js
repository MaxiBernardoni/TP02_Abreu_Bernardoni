import {
  OMDBSearchByPage,
  OMDBSearchComplete,
  OMDBGetByImdbID
} from "./modules/omdb-wrapper.js";

let resultado = null;

// 🔹 Buscar por página
resultado = await OMDBSearchByPage("cars", 1);
console.log("OMDBSearchByPage", resultado);

// 🔹 Buscar TODO
resultado = await OMDBSearchComplete("cars");
console.log("OMDBSearchComplete", resultado);

// 🔹 Buscar por ID
resultado = await OMDBGetByImdbID("tt0317219");
console.log("OMDBGetByImdbID", resultado);