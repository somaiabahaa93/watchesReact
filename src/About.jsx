import React from 'react'
import popular4 from "./images/gallery/popular4.png"
import popular5 from "./images/gallery/popular5.png"


const About = () => {
  return (
    <div>
      <section
      style={{paddingLeft: 150, paddingRight: 150, marginTop: 100}}
    >
      <div className="row">
        <div className="col-md-7 d-flex justify-content-start align-items-center">
          <div className="">
            <h1 style={{fontSize: 50, fontWeight: 700}}>Watch Of Choice</h1>
            <p>
              Lorem ipsum dolor sit amet voluptatem ducimus? amet. Neque placeat
              nobis sequi laborum. Perspiciati amet. Neque placeat nobis sequi
              laborum. Perspiciatis,s, ducimus?laborum. Perspiciatis,s, ducimus?
            </p>
            <button className="p-2 select">Show Watches</button>
          </div>
        </div>
        <div className="col-md-5">
          <img
            width="150%"
            className="img-fluid"
            src={popular4}
          />
        </div>
      </div>
    </section>

    <section
      style={{paddingLeft: 150, paddingRight: 150, marginTop: 100}}
    >
      <div className="row">
       
        <div className="col-md-5">
          <img
            width="150%"
            className="img-fluid"
            src={popular5}
          />
        </div>
        <div className="col-md-7 d-flex justify-content-start align-items-center">
            <div className="">
              <h1 style={{fontSize: 50, fontWeight: 700}}>Watch Of Choice</h1>
              <p>
                Lorem ipsum dolor sit amet voluptatem ducimus? amet. Neque placeat
                nobis sequi laborum. Perspiciati amet. Neque placeat nobis sequi
                laborum. Perspiciatis,s, ducimus?laborum. Perspiciatis,s, ducimus?
              </p>
              <button className="p-2 select">Show Watches</button>
            </div>
          </div>
      </div>
    </section>
    </div>
  )
}

export default About
