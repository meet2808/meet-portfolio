import { skills } from "@/lib/data";
import { FadeIn } from "./fade-in";
import { Badge } from "./ui/badge";

export default function SkillsSection() {
    return (
        <section id="skills" className="w-full py-12 md:py-16 bg-background">
            <div className="container mx-auto max-w-5xl px-4 md:px-6">
                <FadeIn>
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">My Skills</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                            Here's a snapshot of the technologies and tools I work with.
                        </p>
                    </div>
                    <div className="flex justify-center flex-wrap gap-4">
                        {skills.map((skill, index) => (
                            <FadeIn key={skill} delay={index * 100}>
                                <Badge variant="outline" className="text-lg px-4 py-2">{skill}</Badge>
                            </FadeIn>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
