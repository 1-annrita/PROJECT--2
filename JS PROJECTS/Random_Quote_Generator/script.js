function generate(){
    var quotes = {
        "Richard Bach"  :   '"If you love someone, set them free. If they come back they\'re yours; if they don\'t they never were."',
        "Confucius" :  '"It does not matter how slowly you go as long as you do not stop."'  ,
        "Confucius" :   '"Silence is a true friend who never betrays."',
        "Khalil Gibran" : '"Out of suffering have emerged the strongest souls; the most massive characters are seared with scars."',
        "Arnold Schwarzenegger" :   '"Strength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength."',
        "Leonardo da Vinci" :   '"I love those who can smile in trouble, who can gather strength from distress, and grow brave by reflection. \'Tis the business of little minds to shrink, but they whose heart is firm, and whose conscience approves their conduct, will pursue their principles unto death."' 
    };

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random()*
    authors.length)]


    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;

    document.getElementById("author").innerHTML = author;


}
