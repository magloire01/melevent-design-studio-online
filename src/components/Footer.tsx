
import { Calendar } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Calendar className="h-8 w-8 text-rose-gold" />
              <span className="font-playfair text-2xl font-bold text-white">
                MelEvent
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Votre partenaire de confiance pour créer des événements inoubliables. 
              Nous transformons vos rêves en réalité avec des décorations élégantes et personnalisées.
            </p>
            <div className="text-sm text-gray-400">
              © 2024 MelEvent. Tous droits réservés.
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4 text-rose-gold">
              Nos Services
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>Décoration de Mariage</li>
              <li>Événements Corporatifs</li>
              <li>Anniversaires</li>
              <li>Baby Shower</li>
              <li>Réceptions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4 text-rose-gold">
              Contact
            </h3>
            <div className="space-y-2 text-gray-300">
              <p>📧 contact@melevent.fr</p>
              <p>📞 +33 1 23 45 67 89</p>
              <p>📍 Paris, France</p>
              <div className="pt-2">
                <p className="text-sm">Lun - Ven: 9h - 18h</p>
                <p className="text-sm">Sam: 10h - 16h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
