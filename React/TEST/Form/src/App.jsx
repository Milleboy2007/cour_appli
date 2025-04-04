function App() {

  function handleSubmit(event) {
    // prévenir le chargement de la plage
    event.preventDefault()

    // récup elem form
    const formElem = event.currentTarget

    // récup l'objet des données du form
    const formData = new FormData(formElem)

    // chercher val du champ email (une données)
    const email = formData.get("email")
    const nom = formData.get("name")
    const mpd = formData.get("password")

    alert("Salue " + nom + " ton email est : " + email + " et ton mot de passe est : " + mpd)

    
    formElem.reset()
  }

  function handleAction(formData) {
    const email = formData.get("email")
    const nom = formData.get("name")
    const mpd = formData.get("password")
    const desc = formData.get("description")
    const employmentStatus = formData.get("employmentStatus")
    
    let status
    employmentStatus == "unemployed" ?
      status = "Criss de BS":
      status = employmentStatus;

      const dietaryRestrictions = formData.getAll("dietaryRestrictions")
      const favColor = formData.get("favColor")
    console.log(dietaryRestrictions)
    alert("Salue " + nom + " ton email est : " + email + " et ton mot de passe est : " + mpd + " Votre description est : " + desc + " tu est : " + status + " tu aime: " + dietaryRestrictions + " ta couleur pref est : " + favColor)
}

  return (
      <section className="container">
          
          <h2>Inscription</h2>
          <form className="form" /*onSubmit={handleSubmit}*/ action={handleAction}>
            <label htmlFor="name">Nom :</label>
              <input 
                  type="nom" 
                  id="nom" 
                  name="name" 
                  placeholder="john doe"
              />
            <label htmlFor="email">Email :</label>
              <input 
                  type="email" 
                  id="email" 
                  
                  name="email" 
                  placeholder="john-doe@exemple.com"
              />

            <label htmlFor="password">Mot de passe :</label>
              <input 
                  type="password" 
                  id="password" 
                  name="password"
              />

            <label htmlFor="description">Description:</label>
              <textarea id="description" name="description"></textarea>
              
            <fieldset>
              <legend>Situation professionnelle :</legend>
                  <label>
                      <input 
                          type="radio" 
                          name="employmentStatus" 
                          value="unemployed" 
                      />
                      Sans emploi
                  </label>
                  
                  <label>
                      <input 
                          type="radio" 
                          name="employmentStatus" 
                          value="part-time" 
                      />
                      Temps partiel
                  </label>
                  
                  <label>
                      <input 
                          type="radio" 
                          name="employmentStatus" 
                          defaultChecked={true} 
                          value="full-time" 
                      />
                      Temps plein
                  </label>
        </fieldset>

        <fieldset>
              <legend>Restrictions alimentaires :</legend>
              
              <label>
                  <input 
                      type="checkbox"
                      name="dietaryRestrictions" 
                      value="kosher" 
                  />
                  Cachère
              </label>
                  
              <label>
                  <input 
                      type="checkbox"
                      name="dietaryRestrictions" 
                      value="vegan"
                  />
                  Vegan
              </label>

              <label>
                  <input 
                      type="checkbox" 
                      name="dietaryRestrictions" 
                      defaultChecked={true} 
                      value="gluten-free" 
                  />
                  Sans gluten
              </label>

          </fieldset>

          <label htmlFor="favColor">Quelle est ta couleur préférée?</label>
            <select id="favColor" name="favColor" defaultValue="" required>
                <option value="" disabled>-- Choisis une couleur --</option>
                <option value="red">Rouge</option>
                <option value="orange">Orange</option>
                <option value="yellow">Jaune</option>
                <option value="green">Vert</option>
                <option value="blue">Bleu</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
              <button className="submit-btn">Inscription</button>
          </form>
      </section>
  )
}

export default App