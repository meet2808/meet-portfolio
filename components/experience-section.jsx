import { experience } from "@/lib/data";
import { FadeIn } from "./fade-in";
import Image from 'next/image';

export default function ExperienceSection() {
    return (
        <section id="experience" className="w-full py-9 md:py-9 bg-background">
            <div className="container mx-auto max-w-5xl px-4 md:px-6">
                <FadeIn>
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Work Experience</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                            My professional journey as a developer.
                        </p>
                    </div>
                    <div className="space-y-8">
                        {experience.map((job, index) => (
                            <FadeIn key={index} delay={index * 150}>
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0">
                                        <Image
                                            src={job.logoUrl}
                                            alt={`${job.company} logo`}
                                            width={56}
                                            height={56}
                                            className="rounded-full object-contain h-14 w-14 border"
                                        />
                                    </div>
                                    <div className="flex-grow flex flex-col sm:flex-row justify-between items-start sm:items-center">
                                        <div>
                                            <h3 className="text-lg font-semibold">{job.company}</h3>
                                            <p className="text-muted-foreground">{job.title}</p>
                                        </div>
                                        <p className="text-sm text-muted-foreground mt-2 sm:mt-0">{job.date}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
