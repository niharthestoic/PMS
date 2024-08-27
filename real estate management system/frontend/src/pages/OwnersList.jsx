import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function OwnersList() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    axios.get('http://localhost:8080/api/owners')
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

  return (
    <>
      <div className="container mt-5" style={{backgroundColor:"aquamarine"}}>
        <h5 className="p-2">Property Owner List</h5>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Gender</th>
              <th>User Id</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map(x => (
              <tr key={x.id}>
                <td>{x.id}</td>
                <td>{x.name}</td>
                <td>{x.gender}</td>
                <td>{x.userid}</td>
                <td>{x.address}</td>
                <td>{x.phone}</td>
                <td>{x.active ? 'Active' : 'Inactive'}</td>
                <td>
                  <Link to={'/odetails/' + x.id} className="btn btn-primary btn-sm">Details</Link>
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
