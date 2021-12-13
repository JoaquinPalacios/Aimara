import Container from "react-bootstrap/Container";
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const FooterComponent = () => {
    return(
        <>
        <footer className="bg-white page-footer mt-5 pl-5 pt-1">
            <Container className="mx-auto pb-4 pl-5">
              <div className="row pl-5">
                  <div className="col-md-4 col-sm-6 mt-4">
                      <h5 className='font-weight-normal'>AIMARA</h5>
                      <p>Argentinian Wines</p>
                  </div>
                  <div className="col-md-4 col-sm-6 mt-4">
                      <h5 className='font-weight-normal'>Contact</h5>
                      <ul className="list-unstyled">
                          <li>
                            <p>info@aimara.com.au</p>
                          </li>
                          <li>
                            <p>1300 123 456</p>
                          </li>                     
                      </ul>                    
                  </div>
                  <div className="col-md-4 col-sm-6 mt-4">
                      <h5 className='font-weight-normal'>Follow us</h5>
                      <p><FaFacebookSquare className='mx-2' color='#4267B2' size='2em' /><FaTwitter className='mx-2' color='#1DA1F2' size='2em' /></p>
                  </div>                
              </div>
            </Container>
            <div className="footer-copyright text-center py-3">
                <Container fluid>
                &copy; 2021 by GLOBAL BRIDGE: Proudly created with ReactJS
                </Container>
            </div>
        </footer>
        </>
    )
};
export default FooterComponent;