import { useEffect, useState } from "react";
import "./App.css";
import { supabase } from "./lib/supabaseClient";

function App() {
  const [status, setStatus] = useState("Testando conexão com Supabase...");

  useEffect(() => {
    async function testarConexao() {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        setStatus(`Erro ao conectar com Supabase: ${error.message}`);
        return;
      }

      setStatus(
        `Conexão com Supabase realizada com sucesso. Sessão ativa: ${
          data.session ? "sim" : "não"
        }`,
      );
    }

    testarConexao();
  }, []);

  return (
    <main>
      <h1>Sistema Tangi</h1>
      <p>{status}</p>
    </main>
  );
}

export default App;
