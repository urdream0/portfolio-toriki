"use client";

import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

export default function CodeIntro() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="w-full flex flex-col justify-center items-center bg-[#f9fafb] py-24 px-4 font-fira">
      <div
        className="bg-[#0a0a0a] rounded-2xl p-10 shadow-2xl w-full max-w-5xl relative overflow-hidden"
        data-aos="fade-up"
      >
        {/* Effet lumineux */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-pink-500/10 to-purple-500/10 blur-2xl opacity-30 pointer-events-none animate-pulse" />

        {/* Phrase d'accroche */}
        <p
          className="text-gray-400 text-base font-mono mb-8 relative z-10"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Typewriter
            words={["Bienvenue dans mon univers de développement Java &amp; Web ! 🚀"]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={40}
            deleteSpeed={30}
            delaySpeed={1200}
          />
        </p>

        {/* Bloc code stylé */}
        <div
          className="text-sm md:text-base font-mono leading-relaxed text-gray-200 relative z-10 space-y-2"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <p>
            <span className="text-purple-400">public</span> <span className="text-blue-400">class</span> <span className="text-green-400">TorikiSkills</span> {"{"}
          </p>
          <p className="ml-6">
            <span className="text-purple-400">private</span> <span className="text-blue-400">String</span> passion = <span className="text-yellow-400">&quot;Développement Web &amp; Java&quot;</span>;
          </p>
          <p className="ml-6">
            <span className="text-purple-400">private</span> <span className="text-blue-400">List&lt;String&gt;</span> skills = <span className="text-yellow-400">List.of(&quot;Next.js&quot;, &quot;Spring Boot&quot;, &quot;React&quot;, &quot;PostgreSQL&quot;)</span>;
          </p>
          <p className="ml-6">
            <span className="text-purple-400">private</span> <span className="text-blue-400">boolean</span> alwaysLearning = <span className="text-pink-400">true</span>;
          </p>
          <br />
          <p className="ml-6">
            <span className="text-purple-400">public</span> void <span className="text-green-400">showMotivation</span>() {"{"}
          </p>
          <p className="ml-12 text-gray-400">
            System.out.println(<span className="text-yellow-400">&quot;Toujours motivé à créer et apprendre plus ! 🚀&quot;</span>);
          </p>
          <p className="ml-6">{"}"}</p>
          <p>{"}"}</p>
        </div>
      </div>
    </section>
  );
}
