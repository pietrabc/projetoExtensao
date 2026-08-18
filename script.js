// --- 1. Verificador de Links (Simulador) ---
document.getElementById('btnVerificar').addEventListener('click', function() {
    const urlInput = document.getElementById('urlInput').value.trim();
    const resultado = document.getElementById('resultadoUrl');

    if (urlInput === '') {
        resultado.className = 'resultado-box alerta';
        resultado.textContent = 'Por favor, insira um link para analisar.';
        return;
    }

    // Lógica simples de verificação visual
    if (!urlInput.startsWith('https://')) {
        resultado.className = 'resultado-box alerta';
        resultado.textContent = '⚠️ Alerta: Este link não possui certificado de segurança (HTTPS). Evite inserir dados pessoais.';
    } else if (urlInput.includes('.com.br') || urlInput.includes('.org') || urlInput.includes('.gov.br')) {
        resultado.className = 'resultado-box sucesso';
        resultado.textContent = '✅ O link possui estrutura padrão com HTTPS. Contudo, sempre confira se o nome do domínio no endereço está escrito corretamente!';
    } else {
        resultado.className = 'resultado-box alerta';
        resultado.textContent = '⚠️ Atenção: Terminação de domínio incomum ou suspeita. Verifique com atenção antes de acessar.';
    }
});

// --- 2. Quiz Interativo ---
const botoesOpcao = document.querySelectorAll('.btn-opcao');
const feedbackQuiz = document.getElementById('feedbackQuiz');

botoesOpcao.forEach(botao => {
    botao.addEventListener('click', function() {
        const eCorreta = this.getAttribute('data-correta') === 'true';

        if (eCorreta) {
            feedbackQuiz.className = 'resultado-box sucesso';
            feedbackQuiz.textContent = '🎉 Resposta Correta! Bancos NUNCA pedem senhas por mensagem ou ligação. Sempre procure os canais oficiais.';
        } else {
            feedbackQuiz.className = 'resultado-box alerta';
            feedbackQuiz.textContent = '❌ Incorreto. Nunca passe senhas por mensagens. Essa é uma prática comum de golpe.';
        }
    });
});