import axios from "axios";

export default axios.create({
    baseURL: "https://crudcrud.com/api/8d417c8ba958449bbda8c3142e5442a3/unicorns/",
    responseType: "json",
});

