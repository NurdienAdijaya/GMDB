import React from 'react'
import Nextbutton from './Main/Nextbutton'
// import Card from './Main/Card'
import Imageslide from './Main/Imageslide'
import ButtonCategory from './Main/ButtonCategory'
import Movie from './Main/Movie'


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
            <Movie/>
            <Nextbutton/>
        </div>
    )
}

export default Main