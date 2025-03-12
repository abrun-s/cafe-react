import React, { useState } from 'react';
import "./Sidebar.css";
import logo from '../../assets/logo_w_context2.png';
import fs from 'fs';
import path from 'path';

function Sidebar() {
  // the addCafe feature

  const criteria = ["Stable Wi-Fi", "Power sockets", "Quiet", "Coffee", "Food"];
  const [newCafe, setNewCafe] = useState ({
    title: '',
    address: '',
    criteria: [],
    picture: ''
  });

  const handleChange =(e) => {
    const {name, value, type, checked} = e.target;
    if (type === 'checkbox') {
      setNewCafe((prevCafe) => ({
        ...prevCafe, criteria: checked
        ? [...prevCafe.criteria, value]
        : prevCafe.criteria.filter((criteria) => criteria !== value)
      }));
    } else {
      setNewCafe((prevCafe) => ({
        ...prevCafe, [name]: value
      }));
    }
  };

  const handleSubmit =(e) => {
    e.preventDefault();
    setCafes((prevCafes) => [...prevCafes, newCafe])

    // Update cafedata.json file
    const cafedataPath = path.join(__dirname, '../../cafedata.json');

    // Read the current cafedata.json file
    fs.readFile(cafedataPath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading cafedata.json:', err);
        return;
      }

      // Parse the JSON data
      const cafes = JSON.parse(data);

      // Add the new cafe to the list
      cafes.push(newCafe);

      // Write the updated data back to cafedata.json
      fs.writeFile(cafedataPath, JSON.stringify(cafes, null, 2), (err) => {
        if (err) {
          console.error('Error writing to cafedata.json:', err);
        } else {
          console.log('cafedata.json updated successfully');
        }
      });
    });

    setNewCafe({
      title: '',
      address: '',
      criteria: [],
      picture: ''
    });
  };

  return (
    <div className="sidebar">
      <div>
        <h3>Share your work spot</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text" id="cafe-title"><i className="fa-solid fa-mug-saucer form-icons"></i></span>
            <input name="title" value={newCafe.title} onChange={handleChange} placeholder="FabCafe Shibuya" type="text" className="form-control" aria-describedby="cafe-title" />
            </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="cafe-address"><i className="fa-solid fa-location-dot form-icons"></i></span>
            <input name="address" value={newCafe.address} onChange={handleChange} placeholder="1-chome-11-1 Shibuya, Shibuya City, 150-0002, Tokyo, 150-0002, Tokyo" aria-describedby="cafe-address" type="address" className="form-control" />
          </div>
          <div className="mb-3">
            { criteria.map((criterion) => {
              return (
                <React.Fragment key={criterion}>
                  <input name="criteria" type="checkbox" className="btn-check" id={criterion} autoComplete="off" value={criterion} checked={newCafe.criteria.includes(criterion)} onChange={handleChange}/>
                  <label className="btn btn-outline-success btn-sm mx-1 mb-1" htmlFor={criterion}>{criterion}</label>
                </React.Fragment>
              );
            })}
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="cafe-picture"><i className="fa-solid fa-camera-retro form-icons"></i></span>
            <input name="picture" type="text" value={newCafe.picture} onChange={handleChange} className="form-control" aria-describedby="cafe-picture" placeholder='http://example.com/image.jpg'/>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-success">Ready to brew</button>
          </div>
        </form>
      </div>
      <img src={logo} alt="keyboard and matcha logo" />
    </div>
  );
}

export default Sidebar;
