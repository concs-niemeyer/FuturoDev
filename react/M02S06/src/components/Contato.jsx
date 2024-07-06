import { useState } from "react";
import "../assets/Contato.css";

function Contato() {
  const [nomeInput, setNomeInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [mensagemInput, setMensagemInput] = useState("");

  function handleSubmit() {
    console.log("Enviando novo formulário ...");
    console.log({
      nome: nomeInput,
      email: emailInput,
      mensagem: mensagemInput,
    });
    // Aqui você pode adicionar lógica para enviar os dados para um servidor, por exemplo
  }

  return (
    <>
      <section className="contato-formulario">
        <form className="form" id="contato-form" name="formulario">
          <div>
            <label htmlFor="nome">Nome</label>
            <input
              id="nome"
              className="nome"
              type="text"
              placeholder="Digite seu nome"
			  autoComplete="off"
              value={nomeInput}
              onChange={(e) => setNomeInput(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="email"
              type="text"
              placeholder="Digite seu email"
			  autoComplete="off"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              rows="5"
              className="mensagem"
              value={mensagemInput}
              onChange={(e) => setMensagemInput(e.target.value)}
            ></textarea>
          </div>
		  </form>
          <button onClick={() => handleSubmit()} className="botao col-2">
            Enviar
          </button>
        
      </section>
    </>
  );
}

export default Contato;
