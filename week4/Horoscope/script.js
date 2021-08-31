function horoscope(){

// target inputs
let birthMonth = document.getElementById('birthMonth').value
let birthDay = document.getElementById('birthDay').value
// console.log(birthDay);
let results = document.getElementById('zodiacReturn')
         document.getElementById('birthMonth').value = '';   
         document.getElementById('birthDay').value = '';
// console.log(results) --> testing dom selections
if (birthMonth == 12 && birthDay > 22 && birthDay <= 31 || birthMonth == 01 && birthDay >= 0 && birthDay <=19){
             results.innerText = "Responsible Capricorn‘s animal is the mountain goat, and its glyph—showing a goat’s hoof and the tail of a fish—is one of the most interesting of the zodiac signs. As a grounded earth sign, Capricorn is one of the hardest workers. They’re always looking to climb to the next rung on the ladder of success. That’s the determined goat part. The fishtail represents Capricorn’s Greek mythology roots as the Sea-goat. A creature that represents the watery, emotional undercurrent of Capricorn’s sometimes unexpected nature." 
             console.log(birthMonth)
             console.log(results)
             //Capricorn
         }else if (birthMonth == 01 && birthDay > 20 && birthDay <= 31 || birthMonth == 02 && birthDay > 0 && birthDay <= 18){
            results.innerText = "Aquarius" 
            results.appendChild(image)
            console.log(birthMonth)
            console.log(results)
            //Aquarius
         }else{
            results.innerText = "Drop and give me 10"
         }
         

}
document.getElementById('submit').addEventListener("click", horoscope);
