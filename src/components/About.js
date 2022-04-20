import React, { useEffect } from 'react'

const About = (props) => {
    useEffect(()=>{
        // eslint-disable-next-line
    }, [])
    return (
        <div className="container">
      <h2 className="heading my-4" >About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne">
              Store Your Notes Online
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores labore corrupti autem! Veritatis omnis excepturi perferendis aspernatur iure tenetur consequatur rerum assumenda blanditiis! Non eius quod minus, nesciunt quas aliquam?
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo">
              Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, obcaecati molestiae cumque libero pariatur incidunt totam eum dolor, impedit commodi quidem architecto ab accusamus officiis facilis. Soluta, tenetur. Consectetur, accusamus!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta id illum corporis quia cupiditate nemo eligendi velit modi voluptate officia. Natus similique repellat ullam ab iste corrupti laudantium. Eum, nulla.
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat accusamus quo suscipit, accusantium illo! Qui, corrupti! Repellat voluptas nostrum distinctio? Reprehenderit incidunt praesentium facere commodi eius omnis sequi consequuntur?
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default About
