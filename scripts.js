let nome = document.querySelector(".nome");
let personagem = document.querySelector(".personagem");


function escolherpersonagem(nomepersonagem, imagempersonagem, cor) {


    nome.innerHTML = nomepersonagem
    personagem.src = imagempersonagem
    nome.style.color = cor



}

function lerfoto(foto) {

    let leitor = new FileReader()
    leitor.readAsDataURL(foto.files[0])
    leitor.onload = async function () {



        let desenho = await puter.ai.txt2img("transfome pessaoa desta foto em um personagem de videogame: contorno preto grosso, cores vivas, meio corpo mantendo o rosto parecido. fundo totalmente transparente: sem cenário,sem chão e sem sombra.", {

            model: "replicate:openai/gpt-image-2.5-flare",
            provider: "openai",
            input_image: leitor.result,
            quality: "medium",
            providerOptions: { background: "transparent" }

        })

        escolherpersonagem('você', desenho, 'rgba(40, 28, 144, 0.6)')

    }


}


