import React from "react";

export default function About() {
  return (
    <main className="container" role="main">
      <div className="container-fluid jumbotron jumbotron-portfolio py-5">
        <div className="container">
          <h1 className="display-3 fw-bold text-white">About</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card rounded mb-4 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">About</h5>
                <p className="card-text">
                  {" "}
                  Snipper Security limited was founded in 2014 with the aim of
                  being the preferred security solutions provider in the
                  country. Our mission is to provide excellent security services
                  that meets the needs and expectations of our clients. We have
                  a clientele base that has grown and diversified from
                  Commercial, Residential, Hospitality, and Industrial sector.
                  We provide services to corporate, residential estates,
                  non-profit and government ministries, and parastatals. Having
                  a management team experienced in the security industry, the
                  company is able to offer best in class affordable security
                  services tailored to meet the security needs of your business,
                  allowing you to focus on your core business activities. Our
                  head office is in Nairobi, Diaspora building opp. Total petrol
                  station (city cabanas) off Mombasa Road. We also have a branch
                  network in Kitengela (Kajiado), Eldoret, Kitale, Bungoma,
                  Busia.
                </p>
              </div>
              <div className="card-body">
                <h5 className="card-title">VISION AND MISSION</h5>
                <p className="card-text">
                  VISION – To be the preferred security solutions provider in
                  the country.
                </p>
                <p className="card-text">
                  MISSION - Our mission is to provide excellent security
                  services that meets the needs and expectations of our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
