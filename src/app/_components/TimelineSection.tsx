import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineSection() {
  const data = [
    {
      title: "november 2021",
      content: (
        <div>
          <h1 className="text-3xl">
            ESTEIO Engenharia e Aerolevantamentos S.A. (trainee)
          </h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 mt-8">
            ✅  I’ve provided technical support to other employees of the company. <br /> 
            ✅  I’ve optimized
            existing processes by implementing employee feedback. <br /> 
            ✅  I’ve created corporate
            emails for company employees. <br />
            ✅  I dealt with cloud files through company apps.
          </p>
        </div>
      ),
    },
    {
      title: "june 2022",
      content:
      ( 
        <div>
          <h1 className="text-3xl">
          Municipal City Hall of São José dos Pinhais (helpdesk)
          </h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 mt-8">
            ✅  I’ve made several hardware modifications and provided technical support for client/users. <br /> 
            ✅  I’ve installed operating systems such as Windows and Linux. <br /> 
            ✅  I've monitored and assisted in training sessions with customers/system users. <br /> 
            ✅  I've learned computer assembly.
          </p>
        </div>
      )
    },
    {
      title: "september 2022 - september 2024",
      content: 
      (
        <div>
          <h1 className="text-3xl">
          FORVIA - FAURECIA (fullstack developer trainee)
          </h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 mt-8">
            ✅  Full-stack development using .NET Framework and Angular to create web applications and RESTful APIs aimed at the shop floor. <br /> 
            ✅  I’ve created KPI applications using Chart.js in a few projects. <br /> 
            ✅  I’ve done several code adjustments to the company’s internal apps. <br /> 
            ✅  I’ve created several Windows Services and SQL Server queries. <br /> 
            ✅  I’ve used sonarqube to detect code smells and vulnerabilities in order to improve code maintainability. <br /> 
            ✅  I’ve used Azure DevOps to track work items and manage CI/CD.
          </p>
        </div>
      )
    },
    {
      title: "nowadays",
      content: (
        <div>
          <h1 className="text-3xl">
            Constantly learning and evolving
          </h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 mt-8">
            ✅  I'm studying ReactJS and NextJS <br /> 
            ✅  I’m getting better at solving problems (thanks to leetcode) <br /> 
            ✅  I’m learning music theory 🎵 <br /> 
          </p>
        </div>
      ),
    },
  ];
  return (
    
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
