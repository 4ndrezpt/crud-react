import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const DetailUser = () => {
  const emailParam = useParams().email;
  const location = useLocation();
  const [userDetails, setUserDetails] = useState();
  const [value, setValue] = useState();

  const [isLoading, setIsLoading] = useState(true);
  const [userEmail, setUserEmail] = useState(emailParam)
  //console.log(location);

  const handleChange = ({ target })=> {
    setUserEmail(target.value);
  }

  const getUser = (value)=> {
    axios.get(`/backender/react-php/user/details/?email=${value}`)
    .then((response)=>{
      console.log(response.data);
      setUserDetails(response.data);
    }).catch(err => {
      console.error(err);
    })
  }
  useEffect(() => {
    getUser(userEmail);
  }, [userEmail])

  return (
    <div className="card__container__unique">
      <div className="card__container__header">
        <h3>User Details</h3>
      </div>
      <div className="search">
        <input type="text"
        onChange={handleChange}
        value={userEmail}
        //value={ !emailParam ? "cargando" : emailParam }
        />
        <button onClick={getUser}
        >Search By Email</button>
      </div>
      <div className="card">
        {<h4>
          First Name: {!userDetails ? "cargando" : userDetails.first_name}
          </h4>
        }
        {<h4>
          Last Name:
           {!userDetails ? "cargando" : userDetails.last_name}
        </h4>}
        {<h4>Email:
          { !userDetails ? " cargando" : userDetails.email}</h4>}
        {<h4>Inicio:
          { !userDetails ? " cargando" : userDetails.created_at}</h4>}
      </div>
    </div>
  );
}
