import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "./fade-in";
import { Button } from "./ui/button";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-5 bg-background">
      <div className="container mx-auto max-w-[980px] px-6 sm:px-10">
        <FadeIn>
          <div className="flex flex-col items-start text-left space-y-8">
            {/* Heading */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight font-headline mb-4">
                About Me
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-full">
                Motivated Full Stack Developer with practical experience in building responsive and dynamic web applications using React.js, JavaScript, and other modern tools. Worked on live projects that provided exposure to real-world software development practices. Interested in expanding backend knowledge with Java technologies to grow into a well-rounded full stack developer. Passionate about learning new technologies, solving challenges, and writing clean, impactful code.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4 max-w-full">
                My focus is on writing clean, efficient code and delivering real-world solutions
                that have meaningful impact. Outside of development, I enjoy exploring new
                technologies and sipping tea while ideating new
                projects.
              </p>
            </div>

            {/* Social Links */}
            {/* <div className="flex items-center space-x-4 pt-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:hello@example.com" aria-label="Email">
                  <Mail className="h-6 w-6" />
                </Link>
              </Button>

              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="#"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-6 w-6" />
                </Link>
              </Button>

              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="#"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
              </Button>
            </div> */}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
