const url = "http://localhost:5500/api";
const newUser = {
  name: "Pedro Mendes",
  avatar: "https://avatars.githubusercontent.com/u/94766702?v=4",
  city: "Terecity",
};

const updateUser = {
  name: "Nasus",
  avatar:
    "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=90&strip=info&resize=680,453",
  city: "miaucity",
};

function getUser() {
  axios
    .get(url)
    .then((response) => {
      const data = response.data; //nivelando para chegar no data
      renderResults.textContent = JSON.stringify(data); //tranforma o json em texto
    })
    .catch((error) => console.log(error));
}

function addNewUser() {
  axios
    .post(url, newUser)
    .then((response) => {
      alert("ugaaaaa");
      console.log(response.data);
    })
    .catch((error) => console.log(error));
}

function UpdateUser() {
  axios
    .put(`${url}/2`, updateUser)
    .then((response) => {
      alert("Usuario atualizado maluco");
    })
    .catch((error) => console.log(error));
}

function deleteUser() {
  axios
    .delete(`${url}/3`)
    .then((response) => {
      alert(JSON.stringify(response.data));
    })
    .catch((error) => console.log(error));
}

function getOneUser() {
  axios
    .get(`${url}/2`)
    .then((response) => {
      const data = response.data;
      renderResults.textContent = JSON.stringify(data);
    })
    .catch((error) => console.log(error));
}

// addNewUser();
// getUser();
// UpdateUser();
// deleteUser();
getOneUser();

// axios.get - puxa todos os dados da api
//axios.post - envia dados para api
//axios.put(put muda tudo) - atualiza info
//axios.delete - deleta o dado selecionado
