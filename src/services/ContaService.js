import { useNavigate } from "react-router-dom";
import Api from "./Api";

const login = async (username, password) =>{
    try {
        const response = await Api.get('/users', {
          params: {
            username: username,
            password: password,
          },
        });
        if (response.data.length > 0) {
          localStorage.setItem('user', JSON.stringify(response.data[0]));
          return response.data[0];

        } else {
          alert('Usuário ou senha inválidos.');
        }
      } catch (err) {
        console.log(err)
        alert('Erro ao conectar ao servidor.');
      }
};

const logout = () => {
  localStorage.removeItem("user");
};

const ContaService = {
  login,
  logout,
};

export default ContaService;