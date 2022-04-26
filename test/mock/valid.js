/*
Nota:
Os seguintes valores de teste contém:
- Headers válidos
- 1 exemplo de registro com todos os valores corretos
- 1 exemplo de registro com 2 autores (separados por vírgula)
- 1 exemplo de registro sem o campo `indexadoresnorma`

E devem ser o suficiente para testar todos os cenários possíveis de registros no CSV fornecido. :)

*/

export const mockCsvContent = `título;link;autor;etapa;ementa;indexadoresnorma;
Projeto de lei 584/2016;http://www.al.sp.gov.br/propositura?id=1322563;Jorge Wilson Xerife do Consumidor;PAUTA;Dispõe sobre a inclusão de cláusula nos contratos de adesão aos serviços de telefonia fixa, de telefonia móvel e de banda larga móvel, e dá outras providências.;CONTRATO, OBRIGATORIEDADE, CLÁUSULA, SERVIÇO, TELEFONIA MÓVEL, TELEFONIA FIXA, PRAZO, INCLUSÃO, RESCISÃO CONTRATUAL, LIBERAÇÃO;
Projeto de lei 580/2016;http://www.al.sp.gov.br/propositura?id=1323286;Marcia Lia;PAUTA;Estabelece normas gerais para a realização de Concurso Público pela Administração Pública Direta e Indireta do Estado.;NORMAS, REALIZAÇÃO, CONCURSO PÚBLICO ESTADUAL, ESTADO DE SÃO PAULO, ADMINISTRAÇÃO PÚBLICA DIRETA E INDIRETA;
Projeto de lei 545/2016;http://www.al.sp.gov.br/propositura?id=1322832;Roberto Morais, Itamar Borges;PAUTA;Altera a Lei nº 13.550, de 2009, que dispõe sobre a utilização e proteção da vegetação nativa do Bioma Cerrado no Estado de São Paulo.;`;

export const mockCsvContentWithoutHeaders = `Projeto de lei 584/2016;http://www.al.sp.gov.br/propositura?id=1322563;Jorge Wilson Xerife do Consumidor;PAUTA;Dispõe sobre a inclusão de cláusula nos contratos de adesão aos serviços de telefonia fixa, de telefonia móvel e de banda larga móvel, e dá outras providências.;CONTRATO, OBRIGATORIEDADE, CLÁUSULA, SERVIÇO, TELEFONIA MÓVEL, TELEFONIA FIXA, PRAZO, INCLUSÃO, RESCISÃO CONTRATUAL, LIBERAÇÃO;
Projeto de lei 580/2016;http://www.al.sp.gov.br/propositura?id=1323286;Marcia Lia;PAUTA;Estabelece normas gerais para a realização de Concurso Público pela Administração Pública Direta e Indireta do Estado.;NORMAS, REALIZAÇÃO, CONCURSO PÚBLICO ESTADUAL, ESTADO DE SÃO PAULO, ADMINISTRAÇÃO PÚBLICA DIRETA E INDIRETA;
Projeto de lei 545/2016;http://www.al.sp.gov.br/propositura?id=1322832;Roberto Morais, Itamar Borges;PAUTA;Altera a Lei nº 13.550, de 2009, que dispõe sobre a utilização e proteção da vegetação nativa do Bioma Cerrado no Estado de São Paulo.;`;

export const mockCsvContentSplitedProjects = [
  'Projeto de lei 584/2016;http://www.al.sp.gov.br/propositura?id=1322563;Jorge Wilson Xerife do Consumidor;PAUTA;Dispõe sobre a inclusão de cláusula nos contratos de adesão aos serviços de telefonia fixa, de telefonia móvel e de banda larga móvel, e dá outras providências.;CONTRATO, OBRIGATORIEDADE, CLÁUSULA, SERVIÇO, TELEFONIA MÓVEL, TELEFONIA FIXA, PRAZO, INCLUSÃO, RESCISÃO CONTRATUAL, LIBERAÇÃO;',
  'Projeto de lei 580/2016;http://www.al.sp.gov.br/propositura?id=1323286;Marcia Lia;PAUTA;Estabelece normas gerais para a realização de Concurso Público pela Administração Pública Direta e Indireta do Estado.;NORMAS, REALIZAÇÃO, CONCURSO PÚBLICO ESTADUAL, ESTADO DE SÃO PAULO, ADMINISTRAÇÃO PÚBLICA DIRETA E INDIRETA;',
  'Projeto de lei 545/2016;http://www.al.sp.gov.br/propositura?id=1322832;Roberto Morais, Itamar Borges;PAUTA;Altera a Lei nº 13.550, de 2009, que dispõe sobre a utilização e proteção da vegetação nativa do Bioma Cerrado no Estado de São Paulo.;',
];

