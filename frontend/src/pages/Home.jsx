import React from 'react'
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import wordlImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'
import Subtitle from './../shared/Subtitle'

import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonials'
import Newsletter from '../shared/Newsletter'

const Home = () => {
  return <>
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'Wonosobo Asri'} />
                <img src={wordlImg} alt="" />
              </div>
              <h1>Welcome to <span className='highlight'>Healinggo</span>
              </h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, quidem?</p>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box">
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-4 hero__video-box">
              <video src={heroVideo} alt="" controls />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={heroImg02} alt="" />
            </div>
          </Col>
          <SearchBar />
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className="services__subtitle">What we serve</h5>
            <h2 className="services__title">we offer our best services</h2>
          </Col>
          <ServiceList />
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtitle subtitle={'Explore'} />
            <h2 className='featured__tour-title'>Our Featured Tour</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
              <Subtitle subtitle={'Experience'} />
              <h2>With our all experience <br />we will serve you</h2>
              <p>Lorem ipsum dolor sit amet. <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, voluptatum!</p>
            </div>
            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>1k+</span>
                <h6>Successful Trip</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6>Regular Client</h6>
              </div>
              <div className="counter__box">
                <span>1+</span>
                <h6>Years Experience</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className="experience__img">
              <img src={experienceImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Gallery'} />
            <h2 className='gallery__title'>Our Gallery</h2>
          </Col>
          <Col lg='12'>
            <MasonryImagesGallery />
          </Col>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'fans'} />
            <h2 className='testimonial__title'>our fans say</h2>
          </Col>
          <Col lg='12'>
            <Testimonials />
          </Col>
        </Row>
      </Container>
    </section>
    {/* <Newsletter /> */}
  </>
}

export default Home