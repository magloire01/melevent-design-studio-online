
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Heart, Users, Star, CheckCircle } from 'lucide-react';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 1,
      category: 'mariage',
      title: "Pack Mariage Essentiel",
      description: "Décoration complète pour votre jour J avec fleurs, éclairage et mobilier.",
      price: "1 500€",
      duration: "8 heures",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=500&h=300&fit=crop",
      features: ["Décoration florale", "Éclairage d'ambiance", "Mobilier de réception", "Coordination jour J"],
      popular: true
    },
    {
      id: 2,
      category: 'mariage',
      title: "Pack Mariage Premium",
      description: "Expérience de luxe avec décoration sur-mesure et service complet.",
      price: "3 500€",
      duration: "12 heures", 
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500&h=300&fit=crop",
      features: ["Tout du pack Essentiel", "Décoration personnalisée", "Photographe inclus", "Traiteur partenaire"]
    },
    {
      id: 3,
      category: 'corporate',
      title: "Événement Corporatif",
      description: "Solutions professionnelles pour vos événements d'entreprise.",
      price: "800€",
      duration: "6 heures",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=300&fit=crop",
      features: ["Branding événementiel", "Mobilier moderne", "Éclairage professionnel", "Support technique"]
    },
    {
      id: 4,
      category: 'anniversaire',
      title: "Anniversaire Festif",
      description: "Célébration colorée et joyeuse pour tous les âges.",
      price: "400€",
      duration: "4 heures",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500&h=300&fit=crop",
      features: ["Décoration thématique", "Ballons et guirlandes", "Éclairage festif", "Coordination"]
    },
    {
      id: 5,
      category: 'anniversaire',
      title: "Anniversaire Élégant",
      description: "Fête sophistiquée avec décoration raffinée.",
      price: "750€",
      duration: "6 heures",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=300&fit=crop",
      features: ["Décoration haut de gamme", "Mobilier design", "Éclairage d'ambiance", "Service personnalisé"]
    },
    {
      id: 6,
      category: 'autre',
      title: "Baby Shower",
      description: "Célébration douce et chaleureuse pour l'arrivée de bébé.",
      price: "350€",
      duration: "3 heures",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop",
      features: ["Décoration pastel", "Mobilier adapté", "Animations douces", "Coordination complète"]
    }
  ];

  const categories = [
    { id: 'all', label: 'Tous les services', icon: Star },
    { id: 'mariage', label: 'Mariages', icon: Heart },
    { id: 'corporate', label: 'Corporate', icon: Users },
    { id: 'anniversaire', label: 'Anniversaires', icon: Calendar },
    { id: 'autre', label: 'Autres', icon: Star }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream to-soft-pink">
      {/* Hero Section */}
      <section className="gradient-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            Nos Services
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Découvrez notre gamme complète de services de décoration pour tous vos événements spéciaux
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-12">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full max-w-4xl mx-auto mb-8">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  <category.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="hover-lift bg-white border-0 shadow-lg overflow-hidden relative">
                {service.popular && (
                  <Badge className="absolute top-4 right-4 z-10 bg-rose-gold text-white">
                    Populaire
                  </Badge>
                )}
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl text-charcoal">
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="text-2xl font-bold text-rose-gold">{service.price}</span>
                      <p className="text-sm text-gray-500">{service.duration}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-rose-gold mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link to="/reservations" className="w-full">
                    <Button className="w-full gradient-primary text-white hover:opacity-90">
                      Réserver ce service
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Besoin d'un Service Personnalisé ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contactez-nous pour discuter de vos besoins spécifiques et obtenir un devis sur mesure
          </p>
          <Link to="/reservations">
            <Button size="lg" className="gradient-primary text-white px-8 py-4 text-lg hover:opacity-90">
              <Calendar className="mr-2 h-5 w-5" />
              Demander un Devis
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