export const mockCsvContentRawObjects = [
  {
    titulo: 'Projeto de lei 584/2016',
    link: 'http://www.al.sp.gov.br/propositura?id=1322563',
    autor: 'Jorge Wilson Xerife do Consumidor',
    etapa: 'PAUTA',
    ementa:
      'Dispõe sobre a inclusão de cláusula nos contratos de adesão aos serviços de telefonia fixa, de telefonia móvel e de banda larga móvel, e dá outras providências.',
    indexadoresnorma:
      'CONTRATO, OBRIGATORIEDADE, CLÁUSULA, SERVIÇO, TELEFONIA MÓVEL, TELEFONIA FIXA, PRAZO, INCLUSÃO, RESCISÃO CONTRATUAL, LIBERAÇÃO',
  },
  {
    titulo: 'Projeto de lei 580/2016',
    link: 'http://www.al.sp.gov.br/propositura?id=1323286',
    autor: 'Marcia Lia',
    etapa: 'PAUTA',
    ementa:
      'Estabelece normas gerais para a realização de Concurso Público pela Administração Pública Direta e Indireta do Estado.',
    indexadoresnorma:
      'NORMAS, REALIZAÇÃO, CONCURSO PÚBLICO ESTADUAL, ESTADO DE SÃO PAULO, ADMINISTRAÇÃO PÚBLICA DIRETA E INDIRETA',
  },
  {
    titulo: 'Projeto de lei 545/2016',
    link: 'http://www.al.sp.gov.br/propositura?id=1322832',
    autor: 'Roberto Morais, Itamar Borges',
    etapa: 'PAUTA',
    ementa:
      'Altera a Lei nº 13.550, de 2009, que dispõe sobre a utilização e proteção da vegetação nativa do Bioma Cerrado no Estado de São Paulo.',
    indexadoresnorma: 'no data',
  },
];

export const mockProjects = [
  {
    id: '1322563',
    numero: '584',
    ano: '2016',
    autores: [
      {
        nome: 'Jorge Consumidor',
      },
    ],
    url: 'http://www.al.sp.gov.br/propositura?id=1322563',
    indexadores: [
      'CONTRATO',
      'OBRIGATORIEDADE',
      'CLÁUSULA',
      'SERVIÇO',
      'TELEFONIA MÓVEL',
      'TELEFONIA FIXA',
      'PRAZO',
      'INCLUSÃO',
      'RESCISÃO CONTRATUAL',
      'LIBERAÇÃO',
    ],
  },
  {
    id: '1323286',
    numero: '580',
    ano: '2016',
    autores: [
      {
        nome: 'Marcia Lia',
      },
    ],
    url: 'http://www.al.sp.gov.br/propositura?id=1323286',
    indexadores: [
      'NORMAS',
      'REALIZAÇÃO',
      'CONCURSO PÚBLICO ESTADUAL',
      'ESTADO DE SÃO PAULO',
      'ADMINISTRAÇÃO PÚBLICA DIRETA E INDIRETA',
    ],
  },
  {
    id: '1322832',
    numero: '545',
    ano: '2016',
    autores: [
      {
        nome: 'Roberto Morais',
      },
      {
        nome: 'Itamar Borges',
      },
    ],
    url: 'http://www.al.sp.gov.br/propositura?id=1322832',

    indexadores: [],
  },
];

/*
Nota extra + Dica do Wells: O CSV original tem mais "desafios" (leia-se "dificuldades de implementação por má formatação do CSV") que foram
abstraídos na confecção desse desafio principal (leia-se "salvei vocês de lidar com isso, denada 😂"),
já que o foco desse desafio é usar expressões regulares, e não enlouquecer se perguntando "por que raios nenhum CSV com dados públicos
vem sequer com o Charset configurado direito?" (não leia-se "Wells fala com propriedade sobre essa parte pq já trabalhou com isso")

Maaaaas, se por ventura, você quiser se aventurar em mais casos que podem ser tratados como exemplo aqui, e quiser
_pegar o CSV original_ no link mencionado no README do desafio, baixar e tratar os erros possíveis que vem dele, aqui vão algumas dicas:
- Charset incorreto que precisa ser convertido
- Quebra de linha em lugares errados
- Excesso de `;` e `\n`
- Despadronização de urls
*/
