import photoProfil from "../assets/photo-profil.JPG";

function Header() {
  return (
    <>
      <header className="p-8">
      <img width={200} className="rounded-3xl" src={photoProfil} alt="Profil" />
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