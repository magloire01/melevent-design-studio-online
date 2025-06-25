
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, User, Star, Heart, Award } from 'lucide-react';

const Home = () => {
  const services = [
    {
      title: "Décoration de Mariage",
      description: "Créez le mariage de vos rêves avec nos décorations élégantes et personnalisées.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      price: "À partir de 1 500€"
    },
    {
      title: "Événements Corporatifs",
      description: "Impressionnez vos clients avec des événements professionnels mémorables.",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      price: "À partir de 800€"
    },
    {
      title: "Anniversaires",
      description: "Célébrez vos moments spéciaux avec une décoration unique et festive.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop",
      price: "À partir de 400€"
    }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      event: "Mariage",
      comment: "MelEvent a transformé notre mariage en un conte de fées. Absolument magique !",
      rating: 5
    },
    {
      name: "Pierre Martin",
      event: "Événement Corporatif",
      comment: "Professionnalisme et créativité au rendez-vous. Nos clients étaient éblouis.",
      rating: 5
    },
    {
      name: "Sophie Laurent",
      event: "Anniversaire",
      comment: "Une équipe fantastique qui a su comprendre ma vision et la dépasser.",
      rating: 5
    }
  ];

  const features = [
    {
      icon: Star,
      title: "Qualité Premium",
      description: "Matériaux et décorations de haute qualité pour vos événements"
    },
    {
      icon: Heart,
      title: "Service Personnalisé",
      description: "Chaque événement est unique, notre approche aussi"
    },
    {
      icon: Award,
      title: "Expertise Reconnue",
      description: "Plus de 5 ans d'expérience dans la décoration d'événements"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&h=1080&fit=crop')"
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Créons Ensemble Vos
            <span className="block gradient-text">Événements de Rêve</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-in">
            Des décorations élégantes et personnalisées pour tous vos moments précieux
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/services">
              <Button size="lg" className="gradient-primary text-white px-8 py-4 text-lg hover:opacity-90">
                <Calendar className="mr-2 h-5 w-5" />
                Découvrir nos Services
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-charcoal px-8 py-4 text-lg">
                <User className="mr-2 h-5 w-5" />
                Créer un Compte
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Pourquoi Choisir MelEvent ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Notre expertise et notre passion pour la perfection font la différence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover-lift bg-white/90 border-0 shadow-lg">
                <CardContent className="p-8">
                  <feature.icon className="h-16 w-16 text-rose-gold mx-auto mb-4" />
                  <h3 className="font-playfair text-2xl font-semibold text-charcoal mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Nos Services Phares
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez notre gamme complète de services de décoration pour tous types d'événements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift bg-white border-0 shadow-lg overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-playfair text-2xl font-semibold text-charcoal mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-rose-gold font-semibold text-lg">
                      {service.price}
                    </span>
                    <Link to="/services">
                      <Button className="gradient-primary text-white hover:opacity-90">
                        En savoir plus
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Ce que Disent nos Clients
            </h2>
            <p className="text-xl text-gray-600">
              La satisfaction de nos clients est notre plus belle récompense
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-soft-pink border-0 hover-lift">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-rose-gold h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.comment}"
                  </p>
                  <div>
                    <p className="font-semibold text-charcoal">{testimonial.name}</p>
                    <p className="text-rose-gold text-sm">{testimonial.event}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à Créer Votre Événement ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contactez-nous dès maintenant pour discuter de votre projet et obtenir un devis personnalisé
          </p>
          <Link to="/reservations">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-rose-gold px-8 py-4 text-lg">
              <Calendar className="mr-2 h-5 w-5" />
              Faire une Réservation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
