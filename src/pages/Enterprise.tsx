import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Building2, 
  Factory, 
  GraduationCap, 
  Landmark, 
  Globe, 
  CheckCircle2,
  ArrowRight,
  Users,
  BookOpen,
  Settings,
  MonitorPlay
} from "lucide-react";
import { toast } from "sonner";

const whoWeServe = [
  { icon: Factory, title: "Engineering & Construction Firms", description: "EPC contractors and engineering consultancies" },
  { icon: Building2, title: "Infrastructure & Utilities", description: "Power, water, and transportation authorities" },
  { icon: GraduationCap, title: "Universities & TVETs", description: "Engineering faculties and technical institutes" },
  { icon: Landmark, title: "Government Agencies", description: "Infrastructure and development ministries" },
  { icon: Globe, title: "NGOs & Development Partners", description: "International development organizations" },
];

const trainingModels = [
  { icon: BookOpen, title: "Custom Curriculum Design", description: "Tailored content aligned to your technology stack and workflows" },
  { icon: Users, title: "Cohort-Based Training", description: "Structured programs for groups of 10-100+ participants" },
  { icon: GraduationCap, title: "Faculty & Trainer Enablement", description: "Train-the-trainer programs for internal capacity building" },
  { icon: Settings, title: "Software Transformation Support", description: "Implementation support during technology transitions" },
  { icon: MonitorPlay, title: "Flexible Delivery", description: "Online, hybrid, or fully onsite options" },
];

const programAreas = [
  "Civil & Structural Engineering Systems",
  "BIM & Digital Construction",
  "Mechanical CAD / CAE / FEA",
  "Electrical & Power Systems",
  "Project Controls & Planning",
];

const organizationTypes = [
  "Engineering/Construction Firm",
  "Infrastructure/Utilities",
  "University/Academic Institution",
  "Government Agency",
  "NGO/Development Partner",
  "Other",
];

const Enterprise = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    organizationName: "",
    contactName: "",
    email: "",
    phone: "",
    organizationType: "",
    trainingAreas: [] as string[],
    participantCount: "",
    deliveryPreference: "",
    location: "",
    timeframe: "",
    notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Thank you for your inquiry!", {
      description: "Our enterprise training team will contact you within 2 business days.",
    });
    
    setFormData({
      organizationName: "",
      contactName: "",
      email: "",
      phone: "",
      organizationType: "",
      trainingAreas: [],
      participantCount: "",
      deliveryPreference: "",
      location: "",
      timeframe: "",
      notes: "",
    });
    setIsSubmitting(false);
  };

  const toggleTrainingArea = (area: string) => {
    setFormData(prev => ({
      ...prev,
      trainingAreas: prev.trainingAreas.includes(area)
        ? prev.trainingAreas.filter(a => a !== area)
        : [...prev.trainingAreas, area]
    }));
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-16 lg:py-20">
        <div className="container-content">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
              Customized Engineering & STEM Training for Organizations
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Cohort-based upskilling, curriculum customization, and faculty enablement 
              aligned to industry tools and infrastructure workflows. We partner with 
              organizations of all sizes to develop engineering talent.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section-padding bg-card">
        <div className="container-content">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            Who We Serve
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {whoWeServe.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="border-divider text-center">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mt-4 font-display font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Training Models */}
      <section className="section-padding">
        <div className="container-content">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-4">
            Training Models
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Flexible training solutions designed to meet your organization's unique requirements
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingModels.map((model) => {
              const Icon = model.icon;
              return (
                <Card key={model.title} className="border-divider">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground">
                        {model.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {model.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program Areas */}
      <section className="section-padding bg-card">
        <div className="container-content">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            Program Areas
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {programAreas.map((area) => (
              <div
                key={area}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-background border border-divider"
              >
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="font-medium text-foreground">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="section-padding" id="request-form">
        <div className="container-content">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl font-bold text-foreground">
                Request a Training Proposal
              </h2>
              <p className="mt-4 text-muted-foreground">
                Tell us about your training needs and our team will prepare a customized proposal.
              </p>
            </div>

            <Card className="border-divider">
              <CardContent className="p-6 lg:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Organization Info */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="organizationName">Organization Name *</Label>
                      <Input
                        id="organizationName"
                        required
                        value={formData.organizationName}
                        onChange={(e) => setFormData(prev => ({ ...prev, organizationName: e.target.value }))}
                        placeholder="Your organization"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organizationType">Organization Type *</Label>
                      <Select
                        value={formData.organizationType}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, organizationType: value }))}
                      >
                        <SelectTrigger id="organizationType" className="bg-background">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-divider">
                          {organizationTypes.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contactName">Contact Person *</Label>
                      <Input
                        id="contactName"
                        required
                        value={formData.contactName}
                        onChange={(e) => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
                        placeholder="Full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="email@organization.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Country / City *</Label>
                      <Input
                        id="location"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                        placeholder="e.g., Dubai, UAE"
                      />
                    </div>
                  </div>

                  {/* Training Areas */}
                  <div className="space-y-3">
                    <Label>Training Areas of Interest *</Label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {programAreas.map((area) => (
                        <div key={area} className="flex items-center space-x-2">
                          <Checkbox
                            id={area}
                            checked={formData.trainingAreas.includes(area)}
                            onCheckedChange={() => toggleTrainingArea(area)}
                          />
                          <label
                            htmlFor={area}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                          >
                            {area}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Training Details */}
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="participantCount">Number of Participants</Label>
                      <Input
                        id="participantCount"
                        type="number"
                        min="1"
                        value={formData.participantCount}
                        onChange={(e) => setFormData(prev => ({ ...prev, participantCount: e.target.value }))}
                        placeholder="e.g., 25"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="deliveryPreference">Delivery Preference</Label>
                      <Select
                        value={formData.deliveryPreference}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, deliveryPreference: value }))}
                      >
                        <SelectTrigger id="deliveryPreference" className="bg-background">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-divider">
                          <SelectItem value="Online">Online</SelectItem>
                          <SelectItem value="Hybrid">Hybrid</SelectItem>
                          <SelectItem value="Onsite">Onsite</SelectItem>
                          <SelectItem value="Flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeframe">Preferred Timeframe</Label>
                      <Input
                        id="timeframe"
                        value={formData.timeframe}
                        onChange={(e) => setFormData(prev => ({ ...prev, timeframe: e.target.value }))}
                        placeholder="e.g., Q2 2024"
                      />
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Requirements or Notes</Label>
                    <Textarea
                      id="notes"
                      rows={4}
                      value={formData.notes}
                      onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                      placeholder="Tell us more about your training needs, specific software requirements, or any other details..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    variant="hero"
                    className="w-full sm:w-auto"
                    disabled={isSubmitting || formData.trainingAreas.length === 0}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Training Request"}
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

export default Enterprise;