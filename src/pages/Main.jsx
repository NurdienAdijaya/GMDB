import React from 'react'
import Nextbutton from './Main/Nextbutton'
import Cardm from './Main/Cardm'
import Imageslide from './Main/Imageslide'
import ButtonCategory from './Main/ButtonCategory'



const Main = () => {
  // const [ button, setButton] = useState([]);

  // const filter = (button) => {
  //     const filteredData= Movie.filter(item => item.category === button);
  //     Movie(filteredData)
  // }

  // button={button} filter={filter}

    return (
        <div>
            <Imageslide/>
            <ButtonCategory /> 
            <Cardm/>
            <Nextbutton/>
        </div>
    )
}

export default Main;
