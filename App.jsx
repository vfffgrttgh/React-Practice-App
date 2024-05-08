import Button from './Button';
import Correct from './Correct'
import Wrong from './Wrong'
import './App.css';

function App() {
  return (
    <div>
      <head>
        <title>React Practice</title>
      </head>

      <body>
        <h2>React Button!</h2>
      </body>

      <Button />

      <body>
        <b>
          This button is made as a component in React. 
          Designs were given through CSS. 
          Made an alert so whenever you click this, it shows up. 
          Also, there is another color for this whenever mouse hovers over it.
        </b>
      </body>

      <body>
      <h6>
      Circle in React!
      </h6>
      </body>

    <div className='Box'></div>

    <body>
      <b>
        This circle was first a box but styled using CSS properties like width,height and background-color.
        I hope you have read till here.
      </b>
    </body>

    <body>
      <h6>
        Question: How do you make shapes in React?
      </h6>
    </body>

    <Correct /> 
    <Wrong />
    </div>
  );
}

export default App;