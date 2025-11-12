import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function SiteFooter() {
  return (
    <footer className="w-full bg-background">
      <p className="text-sm text-muted-foreground text-center py-6">
          © {new Date().getFullYear()} Developed by Meet Panchal. All rights reserved.
        </p>
      {/* <div className="container mx-auto flex flex-col md:flex-row items-center justify-between max-w-5xl px-4 md:px-6 py-6 gap-4">
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:meetpanchal2803@gmail.com" aria-label="Email">
              <Mail className="h-25 w-25" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/meet2808" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/meet-panchal-8a2271226" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div> */}
    </footer>
  );
}
