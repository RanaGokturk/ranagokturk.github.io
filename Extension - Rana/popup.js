document.getElementById('refreshButton').addEventListener('click', function() {
    var proverbs = [
        "1-Bugün yapabileceğin her şeyin farkındayım ve seninle gurur duyuyorum!",
        "2-Gülümse! Dünya, senin ne kadar harika olduğunu bilsin!",
        "3-Küçük adımlar, büyük başarılar demektir. Devam et!",
        "4-Hayallerinin peşinden gitmeye devam et, sınırlarını zorla!",
        "5-Bugünün güzelliğini fark et, hayat harika şeylerle dolu!",
        "6-Kendine inan, her zorluğun üstesinden gelebilirsin!",
        "7-Bugün, potansiyelinin sadece bir kısmını göster. Yarın için hazırlan!",
        "8-Başarının sırrı, pes etmemekte yatar. Sen asla pes etme!",
        "9-Güne pozitif bir enerjiyle başla, hayat sana güzel sürprizlerle dolu!",
        "10-Seninle her zaman gurur duyuyorum, sen harikasın!"
        
    ];
    var randomIndex = Math.floor(Math.random() * proverbs.length);
    document.getElementById('quote').textContent = proverbs[randomIndex];
});