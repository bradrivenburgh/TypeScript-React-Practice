import { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  // Add type of data guests will be in <> brackets after
  // useState
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setGuests([...guests, name]);
    setName('');
  };

  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map((guest, key) => (
          <li key={key}>{guest}</li>
        ))}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

export default GuestList;
