import React from 'react';
import {
  Menu,
  X,
  ArrowRight,
  Clock,
  DollarSign,
  MessageSquare,
  Zap,
  Check,
} from 'lucide-react';
import { translations } from './translations';
import Logo from './logo.svg?react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [language] = React.useState<'pt'>('pt');

  // Begin form setup
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  // End form setup

  const t = translations[language];

  const features = [
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-600 mb-4" />,
      title: t.features.whatsappFirst.title,
      description: t.features.whatsappFirst.description,
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600 mb-4" />,
      title: t.features.quickSetup.title,
      description: t.features.quickSetup.description,
    },
    {
      icon: <DollarSign className="w-8 h-8 text-blue-600 mb-4" />,
      title: t.features.costEffective.title,
      description: t.features.costEffective.description,
    },
  ];

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      const url = import.meta.env.VITE_URL_ENDPOINT_POST;

      const formDataObject = new FormData();

      formDataObject.append('name', formData.name);
      formDataObject.append('email', formData.email);
      formDataObject.append('phone', formData.phone);

      const keyValuePairs: string[] = [];
      for (const pair of formDataObject.entries()) {
        if (typeof pair[1] === 'string') {
          keyValuePairs.push(
            encodeURIComponent(pair[0]) + '=' + encodeURIComponent(pair[1])
          );
        }
      }
      const formDataString = keyValuePairs.join('&');

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataString,
      });

      if (!response.ok) {
        throw new Error('Erro na requisição');
      }
      const responseText = await response.text();

      try {
        const responseJson = JSON.parse(responseText);

        console.log('Resposta JSON:', responseJson);
      } catch (jsonError) {
        console.log('A resposta não é um JSON válido:', jsonError);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <a href="#hero">
                <Logo className="w-auto h-10" />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {t.nav.features}
              </a>
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {t.nav.howItWorks}
              </a>
              <a
                href="#faq"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {t.nav.FAQ}
              </a>
              <a
                href="#waitlist"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {t.nav.joinWaitlist}
              </a>
              <a href="#waitlist">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                  {t.nav.joinWaitlist}
                </button>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#features"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                {t.nav.features}
              </a>
              <a
                href="#how-it-works"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                {t.nav.howItWorks}
              </a>
              <a
                href="#faq"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                {t.nav.FAQ}
              </a>
              <a
                href="#waitlist"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                {t.nav.joinWaitlist}
              </a>
              <a href="#waitlist">
                <button className="w-full mt-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
                  {t.nav.joinWaitlist}
                </button>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24 px-4 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {t.hero.title}{' '}
                <span className="text-blue-600">{t.hero.titleHighlight}</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">{t.hero.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#waitlist"
                  className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  {t.hero.joinWaitlist}{' '}
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </div>
              <p className="mt-4 text-sm text-gray-500">{t.hero.comingSoon}</p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1611746872915-64382b5c76da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
                alt="WhatsApp notification preview"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Clock className="text-green-500" />
                  <span className="font-semibold">60% menos faltas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">
            {t.features.title}
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                {feature.icon}
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">
            {t.howItWorks.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {t.howItWorks.steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {i + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.step}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          <p className="text-xl font-semibold text-center mt-12 text-blue-600">
            {t.howItWorks.tagline}
          </p>
        </div>
      </section>

      {/* For Who Section */}
      <section id="for-who" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t.forWho.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.forWho.audiences.map((audience, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-lg">{audience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Section */}
      <section id="development" className="py-16 bg-blue-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">{t.development.title}</h2>
          <p className="text-xl text-gray-600 mb-8">
            {t.development.description}
          </p>
          <p className="text-lg font-semibold text-blue-600 mb-8">
            {t.development.comingSoon}
          </p>
          <a
            href="#waitlist"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            {t.cta.button}
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t.faq.title}
          </h2>
          <div className="space-y-6">
            {t.faq.questions.map((faq, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-4">
              {t.waitlist.title}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-8">
              {t.waitlist.subtitle}
            </p>

            {isSubmitted ? (
              <div className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {t.waitlist.success.title}
                </h3>
                <p className="text-gray-600">{t.waitlist.success.message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t.waitlist.form.name.label}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder={t.waitlist.form.name.placeholder}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t.waitlist.form.email.label}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder={t.waitlist.form.email.placeholder}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t.waitlist.form.phone.label}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder={t.waitlist.form.phone.placeholder}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
                >
                  {t.waitlist.form.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t.cta.title}</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>
          <a
            href="#waitlist"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-colors"
          >
            {t.cta.button}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <a href="#hero">
                  <Logo className="w-auto h-10" />
                </a>
              </div>
              <p className="text-gray-400">{t.footer.description}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">{t.footer.quickLinks}</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-white"
                  >
                    {t.nav.features}
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="text-gray-400 hover:text-white"
                  >
                    Como Funciona
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-gray-400 hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#waitlist"
                    className="text-gray-400 hover:text-white"
                  >
                    {t.nav.joinWaitlist}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">{t.footer.contact}</h3>
              <p className="text-gray-400">
                <b>Email:</b> nahorabot@gmail.com
                <br />
                {t.footer.support}
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} nahorabot. {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
