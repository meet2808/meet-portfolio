import { FadeIn } from "./fade-in";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
    return (
        <section id="home" className="w-full h-[calc(100vh-15rem)] flex items-center justify-center bg-background relative">
            <div className="container px-4 md:px-6">
                <FadeIn>
                    <div className="flex flex-col items-center space-y-6 text-center">
                        <div className="space-y-2">
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl font-headline">
                                Meet Panchal
                            </h1>
                            <p className="max-w-[700px] text-muted-foreground md:text-xl">
                                Full-Stack Developer
                            </p>
                        </div>
                        <p className="max-w-[700px] text-muted-foreground md:text-lg">
                           I build beautiful, functional, and user-friendly web applications. Welcome to my personal portfolio.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <Button asChild size="lg">
                                <Link 
                                    href="#projects" 
                                    className="bg-black text-white "
                                >View My Work</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <Link 
                                    href="#contact"
                                >Get in Touch</Link>
                            </Button>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
