import axios from "axios";
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PaginationTable } from "./PaginationTable";
import { Modal } from "./Modal";

export const UserAxios = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();


  const [usersInPage, setUsersInPage] = useState({});
  const [isModalOpen, setIsModalOpen] = useState();
  const [flag, setFlag] = useState(false);
  const openModal = ()=> {
   setIsModalOpen(!isModalOpen);
 }
  const closeModal = ()=>{
    setIsModalOpen(false);
  }
  const getUsers = async () => {
    const baseUrl = import.meta.env.VITE_BASE_API;
   console.log(baseUrl);
    await axios.get(`${baseUrl}/users`)
      .then((response) => {
        //console.log(response.data);}
        if (response.data) {
          setTimeout(() => {
            //console.log(response.data);
            setIsLoading(false);
          }, 1200)
        }
        setUsers(response.data);
        const usersSent = {...users}
        setUsersInPage(response.data);
        //console.log(users);
      }).catch(err => {
        console.error(err);
      })
  }

  const deleteUser = (id) => {
     const baseUrl = import.meta.env.VITE_BASE_API;
    console.log(baseUrl);
    axios.delete(`${baseUrl}/?id=${id}`)
      .then(response => {console.log(response.data)})
      .catch(error=> {console.error(error)});
      setIsModalOpen(false);
      getUsers();
    }
  const onConfirm = (id, criteria)=> {
    setFlag(true);
    console.log("flag: ", flag, id, criteria);
    deleteUser(id);
    navigate("/");
  }

    useEffect(()=>{
      getUsers();
    },[])

  return (
    <main>
      {isLoading ? <p>loading...</p> : <PaginationTable
        isModalOpen={isModalOpen}
        onConfirm={onConfirm}
        openModal={openModal}
        closeModal={closeModal}
        objects={users.length > 1 ? users : { user: 1, name: "first_name" }
      }>
      </PaginationTable>}
    </main>
  )
}
