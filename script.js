
const input = document.querySelector("#search-bar");
const buton = document.querySelector("#buton");



const getWeather = async (localitate) => {
  const loader = document.querySelector("#loader");
  document.querySelector(".starea-vremii").style.display = "none";
  loader.style.display = "block";


  const api =
    "https://api.weatherapi.com/v1/current.json?key=51ddbb4ef0a049a1b0a193940231803&q=";
  const response = await fetch(api + localitate);

  

  let data = await response.json();

  if (response.status == 400) {
    document.querySelector(".eroare").style.display = "block";
    loader.style.display = "none";
  
  } else {
    const nume = data.location.name;
    const temperatura = Math.round(data.current.temp_c);
    const umiditate = Math.round(data.current.humidity);
    const viteza = Math.round(data.current.wind_kph);
    const ora = data.location.localtime;
    const icon = data.current.condition.icon;

    document.querySelector(".oras").innerHTML = `Vremea in ${nume} `;
    document.querySelector(
      "#temperatura"
    ).innerHTML = ` Temperatura:  <b> °${temperatura} C<b> `;
    document.querySelector(
      "#umiditate"
    ).innerHTML = `Umiditate: <b>${umiditate}%<b> `;
    document.querySelector(
      "#viteza"
    ).innerHTML = `Viteza vântului: <b>${viteza} km/h<b> `;
    document.querySelector(
      ".ora"
    ).innerHTML = ` Actualizat la ora locală: ${ora} `;
    document.querySelector("#icon").src = `${icon}`;
    document.querySelector(".starea-vremii").style.display = "block";
    document.querySelector(".eroare").style.display = "none";
    loader.style.display = "none";
   

  }
};


buton.addEventListener("click", () => {
  getWeather(input.value);
});
