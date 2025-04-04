
import './App.css'

function App() {

  return (
    <>
      <section className="container">
        <h1>Livre de rectte</h1>

        <from>
          <label htmlFor="name">Nom:</label>
          <input
            type="nom"
            id="nom"
            name="name"
          />

          <label htmlFor="desciprion">Description:</label>
          <textarea
            id="desciption"
            name="description"
          />

          <label htmlFor="time">Temps de préparation (minutes):</label>
          <input
            type="number"
            id="time"
            name="time"
            min="1"
          />

          <fieldset className='checkbox-group'>
            <legend>Difficulté:</legend>
              <label>
                
                <input
                  type='radio'
                  value= "facile"
                  name='difficulty'
                />
              facile
              </label>

              <label>
                <input
                  type='radio'
                  value='intermediaire'
                  name='difficulty'
                />
                intermediaire
              </label>

              <label>
                <input
                  type='radio'
                  value='difficile'
                  name='difficulty'
                />
                Difficile
              </label>
          </fieldset>

          <label htmlFor='ingredients'>Ingredient (séparés par des virgules)</label>
          <input
            type='text'
            id='ingrediant'
            name='ingrediant'
          />

        </from>
      </section>
    </>
  )
}

export default App
