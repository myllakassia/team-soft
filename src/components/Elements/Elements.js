import './elements.css'
import './scripts.js'

function Elements() {
   return(
    <span className='ingredients'>
        <div className="add-ingredients">
            <div>
                <strong>Adicionar Ingredientes</strong>
                <p className='amount'>Até 8 ingredientes</p>
            </div>

            <div className='counter'>
                <strong>Queijo cheddar</strong>

                <div className='buttons'>
                    
                    <button className='left-button' > - </button>
                    <div className='buttons-sum'> 0 </div>
                    <button className='right-button' maxlength="8"> + </button>
                    
                </div>
            </div>
            <p className='pr'> + R$4,99 </p>

            <div className='counter'>
                <strong>Molho cheddar</strong>

                <div className='buttons'>
                    <button className='left-button'> - </button>
                    <div className='buttons-sum'> 0 </div>
                    <button className='right-button'> + </button>
                </div>
                
            </div>
            <p className='pr'> + R$3,50 </p>

            <div className='counter'>
                <strong>Molho de picanha</strong>

                <div className='buttons'>
                    <button className='left-button'> - </button>
                    <div className='buttons-sum'> 0 </div>
                    <button className='right-button'> + </button>
                </div>
                
            </div>
            <p className='pr'> + R$3,50 </p>

            <form className='need'>
                <strong className='cutlery'>Precisa de Talher?</strong>
            </form>  
            <form> 
                <div className='options'>
                <label value="sim" >Sim</label>
                    <input type="radio" id='sim'  name="precisa-talher" value="sim"></input>
                </div>   
                <div className='options'> 
                    <label value="nao" >Não</label>
                    <input type="radio" id='nao' name="precisa-talher"  value="nao" checked/>
                </div>   
            </form>   

            <footer className='card'>
            <div className='button-below'>
                    <button className='button-left'> - </button>
                    <div className='buttons-sum'> 0 </div>
                    <button className='button-right'> + </button>
            </div>
                    <p className='add'>Adicionar</p>
            </footer>
        </div>
        </span>
    )
               
    window.counter = function(operator = "plus") {
        var currentCount = document.getElementById('buttons-sum').textContent
        currentCount = parseInt(currentCount.replace(/,/gi, ""));
        if (operator == "plus") {
            currentCount += 1;
        } else if (operator == 'minus') {
            currentCount -= 1;
        } else {
            alert("undfined opereater.")
            return false;
        }
        document.getElementById('buttons-sum').textContent = parseInt(currentCount).toLocaleString('en-US')
     
    }
     
    // window.onload = function() {
     
    //     // Add ("+") button eventListener
    //     document.getElementById('right-button').addEventListener('click', function() {
    //         counter ();
    //     })
     
    //     // Minus ("-") button eventListener
    //     document.getElementById('left-button').addEventListener('click', function() {
    //         counter("minus");
    //     })
    // }


}
export default Elements