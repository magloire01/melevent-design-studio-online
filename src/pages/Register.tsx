
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, User } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Erreur",
        description: "Les mots de passe ne correspondent pas",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    // Simulation d'une inscription
    setTimeout(() => {
      console.log('Données d\'inscription:', formData);
      toast({
        title: "Inscription réussie !",
        description: "Bienvenue dans la famille MelEvent",
      });
      setIsLoading(false);
      // Ici vous pouvez rediriger l'utilisateur ou gérer l'authentification
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-md w-full space-y-8">
        {/* Logo */}
        <div className="text-center">
          <Link to="/" className="inline-flex items-center space-x-2">
            <Calendar className="h-12 w-12 text-rose-gold" />
            <span className="font-playfair text-3xl font-bold gradient-text">
              MelEvent
            </span>
          </Link>
          <h2 className="mt-6 font-playfair text-3xl font-bold text-charcoal">
            Rejoignez-nous !
          </h2>
          <p className="mt-2 text-gray-600">
            Créez votre compte pour commencer à organiser vos événements
          </p>
        </div>

        {/* Formulaire d'inscription */}
        <Card className="bg-white shadow-xl border-0">
          <CardHeader className="space-y-1">
            <CardTitle className="font-playfair text-2xl text-center text-charcoal">
              Créer un Compte
            </CardTitle>
            <CardDescription className="text-center">
              Remplissez le formulaire pour créer votre compte MelEvent
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-charcoal font-medium">
                    Prénom
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
                    Nom
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

              <div className="space-y-2">
                <Label htmlFor="email" className="text-charcoal font-medium">
                  Adresse email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border-gray-300 focus:border-rose-gold focus:ring-rose-gold"
                  placeholder="marie.dupont@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-charcoal font-medium">
                  Téléphone
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="border-gray-300 focus:border-rose-gold focus:ring-rose-gold"
                  placeholder="+33 1 23 45 67 89"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-charcoal font-medium">
                  Mot de passe
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="border-gray-300 focus:border-rose-gold focus:ring-rose-gold"
                  placeholder="••••••••"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-charcoal font-medium">
                  Confirmer le mot de passe
                </Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="border-gray-300 focus:border-rose-gold focus:ring-rose-gold"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-rose-gold focus:ring-rose-gold border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-600">
                  J'accepte les{' '}
                  <a href="#" className="text-rose-gold hover:text-rose-gold/80">
                    conditions d'utilisation
                  </a>{' '}
                  et la{' '}
                  <a href="#" className="text-rose-gold hover:text-rose-gold/80">
                    politique de confidentialité
                  </a>
                </label>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-rose-gold hover:bg-rose-gold/90 text-white py-3"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <User className="mr-2 h-5 w-5" />
                    Créer mon Compte
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <span className="text-gray-600">Vous avez déjà un compte ? </span>
              <Link to="/login" className="text-rose-gold hover:text-rose-gold/80 font-medium">
                Se connecter
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
