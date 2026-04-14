// DeutschMeister v4.0 — topics.js
// Yeni konu: TOPIC_CONTENT'e key ekle + TOPICS dizisine satır ekle


var TOPIC_CONTENT = {
  // -- A1 KONULARI -------------------------------------------------------------
  begr: {
    lv:"A1", name:"Begrüßung & Abschied", tr:"Selam & Veda",
    anlatim:[
      {baslik:"Günün saatine göre selamlama", icerik:"<b>Sabah (06:00-12:00):</b> Guten Morgen! → Günaydın!<br><b>Öğle (12:00-18:00):</b> Guten Tag! → İyi günler!<br><b>Akşam (18:00-22:00):</b> Guten Abend! → İyi akşamlar!<br><b>Gece:</b> Gute Nacht! → İyi geceler!"},
      {baslik:"Vedalaşma", icerik:"<b>Resmi:</b> Auf Wiedersehen! → Hoşça kal! (görüşmek üzere)<br><b>Samimi:</b> Tschüss! / Tschau! → Görüşürüz!<br><b>Yakında görüşmek için:</b> Bis bald! → Yakında görüşürüz!<br>Bis morgen! → Yarın görüşürüz! / Bis Montag! → Pazartesi görüşürüz!"},
      {baslik:"Hal hatır sorma", icerik:"Wie geht es Ihnen? (resmi) / Wie geht es dir? (samimi) → Nasılsınız/Nasılsın?<br><br>Cevaplar:<br>• Danke, gut! → Teşekkürler, iyiyim!<br>• Sehr gut, danke! → Çok iyiyim, teşekkürler!<br>• Es geht. → İdare eder.<br>• Nicht so gut. → Pek iyi değil."},
      {baslik:"Tanışma", icerik:"Ich heiße... / Mein Name ist... → Adım...<br>Ich bin... → Ben...-im<br>Freut mich! → Memnun oldum!<br>Schön, Sie/dich kennenzulernen! → Tanıştığımıza sevindim!"}
    ],
    sorular:[
      {t:"mcq",d:1,q:"Sabah 9'da meslektaşına ne dersin?",o:["Guten Abend","Gute Nacht","Guten Morgen","Auf Wiedersehen"],a:2,e:"Guten Morgen = Günaydın (sabah selamı)"},
      {t:"mcq",d:1,q:"Arkadaşına samimi veda:",o:["Auf Wiedersehen","Guten Tag","Tschüss","Guten Morgen"],a:2,e:"Tschüss = samimi hoşça kal"},
      {t:"fill",d:1,q:"Wie geht ___ dir? (nasılsın?)",c:"es",e:"Wie geht ES dir? = Nasılsın? — es zorunlu"},
      {t:"mcq",d:2,q:"'Freut mich!' ne demek?",o:["Özür dilerim","Memnun oldum","Teşekkürler","Hoşça kal"],a:1,e:"Freut mich = Memnun oldum (tanışma sırasında)"},
      {t:"fill",d:2,q:"___ bald! (Yakında görüşürüz!)",c:"Bis",e:"Bis bald! = Yakında görüşürüz! / Bis morgen = Yarın görüşürüz"},
      {t:"mcq",d:2,q:"Resmi 'nasılsınız?' sorusu:",o:["Wie geht es dir?","Wie geht es Ihnen?","Wie heißt du?","Woher kommst du?"],a:1,e:"Ihnen = resmi Sie'nin Dativ hali"},
      {t:"mcq",d:3,q:"Telefonda veda etmek için özel bir ifade var mı?",o:["Tschüss","Auf Wiedersehen","Auf Wiederhören","Gute Nacht"],a:2,e:"Auf Wiederhören = Telefonda 'görüşmek üzere' (hören = duymak)"},
      {t:"fill",d:3,q:"___ gut! Und dir? (iyiyim, ya sen?)",c:"Danke,",e:"Danke, gut! Und dir? = Teşekkürler iyiyim, ya sen?"}
    ]
  },
  zahlen: {
    lv:"A1", name:"Zahlen & Uhrzeit", tr:"Sayılar & Saat",
    anlatim:[
      {baslik:"1-20 Sayılar", icerik:"1=ein/eins, 2=zwei, 3=drei, 4=vier, 5=fünf<br>6=sechs, 7=sieben, 8=acht, 9=neun, 10=zehn<br>11=elf, 12=zwölf, 13=dreizehn, 14=vierzehn, 15=fünfzehn<br>16=sechzehn, 17=siebzehn, 18=achtzehn, 19=neunzehn, 20=zwanzig"},
      {baslik:"20-100 arası", icerik:"20=zwanzig, 30=dreißig, 40=vierzig, 50=fünfzig<br>60=sechzig, 70=siebzig, 80=achtzig, 90=neunzig, 100=hundert<br><br><b>Birleşik sayılar (önce birler!):</b><br>21=einundzwanzig, 35=fünfunddreißig, 47=siebenundvierzig<br>Kural: [birler] + und + [onlar]"},
      {baslik:"Saat söyleme", icerik:"Wie viel Uhr ist es? / Wie spät ist es? = Saat kaç?<br><br>• Es ist drei Uhr. = Saat 3.<br>• Es ist halb vier. = 3.30 (dördün yarısı!)<br>• Es ist Viertel nach zwei. = 2.15<br>• Es ist Viertel vor fünf. = 4.45<br><br><b>Dikkat:</b> halb vier = 3.30 (Türkçe'nin aksine!)",},
      {baslik:"Zaman edatları", icerik:"<b>um</b> = saat (um 8 Uhr = saat 8'de)<br><b>am</b> = gün (am Montag = Pazartesi)<br><b>im</b> = ay/mevsim (im Januar = Ocak'ta)<br><b>in</b> = süre sonra (in 5 Minuten = 5 dakika sonra)"}
    ],
    sorular:[
      {t:"mcq",d:1,q:"37 sayısı Almancada:",o:["dreißigsieben","siebenunddreißig","siebenunddreissig","dreiundsiezig"],a:1,e:"siebenunddreißig — birler + und + onlar sırası!"},
      {t:"fill",d:1,q:"Es ist ___ vier. (saat 3.30)",c:"halb",e:"halb vier = 3.30 — halb = yarı, dördün yarısı demek"},
      {t:"mcq",d:2,q:"Saat 2.15 nasıl söylenir?",o:["halb drei","Viertel vor drei","Viertel nach zwei","zwei Uhr fünfzehn"],a:2,e:"Viertel nach zwei = ikinin çeyreği sonrası = 2.15"},
      {t:"fill",d:2,q:"___ Montag habe ich Kurs. (Pazartesi kursim var)",c:"Am",e:"Am Montag = Pazartesi. Günler için: am + gün adı"},
      {t:"mcq",d:2,q:"'In zehn Minuten' ne demek?",o:["On dakikada","On dakika önce","On dakika sonra","Her on dakikada"],a:2,e:"in + zaman = ...sonra. In zehn Minuten = 10 dakika sonra"},
      {t:"fill",d:3,q:"55 sayısını Almanca yaz:",c:"fünfundfünfzig",e:"fünfundfünfzig — beş + und + elli"},
      {t:"mcq",d:3,q:"Saat 4.45 nasıl söylenir?",o:["Viertel nach vier","halb fünf","Viertel vor fünf","dreiviertel fünf"],a:2,e:"Viertel vor fünf = beşe çeyrek kala = 4.45"}
    ]
  },
  farben: {
    lv:"A1", name:"Farben & Aussehen", tr:"Renkler & Görünüm",
    anlatim:[
      {baslik:"Temel Renkler", icerik:"rot=kırmızı, blau=mavi, grün=yeşil, gelb=sarı<br>schwarz=siyah, weiß=beyaz, grau=gri, braun=kahverengi<br>orange=turuncu, rosa=pembe, lila=mor, violett=mor (koyu)"},
      {baslik:"Renk kullanımı", icerik:"<b>Sıfat olarak (artikel sonrası -e/-en/-em):</b><br>Das rote Auto = Kırmızı araba<br>Ein blaues Hemd = Mavi gömlek<br><br><b>In + renk (renk belirtmek):</b><br>Haben Sie das in Blau? = Bunu mavide var mı?<br>Ich mag Grün. = Yeşili severim."},
      {baslik:"Fiziksel özellikler", icerik:"groß/klein = büyük/küçük<br>dick/dünn = şişman/ince<br>lang/kurz = uzun/kısa<br>jung/alt = genç/yaşlı<br><br>Saç: lange Haare=uzun saç, kurze Haare=kısa saç<br>braune/blonde/schwarze/rote Haare<br>blaue/grüne/braune Augen"}
    ],
    sorular:[
      {t:"mcq",d:1,q:"'Gelb' hangi renk?",o:["Mavi","Yeşil","Sarı","Kırmızı"],a:2,e:"gelb = sarı. Hatırlatma: Sonbahar yaprakları gelb olur!"},
      {t:"fill",d:1,q:"Das Gras ist ___. (çimen yeşildir)",c:"grün",e:"grün = yeşil. Das Gras ist grün."},
      {t:"mcq",d:2,q:"'Braune Haare' ne demek?",o:["Sarı saç","Kızıl saç","Kahverengi saç","Siyah saç"],a:2,e:"braun = kahverengi. braune Haare = kahverengi saç"},
      {t:"fill",d:2,q:"Der Himmel ist ___. (gökyüzü mavidir)",c:"blau",e:"blau = mavi. Der Himmel ist blau."},
      {t:"mcq",d:3,q:"'Haben Sie das in Rot?' sorusunda 'in Rot' ne anlama gelir?",o:["Kırmızı fiyatı","Kırmızı renkte","Kırmızı kutu içinde","Kırmızıya yakın"],a:1,e:"in + Renk = renk belirtir. In Rot = kırmızı renkte"}
    ]
  },
  familie: {
    lv:"A1", name:"Familie", tr:"Aile",
    anlatim:[
      {baslik:"Aile üyeleri", icerik:"der Vater=baba, die Mutter=anne, die Eltern=ebeveynler<br>der Bruder=erkek kardeş, die Schwester=kız kardeş<br>der Sohn=oğul, die Tochter=kız çocuğu<br>der Großvater/Opa=dede, die Großmutter/Oma=büyükanne<br>der Onkel=amca/dayı, die Tante=teyze/hala<br>der Cousin=erkek kuzen, die Cousine=kız kuzen"},
      {baslik:"Aile durumu", icerik:"ledig = bekar<br>verheiratet = evli<br>geschieden = boşanmış<br>verwitwet = dul<br>verlobt = nişanlı<br><br>Ich bin verheiratet. = Evliyim.<br>Ich habe zwei Kinder. = İki çocuğum var."},
      {baslik:"Aileyi tanıtmak", icerik:"Das ist mein Vater. Er heißt... = Bu benim babam. Adı...<br>Meine Mutter arbeitet als... = Annem ... olarak çalışıyor.<br>Ich habe einen Bruder und eine Schwester. = Bir erkek bir kız kardeşim var.<br>Mein Bruder ist 25 Jahre alt. = Erkek kardeşim 25 yaşında."}
    ],
    sorular:[
      {t:"mcq",d:1,q:"'Die Geschwister' ne demek?",o:["Ebeveynler","Kardeşler (erkek+kız)","Büyükanne ve büyükbaba","Kuzenler"],a:1,e:"Geschwister = kardeşler (cinsiyetten bağımsız çoğul)"},
      {t:"fill",d:1,q:"Das ist ___ Mutter. (benim annem - Nominativ)",c:"meine",e:"meine Mutter — die Mutter dişil, Nominativ: meine"},
      {t:"mcq",d:2,q:"'Verheiratet' ne demek?",o:["Bekar","Evli","Boşanmış","Nişanlı"],a:1,e:"verheiratet = evli. Ich bin verheiratet = Evliyim"},
      {t:"fill",d:2,q:"Ich ___ einen Bruder und zwei Schwestern. (sahip olmak)",c:"habe",e:"haben = sahip olmak: Ich habe einen Bruder = Bir erkek kardeşim var"},
      {t:"mcq",d:3,q:"'Meine Nichte' kim?",o:["Kız kuzen","Yeğen (kız)","Hala","Gelinciği"],a:1,e:"die Nichte = yeğen (kız). der Neffe = yeğen (erkek)"}
    ]
  },
  berufe: {
    lv:"A1", name:"Berufe", tr:"Meslekler",
    anlatim:[
      {baslik:"Yaygın meslekler", icerik:"der Arzt / die Ärztin = doktor<br>der Lehrer / die Lehrerin = öğretmen<br>der Ingenieur / die Ingenieurin = mühendis<br>der Koch / die Köchin = aşçı<br>der Polizist / die Polizistin = polis<br>der Verkäufer / die Verkäuferin = satıcı<br>der Krankenpfleger / die Krankenschwester = hemşire<br>der Student / die Studentin = üniversite öğrencisi"},
      {baslik:"Meslek sorma ve söyleme", icerik:"Was sind Sie von Beruf? = Mesleğiniz ne?<br>Was machst du beruflich? = Ne iş yapıyorsun?<br><br>Cevap: Ich bin + meslek (artikel YOK!)<br>Ich bin Arzt. = Doktorum. (ein Arzt DEĞİL!)<br>Ich arbeite als Ingenieur. = Mühendis olarak çalışıyorum.<br>Ich studiere Medizin. = Tıp okuyorum."},
      {baslik:"İşyeri", icerik:"Ich arbeite in einem Krankenhaus. = Hastanede çalışıyorum.<br>Ich arbeite bei Siemens. = Siemens'te çalışıyorum.<br>Ich arbeite von zu Hause. = Evden çalışıyorum.<br>Ich bin selbstständig. = Serbest çalışıyorum."}
    ],
    sorular:[
      {t:"mcq",d:1,q:"'Ich bin Arzt.' cümlesinde neden artikel yok?",o:["Unutulmuş","Meslek bildirmede artikel kullanılmaz","Arzt zaten artikel","Sadece resmi dilde kullanılır"],a:1,e:"Almancada meslek bildirirken artikel kullanılmaz: Ich bin Arzt. (ein Arzt DEĞİL)"},
      {t:"fill",d:1,q:"Was ___ Sie von Beruf? (Mesleğiniz ne?)",c:"sind",e:"Was SIND Sie von Beruf? — sein fiili ile sorulur"},
      {t:"mcq",d:2,q:"'Die Krankenschwester' kim?",o:["Doktor","Hemşire","Eczacı","Diş hekimi"],a:1,e:"die Krankenschwester = hemşire (kadın). der Krankenpfleger = hemşire (erkek)"},
      {t:"fill",d:2,q:"Ich arbeite ___ Ingenieur. (mühendis olarak)",c:"als",e:"als = olarak. Ich arbeite als Ingenieur = Mühendis olarak çalışıyorum"},
      {t:"mcq",d:3,q:"'Ich bin selbstständig.' ne demek?",o:["İşsizim","Emekliyim","Serbest çalışıyorum","Öğrenciyim"],a:2,e:"selbstständig = bağımsız/serbest. kendi hesabına çalışmak"}
    ]
  },
  sein_haben: {
    lv:"A1", name:"sein & haben", tr:"Olmak & Sahip Olmak",
    anlatim:[
      {baslik:"sein (olmak) — çekim tablosu", icerik:"ich <b>bin</b> — du <b>bist</b> — er/sie/es <b>ist</b><br>wir <b>sind</b> — ihr <b>seid</b> — sie/Sie <b>sind</b><br><br>Kullanım: durum, özellik, kimlik bildirmek<br>Ich bin müde. = Yorgunum.<br>Er ist Arzt. = O doktor.<br>Das Wetter ist schön. = Hava güzel."},
      {baslik:"haben (sahip olmak) — çekim tablosu", icerik:"ich <b>habe</b> — du <b>hast</b> — er/sie/es <b>hat</b><br>wir <b>haben</b> — ihr <b>habt</b> — sie/Sie <b>haben</b><br><br>Kullanım: sahiplik, ihtiyaç, his<br>Ich habe ein Auto. = Arabam var.<br>Er hat Hunger. = Acıkmış.<br>Wir haben Zeit. = Vaktimiz var."},
      {baslik:"Dikkat: sein mi haben mi?", icerik:"<b>sein:</b> Ich bin krank. / Du bist nett. / Es ist kalt.<br><b>haben:</b> Ich habe Hunger. / Sie hat Fieber. / Wir haben Glück.<br><br>Kural: Duygu/his/ihtiyaç = haben<br>Özellik/durum = sein"}
    ],
    sorular:[
      {t:"mcq",d:1,q:"Ich ___ Hunger. (acıktım)",o:["bin","bist","habe","hat"],a:2,e:"haben = sahip olmak/ihtiyaç: Ich habe Hunger = Acıktım"},
      {t:"mcq",d:1,q:"Er ___ sehr nett. (çok nazik)",o:["hat","habe","ist","sind"],a:2,e:"sein = özellik: Er ist nett = O nazik"},
      {t:"fill",d:2,q:"Wir ___ drei Kinder. (üç çocuğumuz var)",c:"haben",e:"haben 1.çoğul: wir haben. Wir haben drei Kinder."},
      {t:"fill",d:2,q:"Ihr ___ heute frei. (bugün serbestsiniz)",c:"seid",e:"sein 2.çoğul: ihr seid. Ihr seid heute frei = Bugün serbestsiniz."},
      {t:"mcq",d:3,q:"Hangi cümle DOĞRUDUR?",o:["Ich habe müde.","Ich bin Hunger.","Sie hat Recht.","Er sind krank."],a:2,e:"Sie hat Recht = Haklı. (Recht haben = haklı olmak — haben ile!)"}
    ]
  },
  essen: {
    lv:"A1", name:"Essen & Trinken", tr:"Yemek & İçmek",
    anlatim:[
      {baslik:"Öğünler ve yiyecekler", icerik:"das Frühstück=kahvaltı, das Mittagessen=öğle yemeği, das Abendessen=akşam yemeği<br><br>Yaygın yiyecekler:<br>das Brot=ekmek, der Käse=peynir, die Wurst=sosis<br>das Ei=yumurta, der Apfel=elma, die Kartoffel=patates<br>das Fleisch=et, der Fisch=balık, das Gemüse=sebze"},
      {baslik:"İçecekler ve sipariş verme", icerik:"das Wasser=su, der Kaffee=kahve, der Tee=çay<br>das Bier=bira, der Wein=şarap, der Saft=meyve suyu<br><br>Sipariş: Ich möchte/hätte gern... = ...istiyorum<br>Ich hätte gern einen Kaffee. = Bir kahve istiyorum.<br>Was empfehlen Sie? = Ne tavsiye edersiniz?"},
      {baslik:"Yemek sevgisi ifade etmek", icerik:"Ich esse gern Pizza. = Pizzayı severim.<br>Ich mag Käse nicht. = Peyniri sevmiyorum.<br>Das schmeckt gut/lecker! = Bu güzel/lezzetli!<br>Ich bin Vegetarier/in. = Vejeteryanım.<br>Ich bin allergisch gegen Nüsse. = Fındığa alerjim var."}
    ],
    sorular:[
      {t:"mcq",d:1,q:"'Das Frühstück' ne demek?",o:["Öğle yemeği","Akşam yemeği","Kahvaltı","Atıştırmalık"],a:2,e:"Frühstück = kahvaltı. früh = erken + Stück = parça"},
      {t:"fill",d:1,q:"Ich ___ gern Kaffee. (kahveyi severim)",c:"trinke",e:"trinken = içmek. Ich trinke gern Kaffee = Kahveyi severim."},
      {t:"mcq",d:2,q:"Restoranda sipariş: 'Ich hätte gern...' nasıl çevrilir?",o:["Bende var...","Geçmişte vardı...","...istiyorum (nazik)","...aldım"],a:2,e:"hätte gern = nazik istek formu. Ich hätte gern einen Tee = Bir çay istiyorum."},
      {t:"fill",d:2,q:"Das ___ sehr lecker! (çok lezzetli)",c:"schmeckt",e:"schmecken = tadı olmak/lezzeti olmak. Das schmeckt lecker! = Çok lezzetli!"},
      {t:"mcq",d:3,q:"'Ich bin allergisch gegen Erdnüsse.' ne demek?",o:["Fıstık seviyorum","Fıstığa alerjim var","Fıstık yiyemem (diyet)","Fıstık yemek istiyorum"],a:1,e:"allergisch gegen = alerjik. Erdnüsse = yer fıstığı"}
    ]
  },
  wochentage: {
    lv:"A1", name:"Wochentage & Monate", tr:"Günler & Aylar",
    anlatim:[
      {baslik:"Haftanın günleri", icerik:"Montag=Pazartesi, Dienstag=Salı, Mittwoch=Çarşamba<br>Donnerstag=Perşembe, Freitag=Cuma<br>Samstag=Cumartesi, Sonntag=Pazar<br><br>Hepsi eril (der)! Am Montag, am Dienstag..."},
      {baslik:"Aylar", icerik:"Januar=Ocak, Februar=Şubat, März=Mart, April=Nisan<br>Mai=Mayıs, Juni=Haziran, Juli=Temmuz, August=Ağustos<br>September=Eylül, Oktober=Ekim, November=Kasım, Dezember=Aralık<br><br>Im Januar, im Februar... (im + ay)"},
      {baslik:"Mevsimler ve tarih", icerik:"der Frühling=ilkbahar, der Sommer=yaz<br>der Herbst=sonbahar, der Winter=kış<br>Im Sommer fahre ich ans Meer. = Yazın denize gidiyorum.<br><br>Tarih: am + sıra sayısı + ay<br>am ersten Januar = 1 Ocak'ta<br>am fünfzehnten Mai = 15 Mayıs'ta"}
    ],
    sorular:[
      {t:"mcq",d:1,q:"Haftanın ortası (Wochenmitte) hangi gün?",o:["Montag","Dienstag","Mittwoch","Donnerstag"],a:2,e:"Mittwoch = Çarşamba. Mitte = orta, Woche = hafta"},
      {t:"fill",d:1,q:"___ Montag habe ich keine Arbeit. (Pazartesi işim yok)",c:"Am",e:"am Montag = Pazartesi. Günler için am + gün"},
      {t:"mcq",d:2,q:"'Im Juli' ne demek?",o:["Temmuz'a","Temmuz'da","Temmuz'dan","Temmuz için"],a:1,e:"im Juli = Temmuz'da. Aylar için im + ay adı"},
      {t:"fill",d:2,q:"Mein Geburtstag ist am ___ Mai. (15'inde - sıra sayısı)",c:"fünfzehnten",e:"am fünfzehnten Mai = 15 Mayıs'ta. Dativ sıra sayısı: -ten"},
      {t:"mcq",d:3,q:"Kış mevsimi Almancada:",o:["der Frühling","der Herbst","der Winter","der Sommer"],a:2,e:"der Winter = kış. Im Winter ist es kalt = Kışın soğuk olur."}
    ]
  },
  uhrzeit: {
    lv:"A1", name:"Zahlen & Uhrzeit", tr:"Sayılar & Saat",
    anlatim:[
      {baslik:"Sayılar 1-100 özet", icerik:"1-12: ein, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn, elf, zwölf<br>13-19: dreizehn...neunzehn<br>20,30,40,50,60,70,80,90: zwanzig, dreißig, vierzig...<br>Birleşik: 21=einundzwanzig (birler+und+onlar)"},
      {baslik:"Saat okuma", icerik:"<b>Tam saat:</b> Es ist drei Uhr. = Saat 3.<br><b>Buçuk:</b> Es ist halb vier. = 3.30 (DİKKAT: halb dört değil!)<br><b>Çeyrek geçiyor:</b> Viertel nach zwei = 2.15<br><b>Çeyrek kala:</b> Viertel vor fünf = 4.45<br><b>Resmi/dijital:</b> Es ist 14 Uhr 30."},
      {baslik:"Günlük zaman ifadeleri", icerik:"morgens=sabahları, mittags=öğleyin, abends=akşamları, nachts=geceleri<br><br>um 8 Uhr = saat 8'de<br>gegen 9 Uhr = saat 9 civarı<br>von 9 bis 17 Uhr = 9'dan 17'ye kadar"}
    ],
    sorular:[
      {t:"fill",d:1,q:"Es ist ___ acht. (saat 7.30)",c:"halb",e:"halb acht = 7.30. halb = yarı, sekizin yarısı!"},
      {t:"mcq",d:2,q:"'Viertel vor drei' kaç?",o:["3.15","2.45","3.45","2.15"],a:1,e:"Viertel vor drei = üçe çeyrek kala = 2.45"},
      {t:"fill",d:2,q:"Der Zug fährt ___ 9 Uhr ab. (saat 9'da)",c:"um",e:"um = saat için. um 9 Uhr = saat 9'da"},
      {t:"mcq",d:3,q:"63 sayısı Almancada:",o:["dreiundsechzig","sechzigdrei","dreiünsechzig","sechsunddreißig"],a:0,e:"dreiundsechzig — drei(3) + und + sechzig(60)"}
    ]
  },
  wohnen: {
    lv:"A1", name:"Wohnen & Haus", tr:"Ev & Yaşam",
    anlatim:[
      {baslik:"Ev bölümleri", icerik:"das Zimmer=oda, die Küche=mutfak, das Badezimmer=banyo<br>das Wohnzimmer=oturma odası, das Schlafzimmer=yatak odası<br>der Flur=koridor, der Balkon=balkon, der Keller=bodrum<br>das Erdgeschoss=zemin kat, der erste Stock=1. kat"},
      {baslik:"Mobilya ve eşyalar", icerik:"der Tisch=masa, der Stuhl=sandalye, das Sofa=kanepe<br>das Bett=yatak, der Schrank=dolap, die Lampe=lamba<br>der Kühlschrank=buzdolabı, der Herd=ocak<br>die Waschmaschine=çamaşır makinesi"},
      {baslik:"Ev aramak", icerik:"Ich suche eine Wohnung. = Daire arıyorum.<br>Die Miete beträgt... = Kira ... tutmaktadır.<br>Warmmiete=faturalar dahil kira, Kaltmiete=faturalar hariç<br>Wie viele Zimmer hat die Wohnung? = Daire kaç odalı?<br>Die Wohnung hat 3 Zimmer. = Daire 3 odalı."}
    ],
    sorular:[
      {t:"mcq",d:1,q:"'Das Schlafzimmer' nedir?",o:["Mutfak","Banyo","Yatak odası","Oturma odası"],a:2,e:"Schlaf = uyku, Zimmer = oda → Schlafzimmer = yatak odası"},
      {t:"fill",d:1,q:"Ich wohne im dritten ___. (3. katta)",c:"Stock",e:"Stock = kat. im dritten Stock = 3. katta"},
      {t:"mcq",d:2,q:"'Warmmiete' ne demek?",o:["Sıcak iklimde kira","Faturalar dahil kira","Yaz kirası","Aylık kira"],a:1,e:"Warm = ısınma, Miete = kira. Warmmiete = faturalar dahil kira"},
      {t:"fill",d:2,q:"Der ___ ist kaputt. (buzdolabı bozuk)",c:"Kühlschrank",e:"der Kühlschrank = buzdolabı. kühl = serin, Schrank = dolap"},
      {t:"mcq",d:3,q:"'Wieviele Zimmer hat die Wohnung?' sorusuna cevap:",o:["Die Wohnung ist groß.","Die Wohnung hat drei Zimmer.","Die Wohnung kostet 800 Euro.","Ich suche eine Wohnung."],a:1,e:"kaç oda? sorusuna: hat + sayı + Zimmer ile cevap verilir"}
    ]
  },
  richtungen: {
    lv:"A1", name:"Richtungen & Orte", tr:"Yönler & Yerler",
    anlatim:[
      {baslik:"Temel yönler", icerik:"links=sol, rechts=sağ, geradeaus=düz/ileri<br>hier=burada, dort=orada, gegenüber=karşısında<br>neben=yanında, hinter=arkasında, vor=önünde<br>oben=yukarıda, unten=aşağıda"},
      {baslik:"Yol tarif etmek", icerik:"Wie komme ich zum Bahnhof? = Tren istasyonuna nasıl giderim?<br>Gehen Sie geradeaus! = Düz gidin!<br>Biegen Sie links/rechts ab! = Sola/sağa dönün!<br>Nehmen Sie die erste/zweite Straße links. = İlk/ikinci sokaktan sola dönün.<br>Der Bahnhof ist auf der linken Seite. = İstasyon sol tarafta."},
      {baslik:"Önemli yerler", icerik:"der Bahnhof=tren istasyonu, die Haltestelle=durak<br>die Apotheke=eczane, das Krankenhaus=hastane<br>die Post=postane, die Bank=banka<br>der Supermarkt=süpermarket, das Rathaus=belediye"}
    ],
    sorular:[
      {t:"mcq",d:1,q:"'Geradeaus' ne demek?",o:["Sola","Sağa","Düz/ileri","Geri"],a:2,e:"geradeaus = düz/ileri git. gerade = düz, aus = dışarı"},
      {t:"fill",d:1,q:"Biegen Sie ___ ab! (sola dönün)",c:"links",e:"links = sol. Biegen Sie links ab! = Sola dönün!"},
      {t:"mcq",d:2,q:"'Die Apotheke ist gegenüber der Post.' ne demek?",o:["Eczane postanede","Eczane postaneyle aynı yerde","Eczane postaneye yakın","Eczane postanelerin karşısında"],a:3,e:"gegenüber = karşısında. Eczane postaneye karşı tarafta"},
      {t:"fill",d:2,q:"Nehmen Sie die ___ Straße rechts. (2. sokak - sıra sayısı)",c:"zweite",e:"zweite = ikinci. die zweite Straße rechts = ikinci sokaktan sağa"},
      {t:"mcq",d:3,q:"'Das Rathaus' nedir?",o:["Tren istasyonu","Hastane","Belediye binası","Postane"],a:2,e:"das Rathaus = belediye. Rat = meclis/tavsiye, Haus = bina"}
    ]
  },
  adjektive: {
    lv:"A1", name:"Adjektive", tr:"Sıfatlar",
    anlatim:[
      {baslik:"Temel sıfatlar (zıt çiftler)", icerik:"groß/klein=büyük/küçük, alt/jung=eski-yaşlı/yeni-genç<br>gut/schlecht=iyi/kötü, schön/hässlich=güzel/çirkin<br>teuer/billig=pahalı/ucuz, schnell/langsam=hızlı/yavaş<br>warm/kalt=sıcak/soğuk, lang/kurz=uzun/kısa<br>schwer/leicht=ağır-zor/hafif-kolay"},
      {baslik:"Yüklem sıfatı (kolay - ek almaz)", icerik:"Das Auto ist neu. = Araba yeni.<br>Die Frau ist nett. = Kadın nazik.<br>Das Kind ist klein. = Çocuk küçük.<br><br>Bu kullanımda sıfat HİÇ ek almaz!"},
      {baslik:"Sıfat + isim (ek alır!)", icerik:"<b>Belirsiz artikel sonrası:</b><br>ein neues Auto (nötr) = yeni bir araba<br>eine nette Frau (dişil) = nazik bir kadın<br>ein kleines Kind (nötr) = küçük bir çocuk<br>ein großer Mann (eril) = büyük bir adam<br><br>Kural: artikel bilgiyi taşır → sıfat bağımlı ek alır"}
    ],
    sorular:[
      {t:"mcq",d:1,q:"'Das Auto ist schnell.' cümlesinde sıfat ek alıyor mu?",o:["Evet, -e alıyor","Hayır, yüklem sıfatı ek almaz","Evet, -en alıyor","Evet, -es alıyor"],a:1,e:"Yüklem sıfatı (ist + sıfat) HİÇ ek almaz!"},
      {t:"fill",d:1,q:"Das Wetter ist heute ___. (soğuk - kalt)",c:"kalt",e:"kalt = soğuk. Yüklem sıfatı, ek yok."},
      {t:"mcq",d:2,q:"'Ein großer Mann' — neden -er eki?",o:["Eril yüklemi","Belirsiz artikel + eril Nominativ","Dişil çoğul","Dativ eki"],a:1,e:"ein großer Mann — belirsiz eril Nominativ: -er. Eril + Nominativ = -er"},
      {t:"fill",d:2,q:"Sie kauft ein ___ Kleid. (güzel - schön, das Kleid nötr belirsiz)",c:"schönes",e:"schönes Kleid — belirsiz nötr Akkusativ: -es"},
      {t:"mcq",d:3,q:"'Leicht' hem 'hafif' hem de ne anlama gelir?",o:["Zor","Ağır","Kolay","Yavaş"],a:2,e:"leicht = hem hafif hem kolay. schwer = hem ağır hem zor!"}
    ]
  },

  // -- A2 KONULARI -------------------------------------------------------------
  a2_perfekt: {
    lv:"A2", name:"Perfekt (Geçmiş Zaman)", tr:"Geçmiş Zaman (Perfekt)",
    anlatim:[
      {baslik:"Perfekt nedir ve nasıl kurulur?", icerik:"Almanca'da günlük konuşmada geçmiş için Perfekt kullanılır.<br><br><b>Yapı:</b> haben/sein + Partizip II (cümle sonunda)<br><br>Ich habe Deutsch gelernt. = Almanca öğrendim.<br>Ich bin nach Berlin gefahren. = Berlin'e gittim."},
      {baslik:"Partizip II nasıl yapılır?", icerik:"<b>Düzenli fiiller:</b> ge- + Stamm + -(e)t<br>machen → gemacht, kaufen → gekauft, arbeiten → gearbeitet<br><br><b>Düzensiz fiiller:</b> ge- + değişmiş kök + -en<br>fahren → gefahren, schreiben → geschrieben, essen → gegessen<br><br><b>Trennbar fiiller:</b> on ek + ge + kök + t/en<br>aufmachen → aufgemacht, anrufen → angerufen"},
      {baslik:"haben mi sein mi?", icerik:"<b>sein ile:</b> Hareket fiilleri (gehen, fahren, fliegen, kommen)<br>Hal değişimi (aufstehen, einschlafen, aufwachen)<br>sein, bleiben, werden<br><br><b>haben ile:</b> Diğer tüm fiiller<br><br>Kural: Nereye gittin? → sein. Ne yaptın? → haben"}
    ],
    sorular:[
      {t:"mcq",d:1,q:"'Ich habe gegessen.' Perfekt doğru mu?",o:["Evet, essen haben ile","Hayır, sein ile olmalı","Hayır, geessen olmalı","Hayır, gegessen yanlış"],a:0,e:"essen → haben + gegessen ✓. essen 'ne yaptın?' sorusunu cevaplar → haben"},
      {t:"fill",d:2,q:"Ich ___ gestern ins Kino gegangen. (gehen Perfekt)",c:"bin",e:"gehen hareket fiili → sein. Ich BIN gegangen."},
      {t:"mcq",d:2,q:"'kaufen' Partizip II?",o:["gekaufen","gekauft","kaufte","gekauff"],a:1,e:"kaufen düzenli: ge + kauf + t = gekauft"},
      {t:"fill",d:2,q:"Er hat das Buch ___. (lesen - okumak, Partizip II)",c:"gelesen",e:"lesen düzensiz: ge + les + en = gelesen"},
      {t:"mcq",d:3,q:"'Das Baby ist eingeschlafen.' doğru mu?",o:["Hayır, haben olmalı","Evet, einschlafen hal değişimi → sein","Hayır, eingeschlafen yanlış","Hayır, Baby üçüncü şahıs → hat"],a:1,e:"einschlafen = uykuya dalmak (hal değişimi) → sein. ist eingeschlafen ✓"},
      {t:"fill",d:3,q:"Wir ___ letzte Woche nach Paris ___. (fliegen, Perfekt)",c:"sind geflogen",e:"fliegen hareket → sein + geflogen. Wir SIND geflogen."}
    ]
  },
  a2_praeteritum: {
    lv:"A2", name:"Prateritum", tr:"Yazılı Geçmiş Zaman",
    anlatim:[
      {baslik:"Prateritum ne zaman kullanılır?", icerik:"Yazılı dil, hikayeler ve anlatım için. Günlük konuşmada sein/haben Prateritum daha doğal.<br><br><b>sein Prateritum:</b><br>ich war, du warst, er/sie war, wir waren, ihr wart, sie waren<br><br><b>haben Prateritum:</b><br>ich hatte, du hattest, er hatte, wir hatten, ihr hattet, sie hatten"},
      {baslik:"Düzenli fiiller (schwache Verben)", icerik:"Kök + -(e)te + kişi eki<br>machen → ich machte, du machtest, er machte<br>kaufen → ich kaufte<br>arbeiten → ich arbeitete (kolaylık için -e-)<br><br>Kural: Prateritum eki -te + normal kişi ekleri"},
      {baslik:"Düzensiz fiiller (starke Verben)", icerik:"Kök değişir + kişi ekleri (ich/er için ek yok!)<br>fahren → ich fuhr, gehen → ich ging<br>schreiben → ich schrieb, kommen → ich kam<br>sehen → ich sah, lesen → ich las<br><br>Öğrenmek için: Infinitiv - Prateritum - Partizip II tablosu"}
    ],
    sorular:[
      {t:"mcq",d:1,q:"'sein' Prateritum 1. tekil?",o:["bin","wäre","war","sei"],a:2,e:"war = sein Prateritum 1./3. tekil. Ich war müde = Yorgundum."},
      {t:"fill",d:1,q:"Er ___ früher Lehrer. (sein, Prateritum)",c:"war",e:"war = sein Prateritum 3. tekil. Er war Lehrer = Öğretmendi."},
      {t:"mcq",d:2,q:"'haben' Prateritum 1. çoğul?",o:["hatten","hätten","habt","haben"],a:0,e:"hatten = haben Prateritum 1./3. çoğul. Wir hatten keine Zeit."},
      {t:"fill",d:2,q:"Gestern ___ ich keine Zeit. (haben, Prateritum)",c:"hatte",e:"hatte = haben Prateritum 1. tekil. Ich hatte keine Zeit = Vaktim yoktu."},
      {t:"mcq",d:3,q:"Neden sein/haben günlük dilde Prateritum kullanılır?",o:["Kurallar öyle","Daha kısa ve doğal","Daha resmi","Perfekt zor"],a:1,e:"sein war/hatte — Perfekt'ten (ist gewesen/hat gehabt) çok daha kısa ve doğal!"}
    ]
  },
  a2_kasus: {
    lv:"A2", name:"Kasus (Durum Ekleri)", tr:"Durum Ekleri",
    anlatim:[
      {baslik:"4 durum (Kasus) nedir?", icerik:"<b>Nominativ (1. hal):</b> Özne — Wer? (Kim?)<br>Der Mann kommt. = Adam geliyor.<br><br><b>Akkusativ (4. hal):</b> Nesne — Wen/Was? (Kimi/Neyi?)<br>Ich sehe den Mann. = Adamı görüyorum.<br><br><b>Dativ (3. hal):</b> Dolaylı nesne — Wem? (Kime?)<br>Ich helfe dem Mann. = Adama yardım ediyorum.<br><br><b>Genitiv (2. hal):</b> Sahiplik — Wessen? (Kimin?)<br>Das ist das Auto des Mannes. = Bu adamın arabası."},
      {baslik:"Artikel değişim tablosu", icerik:"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>eril&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dişil&nbsp;&nbsp;&nbsp;nötr&nbsp;&nbsp;&nbsp;&nbsp;çoğul</b><br>Nom: der&nbsp;&nbsp;&nbsp;&nbsp;die&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;das&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;die<br>Akk: den&nbsp;&nbsp;&nbsp;&nbsp;die&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;das&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;die<br>Dat: dem&nbsp;&nbsp;&nbsp;&nbsp;der&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dem&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;den+n<br>Gen: des+s&nbsp;&nbsp;der&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;des+s&nbsp;&nbsp;&nbsp;der<br><br>Dikkat: Sadece <b>eril Akkusativ</b> değişir: der→den"},
      {baslik:"Wechselpräpositionen (2'li edatlar)", icerik:"in, an, auf, unter, über, vor, hinter, neben, zwischen<br><br><b>Dativ (nerede?):</b> Das Buch liegt auf dem Tisch.<br><b>Akkusativ (nereye?):</b> Ich lege das Buch auf den Tisch.<br><br>Wo? → Dativ | Wohin? → Akkusativ"}
    ],
    sorular:[
      {t:"mcq",d:1,q:"'Ich sehe ___ Mann.' (eril belirli Akkusativ)",o:["der","die","den","dem"],a:2,e:"eril belirli Akkusativ: der→den. Ich sehe DEN Mann."},
      {t:"fill",d:2,q:"Ich helfe ___ Frau. (dişil belirli Dativ)",c:"der",e:"dişil Dativ: die→der. helfen + Dativ: Ich helfe DER Frau."},
      {t:"mcq",d:2,q:"'Das Buch liegt auf ___ Tisch.' (nerede - Dativ)",o:["den","der","dem","des"],a:2,e:"auf + Dativ (nerede): der→dem. auf DEM Tisch."},
      {t:"fill",d:2,q:"Ich lege das Buch auf ___ Tisch. (nereye - Akkusativ)",c:"den",e:"auf + Akkusativ (nereye): der→den. auf DEN Tisch."},
      {t:"mcq",d:3,q:"'Mit meinen Freunden' — hangi hal?",o:["Nominativ","Akkusativ","Dativ","Genitiv"],a:2,e:"mit her zaman Dativ. mit meinen Freunden = Dativ çoğul"}
    ]
  },
  a2_konjunktionen: {
    lv:"A2", name:"Konjunktionen", tr:"Bağlaçlar",
    anlatim:[
      {baslik:"Ana cümle bağlaçları (V2 korunur)", icerik:"<b>und</b>=ve, <b>oder</b>=veya, <b>aber</b>=ama, <b>denn</b>=çünkü, <b>sondern</b>=aksine<br><br>Ich lerne Deutsch und ich spreche Englisch.<br>Er kommt, aber er hat keine Zeit.<br>Ich lerne Deutsch, denn ich will in Deutschland arbeiten.<br><br>Bu bağlaçlardan sonra NORMAL V2 devam eder."},
      {baslik:"Yan cümle bağlaçları (fiil sona!)", icerik:"<b>weil</b>=çünkü, <b>dass</b>=...dığını, <b>wenn</b>=...ince/eğer<br><b>ob</b>=...ip...meyeceğini, <b>obwohl</b>=...masına rağmen<br><br>Ich lerne Deutsch, <b>weil</b> ich in Deutschland arbeiten <u>möchte</u>.<br>Ich denke, <b>dass</b> er heute <u>kommt</u>.<br>Ich weiß nicht, <b>ob</b> er <u>kommt</u>."},
      {baslik:"denn vs weil farkı", icerik:"Her ikisi de 'çünkü' demek ama yapı farklı:<br><br>denn → ana cümle (fiil 2. konumda)<br>Ich bleibe zu Hause, <b>denn</b> ich bin krank.<br><br>weil → yan cümle (fiil SONA)<br>Ich bleibe zu Hause, <b>weil</b> ich krank <u>bin</u>."}
    ],
    sorular:[
      {t:"mcq",d:1,q:"'Ich lerne Deutsch, ___ ich in Deutschland arbeiten möchte.' (çünkü - yan cümle)",o:["denn","weil","aber","und"],a:1,e:"weil yan cümle kurar → fiil sona: weil ich ... möchte"},
      {t:"fill",d:2,q:"Ich denke, ___ er heute kommt.",c:"dass",e:"dass = ...dığını. Ich denke, DASS er kommt. Fiil sona!"},
      {t:"mcq",d:2,q:"'obwohl' ne zaman kullanılır?",o:["Sebep bildirmek","Zıtlık/rağmen","Koşul","Amaç"],a:1,e:"obwohl = ...masına rağmen. Obwohl er müde ist, arbeitet er weiter."},
      {t:"fill",d:2,q:"Ich weiß nicht, ___ er kommt. (gelip gelmeyeceğini)",c:"ob",e:"ob = evet/hayır dolaylı soru. fiil sona: ob er kommt"},
      {t:"mcq",d:3,q:"'denn' den sonra fiil nerede?",o:["Sonda","Başta","2. konumda (normal V2)","3. konumda"],a:2,e:"denn ana cümle kurar → normal V2: Ich bleibe, denn ich BIN krank."}
    ]
  },
  a2_modal: {
    lv:"A2", name:"Modalverben A2", tr:"Modal Fiiller (Gelişmiş)",
    anlatim:[
      {baslik:"Modal fiiller özet tablosu", icerik:"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>ich&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;du&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;er/sie&nbsp;&nbsp;wir</b><br>können: kann&nbsp;&nbsp;&nbsp;kannst&nbsp;&nbsp;kann&nbsp;&nbsp;&nbsp;können<br>müssen: muss&nbsp;&nbsp;&nbsp;musst&nbsp;&nbsp;&nbsp;muss&nbsp;&nbsp;&nbsp;müssen<br>dürfen: darf&nbsp;&nbsp;&nbsp;darfst&nbsp;&nbsp;darf&nbsp;&nbsp;&nbsp;dürfen<br>wollen: will&nbsp;&nbsp;&nbsp;willst&nbsp;&nbsp;will&nbsp;&nbsp;&nbsp;wollen<br>sollen: soll&nbsp;&nbsp;&nbsp;sollst&nbsp;&nbsp;soll&nbsp;&nbsp;&nbsp;sollen<br>möchten:möchte&nbsp;möchtest&nbsp;möchte&nbsp;möchten"},
      {baslik:"Anlam farkları", icerik:"<b>können</b> = yapabilmek (yetenek/olasılık)<br><b>müssen</b> = zorunda olmak (zorunluluk)<br><b>dürfen</b> = izni olmak / yasak (izin)<br><b>wollen</b> = istemek (niyet/arzu)<br><b>sollen</b> = ...malı (başkasının isteği)<br><b>möchten</b> = ... istiyorum (nazik istek)"},
      {baslik:"Modal + Infinitiv yapısı", icerik:"Modal fiil 2. konumda, Infinitiv SONA!<br><br>Ich kann gut Deutsch sprechen. = Almanca iyi konuşabiliyorum.<br>Du musst jetzt gehen. = Şimdi gitmelisin.<br>Hier darf man nicht rauchen. = Burada sigara içilmez.<br>Er soll morgen kommen. = Yarın gelmesi gerekiyor (biri istiyor)."}
    ],
    sorular:[
      {t:"mcq",d:1,q:"'Hier darf man nicht parken.' ne demek?",o:["Burada park edilebilir","Burada park edilemez","Park ücreti ödenmeli","Park edilmesi gerekir"],a:1,e:"darf nicht = yasak. Hier darf man nicht parken = Park yasak"},
      {t:"fill",d:2,q:"Du ___ jetzt gehen. (gitmek zorunda - müssen, 2. tekil)",c:"musst",e:"müssen 2. tekil: musst. Du MUSST jetzt gehen."},
      {t:"mcq",d:2,q:"'Er soll morgen anrufen.' — kim istiyor?",o:["O istiyor","Başkası istiyor","Herkes istiyor","Kimse istemiyor"],a:1,e:"sollen = başkasının isteğini iletmek. Seine Mutter sagt, er soll anrufen."},
      {t:"fill",d:2,q:"Ich ___ bitte ein Glas Wasser. (nazik istek - möchten)",c:"möchte",e:"möchte = nazik istek. Ich möchte bitte Wasser = Su istiyorum (nazik)"},
      {t:"mcq",d:3,q:"'Können' ve 'dürfen' farkı?",o:["Fark yok","können=yetenek, dürfen=izin","können=zorunluluk, dürfen=yetenek","können=izin, dürfen=zorunluluk"],a:1,e:"können = yapabilmek (beceri). dürfen = izni olmak. Ich kann schwimmen (becerim var) ≠ Ich darf hier schwimmen (iznim var)"}
    ]
  },
  a2_adjektiv: {
    lv:"A2", name:"Adjektivdeklination", tr:"Sıfat Çekimi",
    anlatim:[
      {baslik:"Neden sıfat çekimi?", icerik:"Almancada isimden önce gelen sıfatlar ek alır. Bu ek artikele ve hale göre değişir.<br><br><b>Üç grup:</b><br>1. Belirli artikel sonrası (der/die/das)<br>2. Belirsiz artikel sonrası (ein/eine)<br>3. Artikelsiz (sıfat direktolarak)"},
      {baslik:"Belirli artikel sonrası (schwache Deklination)", icerik:"Nom: -e / -e / -e / -en<br>Akk: -en/ -e / -e / -en<br>Dat: -en / -en / -en / -en<br><br>Der <b>alte</b> Mann kommt. (eril Nom)<br>Ich sehe die <b>schöne</b> Frau. (dişil Akk)<br>Das <b>kleine</b> Kind schläft. (nötr Nom)<br>Ich helfe dem <b>alten</b> Mann. (eril Dat)"},
      {baslik:"Belirsiz artikel sonrası (gemischte Deklination)", icerik:"Eril Nom: ein <b>alter</b> Mann (-er)<br>Dişil Nom/Akk: eine <b>schöne</b> Frau (-e)<br>Nötr Nom/Akk: ein <b>kleines</b> Kind (-es)<br>Diğer tüm haller: -en<br><br>Kural: Belirsiz artikel bilgi vermediğinde sıfat o bilgiyi taşır!"}
    ],
    sorular:[
      {t:"mcq",d:2,q:"'Der ___ Mann kommt.' (alt, belirli Nominativ eril)",o:["alter","alte","alten","altes"],a:1,e:"Belirli artikel + eril Nominativ: -e. Der ALTE Mann."},
      {t:"fill",d:2,q:"Ich kaufe ein ___ Auto. (neu, nötr belirsiz Akkusativ)",c:"neues",e:"Belirsiz + nötr Akk: -es. ein NEUES Auto."},
      {t:"mcq",d:2,q:"'Die ___ Frau lacht.' (jung, belirli Nominativ dişil)",o:["junge","junger","jungen","junges"],a:0,e:"Belirli artikel + dişil Nominativ: -e. Die JUNGE Frau."},
      {t:"fill",d:3,q:"Ich helfe dem ___ Mann. (alt, belirli Dativ eril)",c:"alten",e:"Belirli Dativ eril: -en. dem ALTEN Mann."},
      {t:"mcq",d:3,q:"'Mit einem ___ Mann.' (freundlich, belirsiz Dativ eril)",o:["freundliche","freundlicher","freundlichem","freundlichen"],a:2,e:"Belirsiz Dativ eril: -em. mit einem FREUNDLICHEM Mann."}
    ]
  },
  a2_trennbar: {
    lv:"A2", name:"Trennbare Verben", tr:"Ayrılabilen Fiiller",
    anlatim:[
      {baslik:"Trennbar fiil nedir?", icerik:"Ön ek + fiil gövdesi = yeni anlam kazanır.<br>Cümlede ön ek SONA gider, gövde 2. konumda kalır!<br><br>aufmachen = açmak<br>Ich mache das Fenster <b>auf</b>. = Pencereyi açıyorum.<br><br>einkaufen = alışveriş yapmak<br>Wir kaufen heute <b>ein</b>. = Bugün alışveriş yapıyoruz."},
      {baslik:"Yaygın trennbar fiiller", icerik:"aufstehen = kalkmak (Er steht auf.)<br>anfangen = başlamak (Der Film fängt an.)<br>abfahren = kalkmak/hareket etmek (Der Zug fährt ab.)<br>anrufen = aramak/telefon etmek (Ich rufe dich an.)<br>fernsehen = TV izlemek (Wir sehen fern.)<br>aufräumen = toplamak (Räum bitte auf!)<br>mitnehmen = yanında götürmek (Nimm einen Schirm mit!)"},
      {baslik:"Partizip II ve Infinitiv", icerik:"Partizip II: ön ek + ge + kök + t/en<br>aufmachen → aufgemacht<br>anrufen → angerufen<br>fernsehen → ferngesehen<br><br>Modal ile Infinitiv: Trennbar ayrılmaz!<br>Ich muss früh aufstehen. = Erken kalkmak zorundayım.<br>Kannst du mich anrufen? = Beni arayabilir misin?"}
    ],
    sorular:[
      {t:"mcq",d:1,q:"'aufmachen' doğru kullanım:",o:["Ich aufmache die Tür.","Ich mache die Tür auf.","Ich mache auf die Tür.","Die Tür macht auf ich."],a:1,e:"Trennbar: gövde 2. konumda, ön ek sona. Ich MACHE die Tür AUF."},
      {t:"fill",d:2,q:"Der Kurs ___ um 9 Uhr ___. (anfangen, 3. tekil)",c:"fängt an",e:"anfangen trennbar: fängt...an. Der Kurs FÄNGT um 9 an."},
      {t:"mcq",d:2,q:"'anrufen' Partizip II?",o:["angerufen","gerufenan","angerufet","gerufen"],a:0,e:"anrufen → an + ge + ruf + en = angerufen. Trennbar Partizip II!"},
      {t:"fill",d:2,q:"Ich muss morgen früh ___. (aufstehen - modal ile infinitiv)",c:"aufstehen",e:"Modal + Infinitiv: Trennbar ayrılmaz! Ich muss früh AUFSTEHEN."},
      {t:"mcq",d:3,q:"'Nimm einen Regenschirm mit!' — hangi fiil?",o:["aufnehmen","mitnehmen","abnehmen","einnehmen"],a:1,e:"mitnehmen = yanında götürmek. Imperativ du: nimm...mit! Regenschirm = şemsiye"}
    ]
  }
};

