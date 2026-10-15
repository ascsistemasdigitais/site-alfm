// =====================================
// MENU MOBILE
// =====================================
const menuToggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');

menuToggle?.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', isOpen);
});

// =====================================
// DROPDOWN
// =====================================
const dropdownToggle = document.querySelector('[data-dropdown-toggle]');

dropdownToggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    const dropdown = dropdownToggle.closest('.nav-dropdown');
    const isOpen = dropdown.classList.toggle('is-open');
    dropdownToggle.setAttribute('aria-expanded', isOpen);
});

document.addEventListener('click', (event) => {
    const dropdown = document.querySelector('.nav-dropdown');
    if (dropdown && !dropdown.contains(event.target)) {
        dropdown.classList.remove('is-open');
        dropdownToggle?.setAttribute('aria-expanded', 'false');
    }
});

// =====================================
// HEADER COM SOMBRA AO SCROLL
// =====================================
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        header?.classList.add('scrolled');
    } else {
        header?.classList.remove('scrolled');
    }
});

// =====================================
// ANIMAÇÕES AO SCROLL
// =====================================
const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// =====================================
// PERFIS DOS ADVOGADOS
// =====================================
const profiles = {
    Daniel: {
        name: 'Daniel Alves Ferreira',
        role: 'Advogado - Socio Fundador',
        photo: 'Foto em breve',
        bio: `
            <p><strong>Áreas de atuação:</strong> Responsável pela gestão da área societária, em especial em Mercado de Capitais e Governança Corporativa.</p>
            <p><strong>Perfil:</strong> abordagem prática e estratégica para questões que exigem rapidez, precisão técnica e atenção aos riscos do negócio.</p>
        `
    },
    Paulo: {
        name: 'Paulo Roberto B. Brandão',
        role: 'Advogado',
        photo: 'Foto em breve',
        bio: `
            <p><strong>Áreas de atuação:</strong> compliance, prevenção de riscos e suporte em operações complexas.</p>
            <p><strong>Perfil:</strong> orientação jurídica voltada à segurança contratual, mitigação de conflitos e fortalecimento da governança corporativa.</p>
        `
    },
    allanMurilo: {
        name: 'Allan Murilo Fernandes Olivo',
        role: 'Advogado',
        photo: 'Foto em breve',
        bio: `
            <p><strong>Áreas de atuação:</strong> direito civil, contratos e mediação de conflitos.</p>
            <p><strong>Perfil:</strong> advogado com abordagem voltada à solução objetiva de conflitos e à proteção dos interesses de clientes em demandas de rotina e complexidade média.</p>
        `
    },
    anaCristina: {
        name: 'Ana Cristina Freitas Silva',
        role: 'Advogada',
        photo: 'Foto em breve',
        bio: `
            <p><strong>Áreas de atuação:</strong> direito empresarial, contratos e compliance.</p>
            <p><strong>Perfil:</strong> atuação focada em organização societária, gestão de riscos e suporte estratégico para empresas em operação e crescimento.</p>
        `
    },
    andersonCarlos: {
        name: 'Anderson Carlos Koch',
        role: 'Advogado',
        photo: 'Foto em breve',
        bio: `
            <p><strong>Áreas de atuação:</strong> direito societário, contratos e contencioso.</p>
            <p><strong>Perfil:</strong> foco em respostas jurídicas práticas e seguras para negócios que exigem análise técnica e equilíbrio entre risco e estratégia.</p>
        `
    },
    brunaPrado: {
        name: 'Bruna do Prado Cunha',
        role: 'Advogada',
        photo: 'Foto em breve',
        bio: `
            <p><strong>Áreas de atuação:</strong> direito do consumidor, relações contratuais e assessoria preventiva.</p>
            <p><strong>Perfil:</strong> atuação orientada à prevenção de litígios, revisão de termos e suporte à estruturação de relações comerciais mais seguras.</p>
        `
    },
    christianoMarques: {
        name: 'Christiano Marques de Godoy',
        role: 'Advogado',
        photo: 'Foto em breve',
        bio: `
            <p><strong>Áreas de atuação:</strong> contencioso empresarial, cobrança e gestão de conflitos.</p>
            <p><strong>Perfil:</strong> atenção especial à resolução de controvérsias com foco em custo, tempo e eficiência para o cliente.</p>
        `
    },
    dianeFlavia: {
        name: 'Diane Flávia Maia de Oliveira',
        role: 'Advogada',
        photo: 'Foto em breve',
        bio: `
            <p><strong>Áreas de atuação:</strong> direito trabalhista, relações de trabalho e consultivo empresarial.</p>
            <p><strong>Perfil:</strong> suporte jurídico para empresas em questões de pessoal, políticas internas e prevenção de conflitos trabalhistas.</p>
        `
    },
    felipeDouglas: {
        name: 'Felipe Douglas Gomes',
        role: 'Advogado',
        photo: 'Foto em breve',
        bio: `
            <p><strong>Áreas de atuação:</strong> direito imobiliário, contratos e regularização de negócios.</p>
            <p><strong>Perfil:</strong> atuação com foco em segurança jurídica, prevenção de riscos e solução de questões que envolvem ativos e operações estruturadas.</p>
        `
    },
    joseRoberto: {
        name: 'José Roberto Silveira Queiroz',
        role: 'Advogado',
        photo: 'Foto em breve',
        bio: `
            <p><strong>Áreas de atuação:</strong> direito societário, reestruturações e governança.</p>
            <p><strong>Perfil:</strong> desenvolvimento de soluções jurídicas robustas para empresas em transformação, reorganização ou expansão de atuação.</p>
        `
    },
    joyceCostacurta: {
        name: 'Joyce Costacurta Pacheco',
        role: 'Advogada',
        photo: 'Foto em breve',
        bio: `
            <p><strong>Áreas de atuação:</strong> direito cível, contratos e prevenção de litígios.</p>
            <p><strong>Perfil:</strong> abordagem voltada à análise preventiva, identificação de riscos e construção de soluções jurídicas equilibradas.</p>
        `
    },
    karinaFrancisca: {
        name: 'Karina Francisca de Andrade',
        role: 'Advogada',
        photo: 'Foto em breve',
        bio: `
            <p><strong>Áreas de atuação:</strong> direito do consumidor, mediação e contratos comerciais.</p>
            <p><strong>Perfil:</strong> atuação em demandas com foco em relacionamento empresarial, conformidade e resolução de conflitos com menor custo operacional.</p>
        `
    },
    liviaBeatriz: {
        name: 'Livia Beatriz Silva do Prado',
        role: 'Advogada',
        photo: 'Foto em breve',
        bio: `
            <p><strong>Áreas de atuação:</strong> direito civil, família e planejamento patrimonial.</p>
            <p><strong>Perfil:</strong> atendimento com foco em segurança jurídica, diálogo e soluções que preservem os interesses de longo prazo dos clientes.</p>
        `
    },
    micheleSilva: {
        name: 'Michele da Silva Gonsales',
        role: 'Advogada',
        photo: 'Foto em breve',
        bio: `
            <p><strong>Áreas de atuação:</strong> direito societário, contratos e gestão de conflitos internos.</p>
            <p><strong>Perfil:</strong> suporte jurídico para empresas que buscam clareza em decisões, governança e proteção de relações estratégicas.</p>
        `
    },
    ricardoJose: {
        name: 'Ricardo José Martins Gimenez',
        role: 'Advogado',
        photo: 'Foto em breve',
        bio: `
            <p><strong>Áreas de atuação:</strong> contencioso cível, contratos e assessoria empresarial.</p>
            <p><strong>Perfil:</strong> Advogado inscrito na OAB/SP desde 1995 e técnico em Contabilidade, possui ampla experiência em Governança Corporativa, Gestão Financeira e Jurídica, Gestão de Riscos, Mercado de Capitais e Direito Societário. Integrou e integra Conselhos Fiscais de companhias de capital aberto, incluindo Renova, Kepler Weber S.A., CEMIG, Unipar e Petrobras, destacando-se pela atuação estratégica em governança, supervisão corporativa e controles societários, com mandatos vigentes até a AGO de 2027.</p>
        `
    },
    rodrigoMesquita: {
        name: 'Rodrigo de Mesquita Pereira',
        role: 'Advogado',
        photo: 'Foto em breve',
        bio: `
            <p><strong>Áreas de atuação:</strong> Direito empresarial, contratos internacionais e apoio estratégico.</p>
            <p><strong>Perfil:</strong> perfil técnico e comercial, com visão para negócios que operam em cenário regulatório e transacional mais exigente.</p>
        `
    },
    vivianeLopes: {
        name: 'Viviane Lopes Guedes Alcoforado',
        role: 'Advogada',
        photo: 'Foto em breve',
        bio: `
            <p><strong>Áreas de atuação:</strong> direito privado, contratos e assessoria preventiva.</p>
            <p><strong>Perfil:</strong> atuação orientada à prevenção de litígios, estruturação de relações contratuais e cuidado com a proteção patrimonial do cliente.</p>
        `
    }
};

