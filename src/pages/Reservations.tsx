
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, MapPin, Users, Clock, Send, CheckCircle } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { useToast } from '@/hooks/use-toast';

const Reservations = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [formData, setFormData] = useState({
    service: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventType: '',
    location: '',
    guestCount: '',
    duration: '',
    budget: '',
    description: '',
    urgency: 'normal'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const services = [
    { value: 'mariage-essentiel', label: 'Pack Mariage Essentiel - 1 500€', category: 'Mariage' },
    { value: 'mariage-premium', label: 'Pack Mariage Premium - 3 500€', category: 'Mariage' },
    { value: 'corporatif', label: 'Événement Corporatif - 800€', category: 'Corporate' },
    { value: 'anniversaire-festif', label: 'Anniversaire Festif - 400€', category: 'Anniversaire' },
    { value: 'anniversaire-elegant', label: 'Anniversaire Élégant - 750€', category: 'Anniversaire' },
    { value: 'baby-shower', label: 'Baby Shower - 350€', category: 'Autre' },
    { value: 'personnalise', label: 'Service Personnalisé - Devis sur mesure', category: 'Personnalisé' }
  ];

  const budgetRanges = [
    { value: '0-500', label: 'Moins de 500€' },
    { value: '500-1000', label: '500€ - 1 000€' },
    { value: '1000-2000', label: '1 000€ - 2 000€' },
    { value: '2000-5000', label: '2 000€ - 5 000€' },
    { value: '5000+', label: 'Plus de 5 000€' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const required = ['service', 'firstName', 'lastName', 'email', 'phone', 'eventType', 'location', 'guestCount'];
    for (const field of required) {
      if (!formData[field as keyof typeof formData]) {
        return false;
      }
    }
    return selectedDate && formData.email.includes('@');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      // Simulation d'envoi
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      toast({
        title: "Demande envoyée !",
        description: "Nous vous contacterons dans les 24h pour confirmer votre réservation.",
      });

      console.log('Réservation soumise:', { ...formData, date: selectedDate });
      
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center px-4">
        <Card className="max-w-md mx-auto shadow-2xl border-0 bg-white/95">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-rose-gold mx-auto mb-4" />
            <h2 className="font-playfair text-2xl font-bold text-charcoal mb-4">
              Demande Envoyée !
            </h2>
            <p className="text-gray-600 mb-6">
              Merci pour votre confiance. Notre équipe vous contactera dans les 24h pour confirmer les détails de votre événement.
            </p>
            <Button 
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  service: '', firstName: '', lastName: '', email: '', phone: '',
                  eventType: '', location: '', guestCount: '', duration: '', budget: '',
                  description: '', urgency: 'normal'
                });
                setSelectedDate(undefined);
              }}
              className="gradient-primary text-white hover:opacity-90"
            >
              Nouvelle Demande
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-bg py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Réserver Votre Événement
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Remplissez ce formulaire pour nous faire part de vos besoins. Notre équipe vous contactera rapidement pour finaliser votre projet.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Service Selection */}
          <Card className="shadow-lg border-0 bg-white/95">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl text-charcoal">
                1. Choisir un Service
              </CardTitle>
              <CardDescription>
                Sélectionnez le service qui correspond le mieux à vos besoins
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                <Label htmlFor="service">Service souhaité *</Label>
                <Select value={formData.service} onValueChange={(value) => handleSelectChange('service', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choisir un service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {service.category}
                          </Badge>
                          {service.label}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Personal Information */}
          <Card className="shadow-lg border-0 bg-white/95">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl text-charcoal">
                2. Informations Personnelles
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Prénom *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Votre prénom"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Nom *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Votre nom"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="votre@email.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Téléphone *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+33 1 23 45 67 89"
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Event Details */}
          <Card className="shadow-lg border-0 bg-white/95">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl text-charcoal">
                3. Détails de l'Événement
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Date de l'événement *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? format(selectedDate, 'PPP', { locale: fr }) : "Choisir une date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        initialFocus
                        locale={fr}
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div>
                  <Label htmlFor="eventType">Type d'événement *</Label>
                  <Input
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    placeholder="Ex: Mariage, Anniversaire, Événement corporate..."
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="location">Lieu de l'événement *</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="Adresse ou ville"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="guestCount">Nombre d'invités *</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="guestCount"
                      name="guestCount"
                      type="number"
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      placeholder="Ex: 50"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="duration">Durée estimée</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="duration"
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      placeholder="Ex: 6 heures"
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="budget">Budget approximatif</Label>
                  <Select value={formData.budget} onValueChange={(value) => handleSelectChange('budget', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner un budget" />
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
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Card className="shadow-lg border-0 bg-white/95">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl text-charcoal">
                4. Informations Complémentaires
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="description">Description de votre projet</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Décrivez votre vision, vos couleurs préférées, le style souhaité, ou tout autre détail important..."
                  rows={4}
                />
              </div>

              <div>
                <Label htmlFor="urgency">Urgence de la demande</Label>
                <Select value={formData.urgency} onValueChange={(value) => handleSelectChange('urgency', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="normal">Normal - Réponse sous 24h</SelectItem>
                    <SelectItem value="urgent">Urgent - Réponse sous 4h</SelectItem>
                    <SelectItem value="flexible">Flexible - Pas pressé</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Submit */}
          <Card className="shadow-lg border-0 bg-white/95">
            <CardContent className="p-6">
              {!validateForm() && (
                <Alert className="mb-4">
                  <AlertDescription>
                    Veuillez remplir tous les champs marqués d'un astérisque (*) pour envoyer votre demande.
                  </AlertDescription>
                </Alert>
              )}
              
              <Button 
                type="submit" 
                className="w-full gradient-primary text-white hover:opacity-90 py-3 text-lg"
                disabled={isLoading || !validateForm()}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Envoi en cours...
                  </div>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Envoyer ma Demande
                  </>
                )}
              </Button>
              
              <p className="text-sm text-gray-500 text-center mt-3">
                En envoyant cette demande, vous acceptez d'être contacté par notre équipe pour finaliser votre projet.
              </p>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default Reservations;
