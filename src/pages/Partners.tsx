import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { partners, partnerCategories, getPartnersByCategory } from "@/data/partners";
import { ArrowRight, Handshake, Users, Cog } from "lucide-react";
import { toast } from "sonner";

const categoryIcons = {
  "Academic & Institutional": Users,
  "Enterprise & Workforce": Handshake,
  "Technology Ecosystem": Cog,
};

const Partners = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    partnershipInterest: "",
    notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Thank you for your interest!", {
      description: "Our partnerships team will review your inquiry and get back to you soon.",
    });
    
    setFormData({
      name: "",
      organization: "",
      email: "",
      partnershipInterest: "",
      notes: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-16 lg:py-20">
        <div className="container-content">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl font-bold text-foreground">
              Our Partners
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Aliko Academy – STEM collaborates with academic institutions, enterprises, 
              and technology ecosystems to deliver industry-aligned engineering training.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="section-padding">
        <div className="container-content space-y-12">
          {partnerCategories.map((category) => {
            const Icon = categoryIcons[category];
            const categoryPartners = getPartnersByCategory(category);

            return (
              <div key={category}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    {category}
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categoryPartners.map((partner) => (
                    <Card key={partner.id} className="border-divider">
                      <CardContent className="p-5">
                        <h3 className="font-semibold text-foreground">
                          {partner.name}
                        </h3>
                        {partner.description && (
                          <p className="mt-2 text-sm text-muted-foreground">
                            {partner.description}
                          </p>
                        )}
                        {partner.website && (
                          <a
                            href={partner.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex items-center text-sm text-primary hover:underline"
                          >
                            Visit Website
                            <ArrowRight className="ml-1 h-3.5 w-3.5" />
                          </a>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-secondary/50 border-y border-divider">
        <div className="container-content">
          <p className="text-sm text-muted-foreground text-center max-w-3xl mx-auto">
            The technology ecosystems listed represent platforms and tools covered in our curriculum. 
            Aliko Academy – STEM provides industry-aligned training based on official vendor documentation 
            and best practices. Certification exams are administered by the respective vendors.
          </p>
        </div>
      </section>

      {/* Partner Inquiry Form */}
      <section className="section-padding">
        <div className="container-content">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl font-bold text-foreground">
                Become a Partner
              </h2>
              <p className="mt-4 text-muted-foreground">
                Interested in partnering with Aliko Academy – STEM? 
                Share your details and our partnerships team will reach out.
              </p>
            </div>

            <Card className="border-divider">
              <CardContent className="p-6 lg:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization *</Label>
                      <Input
                        id="organization"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData(prev => ({ ...prev, organization: e.target.value }))}
                        placeholder="Organization name"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="email@organization.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="partnershipInterest">Partnership Interest</Label>
                      <Select
                        value={formData.partnershipInterest}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, partnershipInterest: value }))}
                      >
                        <SelectTrigger id="partnershipInterest" className="bg-background">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-divider">
                          <SelectItem value="academic">Academic Partnership</SelectItem>
                          <SelectItem value="enterprise">Enterprise Partnership</SelectItem>
                          <SelectItem value="technology">Technology Partnership</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Tell us more about your partnership interest</Label>
                    <Textarea
                      id="notes"
                      rows={4}
                      value={formData.notes}
                      onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                      placeholder="Describe how you'd like to partner with us..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    variant="hero"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;