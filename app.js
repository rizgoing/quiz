const inputData = document.querySelector(".input-data");
const resultat = document.querySelector(".image-box");
const forma = document.querySelector("#forma");
const information = document.querySelector(".info");
let answers = {
  name: "",
  age: "",
  sex: "",
  bio: "",
  isSend: false,
};

function handleSubmit() {
  answers = {
    name: forma.name.value,
    age: forma.age.value,
    sex: forma.sex.value,
    biogr: forma.biogr.value,
    isSend: true,
  };

  verify(answers);
  resultPage(answers);
}

function verify(value) {
  const { name, age, sex, biogr, isSend } = value;

  if (name === "" || age === "" || sex === "" || biogr === "") {
    return alert("sasatb");
  }

  if (age <= 3) {
    return alert("Сосунок ебать, пашол нахуй");
  }
  if (age >= 100) {
    return alert("Старая рухлядь ебать, пашол нахуй");
  }

  if (isSend) {
    inputData.classList.add("hidden");
    resultat.classList.remove("hidden");
  }
}

function resultPage(data) {
  const reactPage = `<div>Короче, ${data.name}, в твои ${data.age} круговоротов Земли вокруг Солнца пережито было многое, но!!
  Самое главное, что ты ${data.sex}, в лице несдающегося человека, бегущего по жизни с простым кредо - ${data.biogr}..  
  
  А вот и твоя фотка, ${data.name}</div>`;

  information.innerHTML = reactPage;
}

forma.submit.addEventListener("click", (e) => {
  e.preventDefault();

  handleSubmit();
});
