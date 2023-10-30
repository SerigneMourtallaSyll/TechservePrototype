import React from 'react';
import { Container, Row } from 'react-bootstrap';
import NewsCard from './NewsCard';
import Image1 from '../assets/Image/image1.jpeg';
import Image2 from '../assets/Image/image3.jpg';
import image4 from '../assets/Image/image4-removebg-preview.png';
import image5 from '../assets/Image/imageTrophee-removebg-preview.png';

function News() {
  return (
    <Container fluid>
        <Row className='py-5 flex-column' id='news'>
            <div className='d-flex flex-wrap pb-5' id='parentCard'>
                <div className="col-md-6">
                    <img src={Image1} alt="img" />
                </div>
                <div className="col-md-3">
                    <NewsCard title={"Who we are"} />
                </div>
            </div>
            <div className='d-flex justify-content-around flex-wrap' id='simpleCard'>
                <div className="col-md-5">
                    <NewsCard title={"What we do"} />
                </div>
                <div className='d-flex align-items-center col-md-5'>
                    <img src={image4} alt="img" />
                </div>
            </div>
            <div className='d-flex flex-wrap py-5' id='parentCard'>
                <div className="col-md-6">
                    <img src={Image2} alt="img" />
                </div>
                <div className="col-md-3">
                    <NewsCard title={"How we do it"} />
                </div>
            </div>
            <div className='d-flex justify-content-around flex-wrap' id='simpleCard'>
                <div className="col-md-5">
                    <NewsCard title={"Why you should pick us"} />
                </div>    
                <div className='d-flex align-items-center col-md-5'>
                    <img src={image5} alt="img" />
                </div>
            </div>
        </Row>
    </Container>
  )
}

export default News