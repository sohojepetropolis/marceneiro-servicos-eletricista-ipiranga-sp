import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";

export const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip after component becomes visible
      setTimeout(() => setShowTooltip(true), 500);
      // Hide tooltip after 3 seconds
      setTimeout(() => setShowTooltip(false), 4500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = "Olá! Vim através do site da CMS Express e gostaria de solicitar um orçamento.";
    window.open(`https://wa.me/5511920041659?text=${encodeURIComponent(message)}`, "_blank");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-16 right-0 mb-2 animate-in slide-in-from-bottom-2">
          <div className="bg-white border border-border rounded-lg shadow-elegant p-3 max-w-xs">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-cms-black">
                  Precisa de ajuda?
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Fale conosco no WhatsApp e solicite seu orçamento gratuito!
                </p>
              </div>
              <button 
                onClick={() => setShowTooltip(false)}
                className="ml-2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
            {/* Arrow */}
            <div className="absolute bottom-[-6px] right-4 w-3 h-3 bg-white border-r border-b border-border transform rotate-45"></div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <Button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-elegant hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none"
        size="icon"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </Button>
    </div>
  );
};