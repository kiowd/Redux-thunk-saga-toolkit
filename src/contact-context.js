import React, { useState, useEffect } from "react";

const SearchResult = () => {
    const [bookings, setBookings] = useState([]);
    const URL = "https://cyf-react.glitch.me";

    useEffect(() => {
      fetch(URL)
        .then(response => response.json())
        .then(data => setBookings(data));
    }, []);

    const [active, setActive] = useState(null);

    const handleChange = index => {
      setActive(index);

      if (active === index) {
        setActive(null);
      }
    };

    return (
      <div className="table-responsive">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">id</th>
              <th scope="col">title</th>
              <th scope="col">first name</th>
              <th scope="col">surname</th>
              <th scope="col">email</th>
              <th scope="col">room id </th>
              <th scope="col">check in date</th>
              <th scope="col">check out data</th>
              <th scope="col">number of nights</th>
            </tr>
          </thead>
          <tbody className="result">
            {bookings.map((user, index) => (
              <tr
                key={index}
                onClick={() => handleChange(index)}
                className={
                  active === index ? "background-red" : "background-blue"
                }
              >
                <th scope="row">{user.id}</th>
                <td>{user.title}</td>
                <td>{user.firstName}</td>
                <td>{user.surname}</td>
                <td>{user.email}</td>
                <td>{user.roomId}</td>
                <td>{user.checkInDate}</td>
                <td>{user.checkOutDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

//   const [marsPhotos, setMarsPhotos] = useState({});

//   useEffect(() => {
//     fetch(`https://pokeapi.co/api/v2/pokemon/1/`)
//       .then(res => res.json())
//       .then(data => setMarsPhotos(data));
//   }, []);

//   if (marsPhotos.abilities) {
//     return (
//       <div>
//         {marsPhotos.abilities.map((photo, index) => {
//           return (
//           <>
//           <p key={index}>{photo.ability.name}</p>
          
//           </>
//           )
//         })}
//       </div>
//     );
//   } else {
//     return <div>Loading...</div>;
//   }
//};

export default SearchResult;
