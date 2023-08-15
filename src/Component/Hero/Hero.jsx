import React from 'react'
import  './hero.css'
import img1 from "../../img/constructions-1.jpg"
import img2 from "../../img/constructions-2.jpg"
import img3 from "../../img/constructions-3.jpg"
import img4 from "../../img/constructions-4.jpg"
import Header from '../Header/Header'
import Services from '../../Services/Services'
import Projects from '../../Our Projects/Projects'
import Contact from '../../Contact/Contact'


const Hero = () => {
  return (
    <>
    <div className="p-5 text-center bg-image">
      <div class="mask">
    <Header/>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-3 Hero-title">Welcome to UpConstruction</h1>
            <div className='border-b'></div>
            <h6 className="sup-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
              enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
              ex ea commodo consequat</h6>
            <a class="btn  btn-lg mx-auto" href="#!" role="button">Get Started</a>
          </div>
        </div>
      </div>
    </div>
    </>

  )
}

const Hero1 = () => {
  return (
  <>
  <section className='container-fluid'>
    <div className='row  qoute'>
                <div className='qoute-title col-lg-6  col-sm-12 mx-auto'>
                  <h1>Minus hic non reiciendis ea possimus at quia.</h1>
                  <div className='border-b1'></div>
                  <p>Rem id rerum. Debitis deserunt quidem delectus expedita ducimus dolor. Aut iusto <br />
                      ipsa. Eos ipsum nobis ipsa soluta itaque perspiciatis fuga ipsum perspiciatis. Eum <br />
                    amet fugiat totam nisi possimus ut delectus dicta. <br /> <br /> <br />
                    Aliquam velit deserunt autem. Inventore et saepe. Tenetur suscipit eligendi labore <br /> culpa eos. Deserunt porro magni qui necessitatibus dolorem at animi cupiditate.</p>
                </div>
                <div className="card card-qoute col-lg-6 col-sm-12 mx-auto">
          <h5 className="card-header info-color white-text text-center py-4">
            <strong>GET A QUOTE</strong>
          </h5>
          <div className="card-body px-lg-5 pt-0">
            <form className="md-form">
                <label for="materialSaveFormName">Name:</label>
                <input type="text" id="materialSaveFormName" className="form-control"/>
                <label for="materialSaveFormLastName">Last name</label>
                <input type="email" id="materialSaveFormLastName" className="form-control"/>
                <label for="materialSaveFormEmail">E-mail</label>
                <input type="email" id="materialSaveFormEmail" className="form-control"/>
                <label for="materialSaveFormMessage">Message</label>
                <textarea type="text" id="materialSaveFormMessage" className="form-control md-textarea" rows="3"></textarea>
                <button className="btn btn-rounded my-4 " type="submit">GET A QUOTE</button>
            </form>
          </div>
        </div>
    </div>
  </section>

{/* Constructions */}

  <section className='container-fluid Constructions' id='about'>
    <div className='row'>
      <div className='title '>
        <h1 className='text-center mx-auto'><span>Constructions</span> </h1>
        <p className='text-center'>
          Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione
          <br/> ea sunt quis dolorem dolore earum</p>
      </div>
      <div className='col-lg-6 col-md-12 col-sm-12'>
        {/* 1 */}
      <div class="card mb-5 mx-auto">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src={img1}
            alt="Trendy Pants and Shoes"
            class="img-fluid rounded-start"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body ">
            <h5 class="card-title ">Eligendi omnis sunt veritatis.</h5>
            <p class="card-text">
            Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi 
            voluptatem placeat deleniti adipisci. Cum delectus doloribus non veritatis.
            Officia temporibus illo magnam. Dolor eos et
            </p>
            <p class="card-text">
            </p>
          </div>
        </div>
      </div>
    </div>
      </div>
      {/* 2 */}

      <div className='col-lg-6 col-md-12 col-sm-12'>
      <div class="card mb-5 mx-auto">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src={img2}
            alt="Trendy Pants and Shoes"
            class="img-fluid rounded-start"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Possimus ut sed velit assumenda</h5>
            <p class="card-text">
            Sunt deserunt maiores voluptatem autem est rerum perferendis rerum blanditiis.
            Est laboriosam qui iste numquam laboriosam voluptatem architecto.
            Est laudantium sunt at quas aut hic. Eum dignissimos.
            </p>
            <p class="card-text">
            </p>
          </div>
        </div>
      </div>
    </div>
      </div>
      {/* 3 */}
      <div className='col-lg-6 col-md-12 col-sm-12'>
        <div class="card mb-5 mx-auto">
          <div class="row g-0">
            <div class="col-md-4">
              <img src={img3} alt="Trendy Pants and Shoes" class="img-fluid rounded-start"/>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                  <h5 class="card-title">Error beatae dolor inventore aut</h5>
                  <p class="card-text">
                  Dicta porro nobis. Velit cum in. Nesciunt dignissimos enim
                  molestiae facilis numquam quae quaerat ipsam omnis. Neque debitis 
                  ipsum at architecto officia laboriosam odit. Ut sunt temporibus nulla culpa.
                  </p>
                  <p class="card-text">
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 4 */}
          <div className='col-lg-6 col-md-12 col-sm-12'>
          <div class="card mb-5 mx-auto">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src={img4}
                alt="Trendy Pants and Shoes"
                class="img-fluid rounded-start"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Expedita voluptas ut ut nesciunt</h5>
                <p class="card-text">
                    Aut est quidem doloremque voluptatem magnam quis excepturi vero quia.
                    Eum eos doloremque architecto illo at beatae dolore. Fugiat suscipit et
                    sint ratione dolores. Aut aliquid ea dolores libero nobis.
                </p>
                <p class="card-text">
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}


const Hero2 = () => {
  return (
    <div>
      <Services/>
    </div>
  )
}
const Hero3 = () => {
  return (
    <div>
      <Projects/>
    </div>
  )
}
const Hero4 = () => {
  return (
    <div>
      <Contact/>
    </div>
  )
}



export default Hero
export {Hero1}
export {Hero2}
export {Hero3}
export {Hero4}
