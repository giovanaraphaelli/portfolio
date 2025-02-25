import { useInView } from 'react-intersection-observer';
import { Layout } from '../../components/layout';
import { useTypingEffect } from '@/hooks/use-typing-effect';

const fullProfile = `
const perfil = {
  nome: 'Giovana Raphaelli',
  idade: 25,
  local: 'São Paulo - SP',
  area: 'Front-End',
};
`;

export function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  const typedText = useTypingEffect(fullProfile, 20, inView);

  return (
    <Layout subtitle="<!-- sobre mim -->" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 max-w-6xl">
        <div className="flex items-center flex-col gap-6">
          <img
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 rounded-full border-2 shadow-md border-light-secondary dark:border-dark-secondary"
            src="eu.png"
            alt="Profile"
          />
          <div ref={ref}>
            <pre className="font-mono text-base font-medium text-light-primary dark:text-dark-secondary min-w-[17rem] min-h-[12rem] text-left">
              <code>{typedText}</code>
            </pre>
          </div>
        </div>

        <div className="flex flex-col gap-4 justify-center">
          <p className="text-base font-medium text-light-text dark:text-dark-text">
            Sou desenvolvedora front-end com foco em criar interfaces intuitivas
            e performáticas. Gosto de resolver problemas e aprimorar minhas
            habilidades, sempre buscando novos desafios no mundo da tecnologia!
          </p>
          <p className="text-base font-medium text-light-text dark:text-dark-text">
            Minha trajetória começou em 2021, quando iniciei a faculdade de
            Análise e Desenvolvimento de Sistemas e logo entrei no mercado,
            evoluindo de Estagiária de Suporte de TI para Analista de
            Desenvolvimento de Software.
          </p>
          <p className="text-base font-medium text-light-text dark:text-dark-text">
            Ao longo do tempo, me especializei no desenvolvimento front-end,
            trabalhando com aplicações escaláveis, testes e boas práticas.
            Embora minha experiência seja principalmente em React, estou sempre
            expandindo meu conhecimento e explorando novas tecnologias.
          </p>
          <p className="text-base font-medium text-light-text dark:text-dark-text">
            Fora da tecnologia, sou apaixonada por música e gatos. Nas horas
            vagas, adoro assistir filmes e séries, além de me perder nas páginas
            de livros de ficção.
          </p>
        </div>
      </div>
    </Layout>
  );
}
