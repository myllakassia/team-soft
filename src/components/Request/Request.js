
import foto from '../../assets/foto.png'
import './request.css'

function Request() {
    return(
        <main className='desktop'>
            <div className="login-form-title">
                <img className='hamb' src={foto} alt="foto-hamburguer"/>
            </div>  
            <div>
            <strong className='offer'>Oferta picanha cheddar bacon</strong>
            </div>

            <p className='description'>
            Hambúrguer de picanha, molho de picanha, cebola crispy, bacon, <br/> queijo cheddar, molho cheddar e pão mix de gergelim </p>
                {/* Delicioso hambúrguer de picanha, molho de picanha, cebola crispy, bacon, queijo cheddar, molho cheddar e pão mix de gergelim, acompanhamento e bebida.  */}

            <div className='prices'>
                <h6 className='price'>R$ 31,99</h6>
                <h6 className='price1'>R$ 34,95</h6>
            </div>
        </main>
    )
}
export default Request;