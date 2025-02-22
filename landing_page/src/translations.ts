interface Translation {
  nav: {
    features: string;
    pricing: string;
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
}

export const translations: Record<string, Translation> = {
  en: {
    nav: {
      features: "Features",
      pricing: "Pricing",
      joinWaitlist: "Join Waitlist",
    },
    hero: {
      title: "Never Miss Another",
      titleHighlight: "Important Moment",
      subtitle: "Automate your WhatsApp reminders and reduce no-shows by up to 60%. Perfect for businesses and individuals who want a simple, effective way to stay connected.",
      joinWaitlist: "Join the Waitlist",
      watchDemo: "Watch Demo",
      comingSoon: "Coming soon • Be the first to know when we launch",
    },
    features: {
      title: "Why Choose RemindMe?",
      subtitle: "Simple, effective, and affordable automated reminders that help you stay connected with clients and reduce no-shows.",
      whatsappFirst: {
        title: "WhatsApp First",
        description: "Send reminders where they're most likely to be seen. With 98% open rates, WhatsApp ensures your messages get noticed.",
      },
      quickSetup: {
        title: "Quick Setup",
        description: "Get started in minutes, not hours. No technical skills required - just connect your WhatsApp and start scheduling reminders.",
      },
      costEffective: {
        title: "Cost-Effective",
        description: "Pay a fraction of what you'd spend on complex automation tools. Perfect for small businesses and individuals.",
      },
    },
    pricing: {
      title: "Simple, Transparent Pricing",
      subtitle: "Choose the plan that fits your needs. Start with our free tier and upgrade as you grow.",
      free: {
        title: "Free",
        description: "Perfect for getting started",
        features: [
          "5 monthly reminders",
          "Basic templates",
          "WhatsApp integration",
        ],
      },
      basic: {
        title: "Basic",
        description: "For growing businesses",
        popular: "Most Popular",
        features: [
          "50 monthly reminders",
          "Custom templates",
          "Priority support",
        ],
      },
      pro: {
        title: "Pro",
        description: "For power users",
        features: [
          "Unlimited reminders",
          "Advanced templates",
          "24/7 priority support",
        ],
      },
    },
    waitlist: {
      title: "Join the Waitlist",
      subtitle: "Be the first to know when we launch and get exclusive early access.",
      form: {
        name: {
          label: "Full Name",
          placeholder: "John Doe",
        },
        email: {
          label: "Email Address",
          placeholder: "john@example.com",
        },
        phone: {
          label: "Phone Number",
          placeholder: "+1 (555) 000-0000",
        },
        submit: "Join Waitlist",
      },
      success: {
        title: "Thank You!",
        message: "You're on the list! We'll notify you as soon as RemindMe launches.",
      },
    },
    cta: {
      title: "Ready to Transform Your Business?",
      subtitle: "Join the waitlist today and be the first to experience the future of automated reminders.",
      button: "Join the Waitlist",
    },
    footer: {
      description: "Automated WhatsApp reminders that help businesses grow.",
      quickLinks: "Quick Links",
      contact: "Contact",
      support: "Support available 24/7",
      rights: "All rights reserved.",
    },
  },
  pt: {
    nav: {
      features: "Recursos",
      pricing: "Preços",
      joinWaitlist: "Lista de Espera",
    },
    hero: {
      title: "Nunca Mais Perca Um",
      titleHighlight: "Momento Importante",
      subtitle: "Automatize seus lembretes no WhatsApp e reduza faltas em até 60%. Perfeito para empresas e indivíduos que desejam uma maneira simples e eficaz de manter contato.",
      joinWaitlist: "Entrar na Lista",
      watchDemo: "Ver Demo",
      comingSoon: "Em breve • Seja o primeiro a saber quando lançarmos",
    },
    features: {
      title: "Por que escolher o RemindMe?",
      subtitle: "Lembretes automatizados simples, eficazes e acessíveis que ajudam você a manter contato com clientes e reduzir faltas.",
      whatsappFirst: {
        title: "Foco no WhatsApp",
        description: "Envie lembretes onde eles têm mais chances de serem vistos. Com 98% de taxa de abertura, o WhatsApp garante que suas mensagens sejam notadas.",
      },
      quickSetup: {
        title: "Configuração Rápida",
        description: "Comece em minutos, não horas. Sem necessidade de conhecimentos técnicos - apenas conecte seu WhatsApp e comece a agendar lembretes.",
      },
      costEffective: {
        title: "Custo-Benefício",
        description: "Pague uma fração do que você gastaria com ferramentas complexas de automação. Perfeito para pequenas empresas e indivíduos.",
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
          placeholder: "+55 (11) 99999-9999",
        },
        submit: "Entrar na Lista",
      },
      success: {
        title: "Obrigado!",
        message: "Você está na lista! Avisaremos assim que o RemindMe for lançado.",
      },
    },
    cta: {
      title: "Pronto para Transformar seu Negócio?",
      subtitle: "Entre na lista de espera hoje e seja o primeiro a experimentar o futuro dos lembretes automatizados.",
      button: "Entrar na Lista",
    },
    footer: {
      description: "Lembretes automatizados via WhatsApp que ajudam empresas a crescer.",
      quickLinks: "Links Rápidos",
      contact: "Contato",
      support: "Suporte disponível 24/7",
      rights: "Todos os direitos reservados.",
    },
  },
};