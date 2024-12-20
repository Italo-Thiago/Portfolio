import { Paragraph } from "../../components/Paragraph";
import { Title } from "../../components/Title"
import { Text } from "../../components/Text"
import { Bullet_Point } from "../../components/Bullet_Point";
import { Number_Point } from "../../components/Number_Point";
import { Image } from "../../components/Image";

import VectorImage from "../../../assets/image/Vector.webp";
import WhatIsTAD from "../../../assets/image/O_que_e_TAD.webp";
import { Code } from "../../components/Code";

export const C_Data_Structure = () => {
    return (
        <>
            <Title Title="Estrutura de Dados em C e C#" Subtitle="" />
            <Paragraph Heading="Introdução" SubHeading="O que vamos aprender?" />

            <Text Text="O que é uma estrutura de dados?" />
            <Text Text="Uma estrutura de dados (EDs) é uma forma de armazenar e organizar os dados de modo que eles possam ser processados eficientemente:" />
            <Bullet_Point Itens={[
                    "Tempo de processamento e memória utilizada", 
                    "Eficiência tem a ver com escalabilidade: taxa de crescimento (em função do tamanho da entrada)"
                ]} />
            <Text Text="Além da organização dos dados, vamos estudar algoritmos para construção/manipulação e acesso ás EDs"/>
            
            <Text Text="Exemplo do mundo real" />
            <Bullet_Point Itens={["Dicionário 200K palavras"]} />
            <Text Text="Organização dos dados" />
            <Bullet_Point Itens={[
                    "As palavras do dicionário estão organizadas em ordem lexicográfica.",
                    "Podemos realizar buscas eficientes (algoritmo de busca binária)."
                ]} />

            <Text Text="Vamos ver diferentes EDs e algoritmos ao longo do curso:" />
            <Number_Point Itens={[
                    "Listas Ligadas, Pilhas e Filas",
                    "Árvores, Árvores Binárias de Busca, Árvores Rubro-negras",
                    "Grafos, BFS, e DSF, ordenação topológica e caminhos mínimos",
                    "Hashing, Tries, Árvores-B"
                ]} />
            <Text Text="Vamos alternar entre duas visões: a de quem usa (especificação) e a de quem constrói (implementação)." />
            <Bullet_Point Itens={[
                    "Vamos usar o conceito de Tipo Abstrato de Dados (TAD)",
                ]} />

            <Text Text="Algumas dessas EDs estão implementadas em linguagens como C++, Java e Python." />
            <Text Text="Porém nosso objetivo é aprender a criar ferramentas, não apenas utilizá-las." />
            <Bullet_Point Itens={[
                "Nosso curso será em linguagem C",
                "Pré-requisito: ponteiros, manipulação de memória, alocação dinâmica, TADs, Makefile, análise de complexidade."
            ]} />

            <Text Text="Na primeira parte do curso:" />
            <Bullet_Point Itens={[
                "Vetores dinâmicos, Listas ligadas, Filas, Pilhas e aplicações",
            ]} />

            <Text Text="Na segunda parte do curso:" />
            <Bullet_Point Itens={[
                { text: "Árvores", subItems: [
                    "Árvores binárias de busca, Árvores rubro-negra",
                    "Fila de prioridade e Heap",
                ]},
                "Extra: Tries e Patricia tries"
            ]} />

            <Text Text="Na terceira parte do curso:" />
            <Bullet_Point Itens={[
                { text: "Grafos:", subItems: [
                    "Busca em largura e Busca em profundidade",
                    "Ordenação topológica e Caminhos mínimos"
                ]},
                "Extra: Hashing e Árvores-B"
            ]} />

            <Text Text="Vocês precisam estudar bastante agora no começo:" />
            <Bullet_Point Itens={[
                "Leiam os materias sugeridos",
                "Façam as listas de exercícios", 
                "Façam os trabalhos",
            ]} />
            <Text Text="O sucesso na disciplina depende bastante desse esforço inicial" />

            <Paragraph Heading="Tipos Abstratos de Dados (TAD) e Vetores dinâmicos" SubHeading="" />
            <Number_Point Itens={[
                "Vetores",
                "Vetores ordenados",
                "Vetores dinâmicos",
                "Referência",
            ]} />

            <Text Text="Vetores (ou <i>arrays</i>) são uma forma nativa em muitas linguagens de programação para estruturar dados"/>
            <Bullet_Point Itens={[
                "Corresponde à uuma lista indexada de itens",
                "O número de elementos é fixo e definido quando ele é criado",
                "Um vetor não aumenta ou diminui de tamanho",
            ]} />
            <Image Src={VectorImage} Alt="Vector Image" />
            <Text Text="Vetores são usados para implementar muitas outras estruturas de dados, como filas, pilhas e grafos, etc." />

            <Text Text="Em C, um vetor pode ser alocado:" />
            <Number_Point Itens={[
                "estaticamente = <code>int v[100]</code>;",
                "dinamicamente = <code>int *v = malloc(100*sizeof(int))</code>;"
            ]} />
            <Text Text="A usa grande vantagem é o acesso em tempo O(1), a qualquer umdos seus elementos do índice" />
            <Text Text="<code style=>&[i] = &v[0] + i*sizeof(int)</code>" style={{textAlign: 'center', fontWeight: '600'}} />

            <Text Text="Vamos definir um Tipo Abstrato de Dados (TAD) para os vetores:" />
            <Bullet_Point Itens={[
                "Podemos abstrair a forma como o vetor é implementado (alocação estática ou dinâmica)", 
                "Vamos definir as operações disponíveis para o TAD",
                "Depois, &quotapenas&quot utilizamos o TAD (cliente)",
            ]} />
            <Text Text="Operações do TAD" />
            <Bullet_Point Itens={[
                "Criar, Adicionar, Remover, Buscar e Acessar, Destruir" 
            ]} />
            
            <Text Text="Estrutura de um TAD" />
            <Image Src={WhatIsTAD} Alt={"O que é TAD"} />
            <Bullet_Point Itens={[
                { text: "Interface: conjunto de operações de um TAD", subItems: [
                    "Consiste dos <u>nomes e definições</u> usadas para executar as <u>operações</u>.",
                ] },
                {text: "Implementação: conjunto de algoritmos que realizam as operações", subItems: [
                    "A implementação é o <strong>o único &quotlugar&quot</strong> que uma variável é <u>acessada diretamente</u> ",
                ]}
            ]} />

            <Text Text="A interface funciona como um contrato entre o cliente e a implementação." />
            <Code 
Code="// Dados
typedef struct {
    int *dados;
    int n;
} vetor;

// Funções
vetor* criar_vetor(int tam);
void destruir_vetor(vetor *v);

void adicionar_elemento(vetor *v, int x);
void remover_elemento(vetor *v, int i);
int busca(vetor *v, int x);

int acessar(vetor *v, int i);
int tamanho(vetor *v)" />
        </>
    );
}