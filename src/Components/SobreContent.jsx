import React, { useState, useEffect } from "react";

function SobreContent() {
  const [activeSection, setActiveSection] = useState("about-us"); // Seção inicial visível

  // Função para determinar se uma seção deve ser visível
  const isSectionVisible = (sectionId) => activeSection === sectionId;

  useEffect(() => {
    // Esconder todas as seções exceto a inicial quando o componente for montado
    setActiveSection("about-us"); // "about-us" é o ID da primeira seção que será exibida.
  }, []);

  const handleLinkClick = (event, targetId) => {
    event.preventDefault(); // Prevenir o comportamento padrão do link
    setActiveSection(targetId); // Muda a seção ativa
  };

  return (
    <div className="container-sobre">
      <main className="main-content">
        <aside className="sidebar">
          <ul>
            <li>
              <a href="#attitude" onClick={(e) => handleLinkClick(e, "attitude")}>
                ATITUDE E RESPEITO
              </a>
            </li>
            <li>
              <a href="#excellence" onClick={(e) => handleLinkClick(e, "excellence")}>
                EXCELÊNCIA
              </a>
            </li>
            <li>
              <a href="#agility" onClick={(e) => handleLinkClick(e, "agility")}>
                ÁGILIDADE
              </a>
            </li>
            <li>
              <a href="#innovation" onClick={(e) => handleLinkClick(e, "innovation")}>
                INOVAÇÃO
              </a>
            </li>
            <li>
              <a href="#trust" onClick={(e) => handleLinkClick(e, "trust")}>
                CONFIANÇA
              </a>
            </li>
            <li>
              <a href="#integrity" onClick={(e) => handleLinkClick(e, "integrity")}>
                INTEGRIDADE
              </a>
            </li>
            <li>
              <a href="#mission" onClick={(e) => handleLinkClick(e, "mission")}>
                MISSÃO
              </a>
            </li>
            <li>
              <a href="#vision" onClick={(e) => handleLinkClick(e, "vision")}>
                VISÃO DE NEGÓCIOS
              </a>
            </li>
            <li>
              <a href="#ethics" onClick={(e) => handleLinkClick(e, "ethics")}>
                ÉTICA E VALORES
              </a>
            </li>
          </ul>
        </aside>

        <div className="about">
          <section className="first-content">
            <h1 id="about-us">Sobre Nós</h1>
            <p>
              Trabalhamos com as Plataformas Microsoft Dynamics 365 – Finance &
              Operations - F&O e Dynamics 365 Business Central - versão para
              empresas de menor porte. Ambas as tecnologias suportam operações
              complexas e dinâmicas em suas formas específicas de atuação.
            </p>
            <p>
              O MS Dynamics F&O foi classificado pelo MIT, Forbes Intl., e pela
              Revista IT FORUM como a mais eficaz e atual Suíte de Soluções
              Sistêmicas para Gestão de Empresas, globalmente. Nós da WR
              Consulting temos EXPERIÊNCIA EM MAXIMIZAR O SUCESSO DE NOSSOS
              CLIENTES. Atuamos nesse segmento há mais de duas décadas, sempre
              com Microsoft.
            </p>
          </section>

          <section className="about-content">
            <h2 id="attitude" style={{ display: isSectionVisible("attitude") ? "block" : "none" }}>
              ATITUDE E RESPEITO ÀS PESSOAS E ORGANIZAÇÕES
            </h2>
            <p style={{ display: isSectionVisible("attitude") ? "block" : "none" }}>
              Lidamos com pessoas e empresas de forma objetiva através da avaliação
              abrangente dos seus processos, cultura das empresas, conhecimentos,
              habilidades e normas internas e identificamos a forma mais qualificada de
              agir e vencer desafios.
            </p>

            <h2 id="excellence" style={{ display: isSectionVisible("excellence") ? "block" : "none" }}>
              EXCELÊNCIA
            </h2>
            <p style={{ display: isSectionVisible("excellence") ? "block" : "none" }}>
              Dedicação obstinada para obter serviços de alta qualidade e o melhor
              resultado para os negócios dos nossos clientes.
            </p>

            <h2 id="agility" style={{ display: isSectionVisible("agility") ? "block" : "none" }}>
              ÁGILIDADE
            </h2>
            <p style={{ display: isSectionVisible("agility") ? "block" : "none" }}>
              Somos tão flexíveis e ágeis quanto nossos clientes precisam que sejamos,
              para capturar os melhores resultados nas organizações.
            </p>

            <h2 id="innovation" style={{ display: isSectionVisible("innovation") ? "block" : "none" }}>
              INOVAÇÃO
            </h2>
            <p style={{ display: isSectionVisible("innovation") ? "block" : "none" }}>
              Acompanhamos constantemente as principais tendências empresariais e
              desafios em todos os processos internos, bem como as respectivas
              legislações, inovando nossos serviços e abordagens para entregar o melhor
              resultado.
            </p>

            <h2 id="trust" style={{ display: isSectionVisible("trust") ? "block" : "none" }}>
              CONFIANÇA
            </h2>
            <p style={{ display: isSectionVisible("trust") ? "block" : "none" }}>
              Nosso foco é construir relacionamentos de longo prazo baseados na confiança
              e no respeito com organizações e profissionais.
            </p>

            <h2 id="integrity" style={{ display: isSectionVisible("integrity") ? "block" : "none" }}>
              INTEGRIDADE
            </h2>
            <p style={{ display: isSectionVisible("integrity") ? "block" : "none" }}>
              Praticamos negociações escrupulosamente justas e sensíveis com nossos
              clientes e colaboradores, regra pétrea inerente à nossa cultura e à forma
              como fazemos negócios. Tentamos sempre fazer a coisa certa e mostrar pleno
              respeito por todos os indivíduos e aos empreendimentos.
            </p>

            <h3 id="mission" style={{ display: isSectionVisible("mission") ? "block" : "none" }}>
              MISSÃO
            </h3>
            <p style={{ display: isSectionVisible("mission") ? "block" : "none" }}>
              Nossa missão é fornecer soluções robustas e confiáveis que permitam aos
              nossos clientes alcançar novos níveis de eficiência e sucesso por meio da
              transformação digital e da implementação de sistemas ERP de última geração.
            </p>

            <h3 id="vision" style={{ display: isSectionVisible("vision") ? "block" : "none" }}>
              VISÃO DE NEGÓCIOS
            </h3>
            <p style={{ display: isSectionVisible("vision") ? "block" : "none" }}>
              Ser reconhecida como a consultoria líder em soluções Microsoft Dynamics,
              reconhecida pela excelência, inovação e compromisso com a plena satisfação
              do cliente.
            </p>

            <h3 id="ethics" style={{ display: isSectionVisible("ethics") ? "block" : "none" }}>
              ÉTICA E VALORES
            </h3>
            <p style={{ display: isSectionVisible("ethics") ? "block" : "none" }}>
              Integridade: Agimos de forma ética e transparente em todas as nossas
              interações. Excelência: Buscamos constantemente a melhoria contínua e a
              entrega de resultados excepcionais. Inovação: Valorizamos a criatividade e
              incentivamos a adoção de novas tecnologias e metodologias. Colaboração/Integração:
              Trabalhamos em equipe e valorizamos a contribuição de cada profissional, nosso
              e do cliente.
            </p>

            <p>
              Através da WR Solutions & Consulting, você tem a garantia de uma parceria
              robusta e confiável, pronta para levar seu negócio ao próximo nível sempre
              com as melhores soluções Microsoft Dynamics 365 F&O ou Business Central.
            </p>

            <p><strong>Pergunte-nos como.</strong></p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default SobreContent;
