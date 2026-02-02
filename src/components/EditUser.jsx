import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const EditUser = () => {

  const idParam = useParams().id;
  const [formState, setFormState] = useState([]);
  const [user, setUser] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  //console.log(location.state)

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    })
  }
  const getUser = async (id) => {
    const baseUrl = import.meta.env.VITE_BASE_API;
   //console.log(id);
    await axios.get(`${baseUrl}/?id=${id}`)
      .then((response) => {
        //console.log(response.data)
        setFormState(response.data);
      })
      .catch(error => console.error(error));
  }

  useEffect(() => {
    getUser(idParam);
    console.log(user);
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(formState)
    axios.put(`/backender/react-php/edit/?id=${idParam}`, formState,
      { headers: { "Content-Type": "application/json" } }
    ).then(response => {
      console.log(response.data);
      navigate("/");
    }
    ).catch(error => {
      console.error(error);
    })
  }
  const handleAccept = (flag)=>{
    console.log(flag)
  }
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="form__header">
          <h4>Edit a User</h4>
        </div>
        <div className="form__body">
          <fieldset>
            <legend>Personal Information</legend>
            <input type="hidden" id="id" name="id"
            value={!idParam ? "undefined" : idParam} readOnly/>
            <label htmlFor="first_name">First name:</label>
            <input type="text" id="first_name" name="first_name"
            onChange={handleChange}
            value={formState.first_name}
            />
            <label htmlFor="">Last name:</label>
            <input type="text" id="last_name" name="last_name"
            onChange={handleChange}
            value={formState.last_name}
            />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email"
            onChange={handleChange}
            value={formState.email}/>
            <label htmlFor="">Password: </label>
            <input type="text" id="password" name="password"
            onChange={handleChange}
            value={formState.password}/>
          </fieldset>
          <button type="submit">Enviar</button>
        </div>
        <div className="form__footer">
        </div>
      </form>
    </section>
  );
}
