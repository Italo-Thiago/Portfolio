import { Paragraph } from "../../components/Paragraph";
import { Title } from "../../components/Title"
import { Text } from "../../components/Text"
import { Bullet_Point } from "../../components/Bullet_Point";

export const C_Data_Structure = () => {
    return (
        <>
            <Title Title="Estrutura de Dados em C e C#" Subtitle="" />
            <hr />
            <Paragraph Heading="Introdução" SubHeading="O que vamos aprender?" />

            <hr />
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

            <hr />
            <Paragraph Heading="Tipos Abstratos de Dados (TAD)" SubHeading="" />
        </>
    );
}