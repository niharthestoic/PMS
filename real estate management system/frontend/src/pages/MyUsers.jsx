import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function MyUsers() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/api/bookings/owners/' + sessionStorage.getItem("id"))
      .then(resp => {
        setData(resp.data);
      });
  }, []);

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCancel = (id) => {
    axios.get('http://localhost:8080/api/bookings/cancel/' + id)
      .then(resp => {
        Swal.fire({ title: resp.data });
        navigate('/apartments');
      });
  };

  return (
    <>
      <div className="container mt-5" style={{backgroundColor:"antiquewhite"}}>
        <h5 className="p-2">Users List</h5>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Booking Date</th>
              <th>Property Name</th>
              <th>Customer Name</th>
              <th>Address</th>
              <th>Gender</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map(x => (
              <tr key={x.id}>
                <td>{x.id}</td>
                <td>{x.bookdate}</td>
                <td>{x.apartment.name}</td>
                <td>{x.customer.name}</td>
                <td>{x.customer.address}</td>
                <td>{x.customer.gender}</td>
                <td>{x.apartment.rent}</td>
                <td>{x.status}</td>
                <td>{x.status === 'Booked' ? (
                  <>
                    <button onClick={() => handleCancel(x.id)} className="btn btn-danger btn-sm">Cancel Booking</button> &nbsp;
                    <Link to={'/sendmail/' + x.customer.id} className="btn btn-success btn-sm">Send Mail</Link>
                  </>
                ) : ""}
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
