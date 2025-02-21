import './header.css'

function Header() {

const name = "Alice";

  return (
    <>
        <header>
            <img src="https://octodex.github.com/images/stormtroopocat.jpg" alt="Ninja Octocat" />
            <h1>Entrez, {name} et bienvenue sur ma page</h1>
        </header>
    </>
  )
}

export default Header