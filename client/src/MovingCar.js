import './styles/carmovement.css';
import carlogo from './imgs/Subject.png'


function MovingCar() {
  return (
<div className="car-movement" id="pot">
<img src={carlogo} style={{
    width:'100px',
    height: 'auto'
    }}/>
</div>
  );
}

export default MovingCar;
