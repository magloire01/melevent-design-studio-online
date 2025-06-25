
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, User } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Reservations = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    budget: '',
    venue: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulation d'une réservation
    setTimeout(() => {
      console.log('Données de réservation:', formData);
      toast({
        title: "Demande envoyée !",
        description: "Nous vous contacterons dans les 24h pour confirmer votre réservation.",
      });
      setIsLoading(false);
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        guestCount: '',
        budget: '',
        venue: '',
        message: ''
      });
    }, 2000);
  };

  const eventTypes = [
    { value: 'mariage', label: 'Mariage' },
    { value: 'anniversaire', label: 'Anniversaire' },
    { value: 'corporate', label: 'Événement Corporatif' },
    { value: 'babyshower', label: 'Baby Shower' },
    { value: 'reception', label: 'Réception Privée' },
    { value: 'saisonnier', label: 'Événement Saisonnier' },
    { value: 'autre', label: 'Autre' }
  ];

  const budgetRanges = [
    { value: '0-500', label: 'Moins de 500€' },
    { value: '500-1000', label: '500€ - 1 000€' },
    { value: '1000-2000', label: '1 000€ - 2 000€' },
    { value: '2000-5000', label: '2 000€ - 5 000€' },
    { value: '5000+', label: 'Plus de 5 000€' }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-r from-rose-gold to-warm-gold">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
            Réserver Votre Événement
          </h1>
          <p className="text-xl text-white/90">
            Remplissez le formulaire ci-dessous et nous vous contacterons pour discuter de votre projet
          </p>
        </div>
      </section>

      {/* Formulaire de réservation */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white shadow-xl border-0">
            <CardHeader className="text-center">
              <CardTitle className="font-playfair text-3xl text-charcoal">
                Demande de Réservation
              </CardTitle>
              <CardDescription className="text-lg">
                Partagez-nous les détails de votre événement pour recevoir un devis personnalisé
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Informations personnelles */}
                <div className="space-y-4">
                  <h3 className="font-playfair text-xl font-semibold text-charcoal border-b border-rose-gold/20 pb-2">
                    Vos Informations
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-charcoal font-medium">
                        Prénom *
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-rose-gold focus:ring-rose-gold"
                        placeholder="Marie"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-charcoal font-medium">
                        Nom *
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-rose-gold focus:ring-rose-gold"
                        placeholder="Dupont"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-charcoal font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-rose-gold focus:ring-rose-gold"
                        placeholder="marie.dupont@email.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-charcoal font-medium">
                        Téléphone *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-rose-gold focus:ring-rose-gold"
                        placeholder="+33 1 23 45 67 89"
                      />
                    </div>
                  </div>
                </div>

                {/* Détails de l'événement */}
                <div className="space-y-4">
                  <h3 className="font-playfair text-xl font-semibold text-charcoal border-b border-rose-gold/20 pb-2">
                    Détails de l'Événement
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="eventType" className="text-charcoal font-medium">
                        Type d'événement *
                      </Label>
                      <Select value={formData.eventType} onValueChange={(value) => handleSelectChange('eventType', value)}>
                        <SelectTrigger className="border-gray-300 focus:border-rose-gold focus:ring-rose-gold">
                          <SelectValue placeholder="Sélectionnez un type" />
                        </SelectTrigger>
                        <SelectContent>
                          {eventTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="eventDate" className="text-charcoal font-medium">
                        Date souhaitée *
                      </Label>
                      <Input
                        id="eventDate"
                        name="eventDate"
                        type="date"
                        required
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-rose-gold focus:ring-rose-gold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="guestCount" className="text-charcoal font-medium">
                        Nombre d'invités *
                      </Label>
                      <Input
                        id="guestCount"
                        name="guestCount"
                        type="number"
                        required
                        value={formData.guestCount}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-rose-gold focus:ring-rose-gold"
                        placeholder="50"
                        min="1"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-charcoal font-medium">
                        Budget estimé
                      </Label>
                      <Select value={formData.budget} onValueChange={(value) => handleSelectChange('budget', value)}>
                        <SelectTrigger className="border-gray-300 focus:border-rose-gold focus:ring-rose-gold">
                          <SelectValue placeholder="Sélectionnez votre budget" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range.value} value={range.value}>
                              {range.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="venue" className="text-charcoal font-medium">
                      Lieu de l'événement
                    </Label>
                    <Input
                      id="venue"
                      name="venue"
                      type="text"
                      value={formData.venue}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-rose-gold focus:ring-rose-gold"
                      placeholder="Adresse ou nom du lieu"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-charcoal font-medium">
                      Message (optionnel)
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-rose-gold focus:ring-rose-gold min-h-32"
                      placeholder="Décrivez votre vision, vos préférences, ou toute information importante..."
                    />
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-rose-gold hover:bg-rose-gold/90 text-white py-4 text-lg"
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Envoi en cours...
                      </div>
                    ) : (
                      <>
                        <Calendar className="mr-2 h-5 w-5" />
                        Envoyer ma Demande
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Informations supplémentaires */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-playfair text-3xl font-bold text-charcoal mb-4">
              Comment ça marche ?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-rose-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-rose-gold" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-charcoal mb-2">
                1. Envoyez votre demande
              </h3>
              <p className="text-gray-600">
                Remplissez le formulaire avec les détails de votre événement
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-rose-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-rose-gold" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-charcoal mb-2">
                2. Consultation personnalisée
              </h3>
              <p className="text-gray-600">
                Nous vous contactons pour affiner votre projet et établir un devis
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-rose-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-rose-gold text-2xl font-bold">✨</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-charcoal mb-2">
                3. Réalisation magique
              </h3>
              <p className="text-gray-600">
                Nous créons la décoration de vos rêves pour un événement inoubliable
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservations;
