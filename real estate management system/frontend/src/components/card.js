import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Card() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const state = useSelector((state) => state);

  useEffect(() => {
    axios.get('http://localhost:8080/api/apartments').then((resp) => {
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
    <div className='mt-2 mx-auto' style={{ width: '96%' }}>
      <div className='row'>
        {paginatedData.map((x) => (
          <div className='col-sm-4' key={x.id}>
            <div className='card border-2 shadow mb-2 bg-white rounded'>
              <div className='card-header text-center'>
                <h5 className='card-title'>{x.name}</h5>
                <b>
                  Address:- {x.address} <br /> City:- {x.city}
                </b>{' '}
                <br /> {x.district} India
              </div>
              <img
                src={'http://localhost:8080/' + x.photo1}
                style={{ height: '300px' }}
                className='img-fluid rounded-start'
                alt='...'
              />
              <div className='card-body'>
                <p className='card-text font-weight-bold'>
                  <div className='float-start'>
                    Type <span className='fw-bold'>{x.flattype}</span>
                  </div>
                  <div className='float-end fw-bold'>
                    For {x.gender} only
                  </div>
                  <div className='clearfix'></div>
                  <div className='fw-bold'>{x.furnishtype}</div>
                </p>
                <p className='card-text'>
                  Facility: {x.extra}
                  <br />
                  Selling Price:- ₹ {x.rent}+₹ {x.lightbill}(Extra) (Negotiable)
                </p>
                <p>
                  Property Owner Details:{' '}
                  <span className='fw-bold text-success'>
                    {x.owner.name} (Ph: {x.owner.phone})
                  </span>
                </p>
                <p className='card-text'>
                  {state.loggedin.IsLoggedIn && state.loggedin.Role === 'Customer' ? (
                    <Link className='btn btn-warning' to={'/apdetails/' + x.id}>
                      BUY House
                    </Link>
                  ) : (
                    ''
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <nav aria-label='Page navigation example'>
          <ul className='pagination'>
            <li
              className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}
            >
              <button
                className='page-link'
                onClick={() => handleClick(currentPage - 1)}
              >
                Previous
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li
                key={index}
                className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
              >
                <button
                  className='page-link'
                  onClick={() => handleClick(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li
              className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}
            >
              <button
                className='page-link'
                onClick={() => handleClick(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}


