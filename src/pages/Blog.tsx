import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Search,
  Calendar,
  Clock,
  Heart,
  Apple,
  Dumbbell,
  Moon,
  Brain,
  Droplets,
  Smile,
  Activity,
} from "lucide-react";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  icon: any;
  image: string;
}

const articles: Article[] = [
  {
    id: "1",
    title: "10 Alimentos que Aumentam sua Energia Naturalmente",
    excerpt: "Descubra os melhores alimentos para manter seus níveis de energia elevados ao longo do dia sem recorrer a cafeína ou açúcar.",
    category: "Nutrição",
    date: "2024-03-15",
    readTime: "5 min",
    icon: Apple,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
  },
  {
    id: "2",
    title: "Guia Completo de Exercícios para Iniciantes",
    excerpt: "Aprenda os fundamentos da atividade física e como criar uma rotina sustentável que se encaixe no seu dia a dia.",
    category: "Exercício",
    date: "2024-03-14",
    readTime: "8 min",
    icon: Dumbbell,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
  },
  {
    id: "3",
    title: "A Ciência do Sono: Como Dormir Melhor",
    excerpt: "Entenda os ciclos do sono e descubra técnicas comprovadas para melhorar a qualidade do seu descanso noturno.",
    category: "Sono",
    date: "2024-03-13",
    readTime: "6 min",
    icon: Moon,
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&q=80",
  },
  {
    id: "4",
    title: "Mindfulness: Reduzindo o Estresse no Dia a Dia",
    excerpt: "Práticas simples de atenção plena que você pode incorporar na sua rotina para reduzir ansiedade e melhorar o foco.",
    category: "Saúde Mental",
    date: "2024-03-12",
    readTime: "7 min",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
  },
  {
    id: "5",
    title: "Hidratação: Mais Importante do que Você Pensa",
    excerpt: "Entenda o papel vital da água no seu corpo e aprenda dicas práticas para manter-se bem hidratado durante todo o dia.",
    category: "Hidratação",
    date: "2024-03-11",
    readTime: "4 min",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&q=80",
  },
  {
    id: "6",
    title: "Como Criar Hábitos Saudáveis que Permanecem",
    excerpt: "Estratégias psicológicas para formar novos hábitos e torná-los parte permanente do seu estilo de vida.",
    category: "Bem-Estar",
    date: "2024-03-10",
    readTime: "6 min",
    icon: Smile,
    image: "https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=800&q=80",
  },
  {
    id: "7",
    title: "Alongamento: A Chave para Prevenir Lesões",
    excerpt: "Descubra a importância do alongamento antes e depois dos exercícios e aprenda técnicas corretas para cada grupo muscular.",
    category: "Exercício",
    date: "2024-03-09",
    readTime: "5 min",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
  },
  {
    id: "8",
    title: "Alimentação Consciente: Reconecte-se com a Comida",
    excerpt: "Aprenda a comer com atenção plena, saboreando cada refeição e desenvolvendo uma relação mais saudável com a comida.",
    category: "Nutrição",
    date: "2024-03-08",
    readTime: "6 min",
    icon: Apple,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
  },
  {
    id: "9",
    title: "Gerenciando Ansiedade: Técnicas Práticas",
    excerpt: "Métodos comprovados para lidar com a ansiedade no dia a dia, incluindo respiração, meditação e reorganização de pensamentos.",
    category: "Saúde Mental",
    date: "2024-03-07",
    readTime: "7 min",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80",
  },
  {
    id: "10",
    title: "Rotina Matinal para um Dia Produtivo",
    excerpt: "Como começar o dia da maneira certa com uma rotina matinal que energiza corpo e mente para máxima produtividade.",
    category: "Bem-Estar",
    date: "2024-03-06",
    readTime: "5 min",
    icon: Smile,
    image: "https://images.unsplash.com/photo-1495214783159-3503fd1b572d?w=800&q=80",
  },
  {
    id: "11",
    title: "Proteínas Vegetais: Alternativas Saudáveis",
    excerpt: "Conheça as melhores fontes de proteína vegetal e como incorporá-las na sua dieta de forma equilibrada e saborosa.",
    category: "Nutrição",
    date: "2024-03-05",
    readTime: "6 min",
    icon: Apple,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
  },
  {
    id: "12",
    title: "Yoga para Iniciantes: Primeiros Passos",
    excerpt: "Guia completo para começar a praticar yoga, incluindo posturas básicas, benefícios e como criar uma prática regular.",
    category: "Exercício",
    date: "2024-03-04",
    readTime: "8 min",
    icon: Dumbbell,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
  },
];

const categories = ["Todas", "Nutrição", "Exercício", "Sono", "Saúde Mental", "Hidratação", "Bem-Estar"];

const Blog = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === "Todas" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen wellness-background py-12 px-4">
      <div className="content-wrapper max-w-7xl mx-auto">
        <Button
          variant="outline"
          onClick={() => navigate("/")}
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar ao Início
        </Button>

        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Heart className="w-4 h-4" />
            <span className="text-sm font-medium">Blog de Saúde e Bem-Estar</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 tracking-tight">
            Artigos sobre Saúde
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dicas, guias e informações para você viver melhor
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar artigos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <Card className="p-12 text-center shadow-card">
            <p className="text-lg text-muted-foreground">
              Nenhum artigo encontrado. Tente outra busca ou categoria.
            </p>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => {
              const IconComponent = article.icon;
              return (
                <Card
                  key={article.id}
                  className="overflow-hidden shadow-card hover:shadow-medium transition-all duration-300 cursor-pointer group animate-fade-in bg-gradient-card border-border/50"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => {
                    // Aqui você pode adicionar navegação para página individual do artigo
                    console.log("Article clicked:", article.id);
                  }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-background/90 text-foreground backdrop-blur-sm">
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(article.date).toLocaleDateString("pt-BR", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-primary font-medium">
                      <span>Ler mais</span>
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}

        {/* Newsletter CTA */}
        <Card className="mt-16 p-8 md:p-12 text-center shadow-medium bg-primary/5 border-primary/20 backdrop-blur-sm animate-fade-in">
          <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
            Receba Novos Artigos no seu Email
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Inscreva-se para receber as últimas dicas e novidades sobre saúde e bem-estar
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Seu melhor email"
              className="flex-1"
            />
            <Button className="shadow-medium">
              Inscrever-se
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Blog;
