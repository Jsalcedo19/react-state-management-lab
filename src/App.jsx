
import { useState } from "react";


// src/App.jsx

const App = () => {
  
const [team, setTeam] = useState([]);

const [money, setMoney] = useState(100);

const [zombieFighters, setZombieFighters] = useState([
  {
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://via.placeholder.com/150/92c952',
  },
  {
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://via.placeholder.com/150/771796',
  },
  {
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://via.placeholder.com/150/24f355',
  },
  {
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/d32776',
  },
  {
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://via.placeholder.com/150/1ee8a4',
  },
  {
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://via.placeholder.com/150/66b7d2',
  },
  {
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://via.placeholder.com/150/56acb2',
  },
  {
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://via.placeholder.com/150/8985dc',
  },
  {
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://via.placeholder.com/150/392537',
  },
  {
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/602b9e',
  },
]);

const handleAddFighter = (fighter) => {
  setTeam([...team, fighter]);
  setMoney(money - fighter.price);
  setZombieFighters(zombieFighters.filter((zombieFighter) => zombieFighter !== fighter));
};

  return (
    //Display the list of zombieFighters by mapping the array into the UI of App.jsx. (We’ve provided some helpful CSS assuming you use a ul and lis)

    //Each character’s UI should also have an Add button to add them to your team.

    <>
      <h1>Zombie Fighters</h1>
      <ul>
        {zombieFighters.map((fighter, index) => (
          <li key={index}>
            <img src={fighter.img} alt={fighter.name} />
  
                    <p>{fighter.name}</p>
                    <p>Price: ${fighter.price}</p>
                    <p>Strength: {fighter.strength}</p>
                    <p>Agility: {fighter.agility}</p>
                  </li>
                ))}
              </ul>
              <button on click={handleAddFighter}>Add to Team</button>
            </>
        );
}




 



  export default App