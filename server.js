// Servidor Express - Projeto #12: Torneio de E-Sports & Arenas
require('dotenv').config();
const express = require('express');
const supabase = require('./exercicio12/src/config/supabaseClient');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3012;

app.get('/api/esports/status', (req, res) => {
    res.status(200).json({
        projeto_numero: 12,
        sistema: "Torneio de E-Sports & Arenas",
        categoria: "Games & Competição",
        tabela_conectada: process.env.TABELA_ALVO || "partidas_ranking",
        parametro_ambiente: process.env.SERVIDOR_ARENA || "LIGA_PRO_BR_12",
        ponte_supabase_ativa: Boolean(supabase && supabase.rest),
        cofre_env_protegido: Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_KEY)
    });
});

app.listen(PORT, () => {
    console.log(`🚀 [PROJETO #12] Torneio de E-Sports & Arenas rodando em http://localhost:${PORT}/api/esports/status`);
});
