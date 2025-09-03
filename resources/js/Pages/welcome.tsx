import { PageProps } from '@/types';
import {Link} from "@heroui/link";
import DefaultLayout from "@/layouts/default";
import {subtitle, title} from "@/components/primitives";
import { button as buttonStyles } from "@heroui/theme";
import {siteConfig} from "@/config/site";
import {GithubIcon} from "@/components/icons";
import {Code, Snippet} from "@heroui/react";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('hidden!');
        document.getElementById('docs-card')?.classList.add('row-span-1!');
        document
            .getElementById('docs-card-content')
            ?.classList.add('flex-row!');
        document.getElementById('background')?.classList.add('hidden!');
    };

    return (
        <DefaultLayout>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <div className="inline-block max-w-lg text-center justify-center">
                    <span className={title()}>Make&nbsp;</span>
                    <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
                    <br />
                    <span className={title()}>
            websites regardless of your design experience.
          </span>
                    <div className={subtitle({ class: "mt-4" })}>
                        Beautiful, fast and modern React UI library.
                    </div>
                </div>

                <div className="flex gap-3">
                    <Link
                        isExternal
                        className={buttonStyles({
                            color: "primary",
                            radius: "full",
                            variant: "shadow",
                        })}
                        href={siteConfig.links.docs}
                    >
                        Documentation
                    </Link>
                    <Link
                        isExternal
                        className={buttonStyles({ variant: "bordered", radius: "full" })}
                        href={siteConfig.links.github}
                    >
                        <GithubIcon size={20} />
                        GitHub
                    </Link>
                </div>

                <div className="mt-8">
                    <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing{" "}
                <Code color="primary">pages/index.tsx</Code>
            </span>
                    </Snippet>
                </div>
            </section>
        </DefaultLayout>
    );
}
