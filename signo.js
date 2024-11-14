// Array com os signos e suas descrições
const signos = [
    {
        nome: "Áries",
        descricao: "Áries é um signo de fogo, conhecido pela coragem, liderança e energia. Pessoas de Áries são aventureiras e gostam de desafios.",
        imagem: "imagem/aries.jpg",
        dataInicio: { mes: 3, dia: 21 }, // 21 de março
        dataFim: { mes: 4, dia: 19 } // 19 de abril
    },
    {
        nome: "Touro",
        descricao: "Touro é um signo de terra, caracterizado pela estabilidade, paciência e lealdade. Pessoas de Touro são práticas e valorizam a segurança.",
        imagem: "imagem/touro.jpg",
        dataInicio: { mes: 4, dia: 20 }, // 20 de abril
        dataFim: { mes: 5, dia: 20 } // 20 de maio
    },
    {
        nome: "Gêmeos",
        descricao: "Gêmeos é um signo de ar, simbolizado pela comunicação e versatilidade. Gêmeos é curioso e sempre em busca de novidades.",
        imagem: "imagem/gemeos.jpg",
        dataInicio: { mes: 5, dia: 21 }, // 21 de maio
        dataFim: { mes: 6, dia: 20 } // 20 de junho
    },
    {
        nome: "Câncer",
        descricao: "Câncer é um signo de água, muito emocional e protetor. Pessoas de Câncer são sensíveis e valorizam a família e o lar.",
        imagem: "imagem/cancer.jpg",
        dataInicio: { mes: 6, dia: 21 }, // 21 de junho
        dataFim: { mes: 7, dia: 22 } // 22 de julho
    },
    {
        nome: "Leão",
        descricao: "Leão é um signo de fogo, regido pelo Sol, conhecido pela confiança e generosidade. Leão é um líder natural e adora ser o centro das atenções.",
        imagem: "imagem/leao.jpg",
        dataInicio: { mes: 7, dia: 23 }, // 23 de julho
        dataFim: { mes: 8, dia: 22 } // 22 de agosto
    },
    {
        nome: "Virgem",
        descricao: "Virgem é um signo de terra, detalhista e organizado. Pessoas de Virgem são práticas, meticulosas e se preocupam com a perfeição.",
        imagem: "imagem/virgem.jpg",
        dataInicio: { mes: 8, dia: 23 }, // 23 de agosto
        dataFim: { mes: 9, dia: 22 } // 22 de setembro
    },
    {
        nome: "Libra",
        descricao: "Libra é um signo de ar, conhecido pela busca pelo equilíbrio e harmonia. Libra valoriza relacionamentos e a justiça.",
        imagem: "imagem/libra.jpg",
        dataInicio: { mes: 9, dia: 23 }, // 23 de setembro
        dataFim: { mes: 10, dia: 22 } // 22 de outubro
    },
    {
        nome: "Escorpião",
        descricao: "Escorpião é um signo de água, intenso e apaixonado. Escorpião é profundo, determinado e gosta de se aprofundar nas emoções.",
        imagem: "imagem/escorpiao.jpg",
        dataInicio: { mes: 10, dia: 23 }, // 23 de outubro
        dataFim: { mes: 11, dia: 21 } // 21 de novembro
    },
    {
        nome: "Sagitário",
        descricao: "Sagitário é um signo de fogo, aventureiro e otimista. Sagitário adora explorar o mundo e está sempre em busca de novas experiências.",
        imagem: "imagem/sagitario.jpg",
        dataInicio: { mes: 11, dia: 22 }, // 22 de novembro
        dataFim: { mes: 12, dia: 21 } // 21 de dezembro
    },
    {
        nome: "Capricórnio",
        descricao: "Capricórnio é um signo de terra, disciplinado e ambicioso. Capricórnio busca sucesso através de trabalho árduo e determinação.",
        imagem: "imagem/capricornio.jpg",
        dataInicio: { mes: 12, dia: 22 }, // 22 de dezembro
        dataFim: { mes: 1, dia: 19 } // 19 de janeiro
    },
    {
        nome: "Aquário",
        descricao: "Aquário é um signo de ar, criativo e idealista. Aquário é inovador e gosta de pensar fora da caixa.",
        imagem: "imagem/aquario.jpg",
        dataInicio: { mes: 1, dia: 20 }, // 20 de janeiro
        dataFim: { mes: 2, dia: 18 } // 18 de fevereiro
    },
    {
        nome: "Peixes",
        descricao: "Peixes é um signo de água, sensível e compassivo. Pessoas de Peixes são empáticas e têm uma grande imaginação.",
        imagem: "imagem/peixes.jpg", // Caminho correto
        dataInicio: { mes: 2, dia: 19 },
        dataFim: { mes: 3, dia: 20 }
    },
];

// Função que encontra o signo com base na data de nascimento
function consultarSigno(dataNascimento) {
    const mes = dataNascimento.getMonth() + 1; // mes começa de 0 (Janeiro é 0)
    const dia = dataNascimento.getDate();

    // Loop para verificar o signo correto
    for (let i = 0; i < signos.length; i++) {
        const signo = signos[i];
        const inicio = signo.dataInicio;
        const fim = signo.dataFim;

        // Verifica se a data de nascimento está dentro do intervalo do signo
        // Se a data de nascimento estiver entre o início e o fim do signo, retorna o signo
        if (
            (mes === inicio.mes && dia >= inicio.dia) || 
            (mes === fim.mes && dia <= fim.dia) || 
            (mes > inicio.mes && mes < fim.mes)
        ) {
            return signo;
        }

        // Caso o signo seja de Capricórnio (de 22 de dezembro a 19 de janeiro)
        if (inicio.mes === 12 && fim.mes === 1) {
            if ((mes === 12 && dia >= inicio.dia) || (mes === 1 && dia <= fim.dia)) {
                return signo;
            }
        }
    }

    return null; // Caso não encontre
}