import React, { useEffect, useState } from 'react';
import Footer from './footer.js';
import Header from './header.js';

function ResultPage() {
  const [results, setResults] = useState(null);

  useEffect(() => {
    fetch('your-backend-api-endpoint')
      .then((response) => response.json())
      .then((data) => setResults(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Header />
      <div className="mt-16 p-4 flex justify-center items-center">
        <div className="relative min-h-full w-32 ...">
          <div className="absolute inset-0 ... ">
            <div className="text-xl font-bold items-center justify-center grid grid-rows-2 mt-16 p-4">
              {results ? (
                <div>
                  <h3>Result is :</h3>
                  {/* Render your results here */}
                  {results.map((result, index) => (
                    <div key={index}>{result}</div>
                  ))}
                </div>
              ) : (
                <div>Loading results...</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ResultPage;

