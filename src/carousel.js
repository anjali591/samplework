import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
 
const Gallery = () => {
  const handleOnDragStart = (e) => e.preventDefault()
  return (
    <AliceCarousel mouseTrackingEnabled>
      <img src={require('./img1.jpg')} onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img src={require('./img2.jpg')} style={{width:'300px', height:'300px'}} onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img src={require('./img3.jpeg')} onDragStart={handleOnDragStart} style={{width:'300px', height:'300px'}} className="yours-custom-class" />
      <img src={require('./img4.jpg')} onDragStart={handleOnDragStart} style={{width:'300px', height:'300px'}} className="yours-custom-class" />
      <img src={require('./img5.jpg')} onDragStart={handleOnDragStart} style={{width:'300px', height:'300px'}} lassName="yours-custom-class" />
    </AliceCarousel>
  )
}
export default Gallery;