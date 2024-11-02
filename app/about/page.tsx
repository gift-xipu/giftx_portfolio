import React from 'react';
import FakeTerminalWindow from '../components/about/FakeTerminalWindow';
import Prompt from '../components/about/Prompt';
import { Terminal, Code2, Gamepad2 } from 'lucide-react';

const SkillList = ({ title, items }: { title: string; items: string[] }) => (
  <div className="mb-6">
    <h3 className="text-teal-700 dark:text-teal-400 font-mono font-semibold mb-2 flex items-center gap-2">
      <span className="text-slate-600 dark:text-slate-500">→</span> {title}/
    </h3>
    <ul className="grid grid-cols-2 gap-2 pl-4">
      {items.map((item, index) => (
        <li 
          key={index} 
          className="text-slate-900 dark:text-slate-300 hover:text-teal-700 dark:hover:text-teal-400 transition-colors"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 my-10 px-4">
      {/* Bio Section */}
      <FakeTerminalWindow>
        <div className="flex items-center gap-2 text-teal-700 dark:text-teal-400 mb-4">
          <Terminal size={20} />
          <h2 className="font-mono font-semibold">About Me</h2>
        </div>
        <Prompt content="cat README.md" />
        <div className="space-y-4 text-black dark:text-slate-300">
          <p>
            Hello! I'm Gift Markus Xipu, a passionate software developer specializing in building robust backend systems and scalable web applications. With a strong foundation in IT and a drive for creating efficient solutions, I've developed expertise across multiple technology stacks.
          </p>
          <p>
            My approach to development focuses on writing clean, maintainable code and building systems that can scale. I'm particularly interested in distributed systems, API design, and performance optimization.
          </p>
        </div>
      </FakeTerminalWindow>

      {/* Skills Section */}
      <FakeTerminalWindow>
        <div className="flex items-center gap-2 text-teal-700 dark:text-teal-400 mb-4">
          <Code2 size={20} />
          <h2 className="font-mono font-semibold">Technical Expertise</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <SkillList
            title="Backend Development"
            items={[
              'C# / .NET Core',
              'Golang',
              'Node.js',
              'Python',
              'RESTful APIs',
              'GraphQL'
            ]}
          />
          <SkillList
            title="Frontend Technologies"
            items={[
              'React / Next.js',
              'TypeScript',
              'Tailwind CSS',
              'Flutter',
              'Redux',
              'React Query'
            ]}
          />
          <SkillList
            title="Database & Tools"
            items={[
              'PostgreSQL',
              'MongoDB',
              'Redis',
              'Docker',
              'Git',
              'CI/CD'
            ]}
          />
          <SkillList
            title="Cloud & DevOps"
            items={[
              'AWS',
              'Azure',
              'Kubernetes',
              'Linux',
              'Terraform',
              'GitHub Actions'
            ]}
          />
        </div>
      </FakeTerminalWindow>

      {/* Interests Section */}
      <FakeTerminalWindow>
        <div className="flex items-center gap-2 text-teal-700 dark:text-teal-400 mb-4">
          <Gamepad2 size={20} />
          <h2 className="font-mono font-semibold">Beyond Coding</h2>
        </div>
        <div className="space-y-4 text-slate-900 dark:text-slate-300">
          <p>When I'm not immersed in code, you'll find me:</p>
          <ul className="space-y-2 pl-4">
            <li className="flex items-center gap-2">
              <span className="text-2xl">⚽</span>
              Playing soccer - A passionate player who believes in teamwork both on and off the field
            </li>
            <li className="flex items-center gap-2">
              <span className="text-2xl">🎬</span>
              Exploring cinema - Particularly interested in sci-fi and psychological thrillers
            </li>
            <li className="flex items-center gap-2">
              <span className="text-2xl">📚</span>
              Reading tech blogs and staying updated with the latest in software architecture and development
            </li>
          </ul>
        </div>
      </FakeTerminalWindow>
    </div>
  );
};

export default About;
