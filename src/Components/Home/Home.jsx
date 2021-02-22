import { Container } from "react-bootstrap";

const HomeComponent = () => {
    return (
        <>
          <Container className="my-5 text-muted">
              <img src="https://i.ibb.co/sRY30yw/texas-wine-country.jpg" class="img-fluid my-3" alt="winery"></img>
              <h5 className="my-3">
                  Argentinian Wines
              </h5>
              <h1 className="mb-3">
                  Aimara
              </h1>              
              <p className="lead mb-5">
              Argentina has built a reputation of not only high quality, but also of the unique link wine producers make between their favourite protein and their favourite grape variety: The Malbec.
With more than two centuries of history, Aimara produce their wines in the region of San Rafael, Mendoza.
              </p>
          </Container>
          <br />
          <br />
          <p class="blockquote font-italic mx-auto w-50 text-center text-muted">
              "Enjoying fine food and wine at the family table, surrounded by your love ones and friends, is not just a joy- It's one of the highest forms of living."
              <br />
              <cite title="Source Title"> Robert Mondavi</cite>
          </p>
          <br />
          <br />
          <br />
          <h1 className="my-5 text-center text-muted">
              Varietals
          </h1>
        </>
    );
};
export default HomeComponent;