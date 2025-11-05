import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Heart,
  ArrowLeft,
  CheckCircle,
  TrendingUp,
  Instagram,
  MessageCircle,
  Droplets,
  Moon,
  Dumbbell,
  Brain,
  Apple,
  Monitor,
  Smile,
  Sparkles,
} from "lucide-react";

const Tips = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { percentage = 0, answers = {} } = location.state || {};

  useEffect(() => {
    if (!location.state) {
      navigate("/");
    }
  }, [location.state, navigate]);

  const getDetailedTips = () => {
    const tips = [];

    // Hidratação
    if (answers.water === "low" || answers.water === "medium") {
      tips.push({
        icon: Droplets,
        category: "Hidratação",
        title: "Aumente sua ingestão de água",
        description: "Beba pelo menos 2 litros de água por dia. Comece o dia com um copo de água e tenha sempre uma garrafa por perto.",
        status: "improve",
      });
    } else if (answers.water === "good" || answers.water === "excellent") {
      tips.push({
        icon: Droplets,
        category: "Hidratação",
        title: "Excelente hidratação!",
        description: "Continue mantendo esse hábito. Seu corpo agradece por manter os níveis adequados de água.",
        status: "good",
      });
    }

    // Sono
    if (answers.sleep === "low" || answers.sleep === "medium") {
      tips.push({
        icon: Moon,
        category: "Sono",
        title: "Melhore a qualidade do seu sono",
        description: "Estabeleça uma rotina de sono regular, evite telas 1 hora antes de dormir e mantenha o quarto escuro e fresco.",
        status: "improve",
      });
    } else if (answers.sleep === "good" || answers.sleep === "excellent") {
      tips.push({
        icon: Moon,
        category: "Sono",
        title: "Sono em dia!",
        description: "Você está dormindo o suficiente. Continue priorizando suas horas de descanso.",
        status: "good",
      });
    }

    // Exercício
    if (answers.exercise === "low" || answers.exercise === "medium") {
      tips.push({
        icon: Dumbbell,
        category: "Exercício",
        title: "Adicione mais movimento ao seu dia",
        description: "Comece com 30 minutos de caminhada diária. Pequenas mudanças fazem grande diferença na sua saúde.",
        status: "improve",
      });
    } else if (answers.exercise === "good" || answers.exercise === "excellent") {
      tips.push({
        icon: Dumbbell,
        category: "Exercício",
        title: "Parabéns pela atividade física!",
        description: "Você está ativo e cuidando do seu corpo. Continue com essa rotina incrível!",
        status: "good",
      });
    }

    // Estresse
    if (answers.stress === "high" || answers.stress === "medium-high") {
      tips.push({
        icon: Brain,
        category: "Estresse",
        title: "Gerencie seu estresse",
        description: "Experimente técnicas de respiração, meditação ou yoga. Reserve 10 minutos diários para relaxar.",
        status: "improve",
      });
    } else if (answers.stress === "low" || answers.stress === "medium") {
      tips.push({
        icon: Brain,
        category: "Estresse",
        title: "Estresse sob controle!",
        description: "Você está gerenciando bem o estresse. Continue com suas técnicas de relaxamento.",
        status: "good",
      });
    }

    // Alimentação
    if (answers.nutrition === "poor" || answers.nutrition === "fair") {
      tips.push({
        icon: Apple,
        category: "Alimentação",
        title: "Melhore sua nutrição",
        description: "Inclua mais frutas, vegetais e proteínas magras. Planeje suas refeições com antecedência.",
        status: "improve",
      });
    } else if (answers.nutrition === "good" || answers.nutrition === "excellent") {
      tips.push({
        icon: Apple,
        category: "Alimentação",
        title: "Alimentação equilibrada!",
        description: "Você está nutrindo bem seu corpo. Mantenha essa dieta balanceada e saudável.",
        status: "good",
      });
    }

    // Telas
    if (answers.screen === "high" || answers.screen === "medium-high") {
      tips.push({
        icon: Monitor,
        category: "Tempo de Tela",
        title: "Reduza o tempo de tela",
        description: "Faça pausas regulares, use filtro de luz azul e estabeleça horários sem dispositivos eletrônicos.",
        status: "improve",
      });
    } else if (answers.screen === "low" || answers.screen === "medium") {
      tips.push({
        icon: Monitor,
        category: "Tempo de Tela",
        title: "Uso equilibrado de telas!",
        description: "Você mantém um bom equilíbrio digital. Continue protegendo seus olhos e mente.",
        status: "good",
      });
    }

    // Humor
    if (answers.mood === "poor" || answers.mood === "fair") {
      tips.push({
        icon: Smile,
        category: "Humor",
        title: "Cuide da sua saúde mental",
        description: "Pratique gratidão diária, conecte-se com pessoas queridas e considere ajuda profissional se necessário.",
        status: "improve",
      });
    } else if (answers.mood === "good" || answers.mood === "excellent") {
      tips.push({
        icon: Smile,
        category: "Humor",
        title: "Estado mental positivo!",
        description: "Seu bem-estar emocional está ótimo. Continue cultivando pensamentos positivos.",
        status: "good",
      });
    }

    // Hábitos
    if (answers.habits === "frequent" || answers.habits === "occasional") {
      tips.push({
        icon: Sparkles,
        category: "Hábitos",
        title: "Reavalie hábitos nocivos",
        description: "Considere reduzir ou eliminar álcool e cigarro. Busque apoio profissional se necessário.",
        status: "improve",
      });
    } else if (answers.habits === "rare" || answers.habits === "never") {
      tips.push({
        icon: Sparkles,
        category: "Hábitos",
        title: "Hábitos saudáveis!",
        description: "Parabéns por manter hábitos saudáveis. Você está cuidando muito bem de si mesmo.",
        status: "good",
      });
    }

    return tips;
  };

  const tips = getDetailedTips();

  return (
    <div className="min-h-screen bg-gradient-hero py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="outline"
          onClick={() => navigate("/results")}
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar aos Resultados
        </Button>

        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Suas Dicas Personalizadas
          </h1>
          <p className="text-lg text-muted-foreground">
            Recomendações específicas baseadas na sua avaliação
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <Card
                key={index}
                className={`p-6 shadow-soft hover:shadow-medium transition-all animate-fade-in ${
                  tip.status === "good"
                    ? "border-primary/30 bg-primary/5"
                    : "border-accent/30 bg-accent/5"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                      tip.status === "good"
                        ? "bg-primary/10"
                        : "bg-accent/10"
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        tip.status === "good" ? "text-primary" : "text-accent"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-foreground">
                        {tip.title}
                      </h3>
                      {tip.status === "good" && (
                        <CheckCircle className="w-5 h-5 text-primary" />
                      )}
                      {tip.status === "improve" && (
                        <TrendingUp className="w-5 h-5 text-accent" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {tip.category}
                    </p>
                    <p className="text-foreground">{tip.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 shadow-medium bg-gradient-card mb-8">
          <div className="text-center mb-8">
            <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Precisa de Mais Orientação?
            </h2>
            <p className="text-lg text-muted-foreground">
              Entre em contato para receber dicas personalizadas e acompanhamento profissional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-background border-2 border-primary/20 hover:border-primary transition-all">
              <Instagram className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Siga no Instagram
              </h3>
              <p className="text-muted-foreground mb-4">
                Dicas diárias de saúde e bem-estar
              </p>
              <Button
                variant="outline"
                className="w-full"
                onClick={() =>
                  window.open("https://instagram.com/rotina.vivabem", "_blank")
                }
              >
                @rotina.vivabem
              </Button>
            </Card>

            <Card className="p-6 bg-background border-2 border-secondary/20 hover:border-secondary transition-all">
              <MessageCircle className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Fale no WhatsApp
              </h3>
              <p className="text-muted-foreground mb-4">
                Tire suas dúvidas e receba orientação personalizada
              </p>
              <Button
                variant="outline"
                className="w-full"
                onClick={() =>
                  window.open("https://wa.me/5535997168761", "_blank")
                }
              >
                (35) 99716-8761
              </Button>
            </Card>

            <Card className="p-6 bg-background border-2 border-accent/20 hover:border-accent transition-all">
              <Heart className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Vitrine de Produtos
              </h3>
              <p className="text-muted-foreground mb-4">
                Conheça produtos selecionados para sua saúde
              </p>
              <Button
                variant="outline"
                className="w-full"
                onClick={() =>
                  window.open("https://stanti.com.br/viva.bem", "_blank")
                }
              >
                Ver Produtos
              </Button>
            </Card>
          </div>
        </Card>

        <div className="text-center">
          <Button size="lg" onClick={() => navigate("/")} className="shadow-medium">
            Fazer Nova Avaliação
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Tips;
