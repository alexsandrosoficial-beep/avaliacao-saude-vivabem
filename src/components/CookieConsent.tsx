import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Cookie, X, Shield } from 'lucide-react';
import { useSafeStorage } from '@/hooks/use-safe-storage';

export function CookieConsent() {
  const [cookieConsent, setCookieConsent] = useSafeStorage('cookie-consent', null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mostra o banner após 1 segundo se o usuário ainda não aceitou
    const timer = setTimeout(() => {
      if (cookieConsent === null) {
        setIsVisible(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [cookieConsent]);

  const handleAccept = () => {
    setCookieConsent('accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    setCookieConsent('declined');
    setIsVisible(false);
  };

  if (!isVisible || cookieConsent !== null) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in">
      <Card className="max-w-4xl mx-auto p-6 shadow-elevated bg-background border-2 border-primary/20">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-medium">
              <Cookie className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-bold text-foreground">
                Cookies e Privacidade
              </h3>
            </div>
            
            <p className="text-muted-foreground mb-4">
              Utilizamos cookies essenciais para garantir o funcionamento correto do site, 
              melhorar sua experiência e salvar suas preferências. Seus dados são 
              armazenados localmente e nunca são compartilhados com terceiros.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                onClick={handleAccept}
                className="bg-gradient-primary shadow-medium hover:shadow-elevated"
              >
                Aceitar Cookies
              </Button>
              
              <Button
                onClick={handleDecline}
                variant="outline"
              >
                Recusar
              </Button>
              
              <p className="text-xs text-muted-foreground flex items-center">
                🔒 Seus dados estão seguros e protegidos
              </p>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={handleDecline}
            className="flex-shrink-0"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
}
