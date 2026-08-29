document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       ESTADO DO JOGO
    ========================== */

    let rodadaAtual = 0;
    let acertos = 0;
    let erros = 0;


    /* =========================
       IMAGENS
    ========================== */

    const imagens = {

        rodada1Acerto:
            "https://github.com/user-attachments/assets/75cefa6c-c86e-4290-9cdb-84002393f115",

        rodada1Erro:
            "https://github.com/user-attachments/assets/2f3b6cca-c595-4a16-ab30-cc79dba2fa54",

        rodada2Acerto:
            "https://github.com/user-attachments/assets/bc216878-bda4-4da1-90cd-d565ba19e604",

        rodada2Erro:
            "https://github.com/user-attachments/assets/ba712dae-8568-40f9-aaf4-8b71be4d5323",

        rodada3:
            "https://github.com/user-attachments/assets/00a58494-e49d-43ec-8423-fa0f76443381"

    };


    /* =========================
       MÚSICAS
    ========================== */

    const rodadas = [

        {

            opcoes: [

                {
                    nome: "All I Need",
                    artista: "Radiohead",
                    correta: true,
                    link: "https://music.youtube.com/watch?v=FM7ALFsOH4g&si=nT5MnfqFW2ka_bDR"
                },

                {
                    nome: "Jigsaw Falling Into Place",
                    artista: "Radiohead",
                    correta: false,
                    link: "https://music.youtube.com/watch?v=CvjRlYpXS5U&si=tR7fobczXlczoqBu"
                }

            ]

        },


        {

            opcoes: [

                {
                    nome: "Echoes",
                    artista: "Incubus",
                    correta: true,
                    link: "https://music.youtube.com/watch?v=gmJQvCS1T3c&si=YEQz55RtTF9wdltC"
                },

                {
                    nome: "Stellar",
                    artista: "Incubus",
                    correta: false,
                    link: "https://music.youtube.com/watch?v=_qQdnilFIw8&si=CqCWRVPye1I7nzor"
                }

            ]

        },


        {

            opcoes: [

                {
                    nome: "I Could Die For You",
                    artista: "Red Hot Chili Peppers",
                    correta: false,
                    link: "https://music.youtube.com/watch?v=5hEjkH2DF5c&si=mp4iSPvWKxJCj8v6"
                },

                {
                    nome: "My Kind of Woman",
                    artista: "Mac DeMarco",
                    correta: true,
                    link: "https://music.youtube.com/watch?v=88mooKbT61A&si=ovStWFeVHxaSyiMR"
                }

            ]

        }

    ];


    /* =========================
       TELAS
    ========================== */

    const telas = {

        inicio: document.getElementById("inicio"),

        regras: document.getElementById("regras"),

        rodada1: document.getElementById("rodada1"),

        rodada2: document.getElementById("rodada2"),

        rodada3: document.getElementById("rodada3"),

        final1: document.getElementById("final1"),

        final2: document.getElementById("final2"),

        final: document.getElementById("final")

    };


    /* =========================
       BOTÕES PRINCIPAIS
    ========================== */

    const btnSimbora =
        document.getElementById("btnSimbora");

    const btnComecar =
        document.getElementById("btnComecar");


    /* =========================
       MOSTRAR TELA
    ========================== */

    function mostrarTela(tela) {

        Object.values(telas).forEach(secao => {

            secao.classList.add("escondido");

        });

        tela.classList.remove("escondido");

    }


    /* =========================
       ATUALIZAR PLACAR
    ========================== */

    function atualizarPlacar() {

        document.getElementById("placarAcertos").textContent =
            acertos;

        document.getElementById("placarErros").textContent =
            erros;

        document.getElementById("resultadoAcertos").textContent =
            acertos;

        document.getElementById("resultadoErros").textContent =
            erros;

    }


    /* =========================
       CRIAR OPÇÕES
    ========================== */

    function criarRodada(numero) {

        const rodada = rodadas[numero];

        const container =
            document.getElementById(
                `opcoesRodada${numero + 1}`
            );

        container.innerHTML = "";


        rodada.opcoes.forEach((musica, indice) => {

            const bloco =
                document.createElement("div");

            bloco.className = "opcaoMusica";


            const nome =
                document.createElement("span");

            nome.className = "nomeMusica";

            nome.textContent =
                musica.nome;


            const artista =
                document.createElement("span");

            artista.className = "artista";

            artista.textContent =
                musica.artista;


            const ouvir =
                document.createElement("a");

            ouvir.className = "linkMusica";

            ouvir.href = musica.link;

            ouvir.target = "_blank";

            ouvir.rel = "noopener noreferrer";

            ouvir.textContent =
                "▶ Ouvir música";


            const escolher =
                document.createElement("button");

            escolher.className = "btnEscolher";

            escolher.type = "button";

            escolher.textContent =
                "ESCOLHER";


            escolher.addEventListener("click", () => {

                responder(
                    musica,
                    numero,
                    container
                );

            });


            bloco.appendChild(nome);

            bloco.appendChild(artista);

            bloco.appendChild(ouvir);

            bloco.appendChild(escolher);

            container.appendChild(bloco);

        });

    }


    /* =========================
       RESPONDER
    ========================== */

    function responder(
        musica,
        numero,
        container
    ) {

        const botoes =
            container.querySelectorAll("button");

        botoes.forEach(botao => {

            botao.disabled = true;

        });


        if (musica.correta) {

            acertos++;

        } else {

            erros++;

        }


        atualizarPlacar();


        mostrarResultado(
            musica.correta,
            numero
        );


        setTimeout(() => {

            proximaRodada(numero);

        }, 3000);

    }


    /* =========================
       MOSTRAR RESULTADO
    ========================== */

    function mostrarResultado(
        acertou,
        numero
    ) {

        const resultado =
            document.getElementById(
                `resultado${numero + 1}`
            );


        let imagem;


        if (numero === 0) {

            imagem =
                acertou
                    ? imagens.rodada1Acerto
                    : imagens.rodada1Erro;

        }


        if (numero === 1) {

            imagem =
                acertou
                    ? imagens.rodada2Acerto
                    : imagens.rodada2Erro;

        }


        if (numero === 2) {

            imagem =
                imagens.rodada3;

        }


        resultado.innerHTML = `
            <img
                src="${imagem}"
                class="imagem"
                alt="Resultado da rodada"
            >
        `;

    }


    /* =========================
       PRÓXIMA RODADA
    ========================== */

    function proximaRodada(numero) {

        if (numero === 0) {

            rodadaAtual = 1;

            mostrarTela(telas.rodada2);

            return;

        }


        if (numero === 1) {

            rodadaAtual = 2;

            mostrarTela(telas.rodada3);

            return;

        }


        if (numero === 2) {

            mostrarTela(telas.final1);


            setTimeout(() => {

                mostrarTela(telas.final2);

            }, 3000);


            setTimeout(() => {

                mostrarTela(telas.final);

            }, 6000);

        }

    }


    /* =========================
       SIMBORA
    ========================== */

    btnSimbora.addEventListener("click", () => {

        mostrarTela(telas.regras);

    });


    /* =========================
       COMEÇAR
    ========================== */

    btnComecar.addEventListener("click", () => {

        criarRodada(0);

        mostrarTela(telas.rodada1);

    });


    /* =========================
       INICIALIZAÇÃO
    ========================== */

    atualizarPlacar();

});