const lawyerModal = document.querySelector('[data-lawyer-modal]');

document.querySelectorAll('[data-lawyer]').forEach((card) => {
    card.addEventListener('click', () => {
        const profile = profiles[card.dataset.lawyer];

        if (profile && lawyerModal) {
            lawyerModal.querySelector('#lawyer-name').textContent = profile.name;
            lawyerModal.querySelector('.lawyer-role').textContent = profile.role;
            
            const photoContainer = lawyerModal.querySelector('.lawyer-photo');
            if (profile.photo.startsWith('http') || profile.photo.endsWith('.jpg') || profile.photo.endsWith('.png')) {
                photoContainer.innerHTML = `<img src="${profile.photo}" alt="${profile.name}">`;
            } else {
                photoContainer.textContent = profile.photo;
            }
            
            lawyerModal.querySelector('.lawyer-bio').innerHTML = profile.bio;
            lawyerModal.classList.add('show');
            lawyerModal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }
    });
});

function closeLawyerModal() {
    if (lawyerModal) {
        lawyerModal.classList.remove('show');
        lawyerModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
}

document.querySelector('[data-modal-close]')?.addEventListener('click', closeLawyerModal);

lawyerModal?.addEventListener('click', (event) => {
    if (event.target === lawyerModal) {
        closeLawyerModal();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeLawyerModal();
    }
});

// =====================================
// FORMULÁRIO DE CONTATO
// =====================================
const form = document.getElementById('contactForm');
const successModal = document.getElementById('successModal');

form?.addEventListener('submit', async (event) => {
    event.preventDefault();

    try {
        await fetch('https://formsubmit.co/ajax/alexandresilva81@hotmail.com', {
            method: 'POST',
            body: new FormData(form)
        });

        successModal?.classList.add('show');
        form.reset();

        setTimeout(() => {
            successModal?.classList.remove('show');
        }, 3000);
    } catch (error) {
        alert('Erro ao enviar o formulário. Tente novamente.');
        console.error('Erro:', error);
    }
});

// =====================================
// FECHAR MENU MOBILE AO CLICAR EM LINK
// =====================================
document.querySelectorAll('.site-nav a').forEach(link => {
    link.addEventListener('click', () => {
        if (nav?.classList.contains('is-open')) {
            nav.classList.remove('is-open');
            menuToggle?.setAttribute('aria-expanded', 'false');
        }
    });
});

// =====================================
// ANIMAÇÃO DE CONTAGEM NOS STATS
// =====================================
const animateCounter = (element, target, duration = 1500) => {
    const startTime = performance.now();
    const isNumber = !isNaN(target);
    
    if (!isNumber) {
        element.textContent = target;
        return;
    }

    const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.floor(eased * target);
        element.textContent = value;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    requestAnimationFrame(updateCounter);
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const numberEl = entry.target.querySelector('.stat-number');
            if (numberEl) {
                const text = numberEl.textContent;
                const match = text.match(/^(\d+)/);
                if (match) {
                    const number = parseInt(match[1]);
                    const suffix = text.replace(match[1], '');
                    animateCounter(numberEl, number);
                    setTimeout(() => {
                        numberEl.textContent = text;
                    }, 1600);
                }
            }
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat').forEach(stat => {
    statsObserver.observe(stat);
});