// B1, B2, C1 Topic Content Extension
Object.assign(TOPIC_CONTENT, {

// ------------------------------------------------------------------------------
// B1 KONULARI
// ------------------------------------------------------------------------------

b1_konjunktiv2: {
  lv:"B1", name:"Konjunktiv II", tr:"Dilek/Kibarlık Kipi",
  anlatim:[
    {baslik:"Konjunktiv II nedir?", icerik:"Gerçek olmayan durumlar, kibarlık ve tahmin için kullanılır.<br><br>\n<b>3 temel kullanım:</b><br>\n1. Kibarlık: Könnten Sie mir helfen? = Yardım edebilir misiniz?<br>\n2. Dilek: Wenn ich Zeit hätte... = Vaktim olsaydı...<br>\n3. Tavsiye: Du solltest mehr schlafen. = Daha fazla uyumalısın."},
    {baslik:"Konjunktiv II yapısı", icerik:"<b>würde + Infinitiv</b> (en yaygın)<br>\nIch würde gern reisen. = Seyahat etmek isterdim.<br>\nEr würde das nie machen. = O bunu asla yapmazdı.<br><br>\n<b>Önemli fiiller direk form alır:</b><br>\nsein → wäre (ich wäre, du wärst, er wäre)<br>\nhaben → hätte (ich hätte, du hättest, er hätte)<br>\nkönnen → könnte (ich könnte)<br>\nmüssen → müsste, dürfen → dürfte, sollen → sollte"},
    {baslik:"Kibarlık ifadeleri", icerik:"Könnten Sie bitte... = ...yapabilir misiniz? (çok nazik)<br>\nWürden Sie bitte... = ...yapar mısınız?<br>\nIch hätte gern... = ...istiyorum (nazik istek)<br>\nDürfte ich...? = ...yapabilir miyim? (çok resmi)<br>\nEs wäre schön, wenn... = ...olsaydı çok güzel olurdu"},
    {baslik:"Koşul cümlecikleri (Konditionalsätze)", icerik:"<b>Gerçekleşmemiş koşul:</b><br>\nWenn ich reich wäre, würde ich reisen.<br>\n= Zengin olsaydım seyahat ederdim.<br><br>\nWenn er früher aufgestanden wäre, hätte er den Zug erwischt.<br>\n= Daha erken kalksaydı treni yakalardı. (geçmiş!)<br><br>\nKural: wenn + Konjunktiv II → Hauptsatz + würde/hätte/wäre"}
  ],
  sorular:[
    {t:"mcq",d:1,q:"'Könnten Sie mir helfen?' neden Konjunktiv II?",o:["Geçmiş zaman","Kibarlık/nazik istek","Emir kipi","Gelecek zaman"],a:1,e:"Konjunktiv II kibarlık için: Könnten (Konnten'den değil!) çok nazik."},
    {t:"fill",d:2,q:"Ich ___ gern nach Japan reisen. (würde)",c:"würde",e:"würde + Infinitiv = Konjunktiv II. Ich würde gern reisen = Seyahat etmek isterdim."},
    {t:"mcq",d:2,q:"'Wenn ich Zeit hätte, ...' devamı nasıl gelir?",o:["... werde ich lernen.","... würde ich mehr lernen.","... habe ich gelernt.","... lerne ich."],a:1,e:"Koşul cümlesinde würde + Infinitiv: Wenn ich Zeit hätte, würde ich lernen."},
    {t:"fill",d:2,q:"Er ___ das nie sagen. (würde - asla söylemezdi)",c:"würde",e:"würde + Infinitiv. Er würde das nie sagen."},
    {t:"mcq",d:3,q:"'hätte' hangi fiilin Konjunktiv II'si?",o:["sein","werden","haben","kommen"],a:2,e:"haben → Konjunktiv II: hätte. sein → wäre, werden → würde"},
    {t:"fill",d:3,q:"Wenn ich reich ___, würde ich reisen.",c:"wäre",e:"sein Konjunktiv II: wäre. Wenn ich reich WÄRE... = Zengin olsaydım..."}
  ]
},

b1_passiv: {
  lv:"B1", name:"Passiv", tr:"Edilgen Çatı",
  anlatim:[
    {baslik:"Passiv nedir ve neden kullanılır?", icerik:"Edilgen: Eylemin kim tarafından yapıldığı değil, eylemin kendisi önemli.<br><br>\n<b>Aktif:</b> Der Koch kocht das Essen. = Aşçı yemeği pişiriyor.<br>\n<b>Passiv:</b> Das Essen wird gekocht. = Yemek pişirilmektedir.<br><br>\nKullanım: Talimatlar, haberler, bilimsel yazılar, resmi metinler"},
    {baslik:"Präsens Passiv yapısı", icerik:"<b>werden + Partizip II</b><br><br>\nDas Buch wird gelesen. = Kitap okunmaktadır.<br>\nDie Briefe werden geschrieben. = Mektuplar yazılmaktadır.<br>\nDas Auto wird repariert. = Araba tamir edilmektedir.<br><br>\nwerden çekimi: ich werde, du wirst, er wird, wir werden, ihr werdet, sie werden"},
    {baslik:"Prateritum Passiv", icerik:"<b>wurde + Partizip II</b><br><br>\nDas Buch wurde geschrieben. = Kitap yazıldı.<br>\nDer Brief wurde verschickt. = Mektup gönderildi.<br>\nDie Stadt wurde gebaut. = Şehir inşa edildi.<br><br>\nwurde çekimi: ich wurde, du wurdest, er wurde, wir wurden"},
    {baslik:"von + wem (kim tarafından?)", icerik:"Aktif cümledeki özne Passiv'de von + Dativ olur:<br><br>\n<b>Aktif:</b> Goethe schrieb den Roman.<br>\n<b>Passiv:</b> Der Roman wurde von Goethe geschrieben.<br>\n= Roman Goethe tarafından yazıldı.<br><br>\ndurch + Akkusativ = bir araç/sebep ile:<br>\nDas Haus wurde durch ein Feuer zerstört. = Ev yangın tarafından tahrip edildi."}
  ],
  sorular:[
    {t:"mcq",d:1,q:"Passiv Präsens: 'Das Haus ___ gebaut.'",o:["hat","ist","wird","wurde"],a:2,e:"Passiv Präsens: werden + PP. Das Haus WIRD gebaut = Ev inşa ediliyor."},
    {t:"fill",d:2,q:"Der Brief ___ gestern geschickt. (Passiv Prateritum)",c:"wurde",e:"Passiv Prateritum: wurde + PP. Der Brief WURDE geschickt."},
    {t:"mcq",d:2,q:"'Das Buch wurde von Schiller geschrieben.' Aktif hali?",o:["Schiller schreibt das Buch.","Schiller schrieb das Buch.","Das Buch schrieb Schiller.","Von Schiller wurde geschrieben."],a:1,e:"Passiv → Aktif: von Schiller = özne. wurde geschrieben = schrieb (Prateritum)"},
    {t:"fill",d:3,q:"In Deutschland ___ viel Bier getrunken. (Passiv Präsens, Almanya'da çok bira içiliyor)",c:"wird",e:"Passiv Präsens 3. tekil: wird. In Deutschland WIRD viel Bier getrunken."},
    {t:"mcq",d:3,q:"'durch' ve 'von' Passiv'de farkı nedir?",o:["Fark yok","von=kişi, durch=araç/sebep","von=araç, durch=kişi","İkisi de kişi için"],a:1,e:"von + Dativ → kim tarafından (kişi). durch + Akkusativ → hangi araçla/sebeple"}
  ]
},

b1_relativsatz: {
  lv:"B1", name:"Relativsätze", tr:"İlgi Cümleleri",
  anlatim:[
    {baslik:"Relativsatz nedir?", icerik:"İsmi niteleyen yan cümle. Türkçe'deki 'ki' ile gelen yan cümleler gibi.<br><br>\nDer Mann, <b>der</b> dort steht, ist mein Vater.<br>\n= Orada duran adam benim babam.<br><br>\nDie Frau, <b>die</b> Deutsch lehrt, heißt Müller.<br>\n= Almanca öğreten kadının adı Müller.<br><br>\nFiil Relativsatz'da SONA gider!"},
    {baslik:"Relativpronomen tablosu", icerik:"İlgi zamiri, başvurduğu ismin cinsiyetini alır:<br><br>\n<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;eril&nbsp;&nbsp;&nbsp;dişil&nbsp;&nbsp;nötr&nbsp;&nbsp;&nbsp;çoğul</b><br>\nNom: der&nbsp;&nbsp;&nbsp;die&nbsp;&nbsp;&nbsp;&nbsp;das&nbsp;&nbsp;&nbsp;&nbsp;die<br>\nAkk: den&nbsp;&nbsp;&nbsp;die&nbsp;&nbsp;&nbsp;&nbsp;das&nbsp;&nbsp;&nbsp;&nbsp;die<br>\nDat: dem&nbsp;&nbsp;&nbsp;der&nbsp;&nbsp;&nbsp;&nbsp;dem&nbsp;&nbsp;&nbsp;&nbsp;denen<br>\nGen: dessen&nbsp;deren&nbsp;&nbsp;dessen&nbsp;deren<br><br>\nNot: Nominativ'de belirli artikelle aynı!"},
    {baslik:"Hangi hal? Relativsatz içindeki rolüne göre!", icerik:"<b>Nominativ</b> (özne rolündeyse):<br>\nDas Kind, <b>das</b> spielt, ist mein Sohn. (das Kind = özne)<br><br>\n<b>Akkusativ</b> (nesne rolündeyse):<br>\nDas Buch, <b>das</b> ich lese, ist interessant. (ich = özne, das Buch = nesne)<br><br>\n<b>Dativ</b> (dolaylı nesne):<br>\nDer Mann, <b>dem</b> ich helfe, ist krank."},
    {baslik:"wo, was, wer ile Relativsätze", icerik:"<b>wo</b> = yer için:<br>\nDie Stadt, wo ich wohne, heißt Berlin.<br><br>\n<b>was</b> = belirsiz referans (alles, nichts, etwas):<br>\nAlles, was er sagt, ist wahr.<br><br>\n<b>wer/wen/wem</b> = kişi (belirsiz):<br>\nWer nicht wagt, der nicht gewinnt."}
  ],
  sorular:[
    {t:"mcq",d:2,q:"'Der Mann, ___ dort steht, ist mein Vater.' (der Mann, Nominativ)",o:["den","dem","der","dessen"],a:2,e:"der Mann eril, Relativsatz'da özne (Nominativ) → der"},
    {t:"fill",d:2,q:"Die Frau, ___ ich kenne, ist Ärztin. (die Frau, Akkusativ)",c:"die",e:"die Frau dişil, Relativsatz'da nesne (Akkusativ) → die"},
    {t:"mcq",d:2,q:"'Das Kind, ___ ich helfe, ist krank.' (Dativ)",o:["das","dem","den","dessen"],a:1,e:"das Kind nötr, helfen Dativ ister → Dativ nötr: dem"},
    {t:"fill",d:3,q:"Der Mann, ___ Auto kaputt ist, wartet. (Genitiv)",c:"dessen",e:"Genitiv eril/nötr: dessen. Der Mann, DESSEN Auto kaputt ist..."},
    {t:"mcq",d:3,q:"Relativsatz'da fiil nereye gider?",o:["Başa","2. konuma","Sona","Değişmez"],a:2,e:"Tüm yan cümlelerde olduğu gibi Relativsatz'da da fiil SONA gider."}
  ]
},

b1_indirekterede: {
  lv:"B1", name:"Indirekte Rede", tr:"Dolaylı Anlatım",
  anlatim:[
    {baslik:"Dolaylı anlatım nedir?", icerik:"Birinin söylediklerini aktarırken kullanılır.<br><br>\n<b>Direkt:</b> Er sagt: \"Ich bin müde.\"<br>\n<b>İndirek:</b> Er sagt, dass er müde ist/sei.<br><br>\nGünlük dilde: Er sagt, dass er müde ist. (normal)<br>\nResmi/yazılı: Er sagt, er sei müde. (Konjunktiv I)"},
    {baslik:"Konjunktiv I (resmi indirekt rede)", icerik:"Haber dili ve resmi metinlerde kullanılır.<br><br>\n<b>sein:</b> ich sei, du sei(e)st, er sei, wir seien<br>\n<b>haben:</b> ich habe, du habest, er habe<br>\n<b>kommen:</b> er komme, sie komme<br><br>\nDer Minister sagte, er sei nicht schuldig.<br>\n= Bakan suçsuz olduğunu söyledi.<br><br>\nKural: 3. tekil Konjunktiv I = Infinitiv kökü + -e"},
    {baslik:"Pratik günlük kullanım", icerik:"Günlük dilde sıklıkla dass ile normal Indikativ kullanılır:<br><br>\nSie sagt, dass sie morgen kommt.<br>\nEr meint, dass das Problem lösbar ist.<br>\nIch glaube, dass er Recht hat.<br><br>\nSoru aktarımı: ob + yan cümle<br>\nEr fragt, ob ich Zeit habe.<br>\n= Vaktim olup olmadığını soruyor."}
  ],
  sorular:[
    {t:"mcq",d:2,q:"'Er sagt: Ich komme morgen.' → İndirek:",o:["Er sagt, er kommt morgen.","Er sagt, er komme morgen.","Er sagt, dass ich morgen komme.","Beide A und B sind richtig."],a:3,e:"Hem dass+Indikativ (A) hem Konjunktiv I (B) doğru. Günlük: A. Resmi: B."},
    {t:"fill",d:2,q:"Sie fragt, ___ ich Zeit habe. (ob - soru aktarımı)",c:"ob",e:"Soru aktarımı → ob. Sie fragt, OB ich Zeit habe = Vaktim olup olmadığını soruyor."},
    {t:"mcq",d:3,q:"Konjunktiv I nerede özellikle kullanılır?",o:["Günlük konuşmada","Haber dili ve resmi metinlerde","Sadece şiirde","Sadece eski Almancada"],a:1,e:"Konjunktiv I haber dili (Zeitung, Nachrichten) ve resmi metinlerde kullanılır."}
  ]
},

b1_infinitiv: {
  lv:"B1", name:"Infinitivkonstruktionen", tr:"İnfinitif Yapıları",
  anlatim:[
    {baslik:"um...zu (amaç belirtmek)", icerik:"Amaç bildiren yan cümle. 'için' anlamında.<br><br>\nIch lerne Deutsch, <b>um</b> in Deutschland <b>zu</b> arbeiten.<br>\n= Almanya'da çalışmak için Almanca öğreniyorum.<br><br>\nIch spare Geld, um ein Auto zu kaufen.<br>\n= Araba almak için para biriktiriyorum.<br><br>\nKural: um + ... + zu + Infinitiv (sonunda)"},
    {baslik:"ohne...zu ve anstatt...zu", icerik:"<b>ohne...zu</b> = ...madan/maksızın<br>\nEr ging weg, ohne etwas zu sagen.<br>\n= Bir şey söylemeden gitti.<br><br>\n<b>anstatt...zu</b> = ...yerine/yapmak yerine<br>\nAnstatt zu lernen, spielt er.<br>\n= Çalışmak yerine oynuyor."},
    {baslik:"zu + Infinitiv ile fiiller", icerik:"Bazı fiiller zu + Infinitiv ister:<br><br>\nversuchen zu: Ich versuche, früh aufzustehen.<br>\nhoffen zu: Ich hoffe, dich bald zu sehen.<br>\nvergessen zu: Er hat vergessen, anzurufen.<br>\nbeginnen zu: Sie beginnt, Deutsch zu lernen.<br>\naufhören zu: Hör auf, so viel zu essen!<br><br>\nTrennbar fiillerde: auf<b>zu</b>stehen, an<b>zu</b>rufen"}
  ],
  sorular:[
    {t:"fill",d:2,q:"Ich lerne Deutsch, ___ in Deutschland zu arbeiten. (amaç - um)",c:"um",e:"um...zu = için. Ich lerne Deutsch, UM ... zu arbeiten."},
    {t:"mcq",d:2,q:"'Er ging, ohne etwas ___ sagen.' doğru form:",o:["zu sagen","sagen","gesagt","sagt"],a:0,e:"ohne...zu + Infinitiv: ohne etwas ZU sagen."},
    {t:"fill",d:2,q:"Sie versucht, früh auf___stehen. (aufstehen - trennbar zu)",c:"zu",e:"Trennbar + zu: auf-ZU-stehen. Sie versucht, früh aufZUstehen."},
    {t:"mcq",d:3,q:"'Anstatt zu lernen, spielt er.' Türkçesi:",o:["Öğrenmek için oynuyor","Öğrenmek yerine oynuyor","Öğrenirken oynuyor","Öğrendikten sonra oynuyor"],a:1,e:"anstatt...zu = yerine/yapmak yerine"}
  ]
},

b1_zeitangaben: {
  lv:"B1", name:"Zeitangaben & Temporalsätze", tr:"Zaman İfadeleri",
  anlatim:[
    {baslik:"Zaman bağlaçları", icerik:"<b>als</b> = ...iken, ...dığında (tek seferlik geçmiş olay)<br>\nAls ich jung war, spielte ich Fußball.<br>\n= Gençken futbol oynardım.<br><br>\n<b>wenn</b> = ...ince (tekrarlayan/gelecek)<br>\nWenn ich Zeit habe, lese ich.<br>\n= Vaktim olduğunda okuyorum.<br><br>\n<b>während</b> = ...iken (eş zamanlı)<br>\nWährend er schläft, arbeite ich."},
    {baslik:"seitdem, bevor, nachdem", icerik:"<b>seitdem/seit</b> = ...den beri (yan cümle)<br>\nSeitdem er in Berlin wohnt, ist er glücklich.<br><br>\n<b>bevor</b> = ...den önce<br>\nBevor ich schlafe, lese ich.<br><br>\n<b>nachdem</b> = ...den sonra (zaman farkı önemli!)<br>\nNachdem er gegessen hatte, ging er spazieren.<br>\n= Yedikten sonra yürüyüşe çıktı. (Plusquamperfekt!)"},
    {baslik:"Zaman zarfları ve ifadeleri", icerik:"damals = o zamanlar, früher = eskiden<br>\ninzwischen = bu arada, seitdem = o zamandan beri<br>\nschließlich = sonunda, zunächst = önce<br>\nplötzlich = aniden, gleichzeitig = aynı anda<br><br>\nZuerst..., dann..., danach..., schließlich...<br>\n= Önce..., sonra..., ardından..., en sonunda..."}
  ],
  sorular:[
    {t:"mcq",d:2,q:"'___ ich jung war, spielte ich viel.' (tek geçmiş olay)",o:["Wenn","Als","Während","Seitdem"],a:1,e:"als = tek seferlik geçmiş olay. wenn = tekrarlayan/gelecek."},
    {t:"fill",d:2,q:"___ er schläft, arbeite ich. (eş zamanlı - während)",c:"Während",e:"während = ...iken (eş zamanlı). Während er schläft, arbeite ich."},
    {t:"mcq",d:3,q:"'Nachdem er gegessen hatte, ...' neden Plusquamperfekt?",o:["Yanlış, Perfekt olmalı","Önce olan olay Plusquamperfekt","Prateritum da olabilir","Kurala göre zorunlu"],a:1,e:"nachdem ile önce olan olay Plusquamperfekt (hatte+PP) alır: hatte gegessen"},
    {t:"fill",d:3,q:"___ er in Berlin wohnt, ist er happy. (...den beri, yan cümle)",c:"Seitdem",e:"Seitdem = ...den beri (yan cümle kurar, fiil sona)"}
  ]
},

b1_wortbildung: {
  lv:"B1", name:"Wortbildung", tr:"Kelime Türetme",
  anlatim:[
    {baslik:"İsim türetme ekleri", icerik:"<b>-ung (dişil):</b> wohnen→die Wohnung, lösen→die Lösung<br>\n<b>-heit/-keit (dişil):</b> krank→die Krankheit, möglich→die Möglichkeit<br>\n<b>-schaft (dişil):</b> Freund→die Freundschaft, Wirt→die Wirtschaft<br>\n<b>-nis (dişil/nötr):</b> erleben→das Erlebnis, ergebnis<br>\n<b>-er (eril - kişi):</b> arbeiten→der Arbeiter, fahren→der Fahrer"},
    {baslik:"Sıfat türetme ekleri", icerik:"<b>-lich:</b> freund→freundlich, täg→täglich, möglich<br>\n<b>-ig:</b> Hunger→hungrig, Durst→durstig, windig<br>\n<b>-isch:</b> Türkei→türkisch, typisch, sportlich<br>\n<b>-los:</b> Arbeit→arbeitslos, hoffnungslos, sinnlos<br>\n<b>-voll:</b> Sinn→sinnvoll, hoffnungsvoll, hilfreich"},
    {baslik:"Bileşik kelimeler (Komposita)", icerik:"Almanca'da iki veya daha fazla kelime birleşerek yeni kelime oluşturur. Son kelimenin artikeli geçer.<br><br>\ndas Haus + die Tür = die Haustür<br>\nder Regen + der Schirm = der Regenschirm<br>\ndie Hand + das Tuch = das Handtuch<br>\nder Fuß + der Ball = der Fußball<br>\ndie Arbeit + die Zeit = die Arbeitszeit"}
  ],
  sorular:[
    {t:"mcq",d:2,q:"'die Möglichkeit' hangi kelimeden türetildi?",o:["mögen","möglichst","möglich","Mögliches"],a:2,e:"möglich + -keit = die Möglichkeit. -keit eki sıfattan dişil isim türetir."},
    {t:"fill",d:2,q:"der Regen + der Schirm = der ___ (bileşik kelime)",c:"Regenschirm",e:"Regenschirm = şemsiye. Bileşikte son kelimenin artikeli geçer: der Schirm → der Regenschirm"},
    {t:"mcq",d:3,q:"'arbeitslos' ne demek?",o:["Çok çalışkan","İşsiz","İş arayan","Serbest çalışan"],a:1,e:"-los = ...sız/...siz. arbeitslos = işsiz. hoffnungslos = umutsuz"}
  ]
},

b1_redemittel: {
  lv:"B1", name:"Redemittel & Meinung", tr:"İfade Araçları & Görüş Bildirme",
  anlatim:[
    {baslik:"Görüş bildirme", icerik:"Meiner Meinung nach... = Bence / Benim görüşüme göre...<br>\nIch bin der Meinung, dass... = ...olduğu kanısındayım.<br>\nIch finde, dass... = ...olduğunu düşünüyorum.<br>\nIch glaube/denke, dass... = ...olduğuna inanıyorum.<br>\nAus meiner Sicht... = Benim açımdan...<br>\nIch bin davon überzeugt, dass... = ...konusunda ikna olmuş durumdayım."},
    {baslik:"Karşı görüş ve tartışma", icerik:"Auf der einen Seite..., auf der anderen Seite...<br>\n= Bir yandan..., öte yandan...<br><br>\nZwar..., aber... = Her ne kadar..., ama...<br>\nEinerseits..., andererseits... = Bir açıdan..., başka açıdan...<br><br>\nIch bin anderer Meinung. = Farklı düşünüyorum.<br>\nDas sehe ich anders. = Bunu farklı görüyorum.<br>\nIch widerspreche Ihnen. = Size katılmıyorum."},
    {baslik:"Nedenleme ve sonuç çıkarma", icerik:"deshalb/deswegen/daher = bu yüzden/bu nedenle<br>\ndenn = çünkü (ana cümle)<br>\nweil = çünkü (yan cümle)<br>\ntrotzdem = yine de/buna rağmen<br>\nInfolgedessen = bu sonucu olarak<br>\nEs liegt daran, dass... = Bunun sebebi şu ki..."}
  ],
  sorular:[
    {t:"mcq",d:1,q:"'Meiner Meinung nach' ne demek?",o:["Senin görüşüne göre","Bence/benim görüşüme göre","Genel görüşe göre","Uzman görüşüne göre"],a:1,e:"Meiner Meinung nach = bence, benim görüşüme göre"},
    {t:"fill",d:2,q:"___ einer Seite ist das gut, ___ anderen Seite schlecht. (Auf - Bir yandan... öte yandan...)",c:"Auf der einen Seite... auf der anderen Seite",e:"Auf der einen Seite..., auf der anderen Seite... = Bir yandan..., öte yandan..."},
    {t:"mcq",d:2,q:"'Zwar ist es teuer, ___ es ist gut.' doğru tamamlama:",o:["weil","denn","aber","deshalb"],a:2,e:"Zwar..., ABER... = Her ne kadar..., ama... Zıtlık bildirme yapısı."}
  ]
},

// ------------------------------------------------------------------------------
// B2 KONULARI
// ------------------------------------------------------------------------------

b2_erweiterte_passiv: {
  lv:"B2", name:"Erweitertes Passiv", tr:"Gelişmiş Edilgen Yapılar",
  anlatim:[
    {baslik:"Zustandspassiv (sein + PP)", icerik:"<b>Vorgangspassiv</b> (werden): Eylem devam ediyor<br>\nDie Tür wird geschlossen. = Kapı kapatılıyor.<br><br>\n<b>Zustandspassiv</b> (sein): Eylem tamamlanmış, sonuç var<br>\nDie Tür ist geschlossen. = Kapı kapalı (sonuç).<br><br>\nDas Formular ist ausgefüllt. = Form doldurulmuş (hazır).<br>\nDie Aufgabe ist erledigt. = Görev tamamlanmış."},
    {baslik:"Passiv Infinitiv ve modal fiiller", icerik:"Modal + werden + PP (Infinitiv passiv):<br><br>\nDas muss gemacht werden. = Bu yapılmalı.<br>\nDas kann nicht geändert werden. = Bu değiştirilemez.<br>\nDas sollte verboten werden. = Bu yasaklanmalı.<br><br>\nPassiv Perfekt: ist/sind + PP + worden<br>\nDas Haus ist gebaut worden. = Ev inşa edilmiştir."},
    {baslik:"Passiv alternatifi: man, sich lassen", icerik:"<b>man:</b> Man spricht hier Deutsch. = Burada Almanca konuşulur.<br><br>\n<b>sich lassen + Infinitiv:</b> aktif anlam, pasif etki<br>\nDas lässt sich machen. = Bu yapılabilir.<br>\nDas Fenster lässt sich nicht öffnen. = Pencere açılamıyor.<br><br>\n<b>sein + zu + Infinitiv:</b><br>\nDas ist zu beachten. = Bu dikkate alınmalı."}
  ],
  sorular:[
    {t:"mcq",d:2,q:"'Die Tür ist geschlossen' vs 'wird geschlossen' farkı?",o:["Fark yok","ist=sonuç hali, wird=devam eden eylem","ist=geçmiş, wird=gelecek","ist=aktif, wird=pasif"],a:1,e:"Zustandspassiv (ist+PP) = sonuç. Vorgangspassiv (wird+PP) = devam eden eylem."},
    {t:"fill",d:2,q:"Das ___ gemacht werden. (müssen - Modal + Passiv Infinitiv)",c:"muss",e:"Modal + werden + PP. Das MUSS gemacht werden = Bu yapılmalı."},
    {t:"mcq",d:3,q:"'Das lässt sich leicht lösen.' Türkçesi:",o:["Bu kolayca çözülür","Bu kolay çözer","Bu kendini çözdürür","Bu kolayca çözüyor"],a:0,e:"sich lassen + Infinitiv = ...abilmek (pasif anlam). lässt sich lösen = çözülebilir"}
  ]
},

b2_praepositionen: {
  lv:"B2", name:"Komplexe Präpositionen", tr:"Karmaşık Edatlar",
  anlatim:[
    {baslik:"Genitiv edatları", icerik:"<b>wegen</b> = ...nedeniyle: wegen des Wetters<br>\n<b>trotz</b> = ...rağmen: trotz des Regens<br>\n<b>während</b> = ...sırasında: während der Arbeit<br>\n<b>aufgrund</b> = ...nedeniyle: aufgrund der Situation<br>\n<b>anstatt/statt</b> = ...yerine: statt des Kaffees<br>\n<b>innerhalb</b> = ...içinde: innerhalb einer Woche<br>\n<b>außerhalb</b> = ...dışında: außerhalb der Stadt"},
    {baslik:"İki kez Dativ edatları", icerik:"<b>gegenüber</b> = karşısında (kişi önce gelir!)<br>\ndem Bahnhof gegenüber / gegenüber dem Bahnhof<br><br>\n<b>entlang</b> = boyunca (Akk veya Dat)<br>\nden Fluss entlang / entlang des Flusses<br><br>\n<b>zufolge</b> = ...e göre (genellikle kişi önce)<br>\ndem Bericht zufolge = rapora göre"},
    {baslik:"İki anlamlı edatlar: Wechselpräpositionen gelişmiş", icerik:"Kalıplaşmış ifadeler:<br>\nim Bett liegen (Dat) = yatakta yatmak<br>\nins Bett gehen (Akk) = yatağa gitmek<br>\nam Tisch sitzen (Dat) = masada oturmak<br>\nan den Tisch setzen (Akk) = masaya oturmak<br><br>\nKombinasyonlar: am=an+dem, im=in+dem, ans=an+das, ins=in+das, beim=bei+dem, vom=von+dem, zum=zu+dem, zur=zu+der"}
  ],
  sorular:[
    {t:"mcq",d:2,q:"'___ des schlechten Wetters blieben wir zu Hause.' (Rağmen - Genitiv)",o:["Wegen","Trotz","Während","Aufgrund"],a:1,e:"trotz + Genitiv = ...rağmen. Trotz des schlechten Wetters..."},
    {t:"fill",d:2,q:"___ der Arbeit höre ich Musik. (sırasında - während)",c:"Während",e:"während + Genitiv = ...sırasında. Während der Arbeit höre ich Musik."},
    {t:"mcq",d:3,q:"'aufgrund' hangi hali yönetir?",o:["Akkusativ","Dativ","Genitiv","Nominativ"],a:2,e:"aufgrund + Genitiv. aufgrund der Situation, aufgrund des Problems"}
  ]
},

b2_modalpartikeln: {
  lv:"B2", name:"Modalpartikeln", tr:"Modal Partiküller",
  anlatim:[
    {baslik:"Modal partiküller nedir?", icerik:"Cümleye nüans, his ve ton katan kelimecikler. Çevrilmesi zor, ama çok önemli!<br><br>\n<b>doch</b> = zaten/ya/de (olumlu beklenti):<br>\nDas weißt du doch! = Bunu zaten biliyorsun!<br>\nKomm doch mit! = Haydi gel ya!<br><br>\n<b>ja</b> = zaten/ki (ortak bilgi):<br>\nDu weißt ja, dass... = Zaten biliyorsun ki..."},
    {baslik:"Sık kullanılan partiküller", icerik:"<b>mal</b> = bir (yumuşatma):<br>\nKannst du mal kommen? = Bir gelebilir misin?<br><br>\n<b>eigentlich</b> = aslında/özünde:<br>\nEigentlich wollte ich früher kommen. = Aslında daha erken gelmek istiyordum.<br><br>\n<b>eben/halt</b> = işte/ne yapalım:<br>\nDas ist eben so. = İşte böyle.<br><br>\n<b>wohl</b> = galiba/muhtemelen:<br>\nEr ist wohl krank. = Galiba hasta."},
    {baslik:"Tonlamayla değişen anlamlar", icerik:"<b>doch</b> vurguya göre:<br>\nEr kommt DOCH. = (Sanmıyordum ama) geliyor.<br>\nKomm DOCH! = Artık gel ya!<br><br>\n<b>aber</b> = ama (pekiştirme, özellikle şaşırma):<br>\nDas ist aber schön! = Bu gerçekten çok güzel!<br><br>\n<b>bloß/nur</b> = sadece (kaygı/tehdit):<br>\nPass bloß auf! = Dikkat et ha!"}
  ],
  sorular:[
    {t:"mcq",d:2,q:"'Komm doch mit!' cümlesinde 'doch' ne işlevi görür?",o:["Olumsuzlama","Geçmiş zaman","Teşvik/yumuşatma","Soru oluşturma"],a:2,e:"doch = teşvik/yumuşatma. Haydi gel ya! anlamında."},
    {t:"fill",d:2,q:"Er ist ___ krank. (galiba/muhtemelen - wohl)",c:"wohl",e:"wohl = galiba, muhtemelen. Er ist WOHL krank = Galiba hasta."},
    {t:"mcq",d:3,q:"'Eigentlich' ne anlama gelir?",o:["Gerçekten","Kesinlikle","Aslında/özünde","Sonunda"],a:2,e:"eigentlich = aslında, özünde. Eigentlich wollte ich... = Aslında istiyordum..."}
  ]
},

b2_nominalstil: {
  lv:"B2", name:"Nominalstil", tr:"İsim Tarzı (Resmi Dil)",
  anlatim:[
    {baslik:"Nominalstil nedir?", icerik:"Resmi yazışma, akademik ve gazetecilik dilinde fiiller yerine isim grupları kullanılır.<br><br>\n<b>Verbal:</b> Die Preise steigen. = Fiyatlar yükseliyor.<br>\n<b>Nominal:</b> Ein Anstieg der Preise ist zu beobachten.<br>\n= Fiyatlarda bir artış gözlemlenmektedir.<br><br>\nVerbal: Das Problem lösen wir.<br>\nNominal: Die Lösung des Problems erfolgt..."},
    {baslik:"Fiilden isim türetme", icerik:"entscheiden → die Entscheidung<br>\nentwickeln → die Entwicklung<br>\nbeobachten → die Beobachtung<br>\nuntersuchen → die Untersuchung<br>\nverbessern → die Verbesserung<br><br>\nsteigen → der Anstieg/die Steigerung<br>\nfallen → der Rückgang/die Senkung<br>\nlösen → die Lösung<br>\nfördern → die Förderung"},
    {baslik:"Typische Nominalstil-Konstruktionen", icerik:"in Betracht ziehen = dikkate almak<br>\nzur Verfügung stellen = sağlamak/sunmak<br>\nBezug nehmen auf = ...e atıfta bulunmak<br>\nin Frage kommen = söz konusu olmak<br>\nzum Ausdruck bringen = ifade etmek<br>\nin Anspruch nehmen = yararlanmak<br>\nRechnung tragen = hesaba katmak<br>\neine Rolle spielen = rol oynamak"}
  ],
  sorular:[
    {t:"mcq",d:2,q:"'Die Preise steigen.' Nominalstil dönüşümü:",o:["Ein Preissteigung.","Ein Anstieg der Preise.","Die Preise haben gestiegen.","Steigern die Preise."],a:1,e:"Nominalstil: Ein Anstieg der Preise (ist zu beobachten). steigen → Anstieg"},
    {t:"fill",d:3,q:"zur ___ stellen = sunmak/sağlamak (Verfügung)",c:"Verfügung",e:"zur Verfügung stellen = sağlamak, sunmak. Önemli Nominalstil ifadesi!"},
    {t:"mcq",d:3,q:"Nominalstil neden kullanılır?",o:["Konuşmayı kolaylaştırmak","Resmi/akademik metinlerde kesinlik ve yoğunluk","Gramer kurallarını çiğnemek","Sadece şiirde"],a:1,e:"Nominalstil resmi, akademik ve gazete dilinde sıkıştırılmış/yoğun ifade için kullanılır."}
  ]
},

b2_textsorten: {
  lv:"B2", name:"Textsorten & Schreiben", tr:"Metin Türleri & Yazma",
  anlatim:[
    {baslik:"Resmi mektup/e-posta yapısı", icerik:"<b>Başlık:</b> Betreff: Bewerbung als Ingenieur<br><br>\n<b>Selamlama:</b><br>\nSehr geehrte Damen und Herren, (kişi bilinmiyorsa)<br>\nSehr geehrter Herr Müller, (erkek)<br>\nSehr geehrte Frau Schmidt, (kadın)<br><br>\n<b>Giriş:</b> Hiermit bewerbe ich mich um...<br>\nIch schreibe Ihnen bezüglich...<br>\nBezugnehmend auf Ihre Anzeige...<br><br>\n<b>Kapanış:</b> Mit freundlichen Grüßen<br>\nHochachtungsvoll (çok resmi)"},
    {baslik:"Tartışma/Essay yazma", icerik:"<b>Giriş:</b> Das Thema... ist heutzutage sehr aktuell.<br>\nIn diesem Aufsatz möchte ich...<br><br>\n<b>Argüman sunma:</b><br>\nErstens/Zunächst... Zweitens/Darüber hinaus...<br>\nEin weiterer Aspekt ist...<br>\nEs ist zu beachten, dass...<br><br>\n<b>Sonuç:</b> Zusammenfassend lässt sich sagen...<br>\nAbschließend möchte ich betonen...<br>\nMeiner Meinung nach..."},
    {baslik:"Özetleme (Zusammenfassung)", icerik:"In dem Text geht es um... = Metinde konu şu...<br>\nDer Autor/Die Autorin argumentiert, dass...<br>\nZunächst wird beschrieben... dann...<br>\nDer Hauptgedanke ist...<br>\nAbschließend wird betont, dass...<br><br>\nWichtig: Eigene Meinung NICHT einbringen!<br>\nKonjunktiv I verwenden: Er sagt, es sei..."}
  ],
  sorular:[
    {t:"mcq",d:2,q:"Resmi mektupta doğru kapanış:",o:["Tschüss!","Bis bald!","Mit freundlichen Grüßen","Liebe Grüße"],a:2,e:"Mit freundlichen Grüßen = resmi kapanış. Liebe Grüße = samimi, Tschüss = çok samimi."},
    {t:"fill",d:2,q:"___ lässt sich sagen, dass das Thema wichtig ist. (Sonuç - Zusammenfassend)",c:"Zusammenfassend",e:"Zusammenfassend lässt sich sagen = Özetle söylemek gerekirse"},
    {t:"mcq",d:3,q:"Essay'de argüman sıralaması için:",o:["Aber, doch, mal","Erstens, zweitens, schließlich","Weil, obwohl, wenn","Gestern, heute, morgen"],a:1,e:"Erstens (birincisi), zweitens (ikincisi), schließlich/zuletzt (son olarak)"}
  ]
},

// ------------------------------------------------------------------------------
// C1 KONULARI
// ------------------------------------------------------------------------------

c1_konjunktiv1: {
  lv:"C1", name:"Konjunktiv I vertieft", tr:"Konjunktiv I (Derinlemesine)",
  anlatim:[
    {baslik:"Konjunktiv I tam çekim", icerik:"<b>sein:</b> ich sei, du sei(e)st, er/sie sei, wir seien, ihr seiet, sie seien<br>\n<b>haben:</b> er habe, sie haben<br>\n<b>kommen:</b> er komme, sie kommen<br>\n<b>werden:</b> er werde<br>\n<b>können:</b> er könne<br><br>\nKural: Infinitiv kökü + -e (Indikativ ile aynıysa Konjunktiv II kullan!)<br>\nÖrnek: kommen → er kommt (Ind.) = er komme (K.I) farklı → K.I kullanılır<br>\nmachen → er macht (Ind.) = er mache (K.I) farklı → K.I kullanılır"},
    {baslik:"Haber dilinde kullanım", icerik:"Gazetelerde ve haberlerde kaynak belirtmek için:<br><br>\nDer Minister erklärte, er sei nicht schuldig.<br>\n= Bakan, suçsuz olduğunu açıkladı.<br><br>\nDie Studie zeigt, dass die Temperaturen steigen <b>würden</b>.<br>\n(Konjunktiv I ile Indikativ aynıysa Konjunktiv II)<br><br>\nLaut dem Bericht sei die Lage ernst.<br>\n= Rapora göre durum ciddi (imiş)."},
    {baslik:"Konjunktiv I vs II özet", icerik:"<b>Konjunktiv I:</b> dolaylı anlatım (indirekte Rede)<br>\nEr sagt, er sei krank. = Hasta olduğunu söylüyor.<br><br>\n<b>Konjunktiv II:</b> gerçek olmayan/kibarlık<br>\nEr wäre gern Arzt. = Doktor olmak isterdi.<br><br>\n<b>Überschneidung:</b> K.I Indikativ ile aynıysa K.II<br>\nSie sagen, sie kämen morgen. (K.II, çünkü kommen çoğul K.I = kommen = Ind.)"}
  ],
  sorular:[
    {t:"mcq",d:3,q:"'er kommt' Konjunktiv I formu?",o:["er kommt","er käme","er komme","er kämt"],a:2,e:"kommen Konjunktiv I 3. tekil: er komme. Infinitiv kökü + e."},
    {t:"fill",d:3,q:"Der Minister sagte, er ___ nicht schuldig. (sein K.I)",c:"sei",e:"sein Konjunktiv I 3. tekil: sei. Er sagte, er SEI nicht schuldig."},
    {t:"mcq",d:3,q:"Neden bazen K.I yerine K.II kullanılır?",o:["Daha kolay","K.I Indikativ ile aynı görünüyorsa","Daha resmi","K.I eskimiş"],a:1,e:"K.I ile Indikativ aynı görünüyorsa (karışıklık olmasın diye) K.II kullanılır."}
  ]
},

c1_stilistik: {
  lv:"C1", name:"Stilistik & Variation", tr:"Üslup & Çeşitleme",
  anlatim:[
    {baslik:"Üslup seviyeleri (Register)", icerik:"<b>Umgangssprache</b> (günlük konuşma):<br>\nIch hab' keine Ahnung. / Das is' cool.<br><br>\n<b>Standardsprache</b> (standart):<br>\nIch habe keine Ahnung. / Das ist interessant.<br><br>\n<b>Gehobene Sprache</b> (yüksek üslup):<br>\nIch bin darüber nicht im Klaren.<br>\nDas erscheint mir bemerkenswert.<br><br>\n<b>Wissenschaftssprache</b>:<br>\nEs lässt sich feststellen, dass... / Die Untersuchung ergibt..."},
    {baslik:"Sözdizimsel çeşitleme", icerik:"Aynı içeriği farklı yapılarla ifade etmek:<br><br>\n<b>Aktif → Passiv:</b><br>\nMan diskutiert das Problem. → Das Problem wird diskutiert.<br><br>\n<b>Nebensatz → Nominalstil:</b><br>\nWeil er krank ist → aufgrund seiner Krankheit<br><br>\n<b>Konjunktional → Partizipialkonstruktion:</b><br>\nAls er ankam → Bei seiner Ankunft / Angekommen, ..."},
    {baslik:"Partizipialkonstruktionen (İleri seviye)", icerik:"Partizip I (devam eden) ve Partizip II (tamamlanan) yan cümle yerine:<br><br>\n<b>Partizip I:</b> arbeitend, singend, lachend<br>\nDie singende Frau = şarkı söyleyen kadın<br>\nEr kam singend herein. = Şarkı söyleyerek girdi.<br><br>\n<b>Partizip II:</b><br>\nDas gelesene Buch = okunan kitap<br>\nErschöpft von der Arbeit, schlief er ein.<br>\n= İşten bitkin düşmüş, uyuya kaldı."}
  ],
  sorular:[
    {t:"mcq",d:3,q:"'Weil er krank ist' Nominalstil dönüşümü:",o:["während seiner Krankheit","aufgrund seiner Krankheit","trotz seiner Krankheit","wegen krank sein"],a:1,e:"weil (sebep) → aufgrund + Genitiv. aufgrund seiner Krankheit = hastalandığı için"},
    {t:"fill",d:3,q:"Die ___ Frau heißt Maria. (singen - Partizip I, şarkı söyleyen)",c:"singende",e:"Partizip I: singen + d = singend → singende (sıfat eki ile). die singende Frau"},
    {t:"mcq",d:3,q:"'Es lässt sich feststellen' hangi dile aittir?",o:["Günlük konuşma","Standart Almanca","Bilim/akademik dil","Eski Almanca"],a:2,e:"lässt sich feststellen = Wissenschaftssprache. Akademik metinlerde 'man kann feststellen' yerine."}
  ]
},

c1_argumentieren: {
  lv:"C1", name:"Argumentieren & Diskutieren", tr:"Tartışma & Savunma",
  anlatim:[
    {baslik:"Güçlü argüman yapısı (PEEL)", icerik:"<b>P</b>oint (Tez): Meiner These zufolge...<br>\n<b>E</b>xplain (Açıklama): Das bedeutet, dass...<br>\n<b>E</b>vidence (Kanıt): Studien belegen, dass... / Laut Statistik...<br>\n<b>L</b>ink (Bağlantı): Daher lässt sich schließen, dass...<br><br>\nEs ist unbestreitbar, dass... = İnkar edilemez ki...<br>\nDie Forschung zeigt eindeutig... = Araştırma açıkça gösteriyor..."},
    {baslik:"Karşı tezi çürütme", icerik:"Zwar mag es stimmen, dass..., jedoch... = Her ne kadar doğru olsa da..., ancak...<br>\nDieses Argument überzeugt mich nicht, weil... = Bu argüman beni ikna etmiyor çünkü...<br>\nMan könnte einwenden, dass..., aber dem ist entgegenzuhalten, dass...<br>\n= ...itiraz edilebilir, ama buna karşı şunu söylemek gerekir ki...<br>\nDas ist zwar richtig, greift aber zu kurz. = Bu doğru, ama yeterli değil."},
    {baslik:"Akademik yazıda sıklıkla kullanılanlar", icerik:"Im Folgenden wird untersucht... = Aşağıda incelenecektir...<br>\nAnhand von Beispielen wird deutlich... = Örnekler aracılığıyla açıkça görülmektedir...<br>\nZu berücksichtigen ist... = Göz önünde bulundurulmalı ki...<br>\nEs ergibt sich folgendes Bild: = Şu tablo ortaya çıkmaktadır:<br>\nKritisch anzumerken ist... = Eleştirel olarak belirtmek gerekir ki...<br>\nZusammenfassend lässt sich festhalten... = Özetle şunu tespit etmek mümkündür..."}
  ],
  sorular:[
    {t:"mcq",d:3,q:"'Zwar mag es stimmen, dass..., jedoch...' yapısı ne için?",o:["Kendi görüşü sunmak","Karşı görüşü kabul edip ama çürütmek","Tanım yapmak","Örnek vermek"],a:1,e:"Zwar...jedoch = konsesyon yapısı: kısmen kabul et, sonra çürüt."},
    {t:"fill",d:3,q:"___ lässt sich feststellen, dass das Thema komplex ist. (Özetle - Zusammenfassend)",c:"Zusammenfassend",e:"Zusammenfassend lässt sich feststellen = Özetle tespit etmek mümkündür"},
    {t:"mcq",d:3,q:"'Anhand von Beispielen' ne demek?",o:["Örneklerle birlikte","Örneklere rağmen","Örnekler sayesinde/aracılığıyla","Örnekler yerine"],a:2,e:"anhand von = aracılığıyla, yardımıyla. Anhand von Beispielen = örnekler aracılığıyla"}
  ]
},

c1_wissenschaft: {
  lv:"C1", name:"Wissenschaftliche Texte", tr:"Akademik Metinler",
  anlatim:[
    {baslik:"Akademik metin yapısı", icerik:"<b>Abstract/Zusammenfassung:</b> Kısa özet<br>\n<b>Einleitung:</b> Die vorliegende Arbeit befasst sich mit...<br>\n<b>Hauptteil:</b> Im ersten Kapitel wird... untersucht.<br>\n<b>Schluss:</b> Abschließend lässt sich resümieren...<br><br>\nAkademik metinde:<br>\n• Kişisel zamir (ich) mümkün olduğunca az<br>\n• Passiv ve man kullanımı yaygın<br>\n• Nominalstil hâkim"},
    {baslik:"Referans ve atıf yapısı", icerik:"Laut Schmidt (2020) ist... = Schmidt'e (2020) göre...<br>\nWie Müller betont,... = Müller'in vurguladığı gibi...<br>\nIm Einklang mit dieser These... = Bu tezle uyumlu olarak...<br>\nIm Widerspruch dazu steht... = Buna karşıt olarak...<br>\nWie bereits erwähnt,... = Daha önce belirtildiği gibi...<br>\nEs sei darauf hingewiesen, dass... = Şuna dikkat çekilmeli ki..."},
    {baslik:"Hedging (Kesinleştirmeden kaçınma)", icerik:"Akademik dilde iddia yumuşatma (hedging) önemlidir:<br><br>\nEs scheint, dass... = Görünüşe göre...<br>\nMöglicherweise... = Muhtemelen...<br>\nEs ist anzunehmen, dass... = ...varsayılabilir<br>\nDie Ergebnisse legen nahe, dass... = Sonuçlar ...olduğuna işaret ediyor<br>\nEs könnte argumentiert werden, dass... = ...iddia edilebilir<br>\nTendenziell... = Genel eğilim olarak..."}
  ],
  sorular:[
    {t:"mcq",d:3,q:"'Laut Schmidt (2020)' akademik metinde ne işlevi görür?",o:["Kişisel görüş bildirme","Kaynak gösterme/atıf","Karşı görüş","Sonuç bildirme"],a:1,e:"Laut + kaynak = atıf/referans. Akademik metinde başkalarının görüşlerini aktarmak için."},
    {t:"fill",d:3,q:"Die Ergebnisse ___ nahe, dass... (legen - sonuçlar işaret ediyor)",c:"legen",e:"nahelegen = işaret etmek, ima etmek. Die Ergebnisse LEGEN nahe, dass... (önemli akademik ifade!)"},
    {t:"mcq",d:3,q:"Hedging neden kullanılır?",o:["İddiayı güçlendirmek","Kesinliği azaltarak bilimsel dürüstlük göstermek","Metni kısaltmak","Pasif yapmak"],a:1,e:"Hedging = iddia yumuşatma. Bilimsel kesinliğin sınırlarını göstermek için önemlidir."}
  ]
},

c1_idiomatik: {
  lv:"C1", name:"Idiome & Phraseologismen", tr:"Deyimler & Kalıp İfadeler",
  anlatim:[
    {baslik:"Yaygın Almanca deyimler", icerik:"auf den Punkt kommen = konuya gelmek<br>\nunter vier Augen = baş başa (dört göz = iki kişi)<br>\nden Nagel auf den Kopf treffen = tam isabet etmek<br>\nDaumen drücken = başarılar dilemek (parmak çapraz yapmak)<br>\nins Fettnäpfchen treten = pot kırmak<br>\ndie Katze im Sack kaufen = kör alışveriş yapmak<br>\nEulen nach Athen tragen = götüre götürmek gitmek"},
    {baslik:"Gövde deyimleri (Körperteile)", icerik:"die Nase voll haben = bıkmak (burnu dolmak)<br>\nauf eigenen Füßen stehen = bağımsız olmak<br>\nHals über Kopf = başı göğsünde (aceleyle)<br>\nunter die Arme greifen = yardım etmek<br>\njemandem auf die Nerven gehen = sinir olmak<br>\nein Auge zudrücken = göz yummak<br>\nHand und Fuß haben = sağlam/mantıklı olmak"},
    {baslik:"Renk deyimleri ve hayvan deyimleri", icerik:"<b>Renkler:</b><br>\nins Blaue fahren = nereye gideceğini bilmeden gitmek<br>\nrot sehen = öfkelenmek<br>\ngrün und blau schlagen = morarmak<br><br>\n<b>Hayvanlar:</b><br>\nda liegt der Hund begraben = işte sorun orada<br>\nden Teufel an die Wand malen = kötümser düşünmek<br>\nwie die Katze um den heißen Brei gehen = lafı dolandırmak"}
  ],
  sorular:[
    {t:"mcq",d:3,q:"'Den Nagel auf den Kopf treffen' ne demek?",o:["Çiviyi çakmak","Tam isabet etmek","Kafaya vurmak","Yanlış anlamak"],a:1,e:"den Nagel auf den Kopf treffen = tam isabet etmek, tam doğrusunu söylemek"},
    {t:"fill",d:3,q:"Ich habe die ___ voll von dieser Arbeit! (bıktım - Nase)",c:"Nase",e:"die Nase voll haben = bıkmak. Ich habe die Nase voll = Bıktım artık!"},
    {t:"mcq",d:3,q:"'Eulen nach Athen tragen' ne anlama gelir?",o:["Hediye götürmek","Gereksiz bir şeyi zaten çok olan yere götürmek","Yolculuk yapmak","Hayvan taşımak"],a:1,e:"Eulen nach Athen = baykuşu Atina'ya götürmek = götüre götürmek gitmek (anlamsız işi yapmak)"}
  ]
},

c1_diskursmarker: {
  lv:"C1", name:"Diskursmarker", tr:"Söylem İşaretçileri",
  anlatim:[
    {baslik:"Metin bağlantı araçları", icerik:"<b>Ekleme:</b> darüber hinaus, außerdem, ferner, überdies, des Weiteren<br>\n<b>Karşıtlık:</b> hingegen, wohingegen, im Gegensatz dazu, allerdings, dennoch<br>\n<b>Sebep-sonuç:</b> folglich, demzufolge, infolgedessen, daher, somit<br>\n<b>Örnekleme:</b> zum Beispiel, etwa, nämlich, und zwar, wie etwa<br>\n<b>Kısıtlama:</b> allerdings, jedoch, zwar...aber, immerhin"},
    {baslik:"Açıklama ve vurgu işaretçileri", icerik:"Das heißt (d.h.) = yani/demek ki<br>\nDas bedeutet = bu demektir<br>\nmit anderen Worten = başka bir deyişle<br>\ngenauer gesagt = daha doğrusu<br>\ninsbesondere = özellikle<br>\nvor allem = her şeyden önce/özellikle<br>\nnämlich = çünkü/yani (açıklama)<br>\nund zwar = şöyle ki/tam olarak"},
    {baslik:"Konuşmada yapı işaretçileri", icerik:"Um zum Thema zu kommen... = Konuya gelmek gerekirse...<br>\nWas ... angeht/betrifft... = ...konusuna gelince...<br>\nIch komme nun zu... = Şimdi ...a geliyorum<br>\nDas führt uns zu der Frage... = Bu bizi şu soruya götürüyor:<br>\nLassen Sie mich abschließend... = İzin verin, sonuç olarak...<br>\nIch möchte noch hinzufügen, dass... = Şunu da eklemek istiyorum ki..."}
  ],
  sorular:[
    {t:"mcq",d:3,q:"'darüber hinaus' ne işlevi görür?",o:["Karşıtlık","Sebep","Ekleme/ilave","Örnekleme"],a:2,e:"darüber hinaus = bunun ötesinde, ayrıca. Ekleme işlevi görür."},
    {t:"fill",d:3,q:"Das Projekt war erfolgreich. ___ gab es einige Probleme. (Buna rağmen - Allerdings)",c:"Allerdings",e:"allerdings = her ne kadar/bununla birlikte. Kısıtlama işaretçisi."},
    {t:"mcq",d:3,q:"'nämlich' hangi işlevde kullanılmaz?",o:["Açıklama","Sebep bildirme","Karşıtlık bildirme","Vurgu"],a:2,e:"nämlich = açıklama ve sebep için. Karşıtlık için hingegen/jedoch kullanılır."}
  ]
}

}); // end Object.assign



