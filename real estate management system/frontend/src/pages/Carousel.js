
import { Carousel, ButtonGroup, Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Carouselslide() {
  const navigate=useNavigate()
  const state=useSelector((state)=>state);
  return (
    <div className='mt-5'>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            // src={slide1} 
            src="https://www.propertysalebd.com/uploads/2020/August/tkjNsKMwrC9QypVqnUArpaiu1aPq4Vv4x2WOVTt6.jpeg" 
            height={400} width={1000}
            alt="First slide"
          />
          <Carousel.Caption>
          {state.loggedin.IsLoggedIn ? "":(
            <ButtonGroup size="lg" className="mb-2">
              {/* <Button onClick={e=>navigate('/login')} variant="info gradient me-2">Login</Button>
              <Button variant="success gradient" onClick={e=>{navigate('/cregister')}}>Signup</Button> */}
            </ButtonGroup>
            )}
            {/* <p className="text-white-monospace fw-bold  bg-secondary p-1 "> 
            user can book the bed from our application easily, so that time and money 
will save. user can aslo view photos of apartment and book that bed and cancel 
it also. </p> */}
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
          <img
            className="d-block w-98"
            // src={slide2} 
            src="https://www.vinaybajrangi.com/upload/problemSubCategory/14_Buying%20and%20Selling%20Property.webp" 
            height={400} width={1500}
            alt="Second slide"
          />

          <Carousel.Caption>
            {/* <h3 className="text-dark fw-bold  bg-warning  p-1 ">Home Sweet Home</h3>
            <p className="text-dark fw-bold  bg-warning p-1 ">Home is where love resides, memories are created, friends always belong, <br />
              and laughter never ends.” “A house is made of bricks and beams</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-99 "
            // src={slide3} 
            src="https://waas.imgix.net/https%3A%2F%2Fwww.belvoir.co.uk%2Fpeterborough-estate-agents%2Fwp-content%2Fuploads%2Fsites%2F115%2F2022%2F03%2FBlog-Banner-3.png?auto=compress%2Cformat&crop=edges&fit=crop&fm=webp%2Cjpg&h=507&ixlib=php-2.1.1&or=0&q=60&w=1920&s=2aa3fcfb29cab388c34db2afa0108567" 
            height={400} width={1600}
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3 className="text-dark fw-bold  bg-success p-1 ">There’s no place like home</h3>
            <p className="text-dark fw-bold  bg-success p-1 ">You will never be completely at home again, because part of your heart <br />
              will always be elsewhere. That is the price you pay for the richness of loving and knowing people in more than one place</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
