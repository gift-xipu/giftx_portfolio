import FakeTerminalWindow from '../components/about/FakeTerminalWindow';
import Prompt from '../components/about/Prompt';
import { skills } from '../../lib/constants';

const SkillList = ({ title, items }: { title: string, items: string[] }) => (
  <>
    <li className="text-teal-600 font-semibold">{title}/</li>
    {items.map((item, index) => <li key={index}>{item}</li>)}
  </>
);

const About = () => {
  return (
    <div className="space-y-10 my-10 break-words">
      {/* general bio */}
      <FakeTerminalWindow>
        <Prompt content="cd aboutGift/" />
        <Prompt directory="/aboutGift" branch={true} content="cat README.md" />
        <p>Hello there! I'm Gift Markus Xipu, a software developer <b>with a passion for coding</b>, working with a wide variety of technologies like <b>Next.js, C#, Python, Golang, Node.js, React, and Flutter</b>. I've developed expertise across different stacks, and I'm always looking to expand my knowledge and skills in both frontend and backend development.</p>
        <p>Besides coding, I have a love for <b>data science</b> and always enjoy diving into new concepts. When I'm not in front of a computer, I like watching <b>movies</b> or playing a good game of <b>soccer</b>. My journey as an IT graduate has led me to constantly explore new technologies and challenge myself with different projects.</p>
      </FakeTerminalWindow>

      {/* skills & tools */}
      <FakeTerminalWindow>
        <Prompt content="cd skillsAndTools/Proficient" />
        <Prompt directory='/skillsAndTools/Proficient' branch={true} content="ls" />
        <div className='flex justify-start flex-wrap md:justify-between'>
          <ul>
            <SkillList title="ProgrammingLanguages" items={['C#', 'Python', 'Golang', 'JavaScript/TypeScript']} />
            <SkillList title="ToolsAndFrameworks" items={['Next.js', 'React', 'Node.js', 'Flutter']} />
          </ul>
          <ul className="md:text-right">
            <SkillList title="LibrariesAndFrameworks" items={['Tailwind CSS', 'Prisma', 'Express.js']} />
          </ul>
        </div>
      </FakeTerminalWindow>

      {/* hobbies / interests */}
      <FakeTerminalWindow>
        <Prompt content="cd HobbiesAndInterests/" />
        <Prompt directory='/HobbiesAndInterests' branch={true} content="ls" />
        <ul>
          <li>⚽ soccer</li>
          <li>🎬 movies</li>
        </ul>
      </FakeTerminalWindow>
    </div>
  );
}

export default About;
  