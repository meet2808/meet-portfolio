import { projects } from "@/lib/data";
import { placeholderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";
import { FadeIn } from "./fade-in";

export default function ProjectsSection() {
    const findImage = (id) => placeholderImages.find(p => p.id === id);

    return (
        <section id="projects" className="w-full py-7 md:py-6 bg-background">
            <div className="container mx-auto max-w-5xl px-4 md:px-6">
                <FadeIn>
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Featured Projects</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                            A selection of my work. Each project is a testament to my dedication to quality and user experience.
                        </p>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
                        {projects.map((project, index) => {
                            const projectImage = findImage(project.image);
                            return (
                                <FadeIn key={project.title} delay={index * 150}>
                                    <Card className="overflow-hidden h-full flex flex-col group border-0 shadow-none">
                                        <div className="overflow-hidden rounded-lg">
                                            {projectImage && (
                                                <Image
                                                    src={projectImage.imageUrl}
                                                    alt={project.title}
                                                    data-ai-hint={projectImage.imageHint}
                                                    width={600}
                                                    height={400}
                                                    className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                                                />
                                            )}
                                        </div>
                                        <CardHeader>
                                            <CardTitle>{project.title}</CardTitle>
                                            <CardDescription>{project.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent className="flex-grow">
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map(tag => (
                                                    <Badge key={tag} variant="outline">{tag}</Badge>
                                                ))}
                                            </div>
                                        </CardContent>
                                        <CardFooter className="flex justify-start gap-4">
                                            <Button asChild variant="outline">
                                                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                    <Github className="mr-2 h-4 w-4" />
                                                    GitHub
                                                </Link>
                                            </Button>
                                            <Button asChild>
                                                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="mr-2 h-4 w-4" />
                                                    Live Demo
                                                </Link>
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </FadeIn>
                            );
                        })}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
