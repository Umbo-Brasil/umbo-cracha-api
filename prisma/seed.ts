import { Prisma, PrismaClient } from "../generated/client/deno/edge.ts";
import { load } from "https://deno.land/std@0.220.1/dotenv/mod.ts";

const env = await load();

const lista = [
  "Adriana Carvalho",
  "ADRIANA CAVARZERE",
  "Adriana Rodrigues",
  "Adriano Augusto de Barros",
  "Adriano De sousa meneses",
  "Adriano Lima",
  "Adriano Mendes",
  "Aggtha M Gonçalves",
  "Ailson Barbosa de Oliveira",
  "Alan Ennser",
  "Alberico Gazzineo",
  "Aldo Santos",
  "Aldria Franco",
  "Ale RK",
  "Alecsandro Jó Silva",
  "Alessandra do Prado Ferreira Gomes",
  "Alessandra Malta",
  "Alessandra Silva Araujo Bezerra",
  "Alessandra Christina Ferreira Oliveira",
  "Alex Antunes",
  "Alexandre Lauria Dutra",
  "Alexandre Lima",
  "Alexandre Reis Santana",
  "Alexsandro Da Silva",
  "Alice Dantas Fernandes",
  "Alinne Silva",
  "Allysson GREGORIO",
  "Allysson Gregorio Alves",
  "Alvaro Bastoni Junior",
  "Alvaro Bastoni Junior",
  "Amanda Coelho",
  "Amanda Costa Neves",
  "Amanda Reboredo Araújo",
  "Amira Chammas",
  "Ana Carolina Albuquerque Paraizo",
  "Ana Carolina Costa",
  "Ana Carolina Costa",
  "Ana Carolina Da Costa",
  "Ana Carolina De Souza Mesquita",
  "Ana Carolina Ferreira de Melo Brito",
  "Ana Carolina Lourenço",
  "Ana Caroline Luminati",
  "Ana Clara Ferreira Batista",
  "Ana Clara Quintas David",
  "Ana Cristina Nogueira Garcia",
  "Ana Cristina Robortella",
  "Ana Laura Azevedo Costa",
  "Ana Lídia Moraes",
  "Ana Lucia Ferraz de Arruda",
  "Ana Lucia Prado Garcia",
  "Ana Paula Felipe",
  "Ana Paula Magna Da Silva Frasca Castelhano",
  "Ana Raisa da Gama Castelo Branco de Sousa",
  "Analucia Minervino",
  "Anderson Marciano",
  "Anderson Röhe Fontão Batista",
  "Anderson Martins Martins",
  "André Federighi",
  "ANDRE MELO",
  "Andrea Ronzoni Kaplan",
  "Andréia Dourado",
  "Andreia Marcelino",
  "Andressa Capassi",
  "Andressa Gnann",
  "Andressa Morais",
  "Andressa Rodrigues",
  "Andrey Santos",
  "ANDREZA SOBREIRA",
  "Andria Nascimento",
  "Angélica Ritter Machado",
  "Anna Carolina Amaral",
  "Anthonio Araujo Junior",
  "Archavir Donelian",
  "Ariane Bertim",
  "Arnaldo Gaspar Eid",
  "Arthur Biral",
  "Arthur Coradazzi",
  "Artur dos Santos Sousa",
  "Bárbara Lopes de Lima Veiga",
  "Barbara Pasqueto",
  "Beatriz Cabral de oliveira",
  "Beatriz de Oliveira Moraes",
  "Beatriz Martin Andriolo",
  "Belenice Augusta  Vieira",
  "Bernardo Santos Silva",
  "Brenda Ortiz Ferreira Marcos",
  "Bruna Bezerra",
  "Bruna Cassiano",
  "Bruna Chimenti",
  "Bruna Cordeiro",
  "Bruna de Carvalho Lousado",
  "Bruna Martins Silva",
  "Bruna Miele",
  "Bruna Perina",
  "Bruna Toia Shamilian",
  "Bruna Regina Piastrelli Do Carmo lima",
  "Brunno Luz Moreira",
  "Bruno Borghi",
  "Bruno Cação Ribeiro",
  "Bruno Campos Robles",
  "Bruno Garcia",
  "Bruno Lopes",
  "BRUNO RAVARA BACHEGA",
  "Bruno Roger Franqueira Fernandes",
  "Caio Ribeiro Silvano",
  "Caio Tchizli Castro Santos",
  "Caio Vinicius Vacchiano",
  "Camila Cara dos Santos",
  "Camila Castioni",
  "Camila Costa",
  "Camila Fernanda",
  "Camila Souza Franco",
  "Camilla Leite",
  "Carla Cat",
  "Carla Ferdinando",
  "CARLA XAVIER PARDINI",
  "Carla Maria Nicolini",
  "Carlos Colontonio",
  "Carlos Santos Ferreira",
  "Carlos César Soares",
  "Carmen Pedroso",
  "CAROLINA CARMAGNANI",
  "Caroline Martinelli Santos RIbeiro",
  "Caroline Aparecida Dias de Souza Ferreira",
  "Cassia Baiardi",
  "Catia Gomes",
  "Cecília Freitas",
  "CELESTE DAMAZIO",
  "Célia Regina Matias",
  "Celina Salomao",
  "Cesar Manzione",
  "César R.",
  "César Trama",
  "Cinthya Imano",
  "Cintia Rossito",
  "Claudia Maria Alves Pereira",
  "Claudia Victoria Mion Cunha Joca",
  "Claudio Andrade",
  "Clayton Alves Lira",
  "Cleber Borges Moreira",
  "Cleórbete Santos",
  "Clevson Dos Santos",
  "Cris Di Leva",
  "Cristhian Jesus",
  "Cristiane Regina Ponte Quaglia",
  "Cristina Matias",
  "Cristina Matias",
  "Cynthia Fernandes",
  "Daniel Barroso",
  "Daniel Carnauba",
  "Daniel Freitas",
  "Daniel Moreira",
  "Daniel Stade Ruy",
  "Daniela Arrieta",
  "Daniela Basile",
  "Daniele Duarte de Souza Lima",
  "Daniele Pegoraro",
  "Daniella Fogaça",
  "Danielle Silverio",
  "Danilo Arruda",
  "Danilo Pitta",
  "Danilo Roque",
  "Danilo Carreiro Ponte",
  "Dante Araujo",
  "Danuza Almeida de Souza",
  "Darlene Jacqueline Otofuji Ramos",
  "DEBORA MENDES CAMILLO DE JESUS",
  "Débora Morrone Vicente De Albuquerque",
  "Deidiane G. De SouzaPrates",
  "Denis Espana",
  "Denise Berzin Reupke",
  "Denise Oliveira",
  "Denise Fernando Correia",
  "Denival Alves",
  "DIANA SILVEIRA DE BRITO",
  "Diego Perandin",
  "Diego Vilarim",
  "Drielle Pereira Santos",
  "ed.advogado Rachid",
  "EDENILSON SOLIMAN",
  "Eder Augusto Borges",
  "Edison Massaki",
  "Edivã Murta",
  "Edjane Rodrigues",
  "Edmée Froz",
  "Edna Christe",
  "Edna Christe",
  "Edson Bitencourtt",
  "Edson C A Silva",
  "Edson Queiroz",
  "Eduardo de Almeida",
  "Eduardo Estrela",
  "Eduardo Fornazari Alencar",
  "Eduardo Larotonda Cardoso",
  "Eduardo Marchiori Lavagnolli",
  "eduardo mendesmachado",
  "Eduardo Oliveira",
  "Elaine Oliveira",
  "Eloísa Mendes",
  "Elton Flavio Silva de Oliveira",
  "Enio Santos",
  "ENIO VASQUES PACCILLO",
  "Enzo Viana",
  "Erica Sauer",
  "Erica dos Santos lima Dos Santos lima",
  "Erick Ferreira",
  "ERICK MEDEIROS",
  "ERIKA KARINI FREITAS SOUZA",
  "Ernesto Donizete da Silva",
  "Estella Regina Mendes Da Silva",
  "Eugenia Guidotto",
  "Eva Fernanda Caceres Coca",
  "Evelyn Amaral",
  "EVERDEN CESÁRIO SILVA",
  "EZEQUIEL DE SOUSA SANCHES OLIVEIRA",
  "FABIANA MATOS GUIMARÃES",
  "Fabiana Ramazoti Saturno",
  "Fabiana Robertoni Costa",
  "FABIANE SOUZA",
  "Fabiano Kogawa",
  "Fabiano Silva de Andrade",
  "Fabiano Silva de Andrade",
  "Fabio Brum",
  "Fabio Rivelli",
  "Fabio Sória",
  "Fábio Valentini de Carvalho",
  "Fabricio Barbi",
  "Fátima Matos",
  "FATIMA SOARES",
  "Fausto Alexandre M. de Castro",
  "Felipe Augusto Nunes Monea",
  "Felipe Bueno Rocha",
  "Felipe Gois Hengler Lopes",
  "Felipe Guimarães de Oliveira",
  "Felipe Mantovani",
  "Felipe Raddi",
  "Felipe Siqueira",
  "Felipe Zanotto",
  "Felipe Santos Siqueira",
  "Fernanda Branco",
  "Fernanda Meli",
  "Fernanda Naya",
  "Fernanda Pierin",
  "Fernanda Queiroz",
  "Fernanda Ruas Berdoldi",
  "Fernanda Xavier dos Santos",
  "Fernanda Cristina Silva",
  "Fernanda Soares I Assis e Mendes Advogados",
  "Fernando Okumura",
  "Fernando Peres",
  "Fernando Henrique Alves Dias",
  "Fernando Henrique Chambó",
  "Fiama Barbosa Adolfo",
  "Filipe Marinho de Oliveira Andrade",
  "Filipe Criscuolo de Lima",
  "Flávia Perucci Almeida",
  "Flavia Pinheiro",
  "Flávia Shibata",
  "Flávio Franco",
  "FORTE TREMEMBE",
  "Francine Mejan",
  "Francine Portugal",
  "Francisca Simone Nogueira Sagiori",
  "Francisco Donisete Leandro Silva",
  "Francisco Lucas Rocha Sousa",
  "Frank Sforzo Luciano",
  "Frederico Isse",
  "Frederico Madani",
  "Gabriel Al-Cici",
  "Gabriel Costa",
  "Gabriel Meira",
  "Gabriel Quiliconi",
  "Gabriela Bardauil Barbosa",
  "Gabriela De Macedo",
  "Gabriela Fortuna Sousa",
  "Gabriela Gomes",
  "Gabriela Monteiro Cunha Lott Pacheco",
  "Gabriela Morganti",
  "Gabriela Rodrigues",
  "Gabriela Cristina Pinto",
  "Gabriele Martins",
  "Gabriella Soares",
  "Geovani Marin de Lima",
  "Geovanna Martins Fagundes",
  "Gilberto Rodrigues Salomão",
  "Gilmar de Lima Moreira",
  "GILSON FAIS",
  "Giovana Oliveira Rocha",
  "Giovanna Barbieri",
  "Giovanna Iannaco",
  "GISELE M F BOSELLI",
  "Giselle Paulo Servio da Silva",
  "GIULIA SARAGIOTTO",
  "Glaucia Sato",
  "Glaucianne Vieira",
  "Graziela Batista Braga Reis",
  "graziela navarro",
  "GRAZIELE SEGANTINI LOPES",
  "Graziella Veras Medeiros Rosa",
  "Guilherme Augusto Strozzi Nicolau",
  "Guilherme Bebber",
  "Guilherme Mattos",
  "Guilherme Ruffolo",
  "Guilherme Yukio Fusse",
  "Gustavo Aranda Freitas De Souza",
  "Gustavo Chierichetti",
  "Gustavo Feitoza",
  "gustavo gavioli",
  "Gustavo Guerra Fernandes",
  "Gustavo Lima",
  "Gustavo Montezi",
  "Gustavo Morais",
  "Gustavo Paffaro Brochetto",
  "Gustavo Poggio",
  "Haira Ferreira Castro de Jesus Borges",
  "Hayla Pinangé",
  "HÉLDER ALVES DA COSTA",
  "Helena Queirós",
  "Helenilse Da Conceição dos Santos Oliveira",
  "Hélio Brandão",
  "helio moraes",
  "Heloisa Braguini",
  "Heloisa Helena Cidrin Gama Alves",
  "Henrique Checchia",
  "HENRIQUE RENZONI",
  "Henrique Rokembach",
  "Henrique Segolin Molina",
  "Henrique José de Agostinho Cintra",
  "HERLANA DE SOUZA SILVA",
  "Iara Freitas de Mattos Mattos⁸",
  "Idya Mendonça Tupinambá",
  "Igor Fernandez de Moraes",
  "IGOR DENISARD DANTAS MELO",
  "Igor Tadeu Fagundes Gomes",
  "Irwing Peyerl",
  "Isa Marques Porto",
  "Isabela Moraes",
  "Isabella Vianna Felício",
  "Isabella de Santi Mendes",
  "Isabelle Martins e Silva",
  "Isis Lima",
  "Israel Costa Barbosa",
  "Ivan VM",
  "Ivanilda Nogueira",
  "Jaiane Martins",
  "Jairo da Luz Silva",
  "Janaína Lomar",
  "Janaina Mendonca",
  "Janaina Schoenmaker",
  "Jandira Souza Rodrigues",
  "Janine Gallicio",
  "Jaqueline Souza Silva Ferreira",
  "Jaqueline Dominique F. O. Florio",
  "Javier Castellanos",
  "Jayme Barbosa Lima Netto",
  "Jean Carlos Fernandes",
  "Jean Pierre Paiva Alves",
  "jeferson cassio oliveira lisboa",
  "Jennifer Monteiro",
  "Jennifer Vital Da Silva",
  "Jennifer Muniz Freire Alberissi",
  "Jessica Tramonte",
  "Jessyca Monick de Lima",
  "Jhonatan Rodrigues do Carmo",
  "João Carnide",
  "Joao Gallucci",
  "Joao Pedro",
  "João Carlos Galvão Barbosa",
  "João da Silva Ferreira Neto",
  "João Guilherme de Oliveira Torres",
  "João Rafael Teixeira Soares",
  "João Victor Ribeiro",
  "João Vítor Scaranti Navarro",
  "JONATHAN DALLA ROSA MELO",
  "Jonathan Henrique Gomes Da Paz Facchinetti",
  "Jose Coura",
  "José Euclides",
  "José Milagre",
  "José Nuzzi Neto",
  "José Antônio Oliveira",
  "José Antonio Spinola Negro",
  "JOSE FRANCISCO PACCILLO",
  "Jose Francisco Paccillo",
  "José Ricardo Castro dos Santos",
  "Josefa Hilda santos guandalini Santos Guandalini",
  "Ju Augusto",
  "Julia Faria",
  "Julia Pereira",
  "Julia Rohde",
  "Juliana do Carmo Sousa",
  "JULIANA GARCIA",
  "Juliana Maia",
  "Juliana Marques de Jesus pasenow",
  "JULIANA NEGRINI",
  "Juliana Paiva",
  "Juliana Guimarães de Castro Neves",
  "Juliano Callegari Melchiori",
  "Karen Cardoso Gabriel",
  "Karina Gemignani",
  "karina souza",
  "Kariny Antunes Farina",
  "Katherine Diogenes",
  "Kathia Janinne Lima",
  "Kawana Santiago",
  "Keiny Arena",
  "Kelly Paulino Venancio",
  "KELLY TAKAHASHI",
  "Kristiani Lopes",
  "Laila Abud Santana",
  "Lais Kestener Stehling",
  "Laisa Dário Faustino de Moura",
  "Larissa Martins",
  "Larissa Santos",
  "LARISSA SILVA",
  "LARISSA SILVA",
  "Larissa Silva Costa",
  "Larissa Soler Rocha",
  "Larissa Souza Santos",
  "Larissa Andrade Silva",
  "Laudice Ribeiro Gomes",
  "Laura Bottega Eskudlark",
  "Laura Galdeano",
  "Leandro Lanzellotti de Moraes",
  "Leonardo Braz",
  "Leonardo Bruni",
  "Leonardo Maichuk",
  "Leonardo Munari Granero",
  "Leonardo Assad Poubel",
  "Leôncio Carvalho",
  "Letícia Crivelin",
  "Letícia Meirelles Toledo Ramos Batista",
  "Letícia Neves",
  "Letícia Poletto Neves",
  "Leticia Zanardo",
  "Leticia da Luz Silva",
  "Letícia Siqueira Corrêa",
  "Lia Rodriguez",
  "Lilian Fukushima",
  "Lilian Meneses",
  "Lívia Callegari",
  "Lívia Furlan",
  "Luan Gomes da Silva",
  "LUANA KLEIN FRANCO",
  "Luana Petrorenzo",
  "Lucas Alexandre",
  "Lucas Arlindo Salles",
  "lucas Bonafé",
  "Lucas Carneiro",
  "Lucas Costa da Fonseca Gomes",
  "Lucas Dias",
  "Lucas Gomes",
  "Lucas Rafael Gomes",
  "Lucas Ramos",
  "Lucas Sabadim",
  "Lucas Lara Leal",
  "Lucelia Aparecida de Sousa Lima",
  "Lucelia Bonifacio",
  "Luciana Bisquolo",
  "Luciana Sabbatine Neves",
  "Luciano Bolonha Gonsalves",
  "Luciano Malara",
  "Luciano Malara",
  "Luciano Malara",
  "Luciano Terreri Mendonca Junior",
  "LUCIMARA Main",
  "Luís Alfredo Souza Chiarantano Pavão",
  "Luísa Pedreira",
  "Luiz Alfredo Rocha Lima",
  "Luiz David Costa Faria",
  "Luiz Felipe Baez",
  "Luiz Felipe Tassitani",
  "Luiz Gustavo dos Santos Bueno",
  "Luiz Henrique de Miranda Regos",
  "Lya Romanelli",
  "M Leonor Rios",
  "Maiara Brito da Silva Andrade",
  "Malú Vilela",
  "Manoel Ricardo de Andrade Sebastião",
  "Manuela Silva",
  "Marçal Rogério Rizzo",
  "Marcela Andrade",
  "Marcela Ortiz Orsolon Garcia Firmino",
  "Marcela Permuy Gomes",
  "Marcelino Félix Martins",
  "MARCELO AUGUSTO",
  "Marcelo Barbosa",
  "Marcelo Fernandes",
  "Marcelo Fonseca SANTOS",
  "Marcelo Moleiro",
  "marcelo santiago de padua andrade",
  "Marcelo Augusto Lopes Gregorio",
  "Marcia Antunes",
  "Marcia Mendes de Freitas",
  "Marcia Alexandra Velasco Soto",
  "MARCIO MOREIRA DA SILVA",
  "Marco Pietscher",
  "Marco Sirano",
  "MARCO AURÉLIO FERREIRA MARTINS",
  "Marcos FRAZÃO",
  "Marcos Gaia",
  "Marcos Limão",
  "Marcos Sanches",
  "Marcos Silva",
  "MARCUS VINICIUS HIGINO MAIDA",
  "Maria Farran",
  "Maria Guimaraes",
  "Maria Antonia Cruciani Miyake",
  "Maria Aparecida Ferreira",
  "Maria Carla Musumeci",
  "Maria Celeste Cordeiro Leite dos Santos",
  "Maria Clara Gonçalves",
  "Maria Cristina Eickenscheidt Gonçalves",
  "maria das dores da silva silva",
  "Maria Edelvacy Marinho",
  "Maria Fernanda Uchoa Campos",
  "Maria Gabriela Oliveira da Silva",
  "Maria Gabriela Piassa Larini",
  "MARIA IRMA NEIFE GALHARDO",
  "MARIA LUIZA Bullentini Facury",
  "Maria Patricia da Silva Pereira Silva",
  "Maria Paula Ribeiro",
  "Mariana Furbino",
  "Mariana Nicoletti",
  "Mariana Peccicacco",
  "Mariane Cassarino",
  "Mariane Hietzge Dobrovolskni Castelan",
  "Marianna Alencar",
  "Marianna Tsutsui",
  "Marilda Marques",
  "Marilen Amorim Fontana",
  "Marilia Machado Muchiuti",
  "Marília Piedade",
  "Marina Draib",
  "MARINA MOTA RUIZ",
  "Marina Simões",
  "MARINEUTON ARNALDO SOUSA",
  "Mario Rossi Barone",
  "Mario Baldir Rodrigues Filho",
  "Mário Ricardo Branco",
  "Mariza Santos",
  "Marjorie Medeiros",
  "MARLON AUGUSTO SILVA TANAN",
  "Mateus Chaves Rocha",
  "Mateus G. P. de Oliveira",
  "Matheus Sucupira",
  "Matheus Vieira",
  "Maurício Cavallini",
  "Mauricio Paiva",
  "MAURICIO REGADO",
  "Mauro Martins",
  "Maxuel Almeida",
  "Mayara Matiazzo",
  "Mayra Santos",
  "Meire Silveira",
  "Melissa Sandoli",
  "Milena Itri Amadeo",
  "Milene Rodrigues",
  "Mirella Ballista Callera",
  "MIRIAM AMBROSIO",
  "Miriam Ioshico Taka",
  "Mônica Inglez",
  "Monique Peixoto de Souza",
  "Murillo Bergamasco",
  "Murilo Alves Brandão Quadros",
  "Nadia Galvano Machado Scudeiro",
  "Nadir Antunes de Andrade Júnior",
  "Nahomy Gomes Martins Silva",
  "Nair D’Aquino Fonseca Gadelha",
  "Nairana Fernandes",
  "Natalia Aviz",
  "Natalia Bonifácio",
  "Natália Bovenzo Alves",
  "Natália Machado",
  "Natalia Marques",
  "Natany Scovoli",
  "nathalia gasparini",
  "Nayara Vasconcelos Flausino",
  "Nélio junior Friozi da Paixão",
  "Nicole I. Severiano",
  "Nicolle Ramos",
  "Nilma de Castro Abe",
  "Nina Melo",
  "Norma Mosic",
  "Octavio Augustus",
  "Odete Martins Bello",
  "Olivia Nishiyama",
  "Otilia Christiane Silva Afonso",
  "Pablo Vinícius da Silva Silvano",
  "Pâmilla Vanessa da Silva Silvano Leal",
  "Patrícia Boaski",
  "Patricia dos santos guimaraes abouchedid",
  "Patricia Lima",
  "Patricia Mauro Diez",
  "Patricia Ayumi Fonseca",
  "Paula Braga",
  "Paula Braga",
  "PAULA CASIMIRO",
  "Paula Souza",
  "PAULA TRAVAIN",
  "Paula Cristina Balbino",
  "Paulo Grippa",
  "Paulo Purkyt",
  "Paulo Higor Fontoura Moreira",
  "Paulo Roberto Araripe Sucupira",
  "Pedrina Braga",
  "Pedro Dutra",
  "Pedro Feier Pinto",
  "Pedro Henrique Lourentino de Paulo",
  "Pedro Pagliuso",
  "Pedro Angelo dos Santos Junior",
  "Pedro Henrique Alves Carnaúba",
  "Pedro Henrique Ferreira",
  "Pedro Henrique Ferreira",
  "Pietra Galutty Bezerra de Castro",
  "priscila colla",
  "Priscila Dusso",
  "Priscila Santos Ignácio",
  "Priscila Márcia S. Santos",
  "Rafael Belizário",
  "RAFAEL FOJA",
  "Rafael Oliveira Custodio",
  "Rafael Pessoa da Fonseca",
  "Rafael Rotundo",
  "RAFAEL YOSHINORI WATANABE",
  "Rafaele Marcondes",
  "Raphael Almeida",
  "Raquel Azevedo",
  "Raquel C. Clemente",
  "Raquel Costa",
  "Raquel Dayane Figueredo",
  "Raqueline LIMA",
  "Rayane Pinheiro de Lima",
  "Raynara Ferreira",
  "Rebeca Batista",
  "Rebecca Ascencio",
  "Regis Coppini",
  "Renan Miranda",
  "Renan Silva Vallim",
  "Renata Bastos",
  "Renata C D Oliveira",
  "Renata Cappucci",
  "Renata Garcia Bilibio",
  "Renata Menezes",
  "Renata Rosito Bruder Serafim",
  "Renata Tura",
  "RENATA CAMILA DO NASCIMANETO",
  "RENATA CAMILA DO NASCIMENTO",
  "Renato Oyakawa",
  "Renato Sarro Rocha",
  "Renato Augusto De Almeida Lourenco",
  "RENILDO CARVALHO",
  "Ricardo Capozzi",
  "Ricardo Magaldi",
  "Ricardo Magalhães",
  "Ricardo Silva",
  "Rita de Cássia Albino",
  "Ro Inacio",
  "Roberta Bomfim",
  "Roberta Neves",
  "Roberto Camilo",
  "Robson Adami Campos",
  "Rodolfo Franco",
  "Rodrigo Barbosa Ramos de Menezes",
  "Rodrigo Colito",
  "Rodrigo Cotrim Arantes",
  "Rodrigo Ferreira Alves Pereira",
  "Rodrigo Mariano Silva",
  "Rodrigo Pereira",
  "Rodrigo Queiroz Guimarães",
  "Rodrigo Rebouças",
  "Rogerio do Nascimento Alves",
  "Rogério Eich",
  "Rogério Eich",
  "Rogerio Freire",
  "Rogerio Lemos Passos Martes",
  "rogerio mesquita",
  "Rogério Oliveira Silva",
  "Ronaldo Miranda",
  "Rosa Galvão",
  "Rosa  Maria Silva",
  "Rosane Santos Arruda Alvim",
  "Rosangela Martins Pereira",
  "Rosangela Paes",
  "Roseanny Lima",
  "RUI SILVA",
  "Sabrina Antonini",
  "Sabrina gil",
  "Samanta Oliveira",
  "Samara Ferreira de Oliveira",
  "Samara Souza",
  "Samira Satriano",
  "Samuel Lima Santos",
  "Samuel Swartele de Mello",
  "Samuel Douglas Dias",
  "Samy Judkiewicz",
  "Sandra Avella",
  "Sandra Jacubavicius",
  "Santa Maria Silveira",
  "SARAH MELISSA",
  "Savio Andrade",
  "Sergio Bragatte",
  "Sérgio Câmara",
  "Sergio Cardoso Filho",
  "Sílvia Vasconcelos",
  "Simone Giacummo",
  "Sonia Maria Ferreira Macedo",
  "Stephanie Correa Rong Santos",
  "STHEFANIE GUADALUPE DOS SANTOS",
  "Suellen Mattozo",
  "Susana A. F. Guimarães Oliveira",
  "Tais Martins Simao",
  "Talita Car Vidotto",
  "Talita Greco",
  "Talita Paiva",
  "Tania Maria Ferreira Chagas",
  "Taryk Moreno",
  "Tatiana dos Santos Viña",
  "Tatiana Leão",
  "Tedy Colombini",
  "Terezinha Carvalho Dias",
  "Thais Pacheco",
  "Thaís Souza",
  "Thamires Fernandes",
  "Thamy Battistin de Camargo",
  "Thaynã Prado",
  "Theismari Alves de Santana",
  "Theo Tri Huynh Trung",
  "Thiago Alvarenga",
  "Thiago Dalla nora silva",
  "THIAGO MARTINS",
  "THIAGO OLIVEIRA DE MATOS",
  "Tiago Alencar",
  "Tiago Oliveira",
  "Tiago Pedrosa",
  "Tiago Luiz Torres Costa",
  "Tricanico Edison",
  "Tulio Gomes",
  "Ubirajara Junior",
  "Ulisses Sousa",
  "Vagner Vieira",
  "Valdson Gaturamo",
  "Valtencir Conceição Silva",
  "Vanessa David",
  "Vanessa Melo",
  "Vania Dias Pasqua",
  "Victor Linhares Bastos",
  "Victor Ribeiro",
  "Victor Sperling",
  "victoria dias",
  "victoria pinheiro",
  "Victoria Santos Gomes",
  "Vinicius Pott",
  "Vinicius Silva Oliveira",
  "Virgilio Sousa",
  "Vívian Ávila",
  "Viviane Dezidério",
  "Viviane Gois",
  "Viviane Moreira Migliatti",
  "Wagner Jenny",
  "Wagner Ramos",
  "Wanderson Batista Santos",
  "Wanessa Igesca Valverde",
  "Weslley Oliveira",
  "Weverton Guedes Silva Medeiros",
  "Willian Gonçalves",
  "Wilson Alves de Souza",
  "Yasmim Gallo",
  "Yasmin Abrunheiro",
  "Yeska Claudino da Silva",
  "Ana Cláudia Stevanato",
  "Carlos Braga",
  "Felipe Bueno Rocha",
  "Rosangela Martins Pereira",
  "Andréia Dourado",
  "Marcus Vinicius Higino Maida",
];

// deno-lint-ignore no-explicit-any
const result: any = [];

lista.forEach((nome) => {
  result.push({
    nome: nome.toUpperCase(),
    email: "",
    empresa: "",
    printed: false,
  });
});

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: env.DATABASE_URL,
    },
  },
});

const visitantes: Prisma.VisitanteCreateInput[] = result;

for (const pessoa of visitantes) {
  const cadastro = await prisma.visitante.create(
    { data: pessoa },
  );
  console.log(`Usuário criado com o id: ${cadastro.id}`);
}

console.log("Seeding finished");

await prisma.$disconnect();
