import { UserAxios } from "../components/UserAxios";
import { NavLink } from "react-router-dom";
export const Home = ()=> {
  return (
    <section>
      <NavLink className="NavLink success" to="/user/create" >Add new User</NavLink>
      <UserAxios></UserAxios>
    </section>);
}
