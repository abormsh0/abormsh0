import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { Link } from "wouter";

export default function Login() {
  const { login, isLoading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black bg-grid-white/[0.05] relative overflow-hidden">
      <div className="absolute inset-0 bg-black/80" />
      
      <div className="relative z-10 w-full max-w-md px-4">
        <div className="mb-8 text-center">
          <Link href="/">
            <a className="text-3xl font-display font-bold tracking-widest text-white hover:text-primary transition-colors inline-block mb-4">
              IMMERSIVE
            </a>
          </Link>
          <h1 className="text-2xl font-bold text-white mb-2">تسجيل الدخول</h1>
          <p className="text-gray-400">أدخل بريدك الإلكتروني للوصول إلى حسابك</p>
        </div>

        <Card className="bg-black/40 border-white/10 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-white">الحساب الشخصي</CardTitle>
            <CardDescription className="text-gray-400">
              سجل دخولك للمتابعة إلى المنصة
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">البريد الإلكتروني</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-black/50 border-white/20 text-white placeholder:text-gray-500"
                  required
                  dir="ltr" // Email usually LTR
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white">كلمة المرور</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-black/50 border-white/20 text-white"
                  required
                  dir="ltr"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary text-black hover:bg-primary/90 font-bold font-display"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    جاري التحميل...
                  </>
                ) : (
                  "تسجيل الدخول"
                )}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <div className="text-sm text-gray-400">
              ليس لديك حساب؟{" "}
              <a href="#" className="text-primary hover:underline">
                انضم إلينا
              </a>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
