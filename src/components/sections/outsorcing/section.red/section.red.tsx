'use client'

import CardProfesionales from "@/components/cards/card.profesionales/card.profesionales";

const SectionRed = ():JSX.Element => {

    return<>
    <section className="w-screen p-2 md:p-4 mt-4 relative 2xl:w-[80%] 2xl:ml-[9%]">
        <h1 className="relative w-[96%] ml-[2%] text-[36px] md:text-[45px] text-black font-bold mb-[60px]">
            NUESTRA RED DE PROFESIONALES
            <p className="absolute top-[105px] md:top-[100%] md:w-[600px] text-[18px]  text-[#6e6e6e]">
            Expertos en Programación, Diseño y Tecnología: Amplíe su equipo con profesionales 
            especializados en programación, diseño gráfico, UX/UI y producción audiovisual.
            </p>
        </h1>

        <div className="container-profesionales w-[96%] ml-[2%] mt-[160px] md:mt-[100px] flex overflow-y-scroll p-2 mb-2 pb-4">

            <CardProfesionales
                img="https://cms.aipus.co/aipus/assets/r5hweg29prkog0k0"
                name="Laura"
                profesion="FullStack Developer"
                speciality="Frontend Specialist"
                skills_1={["Angular","Next js"]}
                skills_2={["Node js","Typescript"]}
            />

            <CardProfesionales
                img="https://cms.aipus.co/aipus/assets/tk1leqp5v74owg04"
                name="David"
                profesion="Data Scientist"
                speciality="Machine Learning Specialist"
                skills_1={["Python","Tensorflow"]}
                skills_2={["SQL","Scikit-learn"]}
            />

            <CardProfesionales
                img="https://cms.aipus.co/aipus/assets/8jhg4ywnaqgw8cc4"
                name="Felipe"
                profesion="Software Architect"
                speciality="AWS Specialist"
                skills_1={["AWS Cloud","Golang"]}
                skills_2={["SQL","Docker"]}
            />
            <CardProfesionales
                img="https://cms.aipus.co/aipus/assets/fgac9oxlircw8kso"
                name="Nicolas"
                profesion="UX/UI Designer"
                speciality="Graphic Designer"
                skills_1={["UI Design","UX Research"]}
                skills_2={["Figma","Ilustrator"]}
            />

        </div>

        <div className="container-profesionales w-[96%] ml-[2%] mt-[30px] md:mt-[60px] flex overflow-y-scroll p-2 mb-2 pb-4">

            <CardProfesionales
                img="https://cms.aipus.co/aipus/assets/6itm7q3r6944ok08"
                name="Javier"
                profesion="DevOps Engineer"
                speciality="Linux Specialist"
                skills_1={["BashShell","Docker"]}
                skills_2={["CI/CD","Ngix"]}
            />

            <CardProfesionales
                img="https://cms.aipus.co/aipus/assets/9bj297x3xxs80w0g"
                name="Daniel"
                profesion="FullStack Developer"
                speciality="Backend Specialist"
                skills_1={["Java","SQL"]}
                skills_2={["Nest js","Laravel"]}
            />

            <CardProfesionales
                img="https://cms.aipus.co/aipus/assets/9z8659176cooko4w"
                name="Maribel"
                profesion="Product Designer"
                speciality="UX/UI Specialist"
                skills_1={["Branding","UI Desing"]}
                skills_2={["Figma","Ilustrator"]} 
            />
            <CardProfesionales
                img="https://cms.aipus.co/aipus/assets/8oiktogfi7c4ss4s"
                name="Cristian"
                profesion="FullStack Developer"
                speciality="Backend Specialist"
                skills_1={["PHP","Node Js"]}
                skills_2={["Docker","SQL"]} 
            />



        </div>

    </section>
    
    </>
}

export default SectionRed;