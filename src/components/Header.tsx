import photoProfil from "../assets/photo-profil.JPG";
import TemporaryDrawer from "./Burger";
import data from "../data.json";

function Header() {
  return (
    <>
      <header className="bg-bg-header bg-no-repeat bg-cover">
      <div className="overlay">
        <TemporaryDrawer />
        <div className="flex flex-col justify-center items-center gap-6">
          <img
            width={200}
            className="rounded-full"
            src={photoProfil}
            alt="Profil"
          />
          <h1>
            {data[0].firstname} {data[1].lastname}
          </h1>
          <h2>Web developer Full Stack Junior</h2>
        </div>
      </div>
      </header>
    </>
  );
}

export default Header;
