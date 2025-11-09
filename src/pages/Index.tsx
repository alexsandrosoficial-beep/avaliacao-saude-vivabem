import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Heart, Sparkles, TrendingUp, Shield } from "lucide-react";
import { playClickSound } from "@/utils/sounds";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen wellness-background">
      <div className="content-wrapper">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Plataforma de Bem-Estar Inteligente</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Viva Bem
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Seu corpo, sua saúde em equilíbrio
          </p>
          
          <p className="text-lg text-foreground/80 mb-10 max-w-2xl mx-auto">
            Descubra seu índice de bem-estar através de uma avaliação personalizada e receba 
            recomendações específicas para melhorar sua qualidade de vida
          </p>
          
          <Button
            size="lg"
            onClick={() => {
              playClickSound();
              navigate("/quiz");
            }}
            className="shadow-medium text-lg px-8 py-6 h-auto"
          >
            Começar Avaliação de Saúde
            <Heart className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Como Funciona
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center shadow-soft hover:shadow-medium transition-all animate-fade-in bg-gradient-card">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Avaliação Personalizada</h3>
              <p className="text-muted-foreground">
                Responda perguntas sobre seus hábitos diários em poucos minutos
              </p>
            </Card>

            <Card className="p-8 text-center shadow-soft hover:shadow-medium transition-all animate-fade-in bg-gradient-card" style={{ animationDelay: "0.1s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                <Sparkles className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Análise Inteligente</h3>
              <p className="text-muted-foreground">
                Receba um relatório completo sobre sua saúde e bem-estar
              </p>
            </Card>

            <Card className="p-8 text-center shadow-soft hover:shadow-medium transition-all animate-fade-in bg-gradient-card" style={{ animationDelay: "0.2s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Soluções Personalizadas</h3>
              <p className="text-muted-foreground">
                Produtos e dicas especialmente selecionados para você
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 text-center shadow-medium bg-primary/5 border-primary/20">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Pronto para Transformar Sua Saúde?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Comece agora sua jornada para uma vida mais saudável e equilibrada
            </p>
            <Button
              size="lg"
              onClick={() => {
                playClickSound();
                navigate("/quiz");
              }}
              className="shadow-medium"
            >
              Iniciar Avaliação Gratuita
            </Button>
          </Card>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Index;
