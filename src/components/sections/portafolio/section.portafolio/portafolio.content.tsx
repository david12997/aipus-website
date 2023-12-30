import Button3 from "@/components/buttons/button.3/button.3"
import CardPortafolio from "@/components/cards/card.portafolio/card.portafolio"
import Image from "next/image"

const PortafolioContent = ():JSX.Element => {

    return<>
        <section className="p-2 w-[100%] flex flex-wrap justify-around mt-[30px] md:mt-[-50px]">
            <span className="mt-4 md:mt-0"><CardPortafolio
                img="https://cms.aipus.co/aipus/assets/1og0nxyqct6sok4c"
                title="Runalotus UX Research"
            /></span>

            <span className="mt-4 md:mt-[100px]"><CardPortafolio
                img="https://cms.aipus.co/aipus/assets/8dgt6ed78akgoc4s"
                title="Aipus Desarrollo Software SAAS"
            /></span>

            <span className="mt-4 md:mt-[200px]"><CardPortafolio
                img="https://cms.aipus.co/aipus/assets/hnj53yvstg08w8sc"
                title="Doomis desarrollo de apps - software"
            /></span>
            
        </section>
        <section className="p-2 w-[100%] flex flex-wrap justify-around mt-[30px] md:mt-[-90px]">
            <span className="mt-4 md:mt-0"><CardPortafolio
                img="https://cms.aipus.co/aipus/assets/1og0nxyqct6sok4c"
                title="Runalotus UX Research"
            /></span>

            <span className="mt-4 md:mt-[100px]"><CardPortafolio
                img="https://cms.aipus.co/aipus/assets/8dgt6ed78akgoc4s"
                title="Aipus Desarrollo Software SAAS"
            /></span>

            <span className="mt-4 md:mt-[200px]"><CardPortafolio
                img="https://cms.aipus.co/aipus/assets/hnj53yvstg08w8sc"
                title="Doomis desarrollo de apps - software"
            /></span>
            
        </section>
        <section className="p-2 w-[100%] flex flex-wrap justify-around mt-[30px] md:mt-[-90px]">
            <span className="mt-4 md:mt-0"><CardPortafolio
                img="https://cms.aipus.co/aipus/assets/1og0nxyqct6sok4c"
                title="Runalotus UX Research"
            /></span>

            <span className="mt-4 md:mt-[100px]"><CardPortafolio
                img="https://cms.aipus.co/aipus/assets/8dgt6ed78akgoc4s"
                title="Aipus Desarrollo Software SAAS"
            /></span>

            <span className="mt-4 md:mt-[200px]"><CardPortafolio
                img="https://cms.aipus.co/aipus/assets/hnj53yvstg08w8sc"
                title="Doomis desarrollo de apps - software"
            /></span>
            
        </section>
    </>
}

export default PortafolioContent