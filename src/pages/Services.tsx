
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Décoration de Mariage",
      description: "Transformez votre jour J en un moment magique avec nos décorations de mariage sur mesure.",
      longDescription: "Nos experts créent une ambiance romantique et élégante pour votre mariage. De la cérémonie à la réception, chaque détail est pensé pour refléter votre amour unique.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop",
      price: "À partir de 1 500€",
      features: [
        "Consultation personnalisée",
        "Décoration florale premium",
        "Éclairage d'ambiance",
        "Mobilier de réception",
        "Coordination le jour J"
      ],
      duration: "Journée complète",
      category: "Mariage"
    },
    {
      id: 2,
      title: "Événements Corporatifs",
      description: "Créez une impression durable avec nos services de décoration pour événements d'entreprise.",
      longDescription: "Renforcez votre image de marque avec des événements corporatifs impeccables. Séminaires, lancements de produits, galas d'entreprise - nous gérons tout.",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop",
      price: "À partir de 800€",
      features: [
        "Branding personnalisé",
        "Décoration professionnelle",
        "Équipement audiovisuel",
        "Signalétique",
        "Service traiteur"
      ],
      duration: "Demi-journée à plusieurs jours",
      category: "Corporate"
    },
    {
      id: 3,
      title: "Anniversaires",
      description: "Célébrez vos moments spéciaux avec des décorations festives et personnalisées.",
      longDescription: "Que ce soit pour un anniversaire enfant ou adulte, nous créons une ambiance unique qui fera de cette journée un souvenir inoubliable.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop",
      price: "À partir de 400€",
      features: [
        "Thème personnalisé",
        "Décoration de table",
        "Ballons et guirlandes",
        "Animation décor",
        "Photos souvenirs"
      ],
      duration: "Demi-journée",
      category: "Anniversaire"
    },
    {
      id: 4,
      title: "Baby Shower",
      description: "Accueillez votre futur bébé avec une décoration douce et élégante.",
      longDescription: "Créez un moment tendre et mémorable pour célébrer l'arrivée de votre petit trésor avec nos décorations baby shower sur mesure.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
      price: "À partir de 350€",
      features: [
        "Couleurs pastels",
        "Décoration florale douce",
        "Candy bar",
        "Photobooth",
        "Cadeaux souvenirs"
      ],
      duration: "Demi-journée",
      category: "Baby Shower"
    },
    {
      id: 5,
      title: "Réceptions Privées",
      description: "Organisez des réceptions privées inoubliables dans une ambiance raffinée.",
      longDescription: "Dîners de gala, soirées de bienfaisance, réceptions familiales - nous créons l'atmosphère parfaite pour vos événements privés.",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop",
      price: "À partir de 600€",
      features: [
        "Décoration de luxe",
        "Éclairage sophistiqué",
        "Mobilier haut de gamme",
        "Service personnalisé",
        "Coordination complète"
      ],
      duration: "Soirée complète",
      category: "Réception"
    },
    {
      id: 6,
      title: "Événements Saisonniers",
      description: "Célébrez les fêtes et saisons avec des décorations thématiques créatives.",
      longDescription: "Noël, Halloween, Pâques, été - nous adaptons nos décorations aux saisons et aux fêtes pour créer des ambiances uniques.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop",
      price: "À partir de 300€",
      features: [
        "Thèmes saisonniers",
        "Décoration intérieur/extérieur",
        "Accessoires festifs",
        "Ambiance lumineuse",
        "Installation rapide"
      ],
      duration: "Variable",
      category: "Saisonnier"
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-r from-rose-gold to-warm-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
            Nos Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Découvrez notre gamme complète de services de décoration pour tous vos événements spéciaux
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="hover-lift bg-white border-0 shadow-lg overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="font-playfair text-xl text-charcoal">
                      {service.title}
                    </CardTitle>
                    <span className="text-sm bg-rose-gold text-white px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="font-semibold text-charcoal">Durée: </span>
                      <span className="text-gray-600">{service.duration}</span>
                    </div>
                    
                    <div>
                      <span className="font-semibold text-charcoal">Inclus:</span>
                      <ul className="mt-2 space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-center">
                            <span className="w-1 h-1 bg-rose-gold rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                        {service.features.length > 3 && (
                          <li className="text-sm text-rose-gold">
                            +{service.features.length - 3} autres services...
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-rose-gold font-bold text-lg">
                      {service.price}
                    </span>
                    <Link to={`/services/${service.id}`}>
                      <Button className="bg-rose-gold hover:bg-rose-gold/90 text-white">
                        Voir détails
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-charcoal mb-6">
            Besoin d'un Service Personnalisé ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Chaque événement est unique. Contactez-nous pour discuter de vos besoins spécifiques et créer ensemble votre projet sur mesure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/reservations">
              <Button size="lg" className="bg-rose-gold hover:bg-rose-gold/90 text-white px-8 py-4">
                <Calendar className="mr-2 h-5 w-5" />
                Faire une Demande
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-white px-8 py-4">
              Obtenir un Devis
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
