import { AiOutlineSearch } from 'react-icons/ai'


const Input = (props) => {

    const handleChange = (e) => {
        props.setName(e.target.value);
    }

    return(
        <div className='input'>
          <input type="text" onChange={handleChange}/>
          <span><AiOutlineSearch/></span>
        </div>
    )
}


export default Input;