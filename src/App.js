import './App.css';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="content">
        <section className="about">
          <div>imagen</div>
          <h3>The leader in interactive VR</h3>
          <p>Founded in 2011, Loopstudios has been producing world-class virtual reality 
              projects for some of the best companies around the globe. Our award-winning 
              creations have transformed businesses through digital experiences that bind 
              to their brand.
          </p>
        </section>
        <section className="creations">
          <h3>Our creations</h3>
          <button>See all</button>
          <div>imagen</div>
          <div>imagen</div>
          <div>imagen</div>
          <div>imagen</div>
          <div>imagen</div>
          <div>imagen</div>
          <div>imagen</div>
          <div>imagen</div>
        </section>
      </main>
      <footer>
        <div>logo</div>
        <ul>
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
        <div>Redes sociales</div>
        <span>© 2021 Loopstudios. All rights reserved.</span>
        <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. </p>
        <p>Coded by <a href="https://github.com/TatianaBotia">Tatiana Botia</a>.</p>


      </footer>
    </div>
  );
}

export default App;
