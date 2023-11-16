import { Carousel } from 'antd';
import Cover1 from "../../assets/cover1.webp"
import cover2 from "../../assets/cover2.webp"
import cover3 from "../../assets/cover3.jpg"
import cover4 from "../../assets/cover4.jpg"
import "./slider.css"
const contentStyle = {
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

 const Slider = () => {
  return (
    <div>
        <Carousel autoplay className='shadow'>
    <div>
      <img src={Cover1} alt="" className='cover' />
    </div>
    <div>
      <img src={cover2} alt="" className='cover' />
    </div>
    <div>
      <img src={cover3} alt="" className='cover' />
    </div>
    <div>
      <img src={cover4} alt="" className='cover' />
    </div>
  </Carousel>
    </div>
  )
}

export default Slider