// =====================================
// NAVEGAÇÃO NO MODAL DOS ADVOGADOS
// =====================================
const lawyerKeys = Object.keys(profiles);
let currentLawyerIndex = 0;

function showLawyer(index) {
    if (index < 0) index = lawyerKeys.length - 1;
    if (index >= lawyerKeys.length) index = 0;
    
    currentLawyerIndex = index;
    const key = lawyerKeys[index];
    const profile = profiles[key];
    
    if (lawyerModal && profile) {
        lawyerModal.querySelector('#lawyer-name').textContent = profile.name;
        lawyerModal.querySelector('.lawyer-role').textContent = profile.role;
        
        const photoContainer = lawyerModal.querySelector('.lawyer-photo');
        if (profile.photo.startsWith('http') || profile.photo.endsWith('.jpg') || profile.photo.endsWith('.png')) {
            photoContainer.innerHTML = `<img src="${profile.photo}" alt="${profile.name}">`;
        } else {
            photoContainer.textContent = profile.photo;
        }
        
        lawyerModal.querySelector('.lawyer-bio').innerHTML = profile.bio;
    }
}

document.querySelector('[data-nav-prev]')?.addEventListener('click', () => {
    showLawyer(currentLawyerIndex - 1);
});

document.querySelector('[data-nav-next]')?.addEventListener('click', () => {
    showLawyer(currentLawyerIndex + 1);
});

