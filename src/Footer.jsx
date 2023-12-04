import React from 'react'

const Footer = () => {
  return <>
    <section style={{marginLeft: 150,marginRight: 150, marginTop: 80}}>
        <div className="row">
            <div className="col-md-8">
                <p style={{color: "gray"}}>CopyRights @2023 All Right Reserved | this template made by <span style={{color: "red"}}>Eng/ Somaia Bahaa</span> </p>


            </div>
            <div className="col-md-1">

            </div>
            <div className="col-md-3">
                <i className="fa-brands fa-twitter me-3"></i>
                <i className="fa-brands fa-facebook-f me-3"></i>
                <i className="fa-brands fa-behance me-3"></i>
                <i className="fa-solid fa-globe me-3"></i>
            </div>

        </div>

    </section>
    </>
}

export default Footer
