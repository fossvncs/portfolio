'use client'

import { FloatingDock } from "@/components/ui/floating-dock"
import { LinkedinLogo, WhatsappLogo, Envelope, GithubLogo  } from "@phosphor-icons/react"



export function SocialMediaSection (){

    const floatingDockItems = [
        { title: "LinkedIn", icon: <LinkedinLogo className="h-full w-full text-neutral-500 dark:text-neutral-300"/>, href: "https://www.linkedin.com/in/vinicius-foss-644b931b6/" },
        { title: "WhatsApp", icon: <WhatsappLogo className="h-full w-full text-neutral-500 dark:text-neutral-300"/>, href: "https://wa.me/5541996034720?text=Opa, vi seu repositório aqui e ficou uma beleza!" },
        { title: "E-mail", icon: <Envelope className="h-full w-full text-neutral-500 dark:text-neutral-300"/>, href: "mailto:viniciusaug.foss@gmail.com" },
        { title: "GitHub", icon: <GithubLogo className="h-full w-full text-neutral-500 dark:text-neutral-300"/>, href: "https://github.com/fossvncs?tab=repositories" },
      ]

      
    return (
        <>
        <h1 className="text-center text-4xl">you can reach me in my social media</h1>
        <div className="flex items-center justify-center text-center mt-8 mb-8">
            <FloatingDock items={floatingDockItems} ></FloatingDock>
        </div>
        </>
    )
}