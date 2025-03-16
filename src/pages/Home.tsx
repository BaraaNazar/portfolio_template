import Section from '@/components/Section';
import Layout from '@/Layout';

type section = {
  sectionTitle: string;
  description?: string[] | null;
  contents:
    | {
        contentTitle?: string | null;
        date?: string | null;
        description?: string[] | null;
      }[]
    | null;
};

function Home() {
  const sections: section[] = [
    {
      sectionTitle: 'About Me',
      description: [
        'Motivated and self-driven Frontend Engineer with 3 years of experience building dynamic and responsive websites and applications using HTML, CSS, Tailwind CSS, JavaScript, React, and Next.js. Demonstrates strong ownership and accountability in delivering high-quality user experiences. Passionate about continuous learning and consistently pushing beyond comfort zones to enhance skills and adopt new technologies.',
      ],
      contents: null,
    },
    {
      sectionTitle: 'Contact Me',
      description: [
        'Erbil, Iraq',
        'baraa.nazar.ph@gmail.com',
        '+9647739009009',
        'baraa-umber.vercel.app',
        'https://github.com/BaraaNazar',
        'https://www.linkedin.com/in/baraa-nazar-a29226138/',
      ],
      contents: null,
    },
    {
      sectionTitle: 'Professional Experience',
      contents: [
        {
          contentTitle: 'Junior Frontend Engineer | Digital Zone',
          date: 'Nov 2023 - Present',
          description: [
            'Enhanced event notification design and improved user engagement.',
            'Implemented responsive design for Ticket Zone app across all devices.',
            'Created and integrated Digital Zone web app with Alipay for over 100k users.',
            'Streamlined Ticket Zone app endpoints and improved dashboard functionalities.',
          ],
        },
        {
          contentTitle: 'Frontend Web Developer - Intern | Fuel My Hustle',
          date: 'Jun 2023 - Nov 2023',
          description: [
            'Fixed bugs and improved the TechClarityCoach website.',
            'Led enhancements in the balablu project.',
            'Skills: Leadership, TypeScript, React, Next.js, Tailwind, and Nextra.',
            'Skills: Leadership, TypeScript, React, Next.js, Tailwind, and Nextra.',
          ],
        },
        {
          contentTitle: 'Frontend Developer - Intern | RadicalX',
          date: 'Apr 2023 - Jun 2023',
          description: [
            'Developed an AI-powered chatbot for RadicalX’s app using React.',
            'Built the squads team container for the RadicalX app.',
            'Skills: Git, JavaScript, React, Tailwind, and teamwork.',
            'Skills: Git, JavaScript, React, Tailwind, and teamwork.',
          ],
        },
        {
          contentTitle: 'Freelancer | Frontend Engineer',
          date: 'Jan 2022 - Present',
          description: [
            'Built over six projects using React, Next.js, and other frameworks.',
            'Created a personal website with animations using Framer Motion.',
            'Skills: Git, HTML, CSS, JavaScript, Ruby, Firebase, and remote work skills.',
          ],
        },
      ],
    },
    {
      sectionTitle: 'Projects',
      contents: [
        {
          contentTitle: 'RefuBook',
          date: '2024',
          description: [
            'A social platform for refugees built with React, Tailwind, Firebase, and Netlify.',
            'Responsibilities included the Navbar, About section, Firebase integration, and chat functionality.',
          ],
        },
        {
          contentTitle: 'Digital Zone',
          date: '2024',
          description: [
            'Built from scratch using Alipay authentication and payment integration.',
            'Optimized for mobile and aligned with the super app’s design for a better user experience.',
          ],
        },
        {
          contentTitle: 'TalebAlelm',
          date: '2024',
          description: [
            'An educational app for organizing learning processes, developed with Next.js, Tailwind, and Firebase.',
            'Built the entire app from scratch with a focus on educational content organization.',
          ],
        },
      ],
    },
    {
      sectionTitle: 'Education',
      contents: [
        {
          contentTitle: 'Frontend Web Development Bootcamp | Re:Coded',
          date: 'Sep 2022 - Jan 2023',
          description: [
            'Completed a 4.5-month immersive bootcamp with 300+ hours of learning.',
            'Focused on HTML, CSS, JavaScript, React, and Redux.',
          ],
        },
        {
          contentTitle: 'Bachelor of Pharmacy | Hawler Medical University',
          date: 'Sep 2014 - Sep 2019',
          description: [
            'Graduated with a focus on pharmacy and healthcare.',
            'Experience as a medical representative for two years post-graduation.',
          ],
        },
      ],
    },
    {
      sectionTitle: 'Technical Skills',
      description: [
        'HTML/CSS',
        'JavaScript',
        'Typescript',
        'React',
        'Redux',
        'Ruby',
        'Git',
        'React admin',
        'Chakra UI',
        'Material UI',
        'Firebase',
        'Tailwind CSS',
        'Next.js',
        'Nextra',
        'Framer Motion',
        'Netlify',
      ],
      contents: null,
    },
    {
      sectionTitle: 'Languages',
      description: [
        'Fluent in English',
        'Arabic',
        'Kurdish',
        'Beginner skills in Spanish',
      ],
      contents: null,
    },
    {
      sectionTitle: 'Soft Skills',
      description: [
        'Observation',
        'Decision making',
        'Business Communications',
        'Multi-tasking',
        'TeamWork',
        'Time management',
        'Problem Solving',
      ],
      contents: null,
    },
  ];

  const name = 'Baraa Nazar';
  const position = 'Frontend Engineer';

  return (
    <Layout name={name} position={position}>
      <div className='grid grid-cols-2 gap-2 p-4 md:grid-cols-2 max-w-full max-h-full mx-auto text-xs md:text-base'>
        {sections.map((section, index) => (
          <Section key={index} {...section} />
        ))}
      </div>
    </Layout>
  );
}

export default Home;
