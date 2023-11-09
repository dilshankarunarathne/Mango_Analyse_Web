import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header'; // Make sure the import paths match your project structure
import Footer from './footer';
import ResultPage from './results';

function Home() {
  const navigate = useNavigate();

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
                <input type="file" id="imageUpload" name="imageUpload" accept="image/*" />
                <label htmlFor="imageUpload">Upload Image</label>
              </div>
              <br></br>
              <br></br>
              <form>
                
                <button
                  type="submit"
                  className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => navigate('/results')}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
