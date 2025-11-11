import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Heart, Sparkles, TrendingUp, Shield, Star, Quote, BookOpen } from "lucide-react";
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
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 tracking-tight">
            Viva Bem
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-medium">
            Seu corpo, sua saúde em equilíbrio
          </p>
          
          <p className="text-base md:text-lg text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-12">
            Como Funciona
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card 
              className="p-8 text-center shadow-card hover:shadow-medium transition-all duration-300 animate-fade-in bg-gradient-card border-border/50 cursor-pointer"
              onClick={() => navigate("/quiz")}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Avaliação Personalizada</h3>
              <p className="text-muted-foreground leading-relaxed">
                Responda perguntas sobre seus hábitos diários em poucos minutos
              </p>
            </Card>

            <Card className="p-8 text-center shadow-card hover:shadow-medium transition-all duration-300 animate-fade-in bg-gradient-card border-border/50" style={{ animationDelay: "0.1s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                <Sparkles className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Análise Inteligente</h3>
              <p className="text-muted-foreground leading-relaxed">
                Receba um relatório completo sobre sua saúde e bem-estar
              </p>
            </Card>

            <Card 
              className="p-8 text-center shadow-card hover:shadow-medium transition-all duration-300 animate-fade-in bg-gradient-card border-border/50 cursor-pointer" 
              style={{ animationDelay: "0.2s" }}
              onClick={() => navigate("/blog")}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <BookOpen className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Artigos e Dicas</h3>
              <p className="text-muted-foreground leading-relaxed">
                Conteúdo educativo sobre saúde e bem-estar
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
            O Que Dizem Nossos Usuários
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Milhares de pessoas já transformaram suas vidas com nossa plataforma
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 shadow-card hover:shadow-medium transition-all duration-300 animate-fade-in bg-gradient-card border-border/50 relative overflow-hidden">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 mb-4 leading-relaxed italic">
                "Incrível! Em apenas 2 meses seguindo as recomendações, minha qualidade de sono melhorou 80%. Nunca me senti tão bem!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-display font-bold text-primary">MR</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Maria Rodrigues</p>
                  <p className="text-sm text-muted-foreground">Designer, 32 anos</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-medium transition-all duration-300 animate-fade-in bg-gradient-card border-border/50 relative overflow-hidden" style={{ animationDelay: "0.1s" }}>
              <Quote className="absolute top-4 right-4 w-8 h-8 text-secondary/10" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground/90 mb-4 leading-relaxed italic">
                "A avaliação foi super precisa! Identifiquei pontos que precisava melhorar e recebi dicas práticas. Muito recomendado!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="font-display font-bold text-secondary">JS</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">João Silva</p>
                  <p className="text-sm text-muted-foreground">Engenheiro, 28 anos</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-medium transition-all duration-300 animate-fade-in bg-gradient-card border-border/50 relative overflow-hidden" style={{ animationDelay: "0.2s" }}>
              <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/10" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/90 mb-4 leading-relaxed italic">
                "Finalmente encontrei uma plataforma que entende minhas necessidades. As dicas personalizadas fizeram toda diferença!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="font-display font-bold text-accent">AC</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Ana Costa</p>
                  <p className="text-sm text-muted-foreground">Professora, 45 anos</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 text-center shadow-medium bg-primary/5 border-primary/20 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Pronto para Transformar Sua Saúde?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
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
