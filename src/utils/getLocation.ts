import axios from "axios";
const api = axios.create({
  baseURL: "https://viacep.com.br/ws",
});
export default async function getLocation(cep: String) {
  return api
    .get(`/${cep}/json`)
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      return err;
    });
}
