interface Translation {
  nav: {
    features: string;
    howItWorks: string;
    FAQ: string;
    joinWaitlist: string;
  };
  hero: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    joinWaitlist: string;
    watchDemo: string;
    comingSoon: string;
  };
  features: {
    title: string;
    subtitle: string;
    whatsappFirst: {
      title: string;
      description: string;
    };
    quickSetup: {
      title: string;
      description: string;
    };
    costEffective: {
      title: string;
      description: string;
    };
  };
  pricing: {
    title: string;
    subtitle: string;
    free: {
      title: string;
      description: string;
      features: string[];
    };
    basic: {
      title: string;
      description: string;
      popular: string;
      features: string[];
    };
    pro: {
      title: string;
      description: string;
      features: string[];
    };
  };
  waitlist: {
    title: string;
    subtitle: string;
    form: {
      name: {
        label: string;
        placeholder: string;
      };
      email: {
        label: string;
        placeholder: string;
      };
      phone: {
        label: string;
        placeholder: string;
      };
      submit: string;
    };
    success: {
      title: string;
      message: string;
    };
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    contact: string;
    support: string;
    rights: string;
  };
  faq: {
    title: string;
    questions: {
      question: string;
      answer: string;
    }[];
  };
  howItWorks: {
    title: string;
    steps: {
      step: string;
      description: string;
    }[];
    tagline: string;
  };
  forWho: {
    title: string;
    audiences: string[];
  };
  development: {
    title: string;
    description: string;
    comingSoon: string;
  };
}

export const translations: Record<string, Translation> = {
  pt: {
    nav: {
      features: "Recursos",
      howItWorks: "Como funciona",
      FAQ: "FAQ",
      joinWaitlist: "Lista de Espera",
    },
    hero: {
      title: "Nunca mais esqueça",
      titleHighlight: "compromissos importantes!",
      subtitle: "Automatize lembretes via WhatsApp e ganhe mais tempo no seu dia. Agende mensagens, evite esquecimentos e deixe tudo automático!",
      joinWaitlist: "Entrar na Lista de Espera",
      watchDemo: "Ver Demo",
      comingSoon: "Em breve • Seja o primeiro a saber quando lançarmos",
    },
    features: {
      title: "Por que usar nahorabot?",
      subtitle: "Lembretes automatizados simples, eficazes e acessíveis que ajudam você a manter contato com clientes e reduzir faltas.",
      whatsappFirst: {
        title: "Nunca mais perca compromissos",
        description: "Agende lembretes para qualquer data e hora e receba uma mensagem automática no WhatsApp.",
      },
      quickSetup: {
        title: "Perfeito para empresas e profissionais",
        description: "Lembre clientes sobre consultas, reuniões, vencimentos e muito mais.",
      },
      costEffective: {
        title: "Simples e sem complicação",
        description: "Apenas cadastre um lembrete e nós cuidamos do resto. Tudo funciona direto no WhatsApp!",
      },
    },
    pricing: {
      title: "Preços Simples e Transparentes",
      subtitle: "Escolha o plano que se adapta às suas necessidades. Comece com nosso plano gratuito e faça upgrade conforme crescer.",
      free: {
        title: "Gratuito",
        description: "Perfeito para começar",
        features: [
          "5 lembretes mensais",
          "Templates básicos",
          "Integração com WhatsApp",
        ],
      },
      basic: {
        title: "Básico",
        description: "Para negócios em crescimento",
        popular: "Mais Popular",
        features: [
          "50 lembretes mensais",
          "Templates personalizados",
          "Suporte prioritário",
        ],
      },
      pro: {
        title: "Pro",
        description: "Para usuários avançados",
        features: [
          "Lembretes ilimitados",
          "Templates avançados",
          "Suporte 24/7 prioritário",
        ],
      },
    },
    waitlist: {
      title: "Entre na Lista de Espera",
      subtitle: "Seja o primeiro a saber quando lançarmos e ganhe acesso antecipado exclusivo.",
      form: {
        name: {
          label: "Nome Completo",
          placeholder: "João Silva",
        },
        email: {
          label: "Endereço de Email",
          placeholder: "joao@exemplo.com",
        },
        phone: {
          label: "Número de Telefone",
          placeholder: "(11) 99999-9999",
        },
        submit: "Entrar na Lista",
      },
      success: {
        title: "Obrigado!",
        message: "Você está na lista! Avisaremos assim que o nahorabot for lançado.",
      },
    },
    cta: {
      title: "Pronto para Transformar seu Negócio?",
      subtitle: "Entre na lista de espera hoje e seja o primeiro a experimentar o futuro dos lembretes automatizados.",
      button: "Quero Testar!",
    },
    footer: {
      description: "Lembretes automatizados via WhatsApp que ajudam empresas e pessoas a crescerem.",
      quickLinks: "Links Rápidos",
      contact: "Contato",
      support: "Suporte disponível 24/7",
      rights: "Todos os direitos reservados.",
    },
    faq: {
      title: "Perguntas Frequentes",
      questions: [
        {
          question: "Preciso instalar algum aplicativo?",
          answer: "Não! Tudo funciona direto no WhatsApp, sem precisar baixar nada."
        },
        {
          question: "Como os lembretes são enviados?",
          answer: "Nosso sistema usa a API oficial do WhatsApp para enviar mensagens automáticas."
        },
        {
          question: "Posso cancelar ou editar um lembrete?",
          answer: "Sim! Você poderá editar, cancelar ou reagendar um lembrete facilmente."
        },
        {
          question: "Quanto vai custar?",
          answer: "Ainda estamos definindo os planos, mas quem entrar na lista de espera terá condições especiais!"
        }
      ]
    },
    howItWorks: {
      title: "Como funciona?",
      steps: [
        {
          step: "Cadastre seu lembrete",
          description: "em nossa plataforma."
        },
        {
          step: "Escolha o destinatário",
          description: "(pode ser você, um cliente, um amigo, etc.)."
        },
        {
          step: "Defina o horário",
          description: "e pronto! O WhatsApp enviará a mensagem automaticamente."
        }
      ],
      tagline: "Automação poderosa, sem complicação!"
    },
    forWho: {
      title: "Para quem é essa ferramenta?",
      audiences: [
        "Empreendedores e autônomos: Lembre clientes sobre compromissos, pagamentos e eventos.",
        "Consultórios e clínicas: Notifique pacientes sobre consultas agendadas.",
        "Empresas e equipes: Automatize comunicados internos.",
        "Uso pessoal: Receba lembretes no seu próprio WhatsApp e nunca mais perca prazos!"
      ]
    },
    development: {
      title: "O que estamos desenvolvendo?",
      description: "Estamos construindo uma ferramenta simples e eficiente para facilitar seu dia a dia. Se você gostaria de testar essa solução antes de todo mundo, entre na nossa lista de espera!",
      comingSoon: "Lançamento em breve – garanta seu acesso antecipado!"
    }
  },
};