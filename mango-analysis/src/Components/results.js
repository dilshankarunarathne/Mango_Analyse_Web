import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './footer.js';
import Header from './header.js';

function ResultPage() {
  const location = useLocation();
  const prediction = location.state?.prediction || 'No prediction';

  return (
    <div>
      <Header />
      <div className="mt-16 p-4 flex justify-center items-center">
        <div className="relative min-h-full w-32 ...">
          <div className="absolute inset-0 ... ">
            <div className="text-xl font-bold items-center justify-center grid grid-rows-2 mt-16 p-4">
              <div>
                <h3>Result is :</h3>
                <div>{prediction}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ResultPage;

