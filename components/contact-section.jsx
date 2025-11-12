import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { FadeIn } from "./fade-in";

export default function ContactSection() {
    return (
        <section id="contact" className="w-full py-12 md:py-10 bg-background">
            <div className="container mx-auto max-w-3xl px-4 md:px-6">
                <FadeIn>
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Get in Touch</h2>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                            Have a question or a project in mind? I'd love to hear from you.
                        </p>
                    </div>
                     <div className="flex items-center justify-center gap-x-8 pt-4">
                        <Button variant="ghost" size="icon" className="h-16 w-16" asChild>
                          <Link href="mailto:hello@example.com" aria-label="Email">
                            <Mail className="h-16 w-16" />
                          </Link>
                        </Button>
                        <Button variant="ghost" size="icon" className="h-16 w-16" asChild>
                          <Link href="#" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                            <Github className="h-8 w-8" />
                          </Link>
                        </Button>
                        <Button variant="ghost" size="icon" className="h-16 w-16" asChild>
                          <Link href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-8 w-8" />
                          </Link>
                        </Button>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