// Encontrar o índice inicial quando o modal é aberto
document.querySelectorAll('[data-lawyer]').forEach((card) => {
    card.addEventListener('click', () => {
        currentLawyerIndex = lawyerKeys.indexOf(card.dataset.lawyer);
        showLawyer(currentLawyerIndex);
    });
});

// =====================================
// NAVEGAÇÃO NO MODAL DE ARTIGOS
// =====================================
const articlesData = [
    {
        title: 'Aspectos jurídicos de operações societárias em contextos de reorganização empresarial',
        tag: 'Mercado de Capitais',
        date: '18 ago 2026',
        excerpt: 'As principais operações de reorganização societária incluem fusão, incorporação, cisão, transformação societária, constituição de holdings e reorganizações internas de grupos econômicos. Cada uma dessas modalidades possui requisitos específicos previstos na legislação societária, especialmente na Lei nº 6.404/1976 (Lei das Sociedades por Ações) e no Código Civil. Do ponto de vista da governança corporativa, as reorganizações exigem análise cuidadosa dos mecanismos de tomada de decisão, dos direitos dos sócios e acionistas e das competências dos órgãos de administração. Dependendo da operação, pode ser necessária a aprovação em assembleias ou reuniões societárias, observando quóruns legais e estatutários específicos, bem como o cumprimento dos deveres fiduciários dos administradores. A estrutura societária também pode ser significativamente impactada por esses processos. Alterações no controle societário, na distribuição de participações societárias, na composição dos órgãos de gestão e na relação entre empresas de um mesmo grupo econômico podem gerar consequências relevantes para o exercício dos direitos políticos e econômicos dos sócios e investidores. Sob a perspectiva contratual, operações de reorganização frequentemente exigem a revisão de contratos comerciais, financeiros, trabalhistas e regulatórios. Cláusulas de alteração de controle, sucessão empresarial, vencimento antecipado de obrigações e necessidade de consentimento prévio de terceiros podem influenciar a viabilidade e a implementação das operações pretendidas. Outro aspecto relevante refere-se à sucessão de ativos, passivos, direitos e obrigações. Dependendo da modalidade escolhida, a empresa sucessora poderá assumir responsabilidades tributárias, trabalhistas, previdenciárias, ambientais e regulatórias anteriormente vinculadas à sociedade reorganizada, tornando indispensável a realização de auditorias jurídicas (due diligence) para identificar riscos e contingências.Além disso, a reorganização empresarial pode gerar importantes impactos tributários. A adequada estruturação jurídica da operação permite buscar eficiência fiscal dentro dos limites da legislação vigente, evitando situações que possam ser caracterizadas como planejamento tributário abusivo ou simulação. Dessa forma, a análise integrada entre direito societário, tributário e regulatório torna-se essencial para o sucesso da operação. Em setores regulados, como instituições financeiras, seguradoras, telecomunicações, energia e saúde suplementar, determinadas reorganizações dependem de autorização prévia dos órgãos reguladores competentes, o que adiciona camadas adicionais de análise jurídica e governança. Por fim, a condução eficiente de operações societárias em contextos de reorganização empresarial exige planejamento estratégico, avaliação de riscos, observância das normas legais e regulatórias, transparência na comunicação com os stakeholders e adoção de boas práticas de governança corporativa. Esses elementos contribuem para a preservação do valor da empresa, a mitigação de litígios e a sustentabilidade do negócio no longo prazo.'
    },
    {
        title: 'Riscos e oportunidades na negociação de contratos com forte impacto regulatório',
        tag: 'Direito Empresarial',
        date: '11 ago 2026',
        excerpt: 'Como equilibrar segurança jurídica, previsibilidade e agilidade na execução de contratos de alto valor estratégico.'
    },
    {
        title: 'Estratégias de prevenção e resposta a controvérsias corporativas',
        tag: 'Compliance',
        date: '28 jul 2026',
        excerpt: 'Uma leitura prática sobre os principais pilares de compliance, governança e gestão de riscos com foco em proteção empresarial.'
    },
    {
        title: 'Decisões judiciais e seu impacto na execução de negócios e contratos complexos',
        tag: 'Contencioso',
        date: '15 jul 2026',
        excerpt: 'Reflexões sobre a forma como decisões judiciais e tendências de jurisprudência influenciam estratégias e relacionamento contratual.'
    }
];

