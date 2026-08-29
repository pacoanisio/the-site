document.addEventListener("DOMContentLoaded", function () {


    /* ==================================================
       MÚSICAS
    ================================================== */

    const rodadas = [

        /* =========================
           RODADA 1
        ========================= */

        {
            musicas: [

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


        /* =========================
           RODADA 2
        ========================= */

        {
            musicas: [

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


        /* =========================
           RODADA 3
        ========================= */

        {
            musicas: [

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


    /* ==================================================
       IMAGENS
    ================================================== */

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


    /* ==================================================
       PLACAR
    ================================================== */

    let acertos = 0;

    let erros = 0;


    /* ==================================================
       TELAS
    ================================================== */

    const inicio =
        document.getElementById("inicio");

    const regras =
        document.getElementById("regras");

    const rodada1 =
        document.getElementById("rodada1");

    const rodada2 =
        document.getElementById("rodada2");

    const rodada3 =
        document.getElementById("rodada3");

    const final1 =
        document.getElementById("final1");

    const final2 =
        document.getElementById("final2");

    const final =
        document.getElementById("final");


    /* ==================================================
       BOTÕES
    ================================================== */

    const btnSimbora =
        document.getElementById("btnSimbora");

    const btnComecar =
        document.getElementById("btnComecar");

    const btnProximo1 =
        document.getElementById("btnProximo1");

    const btnProximo2 =
        document.getElementById("btnProximo2");

    const btnProximo3 =
        document.getElementById("btnProximo3");


    /* ==================================================
       MOSTRAR TELA
    ================================================== */

    function mostrarTela(tela) {

        const telas = [

            inicio,
            regras,
            rodada1,
            rodada2,
            rodada3,
            final1,
            final2,
            final

        ];


        telas.forEach(function (elemento) {

            if (elemento) {

                elemento.classList.add("escondido");

            }

        });


        if (tela) {

            tela.classList.remove("escondido");

        }

    }


    /* ==================================================
       ATUALIZAR PLACAR
    ================================================== */

    function atualizarPlacar() {

        const placarAcertos =
            document.getElementById("placarAcertos");

        const placarErros =
            document.getElementById("placarErros");

        const resultadoAcertos =
            document.getElementById("resultadoAcertos");

        const resultadoErros =
            document.getElementById("resultadoErros");


        if (placarAcertos) {

            placarAcertos.textContent =
                acertos;

        }


        if (placarErros) {

            placarErros.textContent =
                erros;

        }


        if (resultadoAcertos) {

            resultadoAcertos.textContent =
                acertos;

        }


        if (resultadoErros) {

            resultadoErros.textContent =
                erros;

        }

    }


    /* ==================================================
       CRIAR RODADA
    ================================================== */

    function criarRodada(numeroRodada) {

        const rodada =
            rodadas[numeroRodada];


        const numeroTela =
            numeroRodada + 1;


        const container =
            document.getElementById(
                "opcoesRodada" + numeroTela
            );


        if (!container) {

            return;

        }


        container.innerHTML = "";


        /* Limpa resultado anterior */

        const resultado =
            document.getElementById(
                "resultado" + numeroTela
            );


        if (resultado) {

            resultado.innerHTML = "";

        }


        /* Esconde o PRÓXIMO */

        const botaoProximo =
            document.getElementById(
                "btnProximo" + numeroTela
            );


        if (botaoProximo) {

            botaoProximo.classList.add(
                "escondido"
            );

        }


        /* Cria as duas músicas */

        rodada.musicas.forEach(function (musica) {


            const bloco =
                document.createElement("div");

            bloco.className =
                "opcaoMusica";


            /* NOME */

            const nome =
                document.createElement("span");

            nome.className =
                "nomeMusica";

            nome.textContent =
                musica.nome;


            /* ARTISTA */

            const artista =
                document.createElement("span");

            artista.className =
                "artista";

            artista.textContent =
                musica.artista;


            /* LINK */

            const ouvir =
                document.createElement("a");

            ouvir.className =
                "linkMusica";

            ouvir.href =
                musica.link;

            ouvir.target =
                "_blank";

            ouvir.rel =
                "noopener noreferrer";

            ouvir.textContent =
                "▶ Ouvir música";


            /* ESCOLHER */

            const escolher =
                document.createElement("button");

            escolher.type =
                "button";

            escolher.className =
                "btnEscolher";

            escolher.textContent =
                "ESCOLHER";


            escolher.addEventListener(
                "click",
                function () {

                    responder(
                        musica,
                        numeroRodada,
                        container
                    );

                }
            );


            bloco.appendChild(nome);

            bloco.appendChild(artista);

            bloco.appendChild(ouvir);

            bloco.appendChild(escolher);


            container.appendChild(bloco);

        });

    }


    /* ==================================================
       RESPONDER
    ================================================== */

    function responder(
        musica,
        numeroRodada,
        container
    ) {


        /* Impede nova escolha */

        const botoes =
            container.querySelectorAll(
                ".btnEscolher"
            );


        botoes.forEach(function (botao) {

            botao.disabled = true;

        });


        /* Atualiza placar */

        if (musica.correta) {

            acertos++;

        } else {

            erros++;

        }


        atualizarPlacar();


        /* Mostra resultado */

        mostrarResultado(
            musica.correta,
            numeroRodada
        );


        /* Mostra PRÓXIMO */

        const botaoProximo =
            document.getElementById(
                "btnProximo" + (numeroRodada + 1)
            );


        if (botaoProximo) {

            botaoProximo.classList.remove(
                "escondido"
            );

        }

    }


    /* ==================================================
       MOSTRAR RESULTADO
    ================================================== */

    function mostrarResultado(
        acertou,
        numeroRodada
    ) {


        const resultado =
            document.getElementById(
                "resultado" + (numeroRodada + 1)
            );


        if (!resultado) {

            return;

        }


        let imagem = "";


        /* RODADA 1 */

        if (numeroRodada === 0) {

            imagem =
                acertou
                    ? imagens.rodada1Acerto
                    : imagens.rodada1Erro;

        }


        /* RODADA 2 */

        if (numeroRodada === 1) {

            imagem =
                acertou
                    ? imagens.rodada2Acerto
                    : imagens.rodada2Erro;

        }


        /* RODADA 3 */

        if (numeroRodada === 2) {

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


    /* ==================================================
       SIMBORA
    ================================================== */

    btnSimbora.addEventListener(
        "click",
        function () {

            mostrarTela(regras);

        }
    );


    /* ==================================================
       BORA
    ================================================== */

    btnComecar.addEventListener(
        "click",
        function () {

            criarRodada(0);

            mostrarTela(rodada1);

        }
    );


    /* ==================================================
       PRÓXIMO - RODADA 1
    ================================================== */

    btnProximo1.addEventListener(
        "click",
        function () {

            criarRodada(1);

            mostrarTela(rodada2);

        }
    );


    /* ==================================================
       PRÓXIMO - RODADA 2
    ================================================== */

    btnProximo2.addEventListener(
        "click",
        function () {

            criarRodada(2);

            mostrarTela(rodada3);

        }
    );


    /* ==================================================
       PRÓXIMO - RODADA 3
    ================================================== */

    btnProximo3.addEventListener(
        "click",
        function () {

            mostrarTela(final1);


            setTimeout(
                function () {

                    mostrarTela(final2);

                },
                3000
            );


            setTimeout(
                function () {

                    mostrarTela(final);

                },
                6000
            );

        }
    );


    /* ==================================================
       INICIALIZAÇÃO
    ================================================== */

    atualizarPlacar();

});
