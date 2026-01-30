import React from "react"
import { getRecipeFromChefClaude } from "../ai"

export default function Form() {
  const [Ingred, setIngred] = React.useState([])
  const [recipe, setRecipe] = React.useState("")
  const [loading, setLoading] = React.useState(false)

  const allIngred = Ingred.map((a, index) => (
    <li key={index}>{a}</li>
  ))

  function getData(formData) {
    const newIngred = formData.get("ingred")
    if (!newIngred) return
    setIngred(prev => [...prev, newIngred])
  }

  async function handleGetRecipe() {
    setLoading(true)
    const recipeText = await getRecipeFromChefClaude(Ingred)
    setRecipe(recipeText)
    setLoading(false)
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

            <button className="aibtn" onClick={handleGetRecipe}>
              {loading ? "Cooking..." : "Get a recipe"}
            </button>
          </div>

          {recipe && (
            <div className="recipe-box">
              <h2>🍽️ Chef Claude Says:</h2>
              <pre>{recipe}</pre>
            </div>
          )}
        </section>
      )}
    </>
  )
}
