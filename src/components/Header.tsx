import photoProfil from "../assets/photo-profil.JPG";
import TemporaryDrawer from "./Burger";
import data from "../data.json";

function Header() {
  return (
    <>
      <header className="p-8">
        <TemporaryDrawer/>
        <div className="flex flex-col justify-center items-center gap-6">
      <img width={200} className="rounded-full" src={photoProfil} alt="Profil" />
      <h1>
          {data[0].firstname} {data[1].lastname}
        </h1>
        <h2>Web developper Full Stack Junior</h2>
        </div>
        <ul className="flex justify-evenly underline underline-offset-2 text-lg">
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="projects">Projects</a>
          </li>
          <li>
            <a href="resumeCv">Resume/CV</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;