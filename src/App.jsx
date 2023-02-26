import styles from "./style";
import Hero from "./components/hero";
import Features from "./components/Features";
import Works from "./components/Works";


const App = () => (

  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      {/* NavBarComponent */}
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>

      <Features/>
      <Works/>
        {/* Other Components: Pricing, how does it work*/}

      </div>
    </div>
  </div>
);

export default App;