import React from "react"

export default function Form() {

  const [Ingred, setIngred] = React.useState([])

  const allIngred = Ingred.map((a, index) => (
    <li key={index}>{a}</li>
  ))

  function getData(formData) {
    const newIngred = formData.get("ingred")
    if (!newIngred) return
    setIngred(prev => [...prev, newIngred])
  }

  return (
    <>
      <form action={getData} className="form">
        <input
          type="text"
          name="ingred"
          id="ingred"
          placeholder=" eg : oregano "
        />
        <button id="btn">+ Add ingredients</button>
      </form>

        {Ingred.length > 0 && (
            <section>
                <h1>Ingredients on hand :</h1>
                <ul>{allIngred}</ul>

                <div className="btn-box">
                <div>
                    <h3>Ready for a recipe</h3>
                    <p>Generate a recipe from your list of ingredients</p>
                </div>
                <button className="aibtn">Get a recipe</button>
                </div>
            </section>
        )}

    </>
  )
}
