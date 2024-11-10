// app/page.tsx

import "./home.scss";
import SearchBar from "../Components/SearchBar/SearchBar";

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-text">
          <h2>შეარჩიე მხატვრების ნამუშევრები ან გაყიდე შენი 🖌️</h2>
          <p> პერსონალური და ხელნაკეთი ნამუშევრები ქართველი ხელოვანებისგან </p>
        </div>
        <SearchBar />
      </div>
    </div>
  );
};

export default HomePage;
