# MT-Lab1

Veikia su Chrome, Opera, Firefox naršyklėmis

Multimedijos sistemos. Laboratorinis darbas Nr.1 ir Nr.2

Šio laboratorinio darbo tikslas - susipažinti su GitHub aplinka ir sukurti interneto naršyklėje veikiantį tiesioginių vaizdo transliacijų grotuvą, suderinamą su HTML5 ir HLS technologija.

Vaizdo transliacijų grotuvui sukurti galima rasti nemažai atviro kodo pavyzdžių. Paradžioje galite išbandyti video.js grotuvą: https://github.com/videojs/video.js arba šį tiesioginėms transliacijoms skirtą pavyzdį: https://jsbin.com/gejugat/edit?html,output

# Reikalavimai susikurtai repozitorijai (angl. repository)
  - Turite susikurti esamos repozitorijos kopiją (angl. clone) ir sukurti du šakojimus (angl. branches): 'master' ir 'develop'.
  - 'develop' šakojime turi būti saugomi visi commit'ai, kurie atliekami kodo rašymo metu. Kai tik kodas atnaujinamas, tai turi būti užregistruota commit'e, parašant, kas pakeista ir, galbūt, kas dar neveikia.
  - Kai visas naujai pridėtas funkcionalumas veikia tinkamai, 'develop' šaklojimas turi būti sulietas (angl. merge) su 'master' šakojimu.

# Reikalavimai grotuvui
  - Grotuvas turi būti suderinamas su HLS technologija ir įterptas į index.html failą.
  - Grotuvas turi gebėti atkurti "Big Bunny" vaizdo įrašą iš URL: https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8
  - Jei grotuvui atkurti įrašo nepavyksta, galima pabandyti pasiekti "Big Bunny" iš šio srauto: https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8
  - Turi būti įgyvendinti trys papildomi funkcionalumai ir įterpti į index.html: atkurti (Play), pristabdyti (Pause), Sustabdyti (Stop), peršokimas 5 sekundes į priekį, peršokimas 5 sekundes atgal, Vaizdo transliacijų sąrašo pateikimas, Transliacijų atkūrimas atsitiktine tvarka (angl. Shuffle).
  - Išbandyti sukurtą grotuvą mažiausiai dviejose naršyklėse ir README.md parašyti, kuriose naršyklėse išbandyta ir veikia.
  - Įgyvendinus papildomą funkcionalumą, galima gauti papildomų balų.
  - Laboratorinis darbas užskaitomas, jei rezultate įgyvendinti bent du reikalavimai iš sąrašo
