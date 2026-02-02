import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { PaginationBtns } from "./PaginationBtns";
import { NavLink } from "react-router-dom";
import { Modal } from "./Modal";

export const PaginationTable = ({objects, onConfirm, isModalOpen, openModal, closeModal}) => {
  //console.log(objects)
  const [posts, setPosts] = useState(objects);
  const [curPage, setCurPage] = useState(1);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(posts.length/itemsPerPage);
  const startIndex = (curPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleItems = objects.slice(startIndex, endIndex)//posts.slice(startIndex, endIndex);
  let counter = startIndex + 1;
  if (itemsPerPage === 1) return null;
 //console.log(posts.length);
  //console.log(typeof(objects))

  const [contentModal, setContentModal] = useState({
    id: "",
    title: "",
    message: "",
    criteria: ""
  });

  const confirmDelete = ( id, title, message, criteria)=> {
      setContentModal({
        id: id,
        title:title,
        message: message,
        criteria: criteria
      })
      openModal(contentModal.id, contentModal.title, message, criteria);
    }


  useEffect(()=>{
    setPosts(objects)
  },[])

  return (
    <>
      {isModalOpen ? <Modal show={isModalOpen}
        closeModal={closeModal}
        //onConfirm={()=> onConfirm(contentModal.id, contentModal.criteria)}
      id={contentModal.id}
      title={contentModal.title}
      message={contentModal.message}
      criteria={contentModal.criteria}
      onConfirm={()=>onConfirm(contentModal.id, contentModal.criteria)}

      ></Modal> : ''}
      <table>
        <caption>User List from Axios Request</caption>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {visibleItems?.map((post, key) =>
            <tr key={key}>
              <td>{counter++}</td>
              <td>{post.first_name}</td>
              <td>{post.last_name}</td>
              <td>{post.email}</td>
              <td>
                <NavLink className="NavLink info"
                  to={{
                    pathname: `user/details/${post.email}`,
                    state: { first_name: post.first_name }
                  }}
                >Details</NavLink>
                <NavLink className="NavLink edit"
                  to={{
                    pathname: `user/edit/${post.id}`,
                    state: { last_name: post.last_name }
                  }}
                >Edit</NavLink>
                <button className="danger"
                  onClick={() => confirmDelete(post.id, "Delete User", "Do you want to delete this user", post.email)}
                >Delete</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div>
        <PaginationBtns
          curPage={curPage}
          setCurPage={setCurPage}
          totalPages={totalPages}
        ></PaginationBtns>
      </div>
    </>
  );
}
