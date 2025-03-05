import { HeroParallax } from "@/components/ui/hero-parallax";
import project1 from "../../../public/project1.png"
import project2 from "../../../public/project2.png"
import project3 from "../../../public/project3.png"
import firstsite from "../../../public/first-site.png"

export default function HeroSection (){

    const products = [
        {
          title: "My first website",
          link: "https://github.com/fossvncs/Projeto-Android",
          thumbnail:
            firstsite,
        },
        {
          title: "Landing Page",
          link: "https://github.com/fossvncs/Petshop-Landing-page/tree/main",
          thumbnail:
            project1,
        },
        {
          title: "Dashboard App",
          link: "https://cursor.so",
          thumbnail:
            project2,
        },
        {
          title: "Smartfit Challenge",
          link: "https://userogue.com",
          thumbnail:
            project3,
        },        
        {
          title: "Editrix AI",
          link: "https://editrix.ai",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/editrix.png",
        },
        {
          title: "Pixel Perfect",
          link: "https://app.pixelperfect.quest",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
        },
       
        {
          title: "Algochurn",
          link: "https://algochurn.com",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
        },
        {
          title: "Aceternity UI",
          link: "https://ui.aceternity.com",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
        },
        {
          title: "Tailwind Master Kit",
          link: "https://tailwindmasterkit.com",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
        },
        {
          title: "SmartBridge",
          link: "https://smartbridgetech.com",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
        },
        {
          title: "Renderwork Studio",
          link: "https://renderwork.studio",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
        },
       
        {
          title: "Creme Digital",
          link: "https://cremedigital.com",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
        },
        {
          title: "Golden Bells Academy",
          link: "https://goldenbellsacademy.com",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
        },
        {
          title: "Invoker Labs",
          link: "https://invoker.lol",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/invoker.png",
        },
        {
          title: "E Free Invoice",
          link: "https://efreeinvoice.com",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
        },
      ];
      
    return (
        <HeroParallax products={products}></HeroParallax>
    )
}