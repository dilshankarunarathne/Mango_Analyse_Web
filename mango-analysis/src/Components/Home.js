import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header'; 
import Footer from './footer';
import ResultPage from './results';

function Home() {
  const [fileSelected, setFileSelected] = useState(null);
  const [previewSource, setPreviewSource] = useState();
  const [prediction, setPrediction] = useState(null); 

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFileSelected(event.target.files[0]);
      previewFile(event.target.files[0]);
    } else {
      setFileSelected(null);
    }
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
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
      setPrediction(data.prediction); 
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
            <div className='flex'>
              <div className='image-select flex-1'>
                <div className="text-xl font-bold items-center justify-center grid-rows-2 mt-16 p-4">
                  <div>
                    <h3>Select the mango image to check if it's consumable:</h3>
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
                  {previewSource && (
                    <img src={previewSource} alt="chosen" style={{ height: '300px' }} />
                  )}
                  <br></br>
                  <br></br>
                  <form>
                    <button
                      type="button" 
                      className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>

              <div className='result-box flex-1 text-xl font-bold items-center justify-center mt-16 p-4'>
                {prediction && (
                  <div>
                    <h3>This mango is </h3>
                    <div>{prediction}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
