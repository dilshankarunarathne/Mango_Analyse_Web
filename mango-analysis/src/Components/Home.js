import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header'; 
import Footer from './footer';
import ResultPage from './results';

function Home() {
  const navigate = useNavigate();
  const [fileSelected, setFileSelected] = useState(false);

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFileSelected(true);
    } else {
      setFileSelected(false);
    }
  };

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append('file', fileSelected);
  
    const response = await fetch('http://127.0.0.1:8000/api/classify', {
      method: 'POST',
      body: formData,
    });
  
    if (response.ok) {
      const data = await response.json();
      navigate('/results', { state: { prediction: data.prediction } });
    } else {
      alert('File upload failed');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (fileSelected) {
      uploadFile();
    } else {
      alert('Please select a file before submitting.');
    }
  };

  return (
    <div>
      <Header />
      <div className="mt-16 p-4 flex justify-center items-center">
        <div className="relative min-h-full w-32 ...">
          <div className="absolute inset-0 ... ">
            <div className="text-xl font-bold items-center justify-center grid grid-rows-2 mt-16 p-4">
              <div>
                <h3>Add Your Image To Find consumable mangoes</h3>
              </div>
              <br></br>
              <div className="mt-4">
                <input
                  type="file"
                  id="imageUpload"
                  name="imageUpload"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                <label htmlFor="imageUpload">Upload Image</label>
              </div>
              <br></br>
              <br></br>
              <form>
                <button
                  type="button" // Change to type="button" to prevent form submission
                  className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
