import axios from "axios";
import { useEffect, useState } from "react";

export default function FeedbackList() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    axios.get('http://localhost:8080/api/admin/feedbacks')
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
      <div className="container mt-5" style={{backgroundColor:"pink"}}>
        <h5 className="p-2">Users Feedbacks</h5>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>User Name</th>
              <th>Gender</th>
              <th>Property Name</th>
              <th>Address</th>
              <th>Feedback</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map(x => (
              <tr key={x.id}>
                <td>{x.id}</td>
                <td>{x.customer.name}</td>
                <td>{x.customer.gender}</td>
                <td>{x.apartment.name}</td>
                <td>{x.apartment.address}</td>
                <td>{x.descr}</td>
                <td>{x.createdon}</td>
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

