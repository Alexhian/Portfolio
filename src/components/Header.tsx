import photoProfil from "../assets/photo-profil.JPG";
import TemporaryDrawer from "./Burger";
import data from "../data.json";

function Header() {
  return (
    <>
      <header className="bg-bg-header bg-no-repeat bg-cover">
      <div className="overlay">
        <TemporaryDrawer />
        <div className="flex flex-col justify-center items-center gap-8">
          <img
            width={180}
            className="rounded-full"
            src={photoProfil}
            alt="Profil"
          />
          <h1 className="text-2xl">
            Hello, I'm {data[0].firstname} {data[1].lastname}
          </h1>
          <h2 className="text-2xl">{data[6].job}</h2>
        </div>
      </div>
      </header>
    </>
  );
}

export default Header;
