import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Apartments() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const state = useSelector((state) => state);
  const role = state.loggedin.Role;
  const navigate = useNavigate();

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const deleteApartment = (id) => {
    axios
      .delete('http://localhost:8080/api/apartments/' + id)
      .then((resp) => {
        Swal.fire({ title: resp.data });
        navigate('/apartments');
      })
      .catch((error) => {
        Swal.fire({ title: 'Appartment already in use' });
      });
  };

  useEffect(() => {
    if (role === 'Admin') {
      axios.get('http://localhost:8080/api/apartments/')
        .then((resp) => {
          setData(resp.data);
        });
    } else {
      axios.get('http://localhost:8080/api/apartments/owners/' + sessionStorage.getItem("id"))
        .then((resp) => {
          setData(resp.data);
        });
    }
  }, [role]);

  return (
    <>
      <div className="container mt-5" style={{backgroundColor:"aliceblue"}}>
        {role === 'Owner' ? (
          <Link to="/addnew" className="btn btn-primary btn-sm float-end">Add new Property</Link>
        ) : ""}
        <h5 className="p-2">Property List</h5>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Property Owner Name</th>
              <th>Address</th>
              <th>City</th>
              <th>District</th>
              <th>Selling Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map(x => (
              <tr key={x.id}>
                <td>{x.id}</td>
                <td>{x.name}</td>
                <td>{x.owner.name}</td>
                <td>{x.address}</td>
                <td>{x.city}</td>
                <td>{x.district}</td>
                <td>Rs. {x.rent}</td>
                <td>
                  {role === 'Admin' ? (
                    <button onClick={() => deleteApartment(x.id)} className="btn btn-outline-danger btn-sm float-end">Delete Property</button>
                  ) : (
                    <Link to={'/apartmentdetails/' + x.id} className="btn btn-primary btn-sm">Details</Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-center mt-3">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => handleClick(currentPage - 1)}>Previous</button>
              </li>
              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => handleClick(index + 1)}>{index + 1}</button>
                </li>
              ))}
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => handleClick(currentPage + 1)}>Next</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
