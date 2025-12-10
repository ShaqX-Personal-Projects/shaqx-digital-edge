import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

// Validation schema
const contactSchema = z.object({
  name: z.string().trim().min(1, "Navn er påkrævet").max(100, "Navn må maks være 100 tegn"),
  company: z.string().trim().max(100, "Virksomhed må maks være 100 tegn").optional(),
  email: z.string().trim().email("Ugyldig e-mailadresse").max(255, "E-mail må maks være 255 tegn"),
  phone: z.string().trim().max(20, "Telefonnummer må maks være 20 tegn").optional(),
  message: z.string().trim().min(1, "Besked er påkrævet").max(2000, "Besked må maks være 2000 tegn"),
});

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      company: formData.get("company") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    // Validate form data
    const result = contactSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as string] = error.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      // Submit to Netlify Forms
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (response.ok) {
        toast({
          title: "Besked sendt",
          description: "Vi vender tilbage hurtigst muligt.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Fejl",
        description: "Der opstod en fejl. Prøv igen senere.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Hidden fields for Netlify */}
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don't fill this out if you're human: <input name="bot-field" />
        </label>
      </p>

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
            className={`h-12 bg-background border-border focus:border-foreground ${errors.name ? 'border-destructive' : ''}`}
          />
          {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="company" className="text-sm font-medium">
            Virksomhed
          </Label>
          <Input
            id="company"
            name="company"
            placeholder="Din virksomhed"
            className={`h-12 bg-background border-border focus:border-foreground ${errors.company ? 'border-destructive' : ''}`}
          />
          {errors.company && <p className="text-sm text-destructive">{errors.company}</p>}
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
            className={`h-12 bg-background border-border focus:border-foreground ${errors.email ? 'border-destructive' : ''}`}
          />
          {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
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
            className={`h-12 bg-background border-border focus:border-foreground ${errors.phone ? 'border-destructive' : ''}`}
          />
          {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
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
          className={`min-h-[160px] bg-background border-border focus:border-foreground resize-none ${errors.message ? 'border-destructive' : ''}`}
        />
        {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
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
