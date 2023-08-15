import React from 'react'
import "./Projects.css"
import img from "../img/constructions-2.jpg"
import img1 from "../img/constructions-4.jpg"
import img2 from "../img/design-1.jpg"
import img3 from "../img/design-2.jpg"
import img4 from "../img/remodeling-1.jpg"
import img5 from "../img/remodeling-2.jpg"
import img6 from "../img/remodeling-3.jpg"
import img7 from "../img/repairs-2.jpg"

const Projects = () => {
  return (
    <>
    
      <div class="container Projects" id='PROJECTS'>
        <div>
          <div className='col-sm-12 title'>
              <h1 className='text-center'><span>Our Projects</span> </h1>
              <p className='text-center'>
              Consequatur libero assumenda est voluptatem est quidem illum et officia imilique qui vel 
              <br /> architecto accusamus fugit aut qui distinctio
              </p>
          </div>
          <div class="full-view"></div>
          <div class="preview-list">
            <ul>
              <li>
                <input type="radio" id="tab-1" name="gallery-group"/>
                <label for="tab-1">
                  <div class="tab">
                    <img src={img} />
                  </div>
                </label>
                <div class="content">
                <img src={img} />
                </div>
              </li>
              <li>
                <input type="radio" id="tab-2" name="gallery-group"/>
                <label for="tab-2">
                  <div class="tab ">
                    <img src={img1} />
                  </div>
                </label>
                <div class="content">
                  <img src={img1} />
                </div>
              </li>
              <li>
                <input type="radio" id="tab-3" name="gallery-group"/>
                <label for="tab-3">
                  <div class="tab ">
                  <img src={img2} />
                  </div>
                </label>
                <div class="content">
                <img src={img2} />
                </div>
              </li>
              <li>
                <input type="radio" id="tab-4" name="gallery-group" checked/>
                <label for="tab-4">
                  <div class="tab ">
                  <img src={img3} />
                  </div>
                </label>
                <div class="content">
                <img src={img3} />
                </div>
              </li>
              <li>
                <input type="radio" id="tab-5" name="gallery-group"/>
                <label for="tab-5">
                  <div class="tab ">
                  <img src={img4} />
                  </div>
                </label>
                <div class="content">
                <img src={img4} />
                </div>
              </li>
              <li>
                <input type="radio" id="tab-6" name="gallery-group"/>
                <label for="tab-6">
                  <div class="tab ">
                  <img src={img5} />
                  </div>
                </label>
                <div class="content">
                <img src={img5} />
                </div>
              </li>
              <li>
                <input type="radio" id="tab-7" name="gallery-group"/>
                <label for="tab-7">
                  <div class="tab ">
                  <img src={img6} />
                  </div>
                </label>
                <div class="content">
                <img src={img6} />
                </div>
              </li>
              <li>
                <input type="radio" id="tab-8" name="gallery-group"/>
                <label for="tab-8">
                  <div class="tab ">
                  <img src={img7} />
                  </div>
                </label>
                <div class="content">
                <img src={img7} />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>      
    </>
  )
}

export default Projects