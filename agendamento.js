import React, { useState } from "react";

function Agendamento() {

const [form, setForm] = useState({
 nome: "",
 telefone: "",
 servico: "",
 data: "",
 hora: ""
})

const handleChange = (e) => {
 setForm({
  ...form,
  [e.target.name]: e.target.value
 })
}

const agendar = async () => {
 await fetch("http://localhost:3001/agendar", {
  method: "POST",
  headers: {
   "Content-Type": "application/json"
  },
  body: JSON.stringify(form)
 })

 alert("Agendamento realizado!")
}

return (
<div>
<h2>Agendar Atendimento</h2>

<input
name="nome"
placeholder="Nome"
onChange={handleChange}
/>

<input
name="telefone"
placeholder="Telefone"
onChange={handleChange}
/>

<select name="servico" onChange={handleChange}>
<option>Selecione</option>
<option>Selagem</option>
<option>Mechas</option>
<option>Corte</option>
<option>Escova</option>
<option>Coloração</option>
<option>Extensão de Cílios</option>
<option>Micropigmentação</option>
</select>

<input
type="date"
name="data"
onChange={handleChange}
/>

<input
type="time"
name="hora"
onChange={handleChange}
/>

<button onClick={agendar}>
Agendar
</button>

</div>
)

}

export default Agendamento;