import { useState } from 'react';

const Home = () => {
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(19); 
    const handleClick = () => {
        setName('luigi');
        setAge(24);
    }
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>{name}</p>
            <p>{age}</p>
            <button onClick={handleClick}>Read me</button>
        </div>
     );
}
 
export default Home;