var TOPICS = [
  {key:"begr",lv:"A1",name:"Begrüßung & Abschied",tr:"Selam & Veda",icon:"&#128075;"},
  {key:"zahlen",lv:"A1",name:"Zahlen & Uhrzeit",tr:"Sayilar & Saat",icon:"&#128290;"},
  {key:"farben",lv:"A1",name:"Farben & Aussehen",tr:"Renkler & Görünüm",icon:"&#127912;"},
  {key:"familie",lv:"A1",name:"Familie",tr:"Aile",icon:"&#128106;"},
  {key:"berufe",lv:"A1",name:"Berufe",tr:"Meslekler",icon:"&#128188;"},
  {key:"sein_haben",lv:"A1",name:"sein & haben",tr:"Olmak & Sahip Olmak",icon:"&#9881;"},
  {key:"essen",lv:"A1",name:"Essen & Trinken",tr:"Yemek & Icmek",icon:"&#127829;"},
  {key:"wochentage",lv:"A1",name:"Wochentage & Monate",tr:"Günler & Aylar",icon:"&#128197;"},
  {key:"wohnen",lv:"A1",name:"Wohnen & Haus",tr:"Ev & Yaşam",icon:"&#127968;"},
  {key:"richtungen",lv:"A1",name:"Richtungen & Orte",tr:"Yönler & Yerler",icon:"&#128506;"},
  {key:"adjektive",lv:"A1",name:"Adjektive",tr:"Sıfatlar",icon:"&#10024;"},
  {key:"a2_perfekt",lv:"A2",name:"Perfekt",tr:"Geçmiş Zaman",icon:"&#9201;"},
  {key:"a2_praeteritum",lv:"A2",name:"Prateritum",tr:"Yazılı Geçmiş",icon:"&#128221;"},
  {key:"a2_kasus",lv:"A2",name:"Kasus",tr:"Durum Ekleri",icon:"&#127919;"},
  {key:"a2_konjunktionen",lv:"A2",name:"Konjunktionen",tr:"Bağlaçlar",icon:"&#128257;"},
  {key:"a2_modal",lv:"A2",name:"Modalverben A2",tr:"Modal Fiiller",icon:"&#9889;"},
  {key:"a2_adjektiv",lv:"A2",name:"Adjektivdeklination",tr:"Sıfat Çekimi",icon:"&#127775;"},
  {key:"a2_trennbar",lv:"A2",name:"Trennbare Verben",tr:"Ayrılabilen Fiiller",icon:"&#9986;"},
  {key:"b1_konjunktiv2",lv:"B1",name:"Konjunktiv II",tr:"Dilek/Kibarlık Kipi",icon:"&#128161;"},
  {key:"b1_passiv",lv:"B1",name:"Passiv",tr:"Edilgen Çatı",icon:"&#128260;"},
  {key:"b1_relativsatz",lv:"B1",name:"Relativsätze",tr:"İlgi Cümleleri",icon:"&#128279;"},
  {key:"b1_indirekterede",lv:"B1",name:"Indirekte Rede",tr:"Dolaylı Anlatım",icon:"&#128483;"},
  {key:"b1_infinitiv",lv:"B1",name:"Infinitivkonstruktionen",tr:"İnfinitif Yapıları",icon:"&#9883;"},
  {key:"b1_zeitangaben",lv:"B1",name:"Zeitangaben",tr:"Zaman İfadeleri",icon:"&#128336;"},
  {key:"b1_wortbildung",lv:"B1",name:"Wortbildung",tr:"Kelime Türetme",icon:"&#128290;"},
  {key:"b1_redemittel",lv:"B1",name:"Redemittel",tr:"Görüş Bildirme",icon:"&#128172;"},
  {key:"b2_erweiterte_passiv",lv:"B2",name:"Erweitertes Passiv",tr:"Gelişmiş Edilgen",icon:"&#128260;"},
  {key:"b2_praepositionen",lv:"B2",name:"Komplexe Präpositionen",tr:"Karmaşık Edatlar",icon:"&#127919;"},
  {key:"b2_modalpartikeln",lv:"B2",name:"Modalpartikeln",tr:"Modal Partiküller",icon:"&#127800;"},
  {key:"b2_nominalstil",lv:"B2",name:"Nominalstil",tr:"İsim Tarzı",icon:"&#128203;"},
  {key:"b2_textsorten",lv:"B2",name:"Textsorten",tr:"Metin Türleri",icon:"&#128221;"},
  {key:"c1_konjunktiv1",lv:"C1",name:"Konjunktiv I",tr:"Konjunktiv I (Derin)",icon:"&#127775;"},
  {key:"c1_stilistik",lv:"C1",name:"Stilistik",tr:"Üslup & Çeşitleme",icon:"&#127912;"},
  {key:"c1_argumentieren",lv:"C1",name:"Argumentieren",tr:"Tartışma & Savunma",icon:"&#129488;"},
  {key:"c1_wissenschaft",lv:"C1",name:"Wissenschaftliche Texte",tr:"Akademik Metinler",icon:"&#128214;"},
  {key:"c1_idiomatik",lv:"C1",name:"Idiome",tr:"Deyimler & Kalıplar",icon:"&#128512;"},
  {key:"c1_diskursmarker",lv:"C1",name:"Diskursmarker",tr:"Söylem İşaretçileri",icon:"&#128257;"}
];



var TNAMES = {
  sein_haben:"sein & haben", fragen:"Soru Kelimeleri", negation:"Olumsuzluk",
  verben:"Fiil Cekimi", wortstellung:"Kelime Sirasi", artikel:"Artikel",
  possessiv:"Iyelik Zamirleri", praepos:"Edatlar", modal:"Modal Fiiller",
  begr:"Selamlasma", zahlen:"Sayilar & Saat", lesen:"Okuma & Anlama",
  personalpron:"Kisi Zamirleri", nominativ_akk:"Nominativ & Akkusativ",
  plural:"Cogul Formlar", imperativ:"Emir Kipi",
  perfekt:"Perfekt (Gecmis)", praeteritum:"Prateritum", kasus:"Akkusativ & Dativ",
  trennbar:"Ayrilabilen Fiiller", komparativ:"Karsilastirma",
  konjunktionen:"Baglaclar", reflexiv:"Donuslu Fiiller",
  praepositionen_a2:"Dativ Edatlari", zukunft:"Gelecek Zaman",
  genitiv:"Genitiv", indirekt:"Dolaylı Sorular",
  imperativ_a2:"Emir Kipi A2", adjektiv_dekl:"Sifat Cekimi"
};