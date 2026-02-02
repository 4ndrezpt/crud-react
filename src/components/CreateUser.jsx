import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CreateUser = ()=> {

  const [formState, setFormState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
function deleteKey (){
    let modified = { ...formState};
    delete modified['password_2'];
    return modified;
}
  const handleChange = ({target})=> {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]:value
    })
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const dataToSend = deleteKey();
    const baseUrl = import.meta.env.VITE_BASE_API;
   //console.log(id);
    await axios.post(`${baseUrl}/save`, dataToSend,
      { headers: { 'Content-Type': 'application/json'},
        maxRedirects:0}
    )
      .then(response => {
        console.log("Recorde message",response.data);
      })
      .catch(error => {
        console.error("Error inserting record: ", error.response?.data || error.message);
      })
      navigate("/");
  }

  return (
    <section>
      <form onSubmit={handleSubmit} method="POST">
        <div className="form__header">
          <h4>Add a New User</h4>
        </div>
        <div className="form__body">
          <fieldset>
            <legend>Personal Information</legend>
            <label htmlFor="first_name">First name:</label>
            <input type="text" id="first_name" name="first_name"
            onChange={handleChange}/>
            <label htmlFor="">Last name:</label>
            <input type="text" id="last_name" name="last_name"
            onChange={handleChange}/>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email"
            onChange={handleChange}/>
            <label htmlFor="">Password: </label>
            <input type="text" id="password" name="password"
            onChange={handleChange}/>
            <label htmlFor="">Repeat Password: </label>
            <input type="text" id="password_2" name="password_2"
              onChange={handleChange} />
          </fieldset>
          <button type="submit">Enviar</button>
        </div>
        <div className="form__footer">
        </div>
      </form>
    </section>
  );
}
