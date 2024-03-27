const element = document.getElementById('#print');
console.log('log1');

const options = {
    margin: [10, 10, 10, 10],
    filename: ['arquivo.pdf'],
    jsPDF: [unit = 'mm', format = 'a4', orientation = 'portrait']
};

document.getElementById("#btn-baixar").click(function(){
    html2pdf().set(options).from(element).save();
});

