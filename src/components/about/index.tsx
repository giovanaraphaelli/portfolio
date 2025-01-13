import ReactMarkdown from 'react-markdown';

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

export function About() {
  return (
    <div id="about" className="bg-light-background dark:bg-dark-background ">
      <div className="container mx-auto h-[calc(100vh-3.5rem)] flex flex-col justify-center items-center">
        <h2 className="text-subtitle font-mono text-center text-light-primary dark:text-dark-secondary">
          {'<!-- sobre mim -->'}
        </h2>
        <div className="grid grid-cols-2 py-8">
          <div className="flex items-center flex-col gap-6">
            <img className="size-60" src="perfil.png" alt="" />
            <ReactMarkdown className="font-mono  text-xl text-light-primary dark:text-dark-secondary">
              {profile}
            </ReactMarkdown>
            <p></p>
          </div>

          <div className="flex flex-col gap-4 justify-center">
            <p className="max-w-lg text-base font-medium text-light-text dark:text-dark-text">
              Sou Desenvolvedora Front-End, apaixonada por criar interfaces
              intuitivas e bem estruturadas com React e TypeScript.
              <br />
              Tenho experiência com testes automatizados, boas práticas de
              código e otimização de performance.
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
              <ReactMarkdown className="font-mono text-xl font-medium tracking-widest  text-light-secondary dark:text-dark-primary">
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
      </div>
    </div>
  );
}
