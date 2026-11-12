// 1. Controle do Menu Responsivo (Mobile)
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fechar o menu automaticamente ao clicar em um link (no celular)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// 2. Interatividade do Gráfico de Empregabilidade
function mostrarDetalheArea(area) {
    const infoBox = document.getElementById('area-info-box');
    
    const detalhes = {
        clinica: "🏥 <strong>Nutrição Clínica (42%):</strong> Maior porta de entrada da profissão. Envolve atendimento em hospitais (terapia nutricional de pacientes internados), clínicas particulares, home care e ambulatórios para tratamento de diabetes, hipertensão e obesidade.",
        uan: "🍽️ <strong>Alimentação Coletiva / UAN (30%):</strong> O profissional gerencia Unidades de Alimentação e Nutrição em empresas, escolas (PNAE - merenda escolar), hotéis e restaurantes, garantindo higiene, segurança alimentar e cardápios balanceados.",
        esportiva: "🏃‍♂️ <strong>Nutrição Esportiva e Estética (16%):</strong> Setor em forte crescimento. Focado em melhorar o rendimento de atletas amadores e profissionais, hipertrofia, emagrecimento saudável e suplementação.",
        industria: "🏭 <strong>Indústria e Marketing (12%):</strong> Atuação no desenvolvimento de novos produtos alimentícios, elaboração de tabelas nutricionais obrigatórias (rotulagem), controle de qualidade e consultoria para marcas."
    };

    if (detalhes[area]) {
        infoBox.innerHTML = detalhes[area];
        // Pequeno efeito visual de destaque ao atualizar
        infoBox.style.transform = "scale(1.01)";
        setTimeout(() => {
            infoBox.style.transform = "scale(1)";
        }, 150);
    }
}