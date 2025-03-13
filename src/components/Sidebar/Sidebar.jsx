import React, { useState } from 'react';
import "./Sidebar.css";
import logo from '../../assets/logo_w_context2.png';

//adding cafe
function Sidebar({ setCafes }) {
  const criteria = ["Stable Wi-Fi", "Power sockets", "Quiet", "Coffee", "Food"];
  const [newCafe, setNewCafe] = useState({
    title: '',
    address: '',
    criteria: [],
    picture: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setNewCafe((prevCafe) => ({
        ...prevCafe,
        criteria: checked
          ? [...prevCafe.criteria, value]
          : prevCafe.criteria.filter((criterion) => criterion !== value)
      }));
    } else if (type === 'file') {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewCafe((prevCafe) => ({
          ...prevCafe,
          picture: reader.result
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setNewCafe((prevCafe) => ({
        ...prevCafe,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newCafe.title && newCafe.address && newCafe.criteria.length > 0 && newCafe.picture) {
      setCafes((prevCafes) => [...prevCafes, newCafe]);
    } else {
      alert('Please fill in all fields before submitting.');
    }

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
            <span className="input-group-text" id="cafe-title">
              <i className="fa-solid fa-mug-saucer form-icons"></i>
            </span>
            <input
              name="title"
              value={newCafe.title}
              onChange={handleChange}
              placeholder="FabCafe Shibuya"
              type="text"
              className="form-control"
              aria-describedby="cafe-title"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="cafe-address">
              <i className="fa-solid fa-location-dot form-icons"></i>
            </span>
            <input
              name="address"
              value={newCafe.address}
              onChange={handleChange}
              placeholder="1-chome-11-1 Shibuya, Shibuya City, 150-0002, Tokyo"
              aria-describedby="cafe-address"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            {criteria.map((criterion) => (
              <React.Fragment key={criterion}>
                <input
                  name="criteria"
                  type="checkbox"
                  className="btn-check"
                  id={criterion}
                  autoComplete="off"
                  value={criterion}
                  checked={newCafe.criteria.includes(criterion)}
                  onChange={handleChange}
                />
                <label
                  className="btn btn-outline-success btn-sm mx-1 mb-1"
                  htmlFor={criterion}
                >
                  {criterion}
                </label>
              </React.Fragment>
            ))}
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="cafe-picture">
              <i className="fa-solid fa-camera-retro form-icons"></i>
            </span>
            {newCafe.picture && (
              <div className="mb-3">
                <img
                  src={newCafe.picture}
                  alt="Selected"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            )}
            <input
              name="picture"
              type="file"
              className="form-control"
              accept="image/*"
              onChange={handleChange}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-success">
              Ready to brew
            </button>
          </div>
        </form>
      </div>
      <img src={logo} alt="keyboard and matcha logo" />
    </div>
  );
}

export default Sidebar;
