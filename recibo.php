<?php
require_once('TCPDF-main/tcpdf.php');

$pdf = new TCPDF('p', 'mm', 'A4', true, 'UTF-8', false);

$pdf->SetTitle('Documento PDF');
$pdf->setPrintHeader(false);
$pdf->setPrintFooter(false);

$pdf->AddPage();


$html_content = '
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Exemplo de HTML para PDF</title>
    </head>
    <body>
        <h1>Título</h1>
        <p>Este é um exemplo de conteúdo HTML que será convertido em PDF.</p>
    </body>
    </html>
    ';

    $pdf -> writeHTML($html_content, true, false, true, true, '');

    $filename = 'arquivo.pdf';

    $pdf -> Output($filename, 'D');
