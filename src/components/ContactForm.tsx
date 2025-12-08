import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Besked sendt",
      description: "Vi vender tilbage hurtigst muligt.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium">
            Navn *
          </Label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Dit fulde navn"
            className="h-12 bg-background border-border focus:border-foreground"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company" className="text-sm font-medium">
            Virksomhed
          </Label>
          <Input
            id="company"
            name="company"
            placeholder="Din virksomhed"
            className="h-12 bg-background border-border focus:border-foreground"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            E-mail *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="din@email.dk"
            className="h-12 bg-background border-border focus:border-foreground"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-medium">
            Telefon
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+45 00 00 00 00"
            className="h-12 bg-background border-border focus:border-foreground"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium">
          Besked *
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Fortæl kort om din udfordring eller dit projekt..."
          className="min-h-[160px] bg-background border-border focus:border-foreground resize-none"
        />
      </div>

      <Button
        type="submit"
        variant="hero"
        size="lg"
        disabled={isSubmitting}
        className="w-full md:w-auto"
      >
        {isSubmitting ? "Sender..." : "Send besked"}
      </Button>
    </form>
  );
}
