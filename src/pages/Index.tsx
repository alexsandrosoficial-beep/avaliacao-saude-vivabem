import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Heart, Sparkles, TrendingUp, Shield, Star, Quote, BookOpen, CheckCircle2, Users, Award } from "lucide-react";
import { playClickSound } from "@/utils/sounds";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen wellness-background">
      <div className="content-wrapper">
        {/* Hero Section */}
        <section className="py-24 px-4 text-center relative">
          <div className="max-w-4xl mx-auto animate-fade-in">
            {/* Trust Badges */}
            <div className="flex justify-center gap-6 mb-8 flex-wrap">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-card">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">100% Gratuito</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-card">
                <Users className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-foreground">+10.000 Usuários</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-card">
                <Award className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">Avaliado 4.9★</span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 bg-gradient-primary text-white px-5 py-2.5 rounded-full mb-8 shadow-medium">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-semibold tracking-wide">Plataforma de Bem-Estar Inteligente</span>
            </div>
          
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-extrabold text-foreground mb-6 tracking-tight leading-tight">
              Viva Bem
            </h1>
          
            <p className="text-2xl md:text-3xl text-primary font-semibold mb-6 max-w-2xl mx-auto">
              Seu corpo, sua saúde em equilíbrio
            </p>
          
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Descubra seu índice de bem-estar através de uma avaliação personalizada e receba 
              recomendações específicas para melhorar sua qualidade de vida
            </p>
          
            <Button
              size="lg"
              onClick={() => {
                playClickSound();
                navigate("/quiz");
              }}
              className="shadow-elevated text-lg px-10 py-7 h-auto bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              Começar Avaliação de Saúde
              <Heart className="w-6 h-6 ml-2" />
            </Button>
            
            <p className="text-sm text-muted-foreground mt-4">
              ⏱️ Leva apenas 3 minutos • 📊 Resultados instantâneos
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 tracking-tight">
                Como Funciona
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Três passos simples para transformar sua saúde
              </p>
            </div>
          
            <div className="grid md:grid-cols-3 gap-8">
              <Card 
                className="p-10 text-center shadow-card hover:shadow-elevated transition-all duration-300 animate-fade-in bg-white border-2 border-primary/10 hover:border-primary/30 cursor-pointer group relative overflow-hidden"
                onClick={() => navigate("/quiz")}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-primary mb-6 shadow-medium group-hover:shadow-glow transition-all">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <div className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-3">
                    PASSO 1
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">Avaliação Personalizada</h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    Responda perguntas sobre seus hábitos diários em poucos minutos
                  </p>
                </div>
              </Card>

              <Card className="p-10 text-center shadow-card hover:shadow-elevated transition-all duration-300 animate-fade-in bg-white border-2 border-secondary/10 hover:border-secondary/30 group relative overflow-hidden" style={{ animationDelay: "0.1s" }}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary to-secondary/50 opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-secondary mb-6 shadow-medium group-hover:shadow-glow transition-all">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <div className="inline-block bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full mb-3">
                    PASSO 2
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">Análise Inteligente</h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    Receba um relatório completo sobre sua saúde e bem-estar
                  </p>
                </div>
              </Card>

              <Card 
                className="p-10 text-center shadow-card hover:shadow-elevated transition-all duration-300 animate-fade-in bg-white border-2 border-accent/10 hover:border-accent/30 cursor-pointer group relative overflow-hidden" 
                style={{ animationDelay: "0.2s" }}
                onClick={() => navigate("/blog")}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-accent opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-accent mb-6 shadow-medium group-hover:shadow-glow transition-all">
                    <BookOpen className="w-10 h-10 text-white" />
                  </div>
                  <div className="inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full mb-3">
                    PASSO 3
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">Artigos e Dicas</h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    Conteúdo educativo sobre saúde e bem-estar
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-background via-muted/30 to-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 tracking-tight">
                O Que Dizem Nossos Usuários
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Milhares de pessoas já transformaram suas vidas com nossa plataforma
              </p>
            </div>
          
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 shadow-card hover:shadow-elevated transition-all duration-300 animate-fade-in bg-white border-2 border-border/50 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-primary opacity-5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
                <div className="relative">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed text-base">
                    "Incrível! Em apenas 2 meses seguindo as recomendações, minha qualidade de sono melhorou 80%. Nunca me senti tão bem!"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-medium">
                      <span className="font-display font-bold text-white text-lg">MR</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-base">Maria Rodrigues</p>
                      <p className="text-sm text-muted-foreground">Designer, 32 anos</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 shadow-card hover:shadow-elevated transition-all duration-300 animate-fade-in bg-white border-2 border-border/50 relative overflow-hidden group" style={{ animationDelay: "0.1s" }}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary opacity-5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
                <Quote className="absolute top-6 right-6 w-10 h-10 text-secondary/10" />
                <div className="relative">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed text-base">
                    "A avaliação foi super precisa! Identifiquei pontos que precisava melhorar e recebi dicas práticas. Muito recomendado!"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shadow-medium">
                      <span className="font-display font-bold text-white text-lg">JS</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-base">João Silva</p>
                      <p className="text-sm text-muted-foreground">Engenheiro, 28 anos</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 shadow-card hover:shadow-elevated transition-all duration-300 animate-fade-in bg-white border-2 border-border/50 relative overflow-hidden group" style={{ animationDelay: "0.2s" }}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-accent opacity-5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
                <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/10" />
                <div className="relative">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed text-base">
                    "Finalmente encontrei uma plataforma que entende minhas necessidades. As dicas personalizadas fizeram toda diferença!"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center shadow-medium">
                      <span className="font-display font-bold text-white text-lg">AC</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-base">Ana Costa</p>
                      <p className="text-sm text-muted-foreground">Professora, 45 anos</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 md:p-16 text-center shadow-elevated bg-gradient-primary relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6 shadow-glow">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">
                  Pronto para Transformar Sua Saúde?
                </h2>
                <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Comece agora sua jornada para uma vida mais saudável e equilibrada
                </p>
                <Button
                  size="lg"
                  onClick={() => {
                    playClickSound();
                    navigate("/quiz");
                  }}
                  className="bg-white text-primary hover:bg-white/90 shadow-elevated hover:shadow-glow transition-all duration-300 transform hover:scale-105 text-lg px-10 py-7 h-auto font-semibold"
                >
                  Iniciar Avaliação Gratuita
                  <Sparkles className="w-6 h-6 ml-2" />
                </Button>
                <p className="text-white/80 text-sm mt-4">
                  ✨ Sem cadastro necessário • 🔒 100% seguro e confidencial
                </p>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
