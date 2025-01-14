import ReactMarkdown from 'react-markdown';
import { Layout } from '../../components/layout';

const profile = `
\`\`\`css
.perfil {
  nome: Giovana Raphaelli,
  idade: 25 anos,
  local: São Paulo - SP,
  área: Front-End
}
\`\`\`
`;

const education = `
\`\`\`css
/* formação */
\`\`\`
`;

const experience = `
\`\`\`css
/* experiência */
\`\`\`
`;

const subtitle = `
\`\`\`html
<!-- sobre mim -->
\`\`\`
`;

export function About() {
  return (
    <Layout subtitle={subtitle} id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 max-w-6xl">
        <div className="flex items-center flex-col gap-6">
          <img
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 rounded-full border-2 shadow-md border-light-secondary dark:border-dark-secondary"
            src="perfil.png"
            alt="Profile"
          />
          <ReactMarkdown className="font-mono text-base lg:text-xl text-light-primary dark:text-dark-secondary">
            {profile}
          </ReactMarkdown>
        </div>

        <div className="flex flex-col gap-6 justify-center">
          <p className="text-base font-medium text-light-text dark:text-dark-text">
            Sou Desenvolvedora Front-End, apaixonada por criar interfaces
            intuitivas e bem estruturadas com React e TypeScript.
            <br />
            Tenho experiência com testes automatizados, boas práticas de código
            e otimização de performance.
            <br />
            Sempre busco desenvolver soluções eficientes que proporcionem a
            melhor experiência para os usuários. 🚀
          </p>

          <div>
            <ReactMarkdown className="font-mono text-xl font-medium tracking-widest text-light-secondary dark:text-dark-primary">
              {education}
            </ReactMarkdown>
            <ul className="py-2 list-disc text-light-text dark:text-dark-text">
              <li className="ml-6">
                <span className="text-base font-bold">
                  Análise e Desenvolvimento de Sistemas
                </span>
                <br />
                <span className="text-base">
                  Universidade Cruzeiro do Sul, 2021-2023
                </span>
              </li>
            </ul>
          </div>

          <div>
            <ReactMarkdown className="font-mono text-xl font-medium tracking-widest text-light-secondary dark:text-dark-primary">
              {experience}
            </ReactMarkdown>
            <ul className="py-2 list-disc text-light-text dark:text-dark-text">
              <li className="ml-6 mb-2">
                <span className="text-base font-bold">
                  Analista de Desenvolvimento de Software Jr
                </span>
                <br />
                <span className="text-base">Cromai, out/2022 - jan/2025</span>
              </li>

              <li className="ml-6 mb-2">
                <span className="text-base font-bold">
                  Desenvolvedora WEB Trainee
                </span>
                <br />
                <span className="text-base">
                  Fac. Oswaldo Cruz, fev/2022 - out/2022
                </span>
              </li>

              <li className="ml-6 mb-2">
                <span className="text-base font-bold">
                  Estágio Suporte T.I.
                </span>
                <br />
                <span className="text-base">
                  Fac. Oswaldo Cruz, mai/2021 - jan/2022
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
