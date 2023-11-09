import React from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import Footer from './footer.js';
import Header from './header.js';

import ResultsPage from './results.js';

function Home() {
  return (
    <Router>
      <div>
        <Header />
        <div className="mt-16 p-4 flex justify-center items-center">
          <div className="relative min-h-full w-32 ...">
            <div className="absolute inset-0 ...">
              <div className="text-xl font-bold items-center justify-center grid grid-rows-2 mt-16 p-4">
                <div>
                  <h3>Add Your Image To Find consumable mangoes</h3>
                </div>
                <br />
                <div className="mt-4">
                  <input type="file" id="imageUpload" name="imageUpload" accept="image/*" />
                  <label htmlFor="imageUpload">Upload Image</label>
                </div>
                <br />
                <br />
                <form>
                
                  <Link to="/results">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Submit
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <Route path="/results" component={ResultsPage} /> {/* Define the route to the ResultsPage component */}
    </Router>
  );
}

export default Home;
