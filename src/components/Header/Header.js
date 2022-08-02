import logo from '../../assets/Deliverize.png';
import arrow from '../../assets/arrow_left.png'
import arrowdown from '../../assets/arrow_down.png'
import profile from '../../assets/profile.png'
import car from '../../assets/car.png'
import './styles.css'


function Header() {
    return (
      <form className='header' >
          <div className='delive'>
            <img className='arrow' src={arrow} alt="seta"/>
            <img className='logo' src={logo} alt="logo"/>
            </div>

          <div className='address'>
            <input type="text" name='buscar-endereco'/>
            <img className='down' src={arrowdown} alt='baixo'/>   
          </div>

          <div className='establishment'>
            <input type="text" 
            placeholder='Busque por estabelecimento ou produtos' 
            size="35"/>  
          </div> 

          <div className='singin'>
            <img className='perfil' src={profile} alt="profile"/>
                <p className='login'>Entrar</p>
                <img className='carrinho' src={car} alt="car"/>
                <p>Carrinho</p>
            </div>
            
            
        </form>



    )
    
}
export default Header;