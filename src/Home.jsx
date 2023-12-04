import React from 'react'
import watch from "./images/hero/watch.png"
import newProduct1 from "./images/gallery/new_product1.png"
import newProduct2 from "./images/gallery/new_product2.png"
import newProduct3 from "./images/gallery/new_product3.png"



const Home = () => {
  return (
    <div>
       <section
              style={{paddingLeft: "150px",paddingRight: "150px", backgrounColor: "#f0f0f2"}}>
      <div className="row">
        <div className="col-md-8 d-flex justify-content-start align-items-center">
          <div className="">
            <h1 style={{fontSize: 70, fontWeight: 700}}>
              Select Your New<br />
              Perfect Style
            </h1>
            <p>
              Lorem ipsum dolor sit amet voluptatem <br />
              amet. Neque placeat nobis sequi laborum. Perspiciatis, ducimus?
            </p>
            <button className="p-2 px-3 select">Shop Now</button>
          </div>
        </div>
        <div className="col-md-4">
          <img style={{width: 300}} src={watch} />
        </div>
      </div>
    </section>

    <section className="con sec2" style={{paddingTop: 50}}>
      <h3 className="new" style={{paddingBottom: 0, marginBottom: 0}}>New Products</h3>
      <div className="row text-center">
        <div className="col-md-4">
          <div className="overflow">
            <img
              className="img-fluid"
              style={ {width:400}}
             
              src={newProduct1}
            />
          </div>

          <p style={{fontSize: 20}}>AbdelRhman Front end</p>
          <p style={{color: "red"}}>$50.500</p>
        </div>

        <div className="col-md-4">
          <div className="overflow">
            <img
              className="img-fluid"
              style={ {width:400}}
              src={newProduct2}
            />
          </div>

          <p style={{fontSize: 20}}>AbdelRhman Front end</p>
          <p style={{color: "red"}}>$50.500</p>
        </div>

        <div className="col-md-4">
          <div className="overflow">
            <img
              className="img-fluid"
              style={ {width:400}}
              src={newProduct3}
            />
          </div>

          <p style={{fontSize: 20}}>AbdelRhman Front end</p>
          <p style={{color: "red"}}>$50.500</p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Home
