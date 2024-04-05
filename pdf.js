<<<<<<< Updated upstream
function downloadPDF() {
=======
const element = document.getElementById('print');
console.log('log1');
>>>>>>> Stashed changes

    console.log('Entrou aqui');

<<<<<<< Updated upstream
    //Acessando a página reciboPDF
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'reciboPDF.html', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            console.log("Entrou 1");
            const divConteudo = document.createElement('div');
            divConteudo.innerHTML = xhr.responseText;
            const conteudoPDF = divConteudo.querySelector('#print');
            console.log('Conteudo: ', conteudoPDF);


            //Config Do arquivo
            const options = {
                margin: [10, 10, 10, 10],
                filename: 'arquivo.pdf',
                html2canvas: { scale: 2 },
                jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
            }

            //Gerar e baixar PDF
            console.log("Passou por aqui");
            html2pdf().set(options).from(conteudoPDF).save();

        }else{
            console.log("Deu ruim");
        }
    }

    xhr.send();

    //Conteúdo PDF
    //const content = document.getElementById("print");
}
=======
document.getElementById("btn-baixar").click(function(){
    html2pdf().set(options).from(element).save();
});
>>>>>>> Stashed changes

