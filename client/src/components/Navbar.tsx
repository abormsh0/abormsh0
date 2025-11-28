import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu, X, LogOut, User as UserIcon } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const [, setLocation] = useLocation();

  const links = [
    { href: "#education", label: "التعليم" },
    { href: "#work", label: "العمل" },
    { href: "#entertainment", label: "الترفيه" },
    { href: "#about", label: "عن المنصة" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-display font-bold tracking-widest text-white hover:text-primary transition-colors">
            IMMERSIVE
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-primary hover:text-glow transition-all uppercase tracking-wide"
            >
              {link.label}
            </a>
          ))}
          
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8 border border-white/10">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuItem className="flex items-center justify-between">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => logout()} className="text-red-500 focus:text-red-500 cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>تسجيل الخروج</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button 
              onClick={() => setLocation("/auth")}
              className="px-6 py-2 bg-primary/10 border border-primary/50 text-primary font-display text-xs uppercase tracking-widest hover:bg-primary hover:text-black transition-all duration-300"
            >
              تسجيل الدخول
            </Button>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-black/95 border-b border-white/10 p-6 flex flex-col gap-4"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-300 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          
          {user ? (
            <div className="border-t border-white/10 pt-4 mt-2">
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="h-10 w-10 border border-white/10">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-white font-medium">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>
              <Button 
                variant="destructive" 
                className="w-full" 
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
              >
                تسجيل الخروج
              </Button>
            </div>
          ) : (
            <Button 
              onClick={() => {
                setLocation("/auth");
                setIsOpen(false);
              }}
              className="w-full py-3 bg-primary text-black font-bold font-display uppercase tracking-widest"
            >
              تسجيل الدخول
            </Button>
          )}
        </motion.div>
      )}
    </nav>
  );
}