const articleModal = document.querySelector('[data-article-modal]');
let currentArticleIndex = 0;

function showArticle(index) {
    if (!articleModal) return;
    
    if (index < 0) index = articlesData.length - 1;
    if (index >= articlesData.length) index = 0;
    
    currentArticleIndex = index;
    const article = articlesData[index];
    
    articleModal.querySelector('#article-modal-title').textContent = article.title;
    articleModal.querySelector('#article-modal-tag').textContent = article.tag;
    articleModal.querySelector('#article-modal-date').textContent = article.date;
    articleModal.querySelector('#article-modal-excerpt').textContent = article.excerpt;
}

document.querySelectorAll('.article-card').forEach((card, index) => {
    card.addEventListener('click', () => {
        currentArticleIndex = index;
        showArticle(currentArticleIndex);
        articleModal?.classList.add('show');
        articleModal?.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    });
});

document.querySelector('[data-article-modal-close]')?.addEventListener('click', () => {
    articleModal?.classList.remove('show');
    articleModal?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
});

articleModal?.addEventListener('click', (event) => {
    if (event.target === articleModal) {
        articleModal.classList.remove('show');
        articleModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
});

document.querySelector('[data-article-nav-prev]')?.addEventListener('click', () => {
    showArticle(currentArticleIndex - 1);
});

document.querySelector('[data-article-nav-next]')?.addEventListener('click', () => {
    showArticle(currentArticleIndex + 1);
});

// Fechar com ESC
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        articleModal?.classList.remove('show');
        articleModal?.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
});
