import { Layout } from "@/components/layout/Layout";

const Policies = () => {
  return (
    <Layout>
      <section className="gradient-hero py-16 lg:py-20">
        <div className="container-content">
          <h1 className="font-display text-4xl font-bold text-foreground">Policies</h1>
          <p className="mt-4 text-lg text-muted-foreground">Legal information and disclaimers</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-content max-w-3xl space-y-12">
          <div id="privacy">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Privacy Policy</h2>
            <div className="prose prose-muted">
              <p className="text-muted-foreground">We collect and process personal information to provide our training services. Your data is protected and never shared with third parties for marketing purposes without consent.</p>
            </div>
          </div>

          <div id="terms">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Terms of Use</h2>
            <p className="text-muted-foreground">By using our services, you agree to these terms. Training materials are for personal educational use only and may not be redistributed.</p>
          </div>

          <div id="disclaimer">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Training Disclaimer</h2>
            <p className="text-muted-foreground">Aliko Academy – STEM provides industry-aligned training based on globally recognized vendor ecosystems. We do not guarantee employment outcomes or salary levels.</p>
          </div>

          <div id="certification">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Certification Disclaimer</h2>
            <p className="text-muted-foreground">Certification exams and credentials are administered by third-party vendors. Aliko Academy – STEM provides training and preparation only and does not guarantee exam outcomes or issue vendor certifications.</p>
          </div>

          <div id="refund">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Refund Policy</h2>
            <p className="text-muted-foreground">Refund requests are handled on a case-by-case basis. Please contact us within 7 days of enrollment for refund inquiries.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Policies;