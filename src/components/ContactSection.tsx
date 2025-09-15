import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    const whatsappMessage = `Olá! Gostaria de solicitar um orçamento:
    
Nome: ${formData.name}
Telefone: ${formData.phone}
Mensagem: ${formData.message}`;

    const whatsappUrl = `https://wa.me/5511920041659?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
    
    toast.success("Redirecionando para o WhatsApp...");
    
    // Reset form
    setFormData({ name: "", phone: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-16 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-cms-black mb-4">
            Entre em <span className="text-cms-red">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Solicite seu orçamento gratuito e sem compromisso. Nossa equipe está 
            pronta para atender suas necessidades com agilidade e profissionalismo.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-cms-red rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-cms-black">Telefone</h4>
                      <p className="text-muted-foreground">(11) 92004-1659</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-cms-red rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-cms-black">E-mail</h4>
                      <p className="text-muted-foreground">contato@cmsexpress.com.br</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-cms-red rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-cms-black">Localização</h4>
                      <p className="text-muted-foreground">Zona Sul - São Paulo/SP</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-cms-red rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-cms-black">Horário</h4>
                      <p className="text-muted-foreground">Segunda a Sábado</p>
                      <p className="text-muted-foreground">08:00 às 18:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-cms-black">
                  Solicite seu Orçamento Gratuito
                </CardTitle>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo e entraremos em contato rapidamente
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Digite seu nome completo"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(11) 99999-9999"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Descreva o serviço desejado *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Conte-nos sobre o serviço que você precisa: encanamento, elétrica ou marcenaria..."
                      rows={5}
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="flex-1"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Enviar via WhatsApp
                    </Button>
                    <Button 
                      type="button" 
                      variant="whatsapp" 
                      size="lg"
                      onClick={() => window.open("https://wa.me/5511920041659", "_blank")}
                    >
                      <Phone className="h-5 w-5" />
                      Falar Direto no WhatsApp
                    </Button>
                  </div>
                </form>

                <div className="mt-8 p-4 bg-cms-gray rounded-lg">
                  <h4 className="font-semibold text-cms-black mb-2">
                    Por que escolher a CMS Express?
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>✓ Orçamento gratuito e sem compromisso</li>
                    <li>✓ Atendimento em até 2 horas na zona sul</li>
                    <li>✓ Profissionais certificados e experientes</li>
                    <li>✓ Garantia em todos os serviços</li>
                    <li>✓ Transparência total nos valores</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};