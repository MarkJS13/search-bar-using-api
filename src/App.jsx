import '../src/App.css'
import Input from './Search/Input'
import Result from './Search/Result'
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { createContext, useState } from 'react';


export const MyContext = createContext();

function App() {
  const [name, setName] = useState('');

  const { data } = useQuery(['people', name], async () => {
      try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
          const filtered = response.data.filter(user => {
              return user && user.name && user.name.toLowerCase().includes(name.toLocaleLowerCase())
          })

          return filtered;
      } catch(err) {
          console.log('fetching error!');
      }
  })

  console.log(data)

  return (
    <MyContext.Provider value={[ data ]}>
      <div className='App'>
        <div className="search-bar-container">
          <Input setName={setName}/>
          <Result/>
        </div>
      </div>
    </MyContext.Provider>
  )
}

export default App
