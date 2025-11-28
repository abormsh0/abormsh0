import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeatureCard } from "@/components/FeatureCard";

// Assets
import eduImg from "@assets/generated_images/holographic_education_interface.png";
import workImg from "@assets/generated_images/virtual_workspace_interface.png";
import entImg from "@assets/generated_images/immersive_entertainment_vr_scene.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      
      <main>
        <Hero />

        {/* Mission Statement */}
        <section id="about" className="py-24 relative border-y border-white/5 bg-black/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
              عالم واحد. <span className="text-white/50">بلا حواجز.</span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
              نحن نبني عالماً رقمياً موازياً يجمع البشرية في 
              <span className="text-primary font-medium"> مساحة معرفية واحدة</span>. 
              نكسر كل الحواجز الجغرافية والاقتصادية والاجتماعية لخلق وجود موحد حقيقي.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-32 container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">القطاعات الأساسية</h2>
            <div className="h-1 w-24 bg-primary" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div id="education">
              <FeatureCard
                title="التعليم"
                description="وصول إلى تعليم عالمي المستوى من أي مكان. فصول دراسية هولوغرافية ومحاكاة تفاعلية تجعل المعرفة متاحة للجميع."
                image={eduImg}
                color="primary"
                delay={0}
              />
            </div>
            <div id="work">
              <FeatureCard
                title="العمل"
                description="تعاون في مساحات عمل ثلاثية الأبعاد لا نهائية. لا تنقلات، لا حدود مادية. فقط إنتاجية خالصة وتواصل عالمي."
                image={workImg}
                color="secondary"
                delay={0.2}
              />
            </div>
            <div id="entertainment">
              <FeatureCard
                title="الترفيه"
                description="اختبر الحفلات والألعاب والفعاليات الاجتماعية كما لم يحدث من قبل. انغماس حسي كامل في ملعب رقمي بلا حدود."
                image={entImg}
                color="accent"
                delay={0.4}
              />
            </div>
          </div>
        </section>

        {/* Stats / Trust */}
        <section className="py-24 border-t border-white/10 bg-gradient-to-b from-background to-black">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {[
                { label: "مستخدم نشط", value: "+2.4M" },
                { label: "مساحة افتراضية", value: "+850K" },
                { label: "دولة", value: "+190" },
                { label: "وقت التشغيل", value: "99.9%" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm font-mono text-gray-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5" />
          <div className="absolute inset-0" style={{
             backgroundImage: "radial-gradient(circle at 50% 50%, hsl(var(--primary)/0.1) 0%, transparent 50%)"
          }} />
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-7xl font-display font-black mb-8 uppercase">
              مستعد <span className="text-outline text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">للغوص؟</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              انضم إلى قائمة الانتظار للحصول على وصول مبكر إلى إصدار ألفا من إيمرسيف. أمّن هويتك الرقمية اليوم.
            </p>
            
            <form className="max-w-md mx-auto flex gap-2">
              <input 
                type="email" 
                placeholder="أدخل بريدك الإلكتروني" 
                className="flex-1 bg-black/50 border border-white/20 px-6 py-4 text-white focus:border-primary focus:outline-none font-mono rounded-none text-right"
              />
              <button className="bg-primary text-black font-bold font-display px-8 py-4 uppercase tracking-widest hover:bg-primary/90 transition-colors">
                انضم
              </button>
            </form>
          </div>
        </section>

        <footer className="py-12 border-t border-white/10 bg-black text-gray-500 text-sm">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-display text-white tracking-widest">إيمرسيف © 2025</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-primary transition-colors">الخصوصية</a>
              <a href="#" className="hover:text-primary transition-colors">الشروط</a>
              <a href="#" className="hover:text-primary transition-colors">اتصل بنا</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
