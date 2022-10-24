// Metodo que altera os states
const handleChange = ({setValues, values}, prop) => event => {
  setValues({ ...values, [prop]: event.target.value })
}

// Exporta os métodos
export {
  handleChange
}
