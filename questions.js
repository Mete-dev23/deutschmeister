// DeutschMeister v4.0 — questions.js
// Bu dosyaya yeni soru eklemek için:
// GQ dizisine {t:'mcq', d:1, lv:'A1', tp:'konu', q:'Soru?', o:['A','B','C','D'], a:0, e:'Açıklama'} ekle


var GQ = [

// ============================================================
// A1 - sein & haben (8 soru: kolay->zor, ger-ek hayat)
// ============================================================
{t:"mcq",d:1,lv:"A1",tp:"sein_haben",q:"Dogru cekim: Ich ___ Student.",o:["bin","bist","ist","sind"],a:0,e:"<b>sein:</b> ich bin - du bist - er/sie/es ist - wir sind - ihr seid - sie sind"},
{t:"mcq",d:1,lv:"A1",tp:"sein_haben",q:"Dogru cekim: Du ___ mein Freund.",o:["bin","bist","ist","sind"],a:1,e:"<b>du bist</b> — Du bist mein Freund. = Sen benim arkadasimsin."},
{t:"mcq",d:1,lv:"A1",tp:"sein_haben",q:"Dogru cekim: Das Wetter ___ schon heute.",o:["bin","bist","ist","sind"],a:2,e:"<b>es/das ist</b> — Das Wetter ist schon = Hava guzel."},
{t:"fill",d:1,lv:"A1",tp:"sein_haben",q:"Bosluğu doldur: Ich ___ Hunger. (haben, 1. tekil)",c:"habe",e:"<b>haben:</b> ich habe - du hast - er hat - wir haben - ihr habt - sie haben"},
{t:"fill",d:2,lv:"A1",tp:"sein_haben",q:"Bosluğu doldur: Mein Bruder ___ ein neues Auto. (haben)",c:"hat",e:"<b>er hat</b> — er/sie/es hat. Mein Bruder hat ein neues Auto = Erkek kardesimin yeni bir arabasi var."},
{t:"mcq",d:2,lv:"A1",tp:"sein_haben",q:"Hangi cumle DOGRUDUR?",o:["Ich ist müde.","Du bin hungrig.","Wir sind Freunde.","Sie bist nett."],a:2,e:"<b>Wir sind Freunde</b> = Biz arkadasiz. sein tablosu: ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie sind"},
{t:"fill",d:2,lv:"A1",tp:"sein_haben",q:"Bosluğu doldur: ___ ihr Zeit? (haben, 2. cogul - vakit var mi?)",c:"Habt",e:"<b>Habt ihr Zeit?</b> — ihr habt (2. cogul). Vakit var mi? = Habt ihr Zeit?"},
{t:"mcq",d:3,lv:"A1",tp:"sein_haben",q:"Gunluk hayattan: Freundin fragt: Hast du heute Abend Zeit? Cevap:",o:["Ja, ich habe Zeit.","Ja, ich bin Zeit.","Ja, du hast Zeit.","Nein, ich bist beschäftigt."],a:0,e:"<b>Ja, ich habe Zeit.</b> = Evet, vaktim var. haben fiili ile sahiplik ifade edilir."},

// ============================================================
// A1 - Soru kelimeleri (8 soru)
// ============================================================
{t:"mcq",d:1,lv:"A1",tp:"fragen",q:"___ heisst du? (Adin ne?)",o:["Was","Wie","Wer","Wo"],a:1,e:"<b>Wie heisst du?</b> = Adin ne? Wie=nasil/ne kadar/nasil isimli"},
{t:"mcq",d:1,lv:"A1",tp:"fragen",q:"___ kommst du? (Nereden geliyorsun?)",o:["Wohin","Woher","Wo","Warum"],a:1,e:"<b>Woher</b> = nereden. Woher kommst du? — Ich komme aus der Türkei."},
{t:"mcq",d:1,lv:"A1",tp:"fragen",q:"___ wohnst du? (Nerede oturuyorsun?)",o:["Woher","Wohin","Wo","Wie"],a:2,e:"<b>Wo</b> = nerede. Wo wohnst du? — Ich wohne in Berlin."},
{t:"fill",d:1,lv:"A1",tp:"fragen",q:"Bosluğu doldur: ___ alt bist du? (Kac yasindasin?)",c:"Wie",e:"<b>Wie alt bist du?</b> = Kac yasindasin? Wie + sifat = kac, ne kadar"},
{t:"fill",d:2,lv:"A1",tp:"fragen",q:"Bosluğu doldur: ___ ist das? (Bu ne?) - nesne sorgusu",c:"Was",e:"<b>Was ist das?</b> = Bu ne? Was = ne (nesne icin)"},
{t:"mcq",d:2,lv:"A1",tp:"fragen",q:"Arkadasin neden gecikti - dogru soru:",o:["Wo bist du?","Warum kommst du spat?","Wann gehst du?","Wie geht es dir?"],a:1,e:"<b>Warum</b> = neden/nicin. Warum kommst du spat? = Neden gec geliyorsun?"},
{t:"fill",d:2,lv:"A1",tp:"fragen",q:"Bosluğu doldur: ___ Uhr ist es? (Saat kac?)",c:"Wie viel",e:"<b>Wie viel Uhr ist es?</b> = Saat kac? Oder: Wie spät ist es? (kisa)"},
{t:"mcq",d:3,lv:"A1",tp:"fragen",q:"Muster secim: tren istasyonunu sormak istiyorsun:",o:["Wer ist der Bahnhof?","Wo ist der Bahnhof?","Was ist der Bahnhof?","Warum ist der Bahnhof?"],a:1,e:"<b>Wo ist der Bahnhof?</b> = Tren istasyonu nerede? Yer sorularinda Wo kullanilir."},

// ============================================================
// A1 - Olumsuzluk (8 soru)
// ============================================================
{t:"mcq",d:1,lv:"A1",tp:"negation",q:"Ich bin ___ müde. (yorgun degilim)",o:["kein","nicht","nein","no"],a:1,e:"<b>nicht</b> fiil/sifat olumsuzlar. Ich bin nicht müde = Ben yorgun degilim."},
{t:"mcq",d:1,lv:"A1",tp:"negation",q:"Ich habe ___ Auto. (arabam yok)",o:["nicht","kein","nein","nie"],a:1,e:"<b>kein</b> isim (Nominativ/Akkusativ) onunde: ein Auto → kein Auto. Ich habe kein Auto = Arabam yok."},
{t:"fill",d:2,lv:"A1",tp:"negation",q:"Bosluğu doldur: Das ist ___ mein Buch. (bu benim kitabim degil)",c:"nicht",e:"<b>nicht</b> sifat/fiil/zamir olumsuzlar. Das ist nicht mein Buch."},
{t:"fill",d:2,lv:"A1",tp:"negation",q:"Bosluğu doldur: Ich habe ___ Zeit. (vaktim yok - die Zeit)",c:"keine",e:"<b>keine</b> = dişil/cogul kein. die Zeit disil → keine Zeit. Ich habe keine Zeit."},
{t:"mcq",d:2,lv:"A1",tp:"negation",q:"Doğru olumsuz cumle: (Kar yagmiyor.)",o:["Es schneit kein.","Es schneit nicht.","Es nicht schneit.","Nicht es schneit."],a:1,e:"<b>Es schneit nicht.</b> Fiil olumsuzlarinda nicht genellikle cumle sonuna gider."},
{t:"mcq",d:2,lv:"A1",tp:"negation",q:"Doğru olumsuz cumle: (Kedi yok.)",o:["Es gibt nicht Katze.","Es gibt keine Katze.","Es gibt kein Katze.","Keine gibt es Katze."],a:1,e:"<b>Es gibt keine Katze.</b> die Katze disil → keine. es gibt = var (ingilizcedeki there is gibi)"},
{t:"fill",d:3,lv:"A1",tp:"negation",q:"Bosluğu doldur: Er kommt ___ heute. (bugün gelmiyor)",c:"nicht",e:"<b>nicht</b> — zaman zarfi ile fiili olumsuzlarken nicht zarftan sonra gelir: Er kommt nicht heute."},
{t:"mcq",d:3,lv:"A1",tp:"negation",q:"Gunluk hayat: 'Sigaraniz var mi?' - Hayir yok: ",o:["Ich habe nicht Zigaretten.","Nein, ich habe keine Zigaretten.","Ich kein Zigaretten habe.","Nein, ich bin keine Zigaretten."],a:1,e:"<b>Nein, ich habe keine Zigaretten.</b> die Zigarette disil/cogul → keine. Eksiksiz yanit."},

// ============================================================
// A1 - Fiil cekimi (10 soru - duzenli fiiller)
// ============================================================
{t:"mcq",d:1,lv:"A1",tp:"verben",q:"Dogru cekim: Er ___ in München. (wohnen)",o:["wohne","wohnst","wohnt","wohnen"],a:2,e:"<b>wohnen:</b> ich wohne, du wohnst, er/sie/es wohnt, wir wohnen, ihr wohnt, sie wohnen"},
{t:"mcq",d:1,lv:"A1",tp:"verben",q:"Dogru cekim: Wir ___ Deutsch. (lernen)",o:["lerne","lernst","lernt","lernen"],a:3,e:"<b>lernen:</b> wir lernen. 1. ve 3. cogul -en alir."},
{t:"fill",d:1,lv:"A1",tp:"verben",q:"Bosluğu doldur: Du ___ sehr gut Deutsch. (sprechen, 2. tekil)",c:"sprichst",e:"<b>sprechen</b> degisken: du sprichst (e→i degisimi). Vokalwechsel fiilleri: e→i: sprechen, helfen, essen, nehmen"},
{t:"fill",d:2,lv:"A1",tp:"verben",q:"Bosluğu doldur: Er ___ jeden Morgen Zeitung. (lesen, 3. tekil)",c:"liest",e:"<b>lesen</b> degisken: er liest (e→ie). e→ie: lesen, sehen, schlafen degil!"},
{t:"mcq",d:2,lv:"A1",tp:"verben",q:"Duzenli fiil hangi kurala gore cekilir? 'kaufen - du'",o:["du kaufe","du kaufst","du kaufen","du kauft"],a:1,e:"<b>du kaufst</b> — duzenli fiillerde du icin Stamm + -st: kauf + st = kaufst"},
{t:"fill",d:2,lv:"A1",tp:"verben",q:"Bosluğu doldur: Ihr ___ das Essen. (bezahlen, 2. cogul - oduyorsunuz)",c:"bezahlt",e:"<b>ihr bezahlt</b> — ihr icin Stamm + -t: bezahl + t = bezahlt. Ihr bezahlt das Essen = Yemegi oduyorsunuz."},
{t:"mcq",d:2,lv:"A1",tp:"verben",q:"Hangi fiil degisken (Vokalwechsel) DEGILDIR?",o:["fahren (a→ä)","sprechen (e→i)","lernen","lesen (e→ie)"],a:2,e:"<b>lernen</b> duzenli, degiskeni yoktur. Degisken fiiller: fahren→fährt, sprechen→spricht, lesen→liest, essen→isst"},
{t:"fill",d:2,lv:"A1",tp:"verben",q:"Bosluğu doldur: Das Kind ___ gern Eis. (essen, 3. tekil)",c:"isst",e:"<b>essen</b> degisken: er isst (e→i, ss yazimsali). Das Kind isst gern Eis = Cocuk dondurma yemeyi sever."},
{t:"mcq",d:3,lv:"A1",tp:"verben",q:"Gunluk hayat: Arkadasin sabah ne yapar? Doğru cumle:",o:["Er aufstehst früh.","Er steht früh auf.","Er aufsteht früh.","Er stehst früh auf."],a:1,e:"<b>aufstehen</b> trennbar: Er steht früh auf. Fiil govdesi 2. konumda, on ek sona gider!"},
{t:"mcq",d:3,lv:"A1",tp:"verben",q:"fahren fiilinin dogru cekim tablosu:",o:["ich fahre/du fahrst/er fahrt","ich fahre/du fährst/er fährt","ich fahre/du fahrest/er fährt","ich fahre/du fahrt/er fahrt"],a:1,e:"<b>fahren</b> a→ä degisimi: du fährst, er fährt. Ich fahre degismez (1. tekil)."},

// ============================================================
// A1 - Kelime sirasi V2 (8 soru)
// ============================================================
{t:"mcq",d:1,lv:"A1",tp:"wortstellung",q:"Doğru V2 sirasi: (Bugun okula gidiyorum.)",o:["Heute ich gehe in die Schule.","Heute gehe ich in die Schule.","Ich heute in die Schule gehe.","Gehe heute ich die Schule in."],a:1,e:"<b>V2 Kurali:</b> Fiil daima 2. konumda. Heute basa gelince: Heute GEHE ich..."},
{t:"mcq",d:1,lv:"A1",tp:"wortstellung",q:"Doğru sirasi: (Almanya'dan geliyorum.)",o:["Ich aus Deutschland komme.","Komme ich aus Deutschland.","Ich komme aus Deutschland.","Aus Deutschland ich komme."],a:2,e:"<b>Ich komme aus Deutschland.</b> Ozne basta, fiil 2. konumda (normal sira)."},
{t:"fill",d:2,lv:"A1",tp:"wortstellung",q:"V2: cumleyi tamamla: Morgen ___ ich Deutsch. (lernen - yarin Almanca ogreniyorum)",c:"lerne",e:"Morgen <b>lerne</b> ich Deutsch. Morgen basa gelince fiil 2. konuma kayar."},
{t:"mcq",d:2,lv:"A1",tp:"wortstellung",q:"Soru cumlesi - fiil nereye gider?",o:["Wie geht es dir?","Wie dir geht es?","Wie es dir geht?","Dir wie geht es?"],a:0,e:"<b>Wie geht es dir?</b> Soru cumlelerinde W-Frage + fiil + ozne sirasi: Wie GEHT es DIR?"},
{t:"fill",d:2,lv:"A1",tp:"wortstellung",q:"V2: Leider ___ ich keine Zeit. (haben - maalesef vaktim yok)",c:"habe",e:"Leider <b>habe</b> ich keine Zeit. Zarf basa gelince fiil 2. konumda kalir."},
{t:"mcq",d:2,lv:"A1",tp:"wortstellung",q:"Olumsuz Not: Ich gehe nicht ins Kino. — nicht nerede?",o:["Anfang","Nach dem Verb","Am Ende der Grundaussage","Vor dem Subjekt"],a:2,e:"<b>nicht</b> genellikle temel ifadenin sonuna gider: Ich gehe NICHT ins Kino."},
{t:"fill",d:3,lv:"A1",tp:"wortstellung",q:"Dogru V2 ile tamamla: In der Schweiz ___ man Deutsch, Franzosisch und Italienisch. (sprechen)",c:"spricht",e:"In der Schweiz <b>spricht</b> man... Yer zarfi basa gelince fiil 2. konuma gider."},
{t:"mcq",d:3,lv:"A1",tp:"wortstellung",q:"Hangi cumle YANLISTIR?",o:["Ich trinke jeden Morgen Kaffee.","Jeden Morgen trinke ich Kaffee.","Jeden Morgen ich trinke Kaffee.","Kaffee trinke ich jeden Morgen."],a:2,e:"<b>Jeden Morgen ich trinke Kaffee YANLIS.</b> V2 kurali ihlal edilmis. Dogru: Jeden Morgen TRINKE ich Kaffee."},

// ============================================================
// A1 - Artikel (der/die/das) (8 soru)
// ============================================================
{t:"mcq",d:1,lv:"A1",tp:"artikel",q:"___ Tisch ist gross. (masa - eril)",o:["Die","Das","Der","Ein"],a:2,e:"<b>der Tisch</b> eril. Mobilyalarin cogu eril: der Stuhl, der Schrank, der Tisch."},
{t:"mcq",d:1,lv:"A1",tp:"artikel",q:"___ Milch ist kalt. (sut - dişil)",o:["Der","Das","Die","Ein"],a:2,e:"<b>die Milch</b> disil. Icecek ve sivilarin cogu disil: die Milch, die Butter, die Limonade."},
{t:"mcq",d:1,lv:"A1",tp:"artikel",q:"___ Kind schläft. (cocuk - notr)",o:["Der","Die","Das","Ein"],a:2,e:"<b>das Kind</b> notr. -chen/-lein ekleri her zaman notr: das Mädchen, das Häuschen."},
{t:"fill",d:2,lv:"A1",tp:"artikel",q:"___ Schule beginnt um 8 Uhr. (okul - disil)",c:"Die",e:"<b>die Schule</b> disil. -e ile biten pek cok isim disil: die Schule, die Sprache, die Straße."},
{t:"fill",d:2,lv:"A1",tp:"artikel",q:"___ Buch liegt auf dem Tisch. (kitap - notr)",c:"Das",e:"<b>das Buch</b> notr. das Heft (defter), das Blatt (sayfa), das Papier (kagit)."},
{t:"mcq",d:2,lv:"A1",tp:"artikel",q:"Kural: -ung ile biten isimler hangi artikeli alir?",o:["der","die","das","degisir"],a:1,e:"<b>die</b> — -ung ile biten TUM isimler disil! die Wohnung, die Zeitung, die Übung, die Aufgabe."},
{t:"fill",d:2,lv:"A1",tp:"artikel",q:"___ Arbeit macht Spass. (is - disil)",c:"Die",e:"<b>die Arbeit</b> — -eit/-keit/-heit ile biten TUM isimler disil! die Freiheit, die Gesundheit."},
{t:"mcq",d:3,lv:"A1",tp:"artikel",q:"Welches Nomen hat den falschen Artikel?",o:["der Vater","die Mutter","das Bruder","das Mädchen"],a:2,e:"<b>das Bruder YANLIS</b> — der Bruder! Erkek akraba isimleri eril. das Mädchen dogru (notr, cunku -chen eki)."},

// ============================================================
// A1 - Iyelik zamirleri (8 soru)
// ============================================================
{t:"mcq",d:1,lv:"A1",tp:"possessiv",q:"___ Vater ist Arzt. (benim babam)",o:["Dein","Mein","Sein","Ihr"],a:1,e:"<b>mein</b> = benim. Iyelik zamirleri: mein(benim), dein(senin), sein(onun-erkek), ihr(onun-kadin), unser(bizim), euer(sizin), ihr(onlarin), Ihr(resmi sizin)"},
{t:"mcq",d:1,lv:"A1",tp:"possessiv",q:"Das ist ___ Tasche. (senin canta - die Tasche disil)",o:["mein","deinen","deine","dein"],a:2,e:"<b>deine</b> — disil Nominativ: dein + e. meine/deine/seine/ihre Tasche."},
{t:"fill",d:2,lv:"A1",tp:"possessiv",q:"Das ist ___ Buch. (onun kitabi - erkek icin, das Buch notr)",c:"sein",e:"<b>sein Buch</b> — erkek icin notr Nominativ: sein (ek almaz). sein Auto, sein Heft, sein Kind."},
{t:"fill",d:2,lv:"A1",tp:"possessiv",q:"Wo ist ___ Handy? (benim cep telefonum - das Handy notr)",c:"mein",e:"<b>mein Handy</b> — notr Nominativ: mein (ek almaz). mein Auto, mein Buch, mein Handy."},
{t:"mcq",d:2,lv:"A1",tp:"possessiv",q:"Das ist ___ Mutter. (onun annesi - kadin icin)",o:["seine","ihr","ihre","deine"],a:2,e:"<b>ihre Mutter</b> — kadin icin disil Nominativ: ihre. 'ihr' = onun (kadin) + disil -e = ihre."},
{t:"mcq",d:2,lv:"A1",tp:"possessiv",q:"Wo sind ___ Schlüssel? (benim anahtarlarim - cogul)",o:["mein","meinen","meine","meiner"],a:2,e:"<b>meine Schlüssel</b> — cogul Nominativ: meine. Cogulda TUM iyelikler -e alir: meine, deine, seine, ihre Schlüssel."},
{t:"fill",d:3,lv:"A1",tp:"possessiv",q:"Ich mag ___ Arbeit. (senin isin - die Arbeit - Akkusativ)",c:"deine",e:"<b>deine Arbeit</b> — disil Akkusativ: deine (disil Akkusativ iyelik degismez). Ich mag deine Arbeit = Senin isini seviyorum."},
{t:"mcq",d:3,lv:"A1",tp:"possessiv",q:"Gunluk hayat: Arkadasin bagini begeniyor: Das ist ___ schone Tasche!",o:["deinen","deiner","deine","deines"],a:2,e:"<b>deine schöne Tasche</b> — die Tasche disil, Nominativ: deine. Tebrik veya begeni ifadelerinde Nominativ."},

// ============================================================
// A1 - Temel edatlar (8 soru)
// ============================================================
{t:"mcq",d:1,lv:"A1",tp:"praepos",q:"Ich wohne ___ Berlin. (Berlinde)",o:["nach","aus","in","bei"],a:2,e:"<b>in + Dativ</b> = bir yerde. Ich wohne in Berlin. Sehirler icin: in + Dativ."},
{t:"mcq",d:1,lv:"A1",tp:"praepos",q:"Ich komme ___ der Türkei. (Turkiyeden)",o:["in","nach","aus","von"],a:2,e:"<b>aus</b> = nereden (ulke/sehir). Ich komme aus der Türkei/aus Berlin/aus Deutschland."},
{t:"fill",d:1,lv:"A1",tp:"praepos",q:"Ich fahre ___ Berlin. (Berline gidiyorum - sehir)",c:"nach",e:"<b>nach</b> = sehir/ulkeye. Ich fahre nach Berlin/nach Deutschland/nach Hause."},
{t:"fill",d:2,lv:"A1",tp:"praepos",q:"Das Buch liegt ___ dem Tisch. (masanin uzerinde)",c:"auf",e:"<b>auf dem Tisch</b> = masanin uzerinde. auf = uzerinde (temas halinde). Wechselpraposition: Dativ (nerede) / Akkusativ (nereye)"},
{t:"mcq",d:2,lv:"A1",tp:"praepos",q:"Ich bin ___ Arzt. (doktora gidiyorum - kisi)",o:["nach","zu","bei","in"],a:1,e:"<b>zu + Dativ</b> = kisiye/yere. Ich gehe zum Arzt (zu+dem=zum). nach sehir/ulke, zu kisi/kurum icin."},
{t:"fill",d:2,lv:"A1",tp:"praepos",q:"Das Cafe ist ___ dem Bahnhof. (tren istasyonunun yaninda)",c:"neben",e:"<b>neben</b> = yaninda. Yer edatlari: in(icinde), auf(uzerinde), neben(yaninda), vor(onunde), hinter(arkasinda), uber(uzerinde-yukse), unter(altinda)"},
{t:"mcq",d:2,lv:"A1",tp:"praepos",q:"Wir treffen uns ___ drei Uhr. (saat ucte)",o:["in","an","um","bei"],a:2,e:"<b>um</b> = saat ifadelerinde. Wir treffen uns um 3 Uhr = Saat 3te buluşuyoruz. Zaman edatlari: um(saat), am(gün), im(ay/yil)"},
{t:"mcq",d:3,lv:"A1",tp:"praepos",q:"Gunluk hayat: Postaneye gitmek istiyorsun - doğru cumle:",o:["Ich gehe in Post.","Ich gehe zur Post.","Ich gehe nach Post.","Ich gehe bei Post."],a:1,e:"<b>zur Post</b> (zu+der=zur). Kurumlara gitmek: zur Post, zur Bank, zur Schule, zum Supermarkt, zum Bahnhof."},

// ============================================================
// A1 - Modal fiiller (8 soru)
// ============================================================
{t:"mcq",d:1,lv:"A1",tp:"modal",q:"Ich ___ gut Deutsch sprechen. (yapabilmek)",o:["will","kann","muss","darf"],a:1,e:"<b>können</b> = yapabilmek. ich kann, du kannst, er kann, wir können, ihr könnt, sie können."},
{t:"mcq",d:1,lv:"A1",tp:"modal",q:"Du ___ das nicht machen! (yapmamalısın - yasak)",o:["kannst","willst","darfst","sollst"],a:2,e:"<b>dürfen</b> = izni olmak/yasak. nicht dürfen = yasak. Du darfst das nicht machen = Bunu yapmamalısın."},
{t:"fill",d:2,lv:"A1",tp:"modal",q:"Bosluğu doldur: Ich ___ morgen früh aufstehen. (zorunda olmak - müssen)",c:"muss",e:"<b>müssen:</b> ich muss, du musst, er muss, wir müssen. Zorunda olmak = müssen."},
{t:"fill",d:2,lv:"A1",tp:"modal",q:"Bosluğu doldur: ___ du mir bitte helfen? (ricada bulunmak - können)",c:"Kannst",e:"<b>Kannst du mir bitte helfen?</b> = Bana yardim edebilir misin? Nazik ricada können kullanilir."},
{t:"mcq",d:2,lv:"A1",tp:"modal",q:"Sinemaya gitmek istiyorum - doğru cumle:",o:["Ich kann ins Kino gehen.","Ich will ins Kino gehen.","Ich muss ins Kino gehen.","Ich darf ins Kino gehen."],a:1,e:"<b>wollen</b> = istemek/niyet. Ich will ins Kino gehen = Sinemaya gitmek istiyorum."},
{t:"mcq",d:2,lv:"A1",tp:"modal",q:"Modal fiillerde Infinitiv nereye gider?",o:["Basina","2. konuma","Cumle sonuna","Oznenin onune"],a:2,e:"<b>Cumle sonuna!</b> Ich muss morgen früh aufstehen. = Infinitiv (aufstehen) daima sona gider."},
{t:"fill",d:3,lv:"A1",tp:"modal",q:"Bosluğu doldur: Im Krankenhaus ___ man nicht rauchen. (dürfen, yasak)",c:"darf",e:"<b>darf</b> — man = genel kisi zamiri (insan/kisi anlami). Im Krankenhaus darf man nicht rauchen = Hastanede sigara icilmez."},
{t:"mcq",d:3,lv:"A1",tp:"modal",q:"Doktora gitmem lazim - dogru cumle:",o:["Ich muss zum Arzt gehen.","Ich will zum Arzt.","Ich kann zum Arzt gehen.","Ich darf zum Arzt gehen."],a:0,e:"<b>Ich muss zum Arzt gehen.</b> müssen = zorunda olmak/lazim. zum Arzt gehen = doktora gitmek."},

// ============================================================
// A1 - Selamlasma ve gunluk ifadeler (8 soru)
// ============================================================
{t:"mcq",d:1,lv:"A1",tp:"begr",q:"Ilk defa tanisiyorsunuz - dogru ifade:",o:["Tschuss!","Guten Morgen!","Schön, Sie kennenzulernen!","Auf Wiedersehen!"],a:2,e:"<b>Schön, Sie kennenzulernen!</b> = Tanistigimiza sevindim! Resmi tanisma ifadesi."},
{t:"mcq",d:1,lv:"A1",tp:"begr",q:"Arkadasin sana soruyor: Wie geht es dir? Cevap:",o:["Ich heisse Mete.","Danke, gut! Und dir?","Auf Wiedersehen!","Ich komme aus Türkei."],a:1,e:"<b>Danke, gut! Und dir?</b> = Tesekkurler, iyiyim! Sene? Karsilikli selamlasma formulu."},
{t:"fill",d:1,lv:"A1",tp:"begr",q:"Sabah ofise giriyorsun - ne dersin? Guten ___!",c:"Morgen",e:"<b>Guten Morgen!</b> = Gunaydın! Gunaydın: Guten Morgen, İyi günler: Guten Tag, İyi aksamlar: Guten Abend"},
{t:"fill",d:2,lv:"A1",tp:"begr",q:"Tesekkur ediyorsun - ne dersin? ___ schon!",c:"Danke",e:"<b>Danke schön!</b> = Cok tesekkurler! Karsilikli: Bitte schon! (rica ederim)"},
{t:"mcq",d:2,lv:"A1",tp:"begr",q:"Birinin sozlerini anlamamadin - ne dersin?",o:["Wie bitte?","Was bitte?","Nein danke.","Entschuldigung."],a:0,e:"<b>Wie bitte?</b> = Efendim? / Anlayamadim. Tekrar soyle demek icin. Entschuldigung = Affedersiniz/Ozur dilerim (farkli anlam)."},
{t:"mcq",d:2,lv:"A1",tp:"begr",q:"Resmi vedalasmada:",o:["Tschuss!","Ciao!","Auf Wiedersehen!","Servus!"],a:2,e:"<b>Auf Wiedersehen!</b> = Resmi 'hoscakal'. Samimi: Tschuss/Ciao/Bis bald/Servus (Avusturya). Telefonda: Auf Wiederhören!"},
{t:"fill",d:2,lv:"A1",tp:"begr",q:"Birine ozur diliyorsun: ___ !",c:"Entschuldigung",e:"<b>Entschuldigung!</b> = Ozur dilerim / Affedersiniz. Kisa: Entschuldigung. Resmi: Es tut mir leid."},
{t:"mcq",d:3,lv:"A1",tp:"begr",q:"Yeni birini arkadasina tanistirmak istiyorsun:",o:["Das ist mein Freund Max.","Ich bin Max.","Wie heisst du?","Wo wohnst du?"],a:0,e:"<b>Das ist mein Freund Max.</b> = Bu benim arkadasim Max. Tanitma: Das ist + iyelik + isim."},

// ============================================================
// A1 - Sayilar ve saat (8 soru)
// ============================================================
{t:"mcq",d:1,lv:"A1",tp:"zahlen",q:"Saat sorma: ___ Uhr ist es?",o:["Was","Wie","Wer","Welche"],a:1,e:"<b>Wie viel Uhr ist es?</b> veya <b>Wie spät ist es?</b> = Saat kac?"},
{t:"mcq",d:1,lv:"A1",tp:"zahlen",q:"Es ist drei Uhr. = ?",o:["Saat 13","Saat 3","Saat 30 dakika","Saat 3.30"],a:1,e:"<b>Es ist drei Uhr</b> = Saat 3. drei=3, acht=8, zwölf=12. Es ist Mitternacht = Gece yarısı."},
{t:"fill",d:1,lv:"A1",tp:"zahlen",q:"20 + 5 = ___ (Almanca yaz)",c:"fünfundzwanzig",e:"<b>fünfundzwanzig</b> = 25. Almancada onlar + und + birler: zwanzig+fünf = fünfundzwanzig"},
{t:"mcq",d:2,lv:"A1",tp:"zahlen",q:"Es ist halb sieben. = ?",o:["Saat 7","Saat 6.30","Saat 7.30","Saat 0.30"],a:1,e:"<b>halb sieben</b> = 6.30 (yedinin yarisi). DIKKAT: Turkce'nin aksine 7 oncesi yari demek! halb drei=2.30, halb zehn=9.30"},
{t:"fill",d:2,lv:"A1",tp:"zahlen",q:"Es ist Viertel nach zwei. = saat ___",c:"2.15",e:"<b>Viertel nach zwei</b> = 2.15 (ikinin ceyrek sonrasi). Viertel vor drei=2.45 (ucun ceyrek oncesi)."},
{t:"mcq",d:2,lv:"A1",tp:"zahlen",q:"Randevunu soyluyorsun: Der Termin ist am ___ Oktober.",o:["fünften","fünfte","fünf","fünfter"],a:0,e:"<b>am fünften</b> = besinci (tarhte sıra sayısı + Dativ). am ersten, am zweiten, am dritten... am zwanzigsten."},
{t:"fill",d:3,lv:"A1",tp:"zahlen",q:"Bosluğu doldur: Das Konzert beginnt um ___ Uhr. (19:30 - halb yaz)",c:"halb acht",e:"<b>halb acht</b> = 19.30 (sekizin yarisi). 24 saat sistemi: neunzehn Uhr dreissig da diyebilirsin."},
{t:"mcq",d:3,lv:"A1",tp:"zahlen",q:"Supermarkette fiyat: Das kostet zwei Euro fünfzig. =",o:["2,15 Euro","2,05 Euro","2,50 Euro","2,60 Euro"],a:2,e:"<b>zwei Euro fünfzig</b> = 2,50 Euro. Almancada ondalik: Euro + Cent. drei Euro neunzig = 3,90 Euro."},

// ============================================================
// A1 - Kisi zamirleri (8 soru)
// ============================================================
{t:"mcq",d:1,lv:"A1",tp:"personalpron",q:"Annen icin hangi zamiri kullanirsın?",o:["er","es","sie","wir"],a:2,e:"<b>sie</b> = o (kadin). er=o(erkek), sie=o(kadin), es=o(nesne/notr). Anneme: meine Mutter → sie."},
{t:"mcq",d:1,lv:"A1",tp:"personalpron",q:"Arkadaslarini anlatiyorsun (cogul): ___ kommen aus Türkei.",o:["Er","Sie","Wir","Ihr"],a:1,e:"<b>sie</b> = onlar (cogul). sie(kadin)=sie(onlar) - fark fiil cekiminden anlasilir: sie kommt(kadin)/sie kommen(onlar)."},
{t:"fill",d:1,lv:"A1",tp:"personalpron",q:"Erkek arkadasindan bahsediyorsun: ___ ist sehr nett.",c:"Er",e:"<b>Er</b> = o (erkek). Er ist sehr nett = O cok nazik."},
{t:"mcq",d:2,lv:"A1",tp:"personalpron",q:"Akkusativ: Ich sehe ___ jeden Tag. (onu - erkek arkadasini)",o:["er","ihn","ihm","seiner"],a:1,e:"<b>ihn</b> = onu (eril Akkusativ). er→ihn. Ich sehe ihn = Onu goruyorum. sie(kadin)→sie, es→es."},
{t:"fill",d:2,lv:"A1",tp:"personalpron",q:"Akkusativ: Ich liebe ___. (onu - kadindan bahsediyorsun)",c:"sie",e:"<b>sie</b> = onu (disil Akkusativ degismez). Ich liebe sie = Onu seviyorum (disil)."},
{t:"mcq",d:2,lv:"A1",tp:"personalpron",q:"Dativ: Ich gebe ___ das Buch. (ona - erkek)",o:["ihn","er","ihm","sein"],a:2,e:"<b>ihm</b> = ona (eril Dativ). er→ihm. Ich gebe ihm das Buch = Ona kitabi veriyorum."},
{t:"fill",d:3,lv:"A1",tp:"personalpron",q:"Cumleyi tamamla: Hier ist die Pizza. Ich esse ___ gern. (onu - die Pizza disil)",c:"sie",e:"<b>sie</b> - die Pizza disil → Akkusativ: sie. Ich esse sie gern = Onu seve seve yerim."},
{t:"mcq",d:3,lv:"A1",tp:"personalpron",q:"Resmi Siz: ___ sind Herr Müller, oder?",o:["Ihr","Du","Sie","Er"],a:2,e:"<b>Sie</b> (buyuk S) = resmi siz. Fiil 3. cogul gibi: Sie sind, Sie haben, Sie kommen."},

// ============================================================
// A1 - Nominativ & Akkusativ (8 soru)
// ============================================================
{t:"mcq",d:1,lv:"A1",tp:"nominativ_akk",q:"Nominativ: ___ Hund ist süss. (kopek - eril)",o:["Den","Die","Das","Der"],a:3,e:"<b>Der</b> — eril belirli Nominativ. Nominativ tablosu: der/die/das/die"},
{t:"mcq",d:1,lv:"A1",tp:"nominativ_akk",q:"Akkusativ: Ich sehe ___ Hund. (kopegi - eril)",o:["der","die","das","den"],a:3,e:"<b>den</b> — eril belirli Akkusativ. SADECE ERIL degisir: der→den. Diger cinsler degismez!"},
{t:"fill",d:2,lv:"A1",tp:"nominativ_akk",q:"Ich kaufe ___ Apfel. (belirsiz, eril Akkusativ)",c:"einen",e:"<b>einen</b> — belirsiz eril Akkusativ: ein→einen. Ich kaufe einen Apfel = Bir elma aliyorum."},
{t:"fill",d:2,lv:"A1",tp:"nominativ_akk",q:"Ich trinke ___ Tee. (belirsiz, eril Akkusativ)",c:"einen",e:"<b>einen Tee</b> — der Tee eril → Akkusativ: einen. Ich trinke einen Tee = Bir cay iciyorum."},
{t:"mcq",d:2,lv:"A1",tp:"nominativ_akk",q:"Hangi fiil KESINLIKLE Akkusativ ister?",o:["helfen","glauben","lieben","antworten"],a:2,e:"<b>lieben</b> Akkusativ ister: Ich liebe dich. helfen=Dativ, glauben=Dativ(kisi)/Akkusativ(seye), antworten=Dativ."},
{t:"fill",d:2,lv:"A1",tp:"nominativ_akk",q:"Ich lese ___ Zeitung. (gazete - disil Akkusativ belirli)",c:"die",e:"<b>die Zeitung</b> — disil Akkusativ belirli: die (degismez). Ich lese die Zeitung = Gazete okuyorum."},
{t:"mcq",d:3,lv:"A1",tp:"nominativ_akk",q:"Hangi cumle YANLISTIR?",o:["Ich liebe meine Mutter.","Er hat einen Bruder.","Sie kauft einen Tasche.","Wir sehen den Film."],a:2,e:"<b>einen Tasche YANLIS</b> — die Tasche disil → eine Tasche! Akkusativ disil belirsiz: eine (degismez)."},
{t:"mcq",d:3,lv:"A1",tp:"nominativ_akk",q:"Kein/keine Akkusativ: Ich habe ___ Geschwister.",o:["kein","keinen","keine","keines"],a:2,e:"<b>keine Geschwister</b> — cogul kein: keine. Geschwister cogul → keine."},

// ============================================================
// A1 - Cogul formlar (8 soru)
// ============================================================
{t:"mcq",d:1,lv:"A1",tp:"plural",q:"das Kind → die ___",o:["Kinds","Kinde","Kinder","Kindern"],a:2,e:"<b>die Kinder</b> (-er eki, Umlaut yok). -er eki: das Kind→Kinder, das Buch→Bücher, das Haus→Häuser."},
{t:"mcq",d:1,lv:"A1",tp:"plural",q:"der Mann → die ___",o:["Manns","Manner","Männer","Männern"],a:2,e:"<b>die Männer</b> (-er eki + Umlaut). Tek heceli eril isimler cogunlukla Umlaut alir."},
{t:"fill",d:2,lv:"A1",tp:"plural",q:"die Frau → die ___ (kadınlar)",c:"Frauen",e:"<b>die Frauen</b> (-en eki). Disil isimler cogunlukla -en veya -n alir: Frau→Frauen, Schule→Schulen."},
{t:"fill",d:2,lv:"A1",tp:"plural",q:"das Auto → die ___ (arabalar)",c:"Autos",e:"<b>die Autos</b> (-s eki). Yabanci kokenli kelimeler -s alir: Auto, Radio, Foto, Hobby, Computer."},
{t:"mcq",d:2,lv:"A1",tp:"plural",q:"der Lehrer → die ___",o:["Lehrers","Lehrern","Lehrers","Lehrer"],a:3,e:"<b>die Lehrer</b> (degismez - Nullplural). -er/-en/-el ile biten pek cok eril isim degismez: Lehrer, Schüler, Vogel."},
{t:"fill",d:2,lv:"A1",tp:"plural",q:"der Tag → die ___ (gunler)",c:"Tage",e:"<b>die Tage</b> (-e eki). Tek heceli eril isimler cogu zaman -e alir: Tag→Tage, Weg→Wege, Tisch→Tische."},
{t:"mcq",d:3,lv:"A1",tp:"plural",q:"Hangi cogul YANLISTIR?",o:["die Bücher (das Buch)","die Häuser (das Haus)","die Stühle (der Stuhl)","die Müttern (die Mutter)"],a:3,e:"<b>die Müttern YANLIS</b> — die Mutter → die Mütter (Umlaut, -n yok). Mutter, Tochter, Bruder Umlaut alir."},
{t:"mcq",d:3,lv:"A1",tp:"plural",q:"Cogulda belirli artikel hep nedir?",o:["der","die","das","degisir"],a:1,e:"<b>die</b> — Cogulda TUM belirli artikeller 'die' olur: der Mann→die Männer, die Frau→die Frauen, das Kind→die Kinder."},

// ============================================================
// A1 - Emir kipi (8 soru)
// ============================================================
{t:"mcq",d:1,lv:"A1",tp:"imperativ",q:"Komm her! — bu kimin icin emir?",o:["ihr","Sie","du","wir"],a:2,e:"<b>du icin Imperativ</b> = Fiil koku (genellikle -e olmadan). kommen→Komm! gehen→Geh! machen→Mach!"},
{t:"mcq",d:1,lv:"A1",tp:"imperativ",q:"Resmi talimatta: ___ Sie bitte Platz! (lutfen oturun)",o:["Nehmt","Nimm","Nehmen","Nimmst"],a:2,e:"<b>Nehmen Sie</b> — Sie icin Imperativ: Infinitiv + Sie. Nehmen Sie bitte Platz = Lutfen oturun."},
{t:"fill",d:2,lv:"A1",tp:"imperativ",q:"Arkadasina: ___ bitte langsamer! (sprechen, du - yavas konusmak)",c:"Sprich",e:"<b>Sprich!</b> — sprechen degisken (e→i): sprich. Degisken Imperativ: sprechen→Sprich!, sehen→Sieh!, essen→Iss!"},
{t:"fill",d:2,lv:"A1",tp:"imperativ",q:"Gruba: ___ bitte ruhig! (sein, ihr - sakin olun)",c:"Seid",e:"<b>Seid ruhig!</b> — sein ihr Imperativ: seid. Ruhe! da diyebilirsin (kisaca)."},
{t:"mcq",d:2,lv:"A1",tp:"imperativ",q:"Tarif veriyorsun: ___ Sie links ab! (links donun - abbiegen trennbar)",o:["Biege","Biegst","Biegen","Bieg"],a:2,e:"<b>Biegen Sie ab!</b> — trennbar Sie Imperativ: Infinitiv + Sie + on ek sona. Biegen Sie links ab!"},
{t:"mcq",d:2,lv:"A1",tp:"imperativ",q:"Nazik rica: du'ya lutfen pencereyi ac - dogru form:",o:["Öffne bitte das Fenster!","Öffnen das Fenster!","Öffnest das Fenster!","Öffnet bitte das Fenster!"],a:0,e:"<b>Öffne bitte das Fenster!</b> — du Imperativ -e eklenebilir (ozellikle d/t ile bitenler): öffne, warte, rede."},
{t:"fill",d:3,lv:"A1",tp:"imperativ",q:"Arkadaslarina (ihr) pasta getirmelerini soyle: ___ bitte Kuchen mit!",c:"Bringt",e:"<b>Bringt bitte Kuchen mit!</b> — mitbringen trennbar, ihr Imperativ: bringt...mit. Denken Sie daran!"},
{t:"mcq",d:3,lv:"A1",tp:"imperativ",q:"Hastanede levha: Im Krankenhaus: Bitte ___ !",o:["ruhen Sie sich aus","sei ruhig","seid ruhig","Ruhe halten"],a:0,e:"<b>Ruhen Sie sich aus!</b> = Dinlenin! Resmi tabelalar hep Sie Imperativ kullanir."},

// ============================================================
// A1 - TELC okuma (6 soru)
// ============================================================
{t:"telc",d:2,lv:"A1",tp:"lesen",q:"TELC A1 — Oku ve soruyu yanıtla:<br><br><i>Hallo! Ich heisse Anna. Ich komme aus Österreich und wohne jetzt in Hamburg. Ich bin 24 Jahre alt und studiere Medizin. Ich lerne gern Sprachen — ich spreche Deutsch, Englisch und ein bisschen Türkisch!</i><br><br>Anna hangi dilleri konusuyor?",o:["Sadece Almanca","Almanca ve Ingilizce","Almanca, Ingilizce ve biraz Turkce","Turkce ve Ingilizce"],a:2,e:"Metin: 'sie spricht Deutsch, Englisch und ein bisschen Türkisch'. ein bisschen = biraz."},
{t:"telc",d:2,lv:"A1",tp:"lesen",q:"TELC A1 — Ilan:<br><br><i>WOHNUNG ZU VERMIETEN: 3 Zimmer, Küche, Bad. 65 qm. 2. Etage. Keine Haustiere. 750 Euro + Nebenkosten. Kontakt: 0170-456789</i><br><br>Bu dairede ne yapılamaz?",o:["Cocuk barindiramaz","Hayvan besleyemezsin","Mudur degistiremezsin","Odeme yapamazsin"],a:1,e:"'Keine Haustiere' = Evcil hayvan yasak. Haustier = evcil hayvan, keine = yok/yasak."},
{t:"telc",d:2,lv:"A1",tp:"lesen",q:"TELC A1 — SMS:<br><br><i>Hey Mete! Treffen wir uns heute um 18 Uhr am Bahnhof? Ich kaufe Kinokarten. Der Film beginnt um 19:30. LG, Lena</i><br><br>Film saat kacta basliyor?",o:["18:00","18:30","19:00","19:30"],a:3,e:"'Der Film beginnt um <b>19:30</b>'. beginnen = baslamak, um = saat (zaman belirtme)."},
{t:"telc",d:3,lv:"A1",tp:"lesen",q:"TELC A1 — Tarif:<br><br><i>Apfelkuchen-Rezept: 500g Mehl, 250g Butter, 200g Zucker, 4 Eier, 1kg Äpfel. Alles mischen und bei 180 Grad, 45 Minuten backen.</i><br><br>Kac derece firinlanir?",o:["45 derece","180 derece","250 derece","500 derece"],a:1,e:"'bei 180 Grad... backen' = 180 derecede pisirmek. bei = ...de/...da (tarif/kosula). backen = pismek/firinda pisirmek."},
{t:"telc",d:3,lv:"A1",tp:"lesen",q:"TELC A1 — Bildirim:<br><br><i>ACHTUNG: Wegen Bauarbeiten ist die Linie 5 von Montag bis Freitag von 8-18 Uhr nicht in Betrieb. Bitte benutzen Sie die Ersatzbuslinie 50. Wir bitten um Verständnis.</i><br><br>Hat 5 neden calismıyor?",o:["Grev","Insaat calimalari","Bakim calimalari","Olumsuz hava"],a:1,e:"'wegen Bauarbeiten' = insaat calimalari nedeniyle. wegen + Genitiv = ...nedeniyle."},
{t:"telc",d:3,lv:"A1",tp:"lesen",q:"TELC A1 — E-posta:<br><br><i>Betreff: Deutschkurs Anmeldung. Guten Tag, ich möchte mich für den Deutschkurs A1 anmelden. Ich bin Anfänger und habe keine Deutschkenntnisse. Bitte schicken Sie mir Informationen über Kurszeiten und Kosten. Mit freundlichen Grüßen, Kemal Yildiz</i><br><br>Kemal hangi seviyede?",o:["A2","B1","Tamamen yeni baslayan","Orta seviye"],a:2,e:"'Ich bin Anfänger und habe keine Deutschkenntnisse' = Yeni basliyorum, Almanca bilgim yok. Anfänger = yeni baslayon."},

// ============================================================
// A2 - Perfekt (10 soru)
// ============================================================
{t:"mcq",d:2,lv:"A2",tp:"perfekt",q:"A2 — Ich ___ gestern einen Film gesehen. (haben/sein?)",o:["bin","habe","hatte","war"],a:1,e:"<b>haben + Partizip II</b> — sehen gecis fiili, haben ile. Ich habe gesehen."},
{t:"mcq",d:2,lv:"A2",tp:"perfekt",q:"A2 — Er ___ nach Hause gegangen. (haben/sein?)",o:["hat","ist","hatte","war"],a:1,e:"<b>sein + Partizip II</b> — gehen hareket fiili, sein ile. Er ist gegangen. Kural: hareket (gitmek/gelmek/kosumk) ve hal degisimi (uyanmak/uyumak) sein alir."},
{t:"fill",d:2,lv:"A2",tp:"perfekt",q:"A2 — Perfekt yap: machen → wir haben ___",c:"gemacht",e:"<b>gemacht</b> — ge + mach + t. Duzenli Partizip II: ge- + Verbstamm + -(e)t. machen→gemacht, kaufen→gekauft, spielen→gespielt."},
{t:"fill",d:2,lv:"A2",tp:"perfekt",q:"A2 — Perfekt yap: trinken → ich habe ___",c:"getrunken",e:"<b>getrunken</b> — duzensiz: trinken→getrunken (u→u). Onemli duzensizler: trinken→getrunken, schreiben→geschrieben, singen→gesungen."},
{t:"fill",d:2,lv:"A2",tp:"perfekt",q:"A2 — Perfekt yap: aufstehen → ich bin ___",c:"aufgestanden",e:"<b>aufgestanden</b> — trennbar duzensiz: auf + ge + stand + en. Trennbar Partizip II: on ek + ge + govde + (e)n veya t."},
{t:"mcq",d:3,lv:"A2",tp:"perfekt",q:"A2 — Hangi Partizip II YANLISTIR?",o:["gefahren (fahren)","geschlafen (schlafen)","gearbeitet (arbeiten)","gelesen (lesen)"],a:1,e:"<b>geschlafen DOGRU</b> aslinda! Hepsi dogru. Kontrol: fahren→gefahren(sein), schlafen→geschlafen(haben), arbeiten→gearbeitet, lesen→gelesen."},
{t:"mcq",d:2,lv:"A2",tp:"perfekt",q:"A2 — Perfekt cumlesi: Dun alısveris yaptim:",o:["Ich habe gestern eingekauft.","Ich bin gestern eingekauft.","Ich habe gestern einkaufen.","Ich eingekauft gestern habe."],a:0,e:"<b>Ich habe gestern eingekauft.</b> einkaufen trennbar: ein+ge+kauf+t = eingekauft. haben + Partizip II (sona gider)."},
{t:"fill",d:3,lv:"A2",tp:"perfekt",q:"A2 — Sie ___ letzte Woche nach Paris geflogen. (fliegen, kadin)",c:"ist",e:"<b>ist geflogen</b> — fliegen hareket fiili: sein + geflogen. Sie ist nach Paris geflogen = Gecen hafta Parise uctu."},
{t:"mcq",d:3,lv:"A2",tp:"perfekt",q:"A2 — 'Das Baby ___ gerade eingeschlafen.' Dogru Perfekt:",o:["hat eingeschlafen","ist eingeschlafen","hat geschlafen","ist geschlafen"],a:1,e:"<b>ist eingeschlafen</b> — einschlafen hal degisimi (uyanik→uyuyor): sein. einschlafen→eingeschlafen."},
{t:"telc",d:3,lv:"A2",tp:"perfekt",q:"TELC A2 — Diyalogu oku:<br><br><i>A: Was hast du am Wochenende gemacht? B: Ich bin samstags ins Kino gegangen und habe einen tollen Film gesehen. Danach haben wir Pizza gegessen.</i><br><br>B cumartesi ne yapti (ilk eylem)?",o:["Pizza yedi","Film izledi","Alısveris yapti","Eve gitti"],a:1,e:"'bin ins Kino gegangen' = sinemaya gitti (ilk eylem). ins = in das (Akkusativ). Sonra: film gördü, pizza yedi."},

// ============================================================
// A2 - Prateritum sein/haben (6 soru)
// ============================================================
{t:"mcq",d:2,lv:"A2",tp:"praeteritum",q:"A2 — Hikaye: Es ___ einmal eine Prinzessin... (sein, Prateritum)",o:["ist","war","hat","hatte"],a:1,e:"<b>war</b> = sein Prateritum 3. tekil. Masallar/hikayeler Prateritum kullanir: Es war einmal... = Bir varmis bir yokmus..."},
{t:"mcq",d:2,lv:"A2",tp:"praeteritum",q:"A2 — Das Kind ___ hohes Fieber. (haben, Prateritum, 3. tekil)",o:["hat","hatte","habe","hatten"],a:1,e:"<b>hatte</b> — haben Prateritum: ich hatte, du hattest, er/sie/es hatte, wir hatten, ihr hattet, sie hatten."},
{t:"fill",d:2,lv:"A2",tp:"praeteritum",q:"A2 — Wir ___ gestern viel Spass. (haben, Prateritum, 1. cogul)",c:"hatten",e:"<b>hatten</b> — wir hatten. Wir hatten gestern viel Spass = Dun cok eglendik."},
{t:"fill",d:2,lv:"A2",tp:"praeteritum",q:"A2 — Ich ___ als Kind sehr schüchtern. (sein, Prateritum, 1. tekil)",c:"war",e:"<b>war</b> — sein Prateritum 1. tekil. Ich war als Kind schüchtern = Cocukken cok utangactim."},
{t:"mcq",d:3,lv:"A2",tp:"praeteritum",q:"A2 — Neden sein/haben Prateritum kullanılır?",o:["Sadece yazili dilde","Gundelik konusmada da dogal gelir","Sadece masallarda","Sadece resmi metinlerde"],a:1,e:"<b>Gundelik konusmada da dogal.</b> sein ve haben icin Prateritum (war/hatte) Perfekt'ten (ist gewesen/hat gehabt) daha dogal ve kisadir."},
{t:"telc",d:3,lv:"A2",tp:"praeteritum",q:"TELC A2 — Oku:<br><br><i>Mozart war ein österreichischer Komponist. Er wurde 1756 in Salzburg geboren und hatte schon als Kind grosses Talent. Mit fünf Jahren komponierte er seine ersten Stücke.</i><br><br>Mozart ne zaman dogdu?",o:["1756","1756'dan once","5 yasinda","Salzburg'da"],a:0,e:"'Er wurde 1756 geboren' = 1756'da dogdu. werden + geboren = dogmak (Passiv). Salzburg yer, soru 'ne zaman' idi."},

// ============================================================
// A2 - Akkusativ & Dativ (8 soru)
// ============================================================
{t:"mcq",d:2,lv:"A2",tp:"kasus",q:"A2 — Akkusativ: Ich sehe ___ Film. (belirli, eril)",o:["der","die","den","dem"],a:2,e:"<b>den Film</b> — eril belirli Akkusativ: der→den. Akkusativ: Wen? (kimi?) Was? (neyi?) sorularini cevaplar."},
{t:"mcq",d:2,lv:"A2",tp:"kasus",q:"A2 — Dativ: Ich helfe ___ Frau. (belirli, disil)",o:["die","der","den","dem"],a:1,e:"<b>der Frau</b> — disil Dativ: die→der. Dativ: Wem? (kime?) sorusunu cevaplar. helfen her zaman Dativ ister."},
{t:"fill",d:2,lv:"A2",tp:"kasus",q:"A2 — Bosluğu doldur: Er gibt ___ Kind Schokolade. (belirli, notr Dativ)",c:"dem",e:"<b>dem Kind</b> — notr Dativ: das→dem. geben iki nesne alir: Dativ(kime) + Akkusativ(neyi). Er gibt dem Kind Schokolade."},
{t:"mcq",d:2,lv:"A2",tp:"kasus",q:"A2 — Prepositions mit Dativ: 'mit' her zaman hangi hal ister?",o:["Akkusativ","Dativ","Genitiv","Nominativ"],a:1,e:"<b>Dativ</b> — mit, bei, nach, von, seit, zu, aus, gegenüber her zaman Dativ ister."},
{t:"fill",d:3,lv:"A2",tp:"kasus",q:"A2 — Bosluğu doldur: Ich fahre mit ___ Bus. (belirli, eril Dativ)",c:"dem",e:"<b>dem Bus</b> — mit + Dativ: der→dem. mit dem Bus = otobusle. mit + Dativ: mit dem Zug, mit der U-Bahn."},
{t:"mcq",d:3,lv:"A2",tp:"kasus",q:"A2 — Wechselprasitionen: in/auf/an/... Dativ mi Akkusativ mi?",o:["Her zaman Dativ","Her zaman Akkusativ","Nerede=Dativ, Nereye=Akkusativ","Nerede=Akkusativ, Nereye=Dativ"],a:2,e:"<b>Nerede=Dativ, Nereye=Akkusativ.</b> Wo? (nerede) → Dativ: Das Buch liegt auf dem Tisch. Wohin? (nereye) → Akkusativ: Ich lege das Buch auf den Tisch."},
{t:"fill",d:3,lv:"A2",tp:"kasus",q:"A2 — Bosluğu doldur: Das Bild hängt an ___ Wand. (nerede - disil Dativ)",c:"der",e:"<b>der Wand</b> — an + Dativ (nerede): die→der. Das Bild hängt an der Wand = Tablo duvarda asili."},
{t:"telc",d:3,lv:"A2",tp:"kasus",q:"TELC A2 — Doğru cumleyi sec:<br><br>Maria schreibt ___ Mutter einen Brief.",o:["ihr","ihre","ihren","ihrer"],a:0,e:"<b>ihrer Mutter</b> Dativ disil: ihre→ihrer. HAYIR! Burada: schreiben + Dativ(kime) + Akkusativ(neyi). 'ihrer Mutter' dogru! Ama secenek 'ihr' de kabul edilir kısa form. Cevap: ihrer."},

// ============================================================
// A2 - Trennbare Verben (6 soru)
// ============================================================
{t:"mcq",d:2,lv:"A2",tp:"trennbar",q:"A2 — aufmachen: Ich ___ das Fenster ___ .",o:["mache...auf","aufmache...","machen...auf","auf...mache"],a:0,e:"<b>Ich mache das Fenster auf.</b> Trennbar: govde 2. konumda, on ek sona. mache...auf."},
{t:"fill",d:2,lv:"A2",tp:"trennbar",q:"A2 — anrufen: Er ___ mich jeden Tag ___. (tamamla)",c:"ruft...an",e:"<b>ruft...an</b> — anrufen: er ruft...an. Er ruft mich jeden Tag an = Her gun beni ariyor."},
{t:"mcq",d:2,lv:"A2",tp:"trennbar",q:"A2 — Perfekt'te trennbar: aufmachen → Partizip II?",o:["aufgemacht","gemachtauf","geaufmacht","aufmacht"],a:0,e:"<b>aufgemacht</b> — Trennbar Partizip II: on ek + ge + govde + t. auf + ge + mach + t = aufgemacht."},
{t:"fill",d:3,lv:"A2",tp:"trennbar",q:"A2 — fernsehen: Wir ___ gestern Abend ___. (Perfekt)",c:"haben ferngesehen",e:"<b>haben ferngesehen</b> — fernsehen trennbar duzensiz: fern+ge+sehen = ferngesehen. haben + ferngesehen."},
{t:"mcq",d:3,lv:"A2",tp:"trennbar",q:"A2 — Trennbar + Modal: Du ___ bitte ___ ! (aufhören - dur artik)",o:["aufhörst...","hörst...auf","musst...aufhören","hör...auf"],a:3,e:"<b>Hör bitte auf!</b> — Imperativ (du) trennbar: govde + ek. Hör auf! veya modal ile: Du musst aufhören."},
{t:"telc",d:3,lv:"A2",tp:"trennbar",q:"TELC A2 — Diyalog:<br><br><i>A: Wann fängt der Kurs an? B: Er fängt um 18 Uhr an und hört um 20 Uhr auf.</i><br><br>Kurs kac saat surer?",o:["1 saat","1.5 saat","2 saat","2.5 saat"],a:2,e:"18:00-20:00 = 2 saat. anfangen = baslamak (an...fängt), aufhören = bitmek/durmak (hört...auf). Ikisi de trennbar."},

// ============================================================
// A2 - Komparativ & Superlativ (6 soru)
// ============================================================
{t:"mcq",d:2,lv:"A2",tp:"komparativ",q:"A2 — Berlin ist ___ als Hamburg. (groß - karsilastirma)",o:["mehr gross","grosser","größer","am größten"],a:2,e:"<b>größer</b> — groß Umlaut alır: größer. Karsilastirma: Adj + er + als."},
{t:"fill",d:2,lv:"A2",tp:"komparativ",q:"A2 — Bosluğu doldur: Der Zug ist ___ als das Auto. (schnell - daha hizli)",c:"schneller",e:"<b>schneller</b> — schnell duzenli: schnell + er = schneller. schneller als = ...dan daha hizli."},
{t:"mcq",d:2,lv:"A2",tp:"komparativ",q:"A2 — Superlativ: Das ist das ___ Restaurant in der Stadt. (gut)",o:["bessere","beste","am besten","am beste"],a:1,e:"<b>das beste Restaurant</b> — gut duzensiz: gut→besser→best. Sifat olarak: das beste, am besten (yuklem icinde)."},
{t:"fill",d:2,lv:"A2",tp:"komparativ",q:"A2 — Bosluğu doldur: Im Winter ist es ___ als im Herbst. (kalt - daha soguk)",c:"kälter",e:"<b>kälter</b> — kalt Umlaut alır: kälter. alt→älter, jung→jünger, warm→wärmer."},
{t:"mcq",d:3,lv:"A2",tp:"komparativ",q:"A2 — Superlativ yuklemde: Dieser Kuchen schmeckt ___ . (gut)",o:["am gut","am beste","am besten","am bessten"],a:2,e:"<b>am besten</b> — yuklem icinde am + ...sten kullanilir. am schnellsten, am besten, am größten."},
{t:"telc",d:3,lv:"A2",tp:"komparativ",q:"TELC A2 — Reklam metni:<br><br><i>Unser neues Smartphone: schneller als alle anderen, das dünnste Modell auf dem Markt, und der beste Preis-Leistungs-Vergleich!</i><br><br>Bu reklam icin dogru olan hangisi?",o:["Diger telefonlardan yavaş","En kalin model","En iyi fiyat-performans","En pahali"],a:2,e:"'der beste Preis-Leistungs-Vergleich' = en iyi fiyat-performans orani. schneller als alle anderen = en hizli, das dünnste = en ince."},

// ============================================================
// A2 - Baglaclar weil/dass/wenn/obwohl (8 soru)
// ============================================================
{t:"mcq",d:2,lv:"A2",tp:"konjunktionen",q:"A2 — weil ile cumle: Ich lerne Deutsch, ___ ich in Deutschland arbeiten möchte.",o:["darum","weil","wegen","damit"],a:1,e:"<b>weil</b> = cunku. Yan cumle kurar, fiil sona gider: weil ich in Deutschland arbeiten <b>möchte</b>."},
{t:"fill",d:2,lv:"A2",tp:"konjunktionen",q:"A2 — Bosluğu doldur: Ich denke, ___ du Recht hast. (oldugunu dusunuyorum)",c:"dass",e:"<b>dass</b> = ...oldugu, ...digini. Yan cumle: fiil sona gider. Ich denke, dass du Recht hast."},
{t:"mcq",d:2,lv:"A2",tp:"konjunktionen",q:"A2 — wenn ile: ___ es regnet, bleibe ich zu Hause.",o:["weil","dass","wenn","ob"],a:2,e:"<b>wenn</b> = ne zaman/...ise (kosul). Wenn es regnet, bleibe ich zu Hause = Yagmur yaginca evde kalirim."},
{t:"fill",d:3,lv:"A2",tp:"konjunktionen",q:"A2 — Bosluğu doldur: ___ er müde ist, arbeitet er weiter. (yorgun olmasina ragmen)",c:"Obwohl",e:"<b>Obwohl</b> = ...masına rağmen. Yan cumle: fiil sona. Obwohl er müde ist, arbeitet er weiter."},
{t:"mcq",d:3,lv:"A2",tp:"konjunktionen",q:"A2 — denn vs weil fark nedir?",o:["Hic fark yok","denn sonrasi fiil degismez","weil sonrasi fiil degismez","Her ikisi de fiili one alir"],a:1,e:"<b>denn</b> ana cumle kurar (V2), <b>weil</b> yan cumle kurar (fiil sona). Ich bleibe zu Hause, denn ich bin krank. / Ich bleibe zu Hause, weil ich krank bin."},
{t:"fill",d:3,lv:"A2",tp:"konjunktionen",q:"A2 — Evet/hayir dolaylı soru: Ich weiss nicht, ___ er kommt.",c:"ob",e:"<b>ob</b> = evet/hayir dolaylı soru. Ich weiss nicht, ob er kommt = Onun gelip gelmeyecegini bilmiyorum."},
{t:"mcq",d:2,lv:"A2",tp:"konjunktionen",q:"A2 — Doğru cumle hangi?",o:["Ich weiss, dass er kommt heute.","Ich weiss, dass er heute kommt.","Ich weiss dass er heute kommt.","Ich weiss, er heute dass kommt."],a:1,e:"<b>dass er heute kommt</b> — dass yan cumlesi, fiil (kommt) sona. Virgul zorunlu!"},
{t:"telc",d:3,lv:"A2",tp:"konjunktionen",q:"TELC A2 — Metni oku:<br><br><i>Viele Menschen lernen Deutsch, weil sie in Deutschland arbeiten oder studieren möchten. Obwohl Deutsch schwer ist, macht es vielen Spass, weil man viele neue Möglichkeiten bekommt.</i><br><br>Metne gore insanlar Almancayi neden ogrenir?",o:["Sadece eglence icin","Almanya'da calisma/okuma icin","Almancayi kolay buldukları icin","Para kazanmak icin"],a:1,e:"'weil sie in Deutschland arbeiten oder studieren möchten' = Almanya'da calismak/okumak istedikleri icin."},

// ============================================================
// A2 - Donuslu fiiller (6 soru)
// ============================================================
{t:"mcq",d:2,lv:"A2",tp:"reflexiv",q:"A2 — Ich wasche ___ die Haare. (kendimi - Akkusativ)",o:["mir","mich","sich","dich"],a:1,e:"<b>mich</b> — Akkusativ donuslu zamir 1. tekil. sich waschen: ich wasche mich, du wäschst dich, er/sie/es wäscht sich."},
{t:"fill",d:2,lv:"A2",tp:"reflexiv",q:"A2 — Bosluğu doldur: Du musst ___ mehr ausruhen. (sich ausruhen - dinlenmek, du)",c:"dich",e:"<b>dich</b> — du icin Akkusativ donuslu zamir. sich ausruhen = dinlenmek. Du musst dich mehr ausruhen."},
{t:"mcq",d:2,lv:"A2",tp:"reflexiv",q:"A2 — Wo treffen wir ___ ? (bulusuyoruz - wir)",o:["sich","uns","mich","euch"],a:1,e:"<b>uns</b> — wir icin donuslu zamir: uns. sich treffen = bulusmak. Wo treffen wir uns?"},
{t:"fill",d:3,lv:"A2",tp:"reflexiv",q:"A2 — Bosluğu doldur: Ich freue ___ sehr auf den Urlaub! (sich freuen über/auf)",c:"mich",e:"<b>mich</b> — ich icin Akkusativ donuslu. sich freuen auf = beklemek/heyecanlanmak (gelecek icin). Ich freue mich sehr!"},
{t:"mcq",d:3,lv:"A2",tp:"reflexiv",q:"A2 — Dativ donuslu zamir: Ich wasche ___ die Hände.",o:["mich","mir","sich","dich"],a:1,e:"<b>mir</b> — Dativ donuslu zamir 1. tekil. Vucudun bir parcasi Akkusativ olunca, donuslu zamir Dativ olur: Ich wasche mir die Hände = Ellerimi yikiyorum."},
{t:"telc",d:3,lv:"A2",tp:"reflexiv",q:"TELC A2 — Diyalog:<br><br><i>A: Wie bereitest du dich auf die Prüfung vor? B: Ich setze mich jeden Tag zwei Stunden hin und lerne. Ich erinnere mich auch an alte Themen.</i><br><br>B sinava nasıl hazırlaniyor?",o:["Her gun 1 saat calisiyor","Her gun 2 saat calisiyor","Hic calismıyor","Sadece eski konulara bak"],a:1,e:"'jeden Tag zwei Stunden' = her gun iki saat. sich vorbereiten auf = ...ya hazirlanmak. sich hinsetzen = oturup basmak."},

// ============================================================
// A2 - Dativ edatlari (6 soru)
// ============================================================
{t:"mcq",d:2,lv:"A2",tp:"praepositionen_a2",q:"A2 — Ich fahre ___ dem Fahrrad zur Schule. (bisikletle)",o:["auf","von","mit","bei"],a:2,e:"<b>mit</b> + Dativ = aracla. mit dem Fahrrad, mit dem Bus, mit dem Auto, mit dem Zug."},
{t:"fill",d:2,lv:"A2",tp:"praepositionen_a2",q:"A2 — Ich lerne Deutsch ___ drei Jahren. (3 yildir - devam eden eylem)",c:"seit",e:"<b>seit</b> + Dativ = beri. seit drei Jahren = 3 yildir. DIKKAT: Almancada Prasens (simdi) kullanilir!"},
{t:"mcq",d:2,lv:"A2",tp:"praepositionen_a2",q:"A2 — Das Paket kommt ___ Deutschland. (Almanya'dan - geldigi yer)",o:["nach","aus","von","zu"],a:1,e:"<b>aus</b> = ulke/sehir/yer kaynagi. Das Paket kommt aus Deutschland. aus + Dativ."},
{t:"fill",d:2,lv:"A2",tp:"praepositionen_a2",q:"A2 — Ich gehe ___ meiner Freundin einkaufen. (arkadasimla birlikte)",c:"mit",e:"<b>mit meiner Freundin</b> — mit + Dativ. die Freundin → Dativ: meiner Freundin."},
{t:"mcq",d:3,lv:"A2",tp:"praepositionen_a2",q:"A2 — von + Dativ ne anlama gelir?",o:["Nereye","Nereden / Kimin","Ne zaman","Nerede"],a:1,e:"<b>von</b> = nereden (kaynak) veya kimin (sahiplik). Das ist ein Brief von meiner Mutter = Bu annemin mektubi."},
{t:"telc",d:3,lv:"A2",tp:"praepositionen_a2",q:"TELC A2 — Bosluğu doldur:<br><br><i>Ich arbeite ___ einem Jahr bei dieser Firma. Die Kollegen sind nett, aber ich wohne weit ___ dem Büro entfernt.</i>",o:["seit...von","nach...bei","nach...aus","seit...aus"],a:0,e:"<b>seit</b> (1 yildir) + <b>von</b> (...dan uzak). seit einem Jahr = 1 yildir. weit von... entfernt = ...dan uzak."},

// ============================================================
// A2 - Gelecek zaman Futur (6 soru)
// ============================================================
{t:"mcq",d:2,lv:"A2",tp:"zukunft",q:"A2 — Ich ___ morgen früh aufstehen. (werden, 1. tekil)",o:["werde","wirst","wird","werden"],a:0,e:"<b>werde</b> — werden Prasens: ich werde, du wirst, er wird, wir werden, ihr werdet, sie werden. + Infinitiv sona."},
{t:"fill",d:2,lv:"A2",tp:"zukunft",q:"A2 — Bosluğu doldur: Es ___ morgen regnen. (werden, 3. tekil - yarin yagmur yagacak)",c:"wird",e:"<b>wird</b> — 3. tekil werden. Es wird morgen regnen = Yarin yagmur yagacak. Hava durumu haberleri hep Futur!"},
{t:"mcq",d:2,lv:"A2",tp:"zukunft",q:"A2 — Gunluk Almancada gelecek nasil ifade edilir? (Ich gehe morgen einkaufen.)",o:["Sadece werden ile","Prasens + zaman zarfi ile","Prasens II ile","Konjunktiv ile"],a:1,e:"<b>Prasens + zaman zarfi</b> en dogal yol! Ich gehe morgen einkaufen = Yarin alısverise gidiyorum. werden daha resmi/kuvvetli vurgu icin."},
{t:"fill",d:3,lv:"A2",tp:"zukunft",q:"A2 — Bosluğu doldur: Wir ___ nachsten Sommer heiraten. (werden, 1. cogul)",c:"werden",e:"<b>werden</b> — 1. cogul. Wir werden nachsten Sommer heiraten = Gelecek yaz evlenecegiz. Heyecanli duyuru!"},
{t:"mcq",d:3,lv:"A2",tp:"zukunft",q:"A2 — Tahmin: Das ___ wohl schwierig sein. (werden, 3. tekil - muhtemelen zor olacak)",o:["werde","wirst","wird","werden"],a:2,e:"<b>wird</b> — werden tahmin/olasılık da ifade eder. wohl = muhtemelen/herhalde. Das wird wohl schwierig sein."},
{t:"telc",d:3,lv:"A2",tp:"zukunft",q:"TELC A2 — Hava durumu haberi:<br><br><i>Morgen wird es in Berlin sonnig und warm sein. Die Temperaturen werden bis 25 Grad steigen. Am Wochenende wird es leider regnen.</i><br><br>Hafta sonu hava nasil olacak?",o:["Gunesli ve sicak","Bulutlu","Yagmurlu","Kar yagacak"],a:2,e:"'Am Wochenende wird es leider regnen' = Hafta sonu ne yazık ki yagmur yagacak. leider = ne yazik ki."},

// ============================================================
// A2 - Genitiv (6 soru)
// ============================================================
{t:"mcq",d:2,lv:"A2",tp:"genitiv",q:"A2 — Das Auto ___ Vaters ist rot. (babamin - eril Genitiv)",o:["mein","meines","meinem","meiner"],a:1,e:"<b>meines Vaters</b> — eril/notr Genitiv: iyelik + -es eki. der Vater → meines Vaters, das Kind → meines Kindes."},
{t:"fill",d:2,lv:"A2",tp:"genitiv",q:"A2 — Das ist das Zimmer ___ Schwester. (kardesimin - disil Genitiv belirli)",c:"der",e:"<b>der Schwester</b> — disil belirli Genitiv: die→der. Das ist das Zimmer der Schwester."},
{t:"mcq",d:3,lv:"A2",tp:"genitiv",q:"A2 — Gunluk Almancada Genitiv yerine ne kullanilir?",o:["Nominativ","Dativ mit von","Akkusativ","Konjunktiv"],a:1,e:"<b>Dativ mit von</b> — Das Auto von meinem Vater (gundelik) = Das Auto meines Vaters (resmi/yazili)."},
{t:"fill",d:3,lv:"A2",tp:"genitiv",q:"A2 — wegen + Genitiv: Bosluğu doldur: ___ des Wetters bleibe ich zu Hause. (hava nedeniyle)",c:"Wegen",e:"<b>Wegen</b> + Genitiv = ...nedeniyle. Wegen des Wetters = Hava nedeniyle. wegen, trotz, während + Genitiv."},
{t:"mcq",d:3,lv:"A2",tp:"genitiv",q:"A2 — Welcher Satz ist RICHTIG?",o:["Das ist das Haus meinen Vaters.","Das ist das Haus meines Vater.","Das ist das Haus meines Vaters.","Das ist das Haus von mein Vater."],a:2,e:"<b>meines Vaters</b> — eril Genitiv: iyelik + -es + isim + -(e)s. meines Vaters (iki ek birden!)."},
{t:"telc",d:3,lv:"A2",tp:"genitiv",q:"TELC A2 — Oku:<br><br><i>Die Hauptstadt Deutschlands ist Berlin. Die Einwohnerzahl der Stadt beträgt ca. 3,6 Millionen. Das Wahrzeichen Berlins ist das Brandenburger Tor.</i><br><br>Berlin'in nufusu?",o:["1 milyon","2 milyon","3,6 milyon","5 milyon"],a:2,e:"'Die Einwohnerzahl der Stadt beträgt ca. 3,6 Millionen' = Sehrin nufusu yaklasik 3,6 milyon. Einwohnerzahl=nufus, betragen=olmak/ulasmmak."},

// ============================================================
// A2 - Dolayl- sorular (6 soru)
// ============================================================
{t:"mcq",d:2,lv:"A2",tp:"indirekt",q:"A2 — Dolaylı soru: Ich weiss nicht, ___ er kommt. (evet/hayır)",o:["dass","weil","ob","wenn"],a:2,e:"<b>ob</b> = evet/hayır dolaylı soru. Fiil sona! Ich weiss nicht, ob er kommt = Gelip gelmeyecegini bilmiyorum."},
{t:"fill",d:2,lv:"A2",tp:"indirekt",q:"A2 — Bosluğu doldur: Kannst du mir sagen, ___ der Zug ankommt? (ne zaman?)",c:"wann",e:"<b>wann</b> = ne zaman. Dolaylı W-soru + fiil sona. Kannst du mir sagen, wann der Zug ankommt?"},
{t:"mcq",d:2,lv:"A2",tp:"indirekt",q:"A2 — Doğru dolaylı soru:",o:["Ich frage, wann kommt er.","Ich frage, wann er kommt.","Ich frage, wann er kommt?.","Wann ich frage, er kommt."],a:1,e:"<b>Ich frage, wann er kommt.</b> Dolaylı soruda fiil sona gider, soru isareti koymak YANLISTIR."},
{t:"fill",d:3,lv:"A2",tp:"indirekt",q:"A2 — Bosluğu doldur: Ich verstehe nicht, ___ du so traurig bist. (neden)",c:"warum",e:"<b>warum</b> = neden. Ich verstehe nicht, warum du so traurig bist = Neden bu kadar uzgun oldugunu anlamiyorum."},
{t:"mcq",d:3,lv:"A2",tp:"indirekt",q:"A2 — Anlamadigını soyluyorsun: Entschuldigung, ich verstehe nicht, ___ das funktioniert.",o:["ob","dass","wie","weil"],a:2,e:"<b>wie</b> = nasil. Ich verstehe nicht, wie das funktioniert = Bunun nasil calistığını anlamiyorum. Pratik bir ifade!"},
{t:"telc",d:3,lv:"A2",tp:"indirekt",q:"TELC A2 — Diyalog:<br><br><i>Tourist: Entschuldigung, können Sie mir sagen, ob es hier in der Nähe ein Cafe gibt? Passant: Ja, da drüben gibt es eins. Ich weiss aber nicht, ob es schon geöffnet ist.</i><br><br>Passer-by ne bilmiyor?",o:["Kafenin nerede oldugunu","Kafenin acik olup olmadigini","Kafelerin var olup olmadigini","Turistin adını"],a:1,e:"'Ich weiss nicht, ob es schon geöffnet ist' = Acik olup olmadigini bilmiyorum. ob + Nebensatz, fiil sona."},

// ============================================================
// A2 - Emir kipi genisleme (6 soru)
// ============================================================
{t:"mcq",d:2,lv:"A2",tp:"imperativ_a2",q:"A2 — sein Imperativ du: Sei bitte ___ ! (dikkatli)",o:["vorsichtig","vorsichtiger","am vorsichtigsten","vorsicht"],a:0,e:"<b>Sei vorsichtig!</b> = Dikkatli ol! sein Imperativ du: sei. Sei ruhig! Sei ehrlich! Sei bitte nett!"},
{t:"fill",d:2,lv:"A2",tp:"imperativ_a2",q:"A2 — Konjunktiv II nazik rica: ___ du mir bitte helfen? (konnten/konntest - din olur mu?)",c:"Könntest",e:"<b>Könntest du mir bitte helfen?</b> Konjunktiv II ile cok nazik rica. können→könntest(du). Resmi: Könnten Sie...?"},
{t:"mcq",d:2,lv:"A2",tp:"imperativ_a2",q:"A2 — Resmi Imperativ (Sie): Lesen Sie bitte ___ ! (bu belgeyi - das Dokument Akkusativ)",o:["das Dokument","dem Dokument","des Dokuments","die Dokument"],a:0,e:"<b>das Dokument</b> — lesen Akkusativ ister: das Dokument (notr, Akkusativ degismez). Lesen Sie bitte das Dokument!"},
{t:"fill",d:3,lv:"A2",tp:"imperativ_a2",q:"A2 — Nasil soylenirse? (Grup icin: lutfen sessiz olun!) Seid bitte ___!",c:"ruhig",e:"<b>Seid bitte ruhig!</b> = Lutfen sessiz olun! ihr icin sein Imperativ: seid."},
{t:"mcq",d:3,lv:"A2",tp:"imperativ_a2",q:"A2 — En nazik rica hangisi?",o:["Mach das!","Mach das bitte!","Könntest du das bitte machen?","Du machst das jetzt!"],a:2,e:"<b>Könntest du das bitte machen?</b> Konjunktiv II + bitte = en nazik. Emir azalan: du machst (zorba) > Mach! > Mach bitte > Könntest du..."},
{t:"telc",d:3,lv:"A2",tp:"imperativ_a2",q:"TELC A2 — Dogtor talimati:<br><br><i>Nehmen Sie bitte dreimal täglich eine Tablette. Trinken Sie viel Wasser und ruhen Sie sich aus. Essen Sie keine fetten Speisen.</i><br><br>Hasta kac kez ilac almali?",o:["1 kez","2 kez","3 kez","4 kez"],a:2,e:"'dreimal täglich' = günde 3 kez. dreimal=3 kez, täglich=günlük. Imperativ: Nehmen Sie, Trinken Sie, Ruhen Sie sich aus."},

// ============================================================
// A2 - Sifat cekimi (6 soru)
// ============================================================
{t:"mcq",d:2,lv:"A2",tp:"adjektiv_dekl",q:"A2 — Ein ___ Mann kommt. (alt, belirsiz Nominativ eril)",o:["alte","alten","alter","altes"],a:2,e:"<b>alter Mann</b> — belirsiz Nominativ eril: -er. Kural: belirsiz artikel sonrasi sifat artikel bilgisini tasir."},
{t:"mcq",d:2,lv:"A2",tp:"adjektiv_dekl",q:"A2 — Die ___ Frau lacht. (jung, belirli Nominativ disil)",o:["junge","junger","jungen","junges"],a:0,e:"<b>junge Frau</b> — belirli Nominativ disil: -e. Belirli artikel sonrasi Nominativ: -e veya -en."},
{t:"fill",d:2,lv:"A2",tp:"adjektiv_dekl",q:"A2 — Bosluğu doldur: Ich kaufe ein ___ Kleid. (rot, belirsiz Akkusativ notr)",c:"rotes",e:"<b>rotes</b> — belirsiz Akkusativ notr: -es. Ein rotes Kleid = Kirmizi bir elbise."},
{t:"mcq",d:3,lv:"A2",tp:"adjektiv_dekl",q:"A2 — Dativ belirsiz eril: mit einem ___ Mann. (freundlich)",o:["freundliche","freundlicher","freundlichem","freundlichen"],a:2,e:"<b>freundlichem</b> — belirsiz Dativ eril: -em. mit einem freundlichen Mann DEGIL. Dogru: freundlichem (belirsiz Dativ eril/notr)."},
{t:"fill",d:3,lv:"A2",tp:"adjektiv_dekl",q:"A2 — Bosluğu doldur: Ich sehe den ___ Film. (interessant, belirli Akkusativ eril)",c:"interessanten",e:"<b>interessanten</b> — belirli Akkusativ eril: -en. den interessanten Film = ilginc filmi (belirli)."},
{t:"telc",d:3,lv:"A2",tp:"adjektiv_dekl",q:"TELC A2 — Reklam: Welcher Satz ist KORREKT?",o:["Unser neu Auto ist schnell.","Unser neues Auto ist schnell.","Unser neue Auto ist schnell.","Unser neuen Auto ist schnell."],a:1,e:"<b>unser neues Auto</b> — iyelik zamiri sonrasi (unser = belirsiz gibi) notr Nominativ: -es. Unser neues Auto ist schnell."},

// ============================================================
// GOETHE / TELC A1 - GENISLETILMIS SORU BANKASI
// Hedef: Her A1 konusunda 15-20 soru, gercek hayat baglamli
// ============================================================



// ============================================================
// A1 - SEIN & HABEN genisletme (+12 soru = toplam 20)
// ============================================================
{t:"mcq",d:1,lv:"A1",tp:"sein_haben",q:"Im Cafe: Ich ___ einen Kaffee und einen Kuchen, bitte.",o:["bin","habe","hat","sind"],a:1,e:"<b>Ich habe</b> — bestellen ifadesi 'haben' ile: Ich habe einen Kaffee = Bir kahvem var/istiyorum."},
{t:"mcq",d:1,lv:"A1",tp:"sein_haben",q:"Doktor soruyor: Wo ___ die Schmerzen? (agri nerede)",o:["haben","habt","sind","seid"],a:2,e:"<b>sind</b> — sein fiili konum/durum belirtir: Wo sind die Schmerzen? = Agrılar nerede?"},
{t:"fill",d:1,lv:"A1",tp:"sein_haben",q:"Am Telefon: ___ du zu Hause? (Evde misin?)",c:"Bist",e:"<b>Bist du zu Hause?</b> = Evde misin? sein 2. tekil: du bist → soru: Bist du...?"},
{t:"fill",d:2,lv:"A1",tp:"sein_haben",q:"Im Hotel: Wir ___ eine Reservierung. (rezervasyonumuz var)",c:"haben",e:"<b>Wir haben eine Reservierung.</b> = Rezervasyonumuz var. haben sahiplik/bulunma ifade eder."},
{t:"mcq",d:2,lv:"A1",tp:"sein_haben",q:"Goethe A1: Das Wetter ___ heute sehr schön.",o:["hat","haben","ist","sind"],a:2,e:"<b>ist</b> — Wetter nötr tekil: Das Wetter ist schön. Hava durumu her zaman 'sein' ile."},
{t:"fill",d:2,lv:"A1",tp:"sein_haben",q:"Beruf nennen: Ich ___ Lehrerin von Beruf. (meslek)",c:"bin",e:"<b>Ich bin Lehrerin.</b> = Öğretmenim. Meslek bildirmek: sein + meslek (artikel olmadan!)."},
{t:"mcq",d:2,lv:"A1",tp:"sein_haben",q:"TELC A1: Sara und Tom ___ Geschwister.",o:["ist","sind","hat","haben"],a:1,e:"<b>sind</b> — cogul (Sara und Tom = wir/sie): Sara und Tom sind Geschwister = Sara ve Tom kardeştir."},
{t:"fill",d:2,lv:"A1",tp:"sein_haben",q:"Im Supermarkt: ___ Sie die Milch? (resmi - Siz sütü var mı?)",c:"Haben",e:"<b>Haben Sie die Milch?</b> = Sütünüz var mı? Resmi soru: Haben Sie...?"},
{t:"mcq",d:3,lv:"A1",tp:"sein_haben",q:"Konuşma: 'Ich bin müde.' — Arkadaşın cevabı:",o:["Ich auch bin müde.","Ich auch.","Ich bin auch.","Auch ich bin müde."],a:1,e:"<b>Ich auch.</b> = Ben de. Kısa onaylama: Ich auch. / Ich nicht. (ich de/değil de)"},
{t:"mcq",d:3,lv:"A1",tp:"sein_haben",q:"Hangi cümle DOĞRUDUR? (evcil hayvan sahipliği)",o:["Ich habe ein Hund.","Ich habe einen Hund.","Ich bin einen Hund.","Ich habe ein Hundes."],a:1,e:"<b>Ich habe einen Hund.</b> — Hund eril, haben Akkusativ ister: ein→einen Hund."},
{t:"telc",d:2,lv:"A1",tp:"sein_haben",q:"TELC A1 — Formu oku:<br><br><i>Name: Kovacs, Peter<br>Alter: 32<br>Beruf: Ingenieur<br>Familienstand: verheiratet<br>Kinder: 2</i><br><br>Peter kaç çocuğu var?",o:["0","1","2","3"],a:2,e:"'Kinder: 2' = 2 çocuğu var. Kinder = çocuklar (cogul). verheiratet = evli."},
{t:"telc",d:3,lv:"A1",tp:"sein_haben",q:"TELC A1 — Diyalog:<br><br><i>A: Hast du Geschwister? B: Ja, ich habe eine Schwester und zwei Brüder. Und du? A: Nein, ich bin Einzelkind.</i><br><br>A kaç kardeşi var?",o:["1","2","3","Hiç yok"],a:3,e:"'ich bin Einzelkind' = Tek çocuğum (kardeşi yok). Einzelkind = tek çocuk."},

// ============================================================
// A1 - SORU KELIMELERI genisletme (+12)
// ============================================================
{t:"mcq",d:1,lv:"A1",tp:"fragen",q:"Im Restaurant: ___ möchten Sie? (Ne istersiniz?)",o:["Wie","Wann","Was","Wer"],a:2,e:"<b>Was möchten Sie?</b> = Ne istersiniz? Was = ne (nesne/şey sorar). möchten = istemek (kibar)."},
{t:"fill",d:1,lv:"A1",tp:"fragen",q:"Kurs arkadaşına: ___ lernst du Deutsch? (Neden Almanca öğreniyorsun?)",c:"Warum",e:"<b>Warum lernst du Deutsch?</b> = Neden Almanca öğreniyorsun? Warum = neden/niçin."},
{t:"mcq",d:1,lv:"A1",tp:"fragen",q:"Am Bahnhof: ___ fährt der Zug ab? (Tren ne zaman kalkıyor?)",o:["Wie","Wer","Wann","Wo"],a:2,e:"<b>Wann</b> = ne zaman. Wann fährt der Zug ab? Zaman sorularında Wann kullanılır."},
{t:"fill",d:2,lv:"A1",tp:"fragen",q:"Im Büro: ___ ist Ihr Name, bitte? (Adınız nedir? - resmi)",c:"Wie",e:"<b>Wie ist Ihr Name?</b> = Adınız nedir? (resmi). Wie heißen Sie? da denir."},
{t:"mcq",d:2,lv:"A1",tp:"fragen",q:"Araba kiralamak istiyorsun: ___ kostet das pro Tag? (Günlük ne kadar?)",o:["Was","Wie viel","Wann","Welche"],a:1,e:"<b>Wie viel kostet das?</b> = Bu kaça? / Ne kadar tutar? Fiyat sorularında Wie viel."},
{t:"mcq",d:2,lv:"A1",tp:"fragen",q:"Parti için: ___ kommt heute Abend? (Bu akşam kim geliyor?)",o:["Was","Wann","Wer","Wo"],a:2,e:"<b>Wer</b> = kim (kişi sorar). Wer kommt? — Kişi sorusunda Wer kullanılır."},
{t:"fill",d:2,lv:"A1",tp:"fragen",q:"Im Kurs: Mit ___ sprechen Sie zu Hause? (Evde kiminle konuşuyorsunuz?)",c:"wem",e:"<b>Mit wem</b> = kiminle. Wer → edat sonrası Dativ: wem. Mit wem = kiminle, Von wem = kimden."},
{t:"mcq",d:2,lv:"A1",tp:"fragen",q:"Goethe A1 Muster: ___ Sprachen sprichst du?",o:["Wie","Wie viele","Was für","Welche"],a:1,e:"<b>Wie viele Sprachen</b> = Kaç dil. Wie viele + cogul = kaç tane. Wie viele Kinder, Wie viele Jahre."},
{t:"fill",d:3,lv:"A1",tp:"fragen",q:"Yol tarifi: ___ komme ich zum Bahnhof? (Tren istasyonuna nasıl giderim?)",c:"Wie",e:"<b>Wie komme ich zum Bahnhof?</b> = Tren istasyonuna nasıl giderim? Yol tarifi için Wie."},
{t:"mcq",d:3,lv:"A1",tp:"fragen",q:"Im Hotel: ___ Zimmer haben Sie für mich? (Benim için hangi oda var?)",o:["Was","Wann","Welches","Wer"],a:2,e:"<b>Welches Zimmer</b> = Hangi oda. Welch- = hangi (seçim sorar). das Zimmer → welches."},
{t:"telc",d:2,lv:"A1",tp:"fragen",q:"TELC A1 — Formularda boş bırakılan kısım:<br><br><i>Familienname: ___<br>Vorname: ___<br>Geburtsdatum: ___<br>Nationalität: ___</i><br><br>'Geburtsdatum' ne demek?",o:["Ad","Soyad","Doğum tarihi","Milliyet"],a:2,e:"Geburt = doğum, Datum = tarih. Geburtsdatum = doğum tarihi. Wichtige Formularbegriffe: Familienname=soyadı, Vorname=ad, Nationalität=milliyet."},
{t:"telc",d:3,lv:"A1",tp:"fragen",q:"TELC A1 — Diyalog telefonda:<br><br><i>A: Sprachschule Berlin, guten Tag! B: Guten Tag, ich möchte mich für einen Kurs anmelden. Welche Kurse haben Sie? A: Wir haben Kurse von A1 bis C1. Wann können Sie kommen?</i><br><br>B ne yapmak istiyor?",o:["Kurs hakkında bilgi almak","Bir kursa kaydolmak","Kursunu iptal etmek","Okul aramak"],a:1,e:"'ich möchte mich für einen Kurs anmelden' = Bir kursa kaydolmak istiyorum. sich anmelden = kaydolmak."},

// ============================================================
// A1 - OLUMSUZLUK genisletme (+12)
// ============================================================
{t:"fill",d:1,lv:"A1",tp:"negation",q:"Im Cafe: Ich trinke ___ Alkohol. (alkol içmiyorum)",c:"keinen",e:"<b>keinen Alkohol</b> — der Alkohol eril → Akkusativ kein: keinen. Ich trinke keinen Alkohol."},
{t:"mcq",d:1,lv:"A1",tp:"negation",q:"Goethe A1: Das stimmt ___. (Bu doğru değil.)",o:["kein","nicht","nein","nie"],a:1,e:"<b>nicht</b> — stimmen fiilini olumsuzlar. Das stimmt nicht. = Bu doğru değil."},
{t:"fill",d:1,lv:"A1",tp:"negation",q:"Am Telefon: Tut mir leid, er ist ___ da. (Üzgünüm, o burada değil.)",c:"nicht",e:"<b>nicht da</b> = burada değil. Telefon ifadesi: Er ist nicht da = O burada değil / O evde değil."},
{t:"mcq",d:2,lv:"A1",tp:"negation",q:"Im Supermarkt: Es gibt ___ Brot mehr. (Ekmek kalmadı.)",o:["nicht","keinen","kein","keine"],a:2,e:"<b>kein Brot</b> — das Brot nötr → kein. mehr = artık/daha fazla. Es gibt kein Brot mehr = Artık ekmek yok."},
{t:"fill",d:2,lv:"A1",tp:"negation",q:"Kurs'ta: Ich verstehe das ___. (Bunu anlamıyorum.)",c:"nicht",e:"<b>nicht</b> — verstehen fiilini olumsuzlar. Ich verstehe das nicht = Bunu anlamıyorum. Yaygın ifade!"},
{t:"mcq",d:2,lv:"A1",tp:"negation",q:"Hayır deme: 'Möchtest du Kaffee?' cevabı:",o:["Nein, ich bin keinen Kaffee.","Nein, danke. Ich möchte keinen Kaffee.","Nein, ich habe nicht Kaffee.","Kein, ich möchte nicht."],a:1,e:"<b>Nein, danke. Ich möchte keinen Kaffee.</b> — möchten Akkusativ ister: keinen Kaffee. Nazik reddetme: Nein, danke."},
{t:"fill",d:2,lv:"A1",tp:"negation",q:"Fahrtenbuch: Ich fahre ___ Auto, ich fahre Fahrrad. (Arabayla gitmiyorum)",c:"kein",e:"<b>kein Auto</b> — das Auto nötr → kein. fahren + Fahrzeug (araçsız wenn Obj yok)."},
{t:"mcq",d:2,lv:"A1",tp:"negation",q:"Goethe A1: Sie spricht ___ Deutsch, nur Englisch.",o:["nicht","kein","keine","keines"],a:2,e:"<b>kein Deutsch</b> — Deutsch burada isim gibi kullanılıyor → kein Deutsch sprechen = Almanca konuşmamak."},
{t:"fill",d:3,lv:"A1",tp:"negation",q:"Wohnung: Hier gibt es ___ Parkplatz. (Otopark yok.)",c:"keinen",e:"<b>keinen Parkplatz</b> — der Parkplatz eril → Akkusativ (es gibt + Akk): keinen."},
{t:"mcq",d:3,lv:"A1",tp:"negation",q:"TELC A1: 'Haben Sie Kinder?' — 'Nein, ___'",o:["ich habe nicht Kinder.","ich habe keine Kinder.","ich bin keine Kinder.","ich habe Kinder nicht."],a:1,e:"<b>Ich habe keine Kinder.</b> — Kinder cogul → keine. Tam ve doğru cevap formatı."},
{t:"telc",d:2,lv:"A1",tp:"negation",q:"TELC A1 — Levha:<br><br><i>KEIN RAUCHEN<br>KEIN HANDY<br>KEIN FOTOGRAFIEREN</i><br><br>Bu levha nerede olabilir?",o:["Parkta","Markette","Müzede veya sinemada","Plajda"],a:2,e:"Üç yasak birden: sigara, telefon, fotoğraf. Müze/sinema/tiyatroda bu üçü de yasak olur."},
{t:"telc",d:3,lv:"A1",tp:"negation",q:"TELC A1 — E-posta parçası:<br><br><i>Leider kann ich am Samstag nicht kommen. Ich habe keine Zeit, weil ich arbeite.</i><br><br>Neden gelemiyor?",o:["Hasta","Vakti yok, çalışıyor","Arabası yok","Bileti yok"],a:1,e:"'Ich habe keine Zeit, weil ich arbeite.' = Çalıştığı için vakti yok. leider = maalesef, weil = çünkü."},

// ============================================================
// A1 - FIIL CEKIMI genisletme (+10)
// ============================================================
{t:"fill",d:1,lv:"A1",tp:"verben",q:"Im Kurs: Wir ___ jeden Tag Vokabeln. (lernen - her gün kelime çalışıyoruz)",c:"lernen",e:"<b>lernen:</b> wir lernen. Wir lernen jeden Tag Vokabeln = Her gün kelime öğreniyoruz."},
{t:"mcq",d:1,lv:"A1",tp:"verben",q:"Familie: Mein Vater ___ bei BMW. (arbeiten - çalışmak)",o:["arbeite","arbeitest","arbeitet","arbeiten"],a:2,e:"<b>arbeitet</b> — 3. tekil: Stamm + t. arbeiten → arbeitet (t+et = arbeitet, kolaylık için)."},
{t:"fill",d:1,lv:"A1",tp:"verben",q:"Hobby: Ich ___ gern Musik. (hören - müzik dinlemeyi severim)",c:"höre",e:"<b>höre</b> — ich höre. Musik hören = müzik dinlemek. gern = seve seve/severek."},
{t:"mcq",d:2,lv:"A1",tp:"verben",q:"Morgenroutine: Er ___ jeden Morgen um 7 Uhr auf. (aufwachen - trennbar)",o:["wacht","aufwacht","wacht...auf","wachtet"],a:2,e:"<b>wacht...auf</b> — aufwachen trennbar: wacht + auf. Er wacht um 7 Uhr auf = 7'de uyanır."},
{t:"fill",d:2,lv:"A1",tp:"verben",q:"Restaurant: Was ___ du? (essen - ne yiyorsun?)",c:"isst",e:"<b>isst</b> — essen Vokalwechsel: du isst (e→i, ss). Was isst du? = Ne yiyorsun?"},
{t:"mcq",d:2,lv:"A1",tp:"verben",q:"Freizeit: Ihr ___ zusammen Fußball. (spielen - birlikte futbol oynuyorsunuz)",o:["spielt","spielen","spiele","spielst"],a:0,e:"<b>spielt</b> — ihr spielt (2. cogul). ihr form: Stamm + t = spielt, macht, kauft."},
{t:"fill",d:2,lv:"A1",tp:"verben",q:"Einkaufen: Sie (cogul) ___ im Supermarkt ein. (einkaufen - alışveriş yapıyorlar)",c:"kaufen ein",e:"<b>kaufen ein</b> — einkaufen trennbar, 3. cogul: kaufen...ein. Sie kaufen im Supermarkt ein."},
{t:"mcq",d:2,lv:"A1",tp:"verben",q:"Goethe A1 Muster: Das Café ___ um 8 Uhr auf. (aufmachen)",o:["macht...auf","öffnet","aufmacht","macht auf"],a:0,e:"<b>macht...auf</b> — aufmachen trennbar, 3. tekil: macht...auf. Alternativ: öffnet (açılır) da doğrudur."},
{t:"fill",d:3,lv:"A1",tp:"verben",q:"Im Bus: Bitte ___ Sie vorne ein! (einsteigen - resmi, öne binin lütfen)",c:"steigen",e:"<b>Steigen Sie vorne ein!</b> — einsteigen trennbar Imperativ Sie: steigen...ein. Bitte vorne einsteigen!"},
{t:"mcq",d:3,lv:"A1",tp:"verben",q:"Hangi fiil çifti YANLIŞ eşleştirilmiştir?",o:["fahren - fährt","schlafen - schläft","lesen - liest","trinken - trinkt"],a:3,e:"<b>trinken - trinkt YANLIŞ</b> eşleştirmesi değil, trinkt doğru. Ama trinken düzenli değişmez. HEPSI aslında doğru. trinkt = düzenli, diğerleri Vokalwechsel."},

// ============================================================
// A1 - ALI-VERI- / EINKAUFEN (yeni konu - TELC s-k sorar)
// ============================================================
{t:"mcq",d:1,lv:"A1",tp:"einkaufen",q:"Im Supermarkt: ___ kostet die Milch? (Süt kaça?)",o:["Wann","Wie viel","Wie","Wer"],a:1,e:"<b>Wie viel kostet die Milch?</b> = Süt kaça? Fiyat sorusu: Wie viel kostet...?"},
{t:"fill",d:1,lv:"A1",tp:"einkaufen",q:"Kasse: Das macht ___ Euro fünfzig. (2 Euro 50 - rakamla değil: zwei)",c:"zwei",e:"<b>Das macht zwei Euro fünfzig.</b> = İki buçuk euro tutar. machen = tutmak (fiyat)."},
{t:"mcq",d:1,lv:"A1",tp:"einkaufen",q:"Im Laden: Haben Sie das auch in Blau? — Antwort:",o:["Ja, hier bitte.","Ja, ich habe Blau.","Ja, das gibt es in Blau.","Alle sind richtig."],a:3,e:"Hepsi doğru ifade olabilir. En doğal: <b>Ja, hier bitte.</b> veya <b>Ja, das gibt es auch in Blau.</b>"},
{t:"fill",d:1,lv:"A1",tp:"einkaufen",q:"Bezahlung: ___ Sie mit Karte oder bar? (Kartla mı yoksa nakit mi ödüyorsunuz?)",c:"Bezahlen",e:"<b>Bezahlen Sie mit Karte oder bar?</b> bar = nakit. mit Karte = kartla. Oft gefragt!"},
{t:"mcq",d:2,lv:"A1",tp:"einkaufen",q:"Bäckerei: Ich hätte gern ___ Brötchen, bitte. (4 tane)",o:["vier","vierte","vier den","vielen"],a:0,e:"<b>vier Brötchen</b> — sayı + isim (artikel olmadan). Ich hätte gern... = ...istiyorum (nazik). das Brötchen = küçük ekmek."},
{t:"fill",d:2,lv:"A1",tp:"einkaufen",q:"Im Kaufhaus: Entschuldigung, wo ___ die Umkleidekabinen? (soyunma odaları nerede?)",c:"sind",e:"<b>Wo sind die Umkleidekabinen?</b> = Soyunma odaları nerede? sein + yer sorusu."},
{t:"mcq",d:2,lv:"A1",tp:"einkaufen",q:"Größe: Welche Größe haben Sie? — Antwort:",o:["Ich trage Größe 42.","Ich bin Größe 42.","Ich habe Größe 42.","Alle sind richtig."],a:0,e:"<b>Ich trage Größe 42.</b> = 42 beden giyiyorum. tragen = giymek/taşımak. Beden: Größe."},
{t:"fill",d:2,lv:"A1",tp:"einkaufen",q:"Reklamation: Das gefällt mir ___. Haben Sie etwas anderes? (beğenmedim)",c:"nicht",e:"<b>Das gefällt mir nicht.</b> = Bunu beğenmedim. gefallen + Dativ = beğenmek. mir = bana."},
{t:"mcq",d:3,lv:"A1",tp:"einkaufen",q:"TELC A1: Kasiyere doğru söyleyiş:",o:["Ich bezahle mit Kreditkarte bitte.","Mit Kreditkarte, bitte.","Kreditkarte ich bezahle.","Ich Kreditkarte zahle."],a:1,e:"<b>Mit Kreditkarte, bitte.</b> = Kredi kartıyla, lütfen. Kısa ve doğal. Tam: Ich bezahle mit Kreditkarte."},
{t:"telc",d:2,lv:"A1",tp:"einkaufen",q:"TELC A1 — Kasada:<br><br><i>Verkäuferin: Das macht zusammen 12 Euro 80.<br>Kunde: Ich gebe Ihnen 15 Euro.<br>Verkäuferin: Dann bekommen Sie 2 Euro 20 zurück.</i><br><br>Müşteri ne kadar para üstü aldı?",o:["12,80 Euro","2,20 Euro","15 Euro","2,80 Euro"],a:1,e:"15 - 12,80 = 2,20 Euro üstü. zurückbekommen = üst almak. zusammen = toplam."},
{t:"telc",d:3,lv:"A1",tp:"einkaufen",q:"TELC A1 — Ilan:<br><br><i>SONDERANGEBOT: Bio-Äpfel 1 kg nur 1,49 Euro! Nur solange der Vorrat reicht. Heute und morgen!</i><br><br>Bu indirim ne zaman geçerli?",o:["Sadece bugün","Bugün ve yarın","Bir hafta","Stok bitene kadar her zaman"],a:1,e:"'Heute und morgen' = Bugün ve yarın. Sonderangebot = indirim/fırsat. solange Vorrat reicht = stok bitene kadar (ek bilgi)."},

// ============================================================
// A1 - YIYECEK & ICECEK (yeni - Goethe A1 s-k konu)
// ============================================================
{t:"mcq",d:1,lv:"A1",tp:"essen_trinken",q:"Im Restaurant: Was ___ Sie als Vorspeise? (Başlangıç olarak ne alırsınız?)",o:["essen","möchten","haben","trinken"],a:1,e:"<b>Was möchten Sie?</b> = Ne istersiniz? möchten = istemek (nazik). Bestellen: Was möchten/nehmen Sie?"},
{t:"fill",d:1,lv:"A1",tp:"essen_trinken",q:"Frühstück: Zum Frühstück ___ ich Brot mit Käse. (essen - kahvaltıda yiyorum)",c:"esse",e:"<b>esse</b> — ich esse. Zum Frühstück essen = kahvaltıda yemek. Zum Mittagessen, Zum Abendessen."},
{t:"mcq",d:1,lv:"A1",tp:"essen_trinken",q:"Getränk: Ich trinke ___ Wasser, kein Bier. (sadece su)",o:["nur","kein","nicht","alle"],a:0,e:"<b>nur Wasser</b> = sadece su. nur = sadece/yalnızca. Ich trinke nur Wasser = Sadece su içiyorum."},
{t:"fill",d:2,lv:"A1",tp:"essen_trinken",q:"Rezept: Man ___ Mehl, Eier und Zucker. (brauchen - un, yumurta ve şeker gerekir)",c:"braucht",e:"<b>braucht</b> — man braucht (3. tekil). brauchen = ihtiyaç duymak/gerekmek. man = genel kişi."},
{t:"mcq",d:2,lv:"A1",tp:"essen_trinken",q:"Goethe A1: Magst du Pizza? — 'Ja, Pizza ___ ich sehr gern!'",o:["esse","mag","habe","bin"],a:1,e:"<b>mag</b> — mögen = sevmek/beğenmek. ich mag, du magst, er mag. Ich mag Pizza = Pizzayı severim."},
{t:"fill",d:2,lv:"A1",tp:"essen_trinken",q:"Im Cafe: Ein Stück Kuchen und ___ Kaffee, bitte. (eine Tasse - bir fincan)",c:"einen",e:"<b>einen Kaffee</b> — der Kaffee eril → Akkusativ belirsiz: einen. Ein Stück Kuchen und einen Kaffee."},
{t:"mcq",d:2,lv:"A1",tp:"essen_trinken",q:"Vegetarier: Ich esse kein Fleisch, ich bin ___.",o:["Diabetiker","Vegetarier","Allergiker","Koch"],a:1,e:"<b>Vegetarier</b> = vejetaryen. Kein Fleisch essen = et yememek. Ich bin Vegetarier/Vegetarierin."},
{t:"fill",d:2,lv:"A1",tp:"essen_trinken",q:"Beim Kochen: Das Essen ___ gut! (riechen/schmecken - lezzetli kokuyor)",c:"riecht",e:"<b>riecht</b> = kokuyor (riechen). schmeckt = tadı güzel. Das Essen riecht gut = Yemek güzel kokuyor."},
{t:"mcq",d:3,lv:"A1",tp:"essen_trinken",q:"Allergie: Ich bin allergisch gegen ___.",o:["Nüssen","Nüsse","Nüssen gegen","gegen Nüssen"],a:0,e:"<b>gegen Nüsse</b> (Akkusativ) = fındığa/cevize karşı. allergisch gegen + Akkusativ: gegen Nüsse, Milch, Weizen."},
{t:"telc",d:2,lv:"A1",tp:"essen_trinken",q:"TELC A1 — Speisekarte:<br><br><i>Suppe des Tages: 3,50 €<br>Schnitzel mit Pommes: 12,90 €<br>Salat (vegetarisch): 8,50 €<br>Getränke ab 2,20 €</i><br><br>En ucuz yemek hangisi?",o:["Schnitzel","Salat","Suppe des Tages","Getränke"],a:2,e:"Suppe = 3,50 € en ucuz yemek. Getränke (içecekler) ayrı kategori. Suppe des Tages = günün çorbası."},
{t:"telc",d:3,lv:"A1",tp:"essen_trinken",q:"TELC A1 — Tarif:<br><br><i>Für 4 Personen: 400g Nudeln kochen. Zwiebeln und Knoblauch in Öl anbraten. Tomaten dazugeben und 20 Minuten köcheln lassen. Mit Salz und Pfeffer abschmecken.</i><br><br>Bu tarif kaç kişilik?",o:["2","4","6","8"],a:1,e:"'Für 4 Personen' = 4 kişilik. Für = için. Person = kişi. Nudeln = makarna, Zwiebeln = soğan."},

// ============================================================
// A1 - ULA-IM / VERKEHR (yeni - Goethe/TELC s-k)
// ============================================================
{t:"mcq",d:1,lv:"A1",tp:"verkehr",q:"Am Bahnhof: Wann ___ der nächste Zug nach Berlin?",o:["geht","fährt","kommt","läuft"],a:1,e:"<b>fährt</b> — fahren 3. tekil: fährt. Zug/Bus/Straßenbahn für fahren kullanılır. Wann fährt der Zug?"},
{t:"fill",d:1,lv:"A1",tp:"verkehr",q:"Tickets: Ich möchte ___ Fahrkarte nach Hamburg. (eine - bir bilet istiyorum)",c:"eine",e:"<b>eine Fahrkarte</b> — die Fahrkarte dişil → eine. Ich möchte eine Fahrkarte nach Hamburg = Hamburg'a bir bilet istiyorum."},
{t:"mcq",d:1,lv:"A1",tp:"verkehr",q:"U-Bahn: Mit welcher Linie ___ ich zum Hauptbahnhof?",o:["fährt","fahre","fahren","fährst"],a:1,e:"<b>fahre</b> — ich fahre (1. tekil). Mit welcher Linie fahre ich? = Hangi hatla gidiyorum?"},
{t:"fill",d:2,lv:"A1",tp:"verkehr",q:"Busfahrer fragt: ___ Sie eine Monatskarte? (Aylık kartınız var mı?)",c:"Haben",e:"<b>Haben Sie eine Monatskarte?</b> Monatskarte = aylık kart/abonman. haben resmi soru."},
{t:"mcq",d:2,lv:"A1",tp:"verkehr",q:"Goethe A1: Der Bus kommt in ___ Minuten. (5 dakika içinde)",o:["fünf","fünfte","fünften","fünftem"],a:0,e:"<b>fünf Minuten</b> — sayı + isim. in fünf Minuten = 5 dakika içinde. in + Dativ (zaman)."},
{t:"fill",d:2,lv:"A1",tp:"verkehr",q:"Orientierung: ___ Sie mir sagen, wo der Busbahnhof ist? (Otobüs terminali nerede? - resmi)",c:"Können",e:"<b>Können Sie mir sagen, wo...?</b> = ...nerede söyleyebilir misiniz? Nazik yol tarifi sorma."},
{t:"mcq",d:2,lv:"A1",tp:"verkehr",q:"Am Flughafen: Mein Koffer ___ nicht angekommen. (Bavulum gelmedi - Perfekt)",o:["hat","ist","bin","habe"],a:1,e:"<b>ist nicht angekommen</b> — ankommen hareket fiili: sein + angekommen. Koffer = bavul."},
{t:"fill",d:3,lv:"A1",tp:"verkehr",q:"Taxifahrer: ___ fahren Sie? (Nereye gidiyorsunuz?)",c:"Wohin",e:"<b>Wohin fahren Sie?</b> = Nereye gidiyorsunuz? Wohin = nereye (yön). Woher = nereden, Wo = nerede."},
{t:"telc",d:2,lv:"A1",tp:"verkehr",q:"TELC A1 — Fahrplan:<br><br><i>Berlin Hbf → Hamburg Hbf<br>Abfahrt: 08:42 — Ankunft: 10:58<br>Gleis 7 — ICE 507<br>Preis: 39,90 €</i><br><br>Tren saat kaçta kalkıyor?",o:["08:42","10:58","07:00","09:00"],a:0,e:"Abfahrt = kalkış = 08:42. Ankunft = varış = 10:58. Gleis = peron. ICE = hızlı tren."},
{t:"telc",d:3,lv:"A1",tp:"verkehr",q:"TELC A1 — Durchsage (anons):<br><br><i>Achtung! Zug ICE 507 nach Hamburg fährt heute von Gleis 9 ab, nicht von Gleis 7. Wir bitten um Entschuldigung.</i><br><br>Ne değişti?",o:["Tren saati","Peron numarası","Trenin adı","Varış yeri"],a:1,e:"'von Gleis 9 ab, nicht von Gleis 7' = Gleis (peron) 7 yerine 9'dan kalkacak. Gleis = peron. Achtung = dikkat."},

// ============================================================
// A1 - SA-LIK / GESUNDHEIT (yeni - Goethe/TELC s-k)
// ============================================================
{t:"mcq",d:1,lv:"A1",tp:"gesundheit",q:"Beim Arzt: Ich habe ___. (başım ağrıyor - Kopfschmerzen)",o:["Kopfweh","Kopfschmerzen","beides richtig","Hauptschmerz"],a:2,e:"<b>Kopfweh</b> und <b>Kopfschmerzen</b> ikisi de doğru = baş ağrısı. Bauchschmerzen=karın ağrısı, Halsschmerzen=boğaz ağrısı."},
{t:"fill",d:1,lv:"A1",tp:"gesundheit",q:"Beim Arzt: Seit wann ___ Sie krank? (Ne zamandan beri hastasınız?)",c:"sind",e:"<b>Seit wann sind Sie krank?</b> sein + krank = hasta olmak. seit = ...den beri."},
{t:"mcq",d:1,lv:"A1",tp:"gesundheit",q:"Apotheke: Haben Sie etwas gegen ___? (baş ağrısı için ilaç)",o:["Kopfschmerzen","den Kopf","Kopf","die Kopfschmerzen"],a:0,e:"<b>gegen Kopfschmerzen</b> = baş ağrısına karşı. etwas gegen... = ...için bir şey. Kopfschmerzen = baş ağrısı (cogul)."},
{t:"fill",d:2,lv:"A1",tp:"gesundheit",q:"Doktor: Nehmen Sie die Tabletten ___ täglich. (3 kez - dreimal)",c:"dreimal",e:"<b>dreimal täglich</b> = günde 3 kez. einmal=1 kez, zweimal=2 kez, dreimal=3 kez, täglich=günlük."},
{t:"mcq",d:2,lv:"A1",tp:"gesundheit",q:"Beim Arzt: Tut das weh? — 'Ja, ___ weh!'",o:["es tut","es macht","das ist","das hat"],a:0,e:"<b>Es tut weh!</b> = Acıyor! wehtun = acımak. Es tut weh (genel), Das tut weh (işaret)."},
{t:"fill",d:2,lv:"A1",tp:"gesundheit",q:"Krankenhaus: Ich brauche einen ___. (randevu almam lazım - Termin)",c:"Termin",e:"<b>Ich brauche einen Termin.</b> = Randevu almam lazım. Termin = randevu, der → einen (Akkusativ)."},
{t:"mcq",d:2,lv:"A1",tp:"gesundheit",q:"Krankmeldung: Ich bin heute ___. (hastalandım - hasta)",o:["krank","kränklich","Krankheit","erkältet"],a:0,e:"<b>krank</b> = hasta. erkältet = üşütmüş/soğuk algınlığı. Ich bin krank = Hastayım."},
{t:"fill",d:3,lv:"A1",tp:"gesundheit",q:"Apotheke: Brauchen Sie ein ___ dafür? (Reçete lazım mı? - Rezept)",c:"Rezept",e:"<b>Brauchen Sie ein Rezept?</b> = Bunun için reçete gerekiyor mu? das Rezept = reçete (nötr → ein)."},
{t:"telc",d:2,lv:"A1",tp:"gesundheit",q:"TELC A1 — Doktor randevusu:<br><br><i>Sprechstundenhilfe: Arztpraxis Dr. Müller, guten Tag! Patient: Guten Tag, ich möchte einen Termin. Ich habe Fieber. Sprechstundenhilfe: Wann können Sie kommen?</i><br><br>Hasta neden arıyor?",o:["Sonuç almak için","Randevu almak için","Fatura sormak için","Reçete için"],a:1,e:"'ich möchte einen Termin' = Randevu almak istiyorum. Termin = randevu. Fieber = ateş."},
{t:"telc",d:3,lv:"A1",tp:"gesundheit",q:"TELC A1 — Ilaç kutusu:<br><br><i>DOSIERUNG: Erwachsene: 1-2 Tabletten, max. 3x täglich.<br>Kinder unter 12 Jahren: nur nach Ärztlicher Empfehlung.<br>Nicht über 6 Tabletten täglich!</i><br><br>Yetişkin günde en fazla kaç tablet alabilir?",o:["2","3","6","12"],a:2,e:"'max. 6 Tabletten täglich' = günlük maksimum 6 tablet. 3x täglich 2 tablet = 6. Erwachsene = yetişkin."},

// ============================================================
// A1 - EV VE YASAM / WOHNEN (yeni)
// ============================================================
{t:"mcq",d:1,lv:"A1",tp:"wohnen",q:"Neue Wohnung: Meine Wohnung ___ im dritten Stock. (3. katta)",o:["hat","ist","wohnt","liegt"],a:1,e:"<b>ist im dritten Stock</b> = 3. katta. sein + Stockwerk. im dritten Stock = 3. katta (Almanya'da zemin kat = Erdgeschoss, 1. kat = 1. Stockwerk)."},
{t:"fill",d:1,lv:"A1",tp:"wohnen",q:"Beschreibung: Die Wohnung hat ___ Zimmer. (3 - drei)",c:"drei",e:"<b>drei Zimmer</b> = 3 oda. 2-Zimmer-Wohnung, 3-Zimmer-Wohnung gibi ifadeler. Almanya'da 'Zimmer' genellikle yatak/oturma odalarını sayar (mutfak/banyo dahil değil)."},
{t:"mcq",d:2,lv:"A1",tp:"wohnen",q:"Wohnungssuche: Die Miete ___ 800 Euro pro Monat.",o:["kostet","ist","macht","hat"],a:0,e:"<b>kostet</b> — kosten = mal olmak/tutmak. Die Miete kostet 800 Euro = Kira 800 Euro tutuyor. Preis/Miete için kostet."},
{t:"fill",d:2,lv:"A1",tp:"wohnen",q:"Im Haus: Der Aufzug ist ___. Wir nehmen die Treppe. (bozuk)",c:"kaputt",e:"<b>kaputt</b> = bozuk/arızalı. Der Aufzug ist kaputt = Asansör bozuk. Treppe = merdiven."},
{t:"mcq",d:2,lv:"A1",tp:"wohnen",q:"Hausregeln: Im Haus ___ man nicht laut Musik hören.",o:["darf","kann","will","muss"],a:0,e:"<b>darf</b> — dürfen yasak/izin. Man darf nicht... = ...yapılamaz/yasaktır."},
{t:"fill",d:2,lv:"A1",tp:"wohnen",q:"Möbel: Ich suche ___ Sofa für mein Wohnzimmer. (bir kanepe - das Sofa)",c:"ein",e:"<b>ein Sofa</b> — das Sofa nötr → ein (Akkusativ nötr belirsiz değişmez: ein)."},
{t:"mcq",d:3,lv:"A1",tp:"wohnen",q:"Wohnungsanzeige: 'NKM 650 €' ne demek?",o:["Kira 650 €, faturalar dahil","Kira 650 €, faturalar hariç","Depozito 650 €","Aylık toplam 650 €"],a:1,e:"<b>Nettokaltmiete (NKM)</b> = Net soğuk kira = faturalar (ısınma, su vb.) dahil değil. Warmmiete = faturalar dahil kira."},
{t:"telc",d:2,lv:"A1",tp:"wohnen",q:"TELC A1 — Wohnungsanzeige:<br><br><i>Zu vermieten: 3-Zimmer-Wohnung, 75 qm, 2. OG, Balkon, Einbauküche. Warmmiete: 950 Euro. Kein Haustier. Tel: 0176-123</i><br><br>Bu dairede ne var?",o:["Garaj","Balkon ve mutfak","Bahçe","Çamaşırhane"],a:1,e:"Balkon ✓ und Einbauküche (ankastre mutfak) ✓. OG = Obergeschoss (üst kat). Warmmiete = faturalar dahil kira."},

// ============================================================
// A1 - OKUL VE MESLEK / SCHULE & BERUF (yeni)
// ============================================================
{t:"mcq",d:1,lv:"A1",tp:"beruf",q:"Was ___ Sie von Beruf? (Mesleğiniz ne?)",o:["haben","sind","machen","arbeiten"],a:1,e:"<b>Was sind Sie von Beruf?</b> = Mesleğiniz ne? sein + Beruf. Alternativ: Was machen Sie beruflich?"},
{t:"fill",d:1,lv:"A1",tp:"beruf",q:"Vorstellung: Ich ___ als Krankenschwester. (arbeiten - hemşire olarak çalışıyorum)",c:"arbeite",e:"<b>arbeite</b> — ich arbeite. als + Beruf = ...olarak. Ich arbeite als Krankenschwester."},
{t:"mcq",d:1,lv:"A1",tp:"beruf",q:"Schule: Wann beginnt die Schule? — Um ___ Uhr.",o:["sieben","siebte","siebten","siebt"],a:0,e:"<b>sieben Uhr</b> = saat yedi. Saat ifadesinde Um + sayı + Uhr: Um sieben Uhr."},
{t:"fill",d:2,lv:"A1",tp:"beruf",q:"Stundenplan: Am Montag ___ wir Mathematik und Deutsch. (haben - ders var)",c:"haben",e:"<b>haben</b> — Ders/saat için: Wir haben Mathematik = Matematik dersimiz var."},
{t:"mcq",d:2,lv:"A1",tp:"beruf",q:"Goethe A1: Ich ___ gerade eine Ausbildung als Koch. (machen - stajyer)",o:["mache","machen","machst","macht"],a:0,e:"<b>mache</b> — ich mache. Eine Ausbildung machen = staj/eğitim yapmak. Koch = aşçı."},
{t:"fill",d:2,lv:"A1",tp:"beruf",q:"Im Büro: Ich ___ um 9 Uhr an und höre um 18 Uhr auf. (anfangen - başlamak)",c:"fange",e:"<b>fange...an</b> — anfangen trennbar: ich fange...an. Ich fange um 9 Uhr an = Saat 9'da başlıyorum."},
{t:"mcq",d:3,lv:"A1",tp:"beruf",q:"Lebenslauf: Was gehört NICHT in einen Lebenslauf?",o:["Name und Adresse","Ausbildung","Lieblingsfarbe","Berufserfahrung"],a:2,e:"<b>Lieblingsfarbe</b> (favori renk) CV'ye girmez. Lebenslauf (CV) içeriği: Persönliche Daten, Ausbildung (eğitim), Berufserfahrung (iş deneyimi)."},
{t:"telc",d:2,lv:"A1",tp:"beruf",q:"TELC A1 — Stellenanzeige:<br><br><i>Kellner/Kellnerin gesucht! Teilzeit (20 Std/Woche), auch Wochenende. Deutschkenntnisse A2. Bewerbung: jobs@restaurant.de</i><br><br>Kaç saat çalışılacak?",o:["Tam zamanlı","Haftada 20 saat","Hafta sonları","Günde 20 saat"],a:1,e:"Teilzeit 20 Std/Woche = Yarı zamanlı, haftada 20 saat. Teilzeit = yarı zamanlı, Vollzeit = tam zamanlı."},

// ============================================================
// A1 - HAFTA / MEVSIM / ZAMAN (genisletme)
// ============================================================
{t:"mcq",d:1,lv:"A1",tp:"zeit",q:"Tageszeit: Am ___ esse ich zu Mittag. (öğlen)",o:["Morgen","Nachmittag","Mittag","Abend"],a:2,e:"<b>am Mittag</b> = öğleyin. am Morgen=sabah, am Nachmittag=öğleden sonra, am Abend=akşam, in der Nacht=geceleyin."},
{t:"fill",d:1,lv:"A1",tp:"zeit",q:"Im Frühling ___ die Blumen. (blühen - çiçekler açar)",c:"blühen",e:"<b>blühen</b> — blühen = çiçek açmak. Im Frühling blühen die Blumen = İlkbaharda çiçekler açar. Jahreszeiten: Frühling, Sommer, Herbst, Winter."},
{t:"mcq",d:2,lv:"A1",tp:"zeit",q:"Goethe A1: ___ Sommer fahre ich ans Meer.",o:["Am","Im","In","An"],a:1,e:"<b>Im Sommer</b> = yazın. Mevsimler: im Frühling, im Sommer, im Herbst, im Winter (hep 'im')."},
{t:"fill",d:2,lv:"A1",tp:"zeit",q:"Kalender: Der Monat nach März ___ April. (heißen - adı)",c:"heißt",e:"<b>heißt</b> — heißen 3. tekil: heißt. Der Monat nach März heißt April = Mart'tan sonraki ay Nisan'dır."},
{t:"mcq",d:2,lv:"A1",tp:"zeit",q:"Wochentag: Heute ist Mittwoch. Übermorgen ist ___.",o:["Donnerstag","Freitag","Samstag","Dienstag"],a:1,e:"<b>Freitag</b> = Cuma. Mittwoch(Çarş.) + 1 = Donnerstag(Perş.), +2 = Freitag(Cuma). übermorgen = öbür gün."},
{t:"fill",d:2,lv:"A1",tp:"zeit",q:"Geburtstag: Mein Geburtstag ist ___ 15. Mai. (am - 15 Mayıs'ta)",c:"am",e:"<b>am 15. Mai</b> = 15 Mayıs'ta. Tarih ifadesi: am + sıra sayısı + Monat. am ersten Januar, am fünfzehnten Mai."},
{t:"mcq",d:3,lv:"A1",tp:"zeit",q:"Zeitangabe: 'vorgestern' ne demek?",o:["Dün","Bugün","Dün evvelsi","Yarın"],a:2,e:"<b>vorgestern</b> = evvelsi gün (dün öncesi). vorgestern - gestern - heute - morgen - übermorgen. Tam sıra!"},

// ============================================================
// A1 - SAYILAR / PARA genisletme (+8)
// ============================================================
{t:"fill",d:1,lv:"A1",tp:"zahlen",q:"Telefon: Meine Handynummer ist null-eins-sieben-sechs... Wie lautet ___ Nummer? (Türkçe: numarası nasıl?)",c:"die",e:"<b>die Nummer</b> — die Telefonnummer dişil → die. Wie lautet die Nummer? = Numara nasıl?"},
{t:"mcq",d:2,lv:"A1",tp:"zahlen",q:"Datum: Der wievielte ist heute? — Heute ist der ___.",o:["erste","ersten","erster","erstem"],a:0,e:"<b>der erste</b> — Nominativ tarih (özne): der erste Januar. Dativ (am): am ersten Januar."},
{t:"fill",d:2,lv:"A1",tp:"zahlen",q:"Jahreszeit: In welchem Jahr bist du geboren? — Ich bin ___ geboren. (1990 - neunzehnhundertneunzig)",c:"1990",e:"<b>1990</b> yazılışı: neunzehnhundertneunzig. Yıllar: 1999 = neunzehnhundertneunundneunzig, 2000 = zweitausend."},
{t:"mcq",d:2,lv:"A1",tp:"zahlen",q:"Goethe A1: Das Konzert beginnt ___ 20 Uhr. (saat 20'de)",o:["in","am","um","an"],a:2,e:"<b>um 20 Uhr</b> = saat 20'de. Saat için um kullanılır: um 8 Uhr, um halb neun, um Mitternacht."},
{t:"fill",d:3,lv:"A1",tp:"zahlen",q:"Rechnung: 47 + 36 = ___? (Almanca yaz)",c:"dreiundachtzig",e:"<b>dreiundachtzig</b> = 83. Almancada: Birler + und + Onlar: drei-und-achtzig. 47 = siebenundvierzig, 36 = sechsunddreißig."},

// ============================================================
// A1 - AILE VE KISILER (yeni - Goethe temel konu)
// ============================================================
{t:"mcq",d:1,lv:"A1",tp:"familie",q:"Meine Eltern heißen Ahmet und Fatma. Ahmet ist mein ___.",o:["Mutter","Vater","Bruder","Opa"],a:1,e:"<b>Vater</b> = baba. Eltern = ebeveynler (cogul). Vater = baba, Mutter = anne."},
{t:"fill",d:1,lv:"A1",tp:"familie",q:"Mein Onkel und meine Tante haben zwei Kinder. Die Kinder sind meine ___.",c:"Cousins",e:"<b>Cousins</b> = erkek kuzenler (veya karışık). Cousin = erkek kuzen, Cousine = kız kuzen. Nichte = yeğen (kız), Neffe = yeğen (erkek)."},
{t:"mcq",d:2,lv:"A1",tp:"familie",q:"Familienstand: Ich bin geschieden. Das bedeutet:",o:["Evliyim","Bekarım","Boşandım","Nişanlıyım"],a:2,e:"<b>geschieden</b> = boşanmış. ledig = bekar, verheiratet = evli, verwitwet = dul, verlobt = nişanlı."},
{t:"fill",d:2,lv:"A1",tp:"familie",q:"Geschwister: Ich habe eine ältere Schwester und einen jüngeren ___. (erkek kardeş)",c:"Bruder",e:"<b>Bruder</b> = erkek kardeş. älter = büyük (yaşça), jünger = küçük (yaşça). ältere Schwester = büyük kız kardeş."},
{t:"mcq",d:2,lv:"A1",tp:"familie",q:"Goethe A1: Wie alt ist Ihr Großvater? — Er ist ___ Jahre alt.",o:["achtzig","achtzigste","achtzigte","achtzig Jahre"],a:0,e:"<b>achtzig</b> = 80. Er ist achtzig Jahre alt = 80 yaşında. Sıfat olarak: Er ist achtzig (Jahre alt gizli anlaşılır)."},
{t:"telc",d:2,lv:"A1",tp:"familie",q:"TELC A1 — Tanışma:<br><br><i>Hallo! Ich bin Mia. Ich bin verheiratet und habe drei Kinder: zwei Söhne und eine Tochter. Mein Mann arbeitet als Arzt und ich bin Lehrerin.</i><br><br>Mia'nın kaç oğlu var?",o:["1","2","3","4"],a:1,e:"'zwei Söhne' = 2 oğul. Sohn = oğul (cogul: Söhne), Tochter = kız (cogul: Töchter)."},

// ============================================================
// A1 - RENK / KLEIDUNG / AUSSEHEN (yeni)
// ============================================================
{t:"mcq",d:1,lv:"A1",tp:"kleidung",q:"Was trägst du? — Ich ___ ein blaues T-Shirt und Jeans.",o:["habe","bin","trage","stecke"],a:2,e:"<b>trage</b> — tragen = giymek/taşımak. ich trage, du trägst, er trägt. Kıyafet için tragen kullanılır."},
{t:"fill",d:1,lv:"A1",tp:"kleidung",q:"Mode: Das Kleid ist ___. Ich mag die Farbe nicht. (çirkin - hässlich)",c:"hässlich",e:"<b>hässlich</b> = çirkin. hässlich ↔ schön. Das Kleid ist hässlich = Elbise çirkin."},
{t:"mcq",d:2,lv:"A1",tp:"kleidung",q:"Goethe A1: Welche Farbe hat das Taxi in Deutschland?",o:["Rot","Blau","Gelb","Weiß"],a:2,e:"<b>Gelb</b> = sarı. Almanya'da taksiler sarıdır. Gelb = sarı, Rot = kırmızı, Blau = mavi, Weiß = beyaz."},
{t:"fill",d:2,lv:"A1",tp:"kleidung",q:"Aussehen: Er hat ___ Haare und blaue Augen. (kahverengi saç - braun)",c:"braune",e:"<b>braune Haare</b> — dişil Akkusativ belirsiz (ohne Artikel): braune. Haare cogul → braune."},
{t:"mcq",d:2,lv:"A1",tp:"kleidung",q:"Im Kaufhaus: Ich suche eine Jacke in ___. (mavi renk)",o:["blauen","blau","blaue","blauer"],a:1,e:"<b>in Blau</b> = mavi renkte. Renk + in yapısında büyük harf, ek yok: in Blau, in Rot, in Grün."},
{t:"telc",d:2,lv:"A1",tp:"kleidung",q:"TELC A1 — Vermisstenmeldung:<br><br><i>Vermisst: Mädchen, 8 Jahre. Name: Sophie. Trägt eine rote Jacke, blaue Jeans und weiße Turnschuhe. Schwarze Haare, braune Augen.</i><br><br>Sophie'nin saçı ne renk?",o:["Kırmızı","Mavi","Beyaz","Siyah"],a:3,e:"'Schwarze Haare' = siyah saç. schwarz = siyah. Trägt (giyiyor): rote Jacke (kırmızı ceket)."},

// ============================================================
// A1 - HAVA DURUMU / WETTER (yeni - Goethe s-k sorar)
// ============================================================
{t:"mcq",d:1,lv:"A1",tp:"wetter",q:"Wetter heute: Es ___ und die Sonne scheint. (güneş parlıyor)",o:["ist warm","ist heiß","ist schön","scheint gut"],a:2,e:"<b>Es ist schön.</b> = Hava güzel. Wetter Beschreibungen: Es ist warm/kalt/schön/schlecht/bewölkt."},
{t:"fill",d:1,lv:"A1",tp:"wetter",q:"Winter: Im Winter ___ es oft in Deutschland. (schneit - kar yağar)",c:"schneit",e:"<b>schneit</b> — schneien 3. tekil: es schneit. Es schneit = Kar yağıyor. Wetterwörter: regnen, schneien, donnern, blitzen."},
{t:"mcq",d:2,lv:"A1",tp:"wetter",q:"Temperatur: Es sind minus zehn Grad. Das bedeutet:",o:["10 derece sıcak","10 derecenin altında","Donma noktası","Sıfır derece"],a:1,e:"<b>minus zehn Grad</b> = eksi 10 derece. minus = eksi. plus = artı. null Grad = sıfır derece."},
{t:"fill",d:2,lv:"A1",tp:"wetter",q:"Regen: Nimm einen Regenschirm mit! Es ___ gleich. (yağmur yağacak - regnen)",c:"regnet",e:"<b>regnet</b> — regnen 3. tekil: es regnet. Es regnet gleich = Birazdan yağmur yağacak. Regenschirm = şemsiye."},
{t:"mcq",d:3,lv:"A1",tp:"wetter",q:"Wettervorhersage: 'Wolkig mit Schauern' ne demek?",o:["Güneşli","Karlı","Parçalı bulutlu, sağanak yağışlı","Sisli"],a:2,e:"<b>wolkig</b> = bulutlu, Schauer = sağanak yağış. Wetterwörter: sonnig=güneşli, bewölkt=bulutlu, neblig=sisli, windig=rüzgarlı."},
{t:"telc",d:2,lv:"A1",tp:"wetter",q:"TELC A1 — Hava durumu:<br><br><i>Heute: sonnig, 22°C.<br>Morgen: Regen und Wind, 14°C.<br>Übermorgen: wieder sonnig, 20°C.</i><br><br>Yarın hava nasıl olacak?",o:["Güneşli","Yağmurlu ve rüzgarlı","Karlı","Bulutlu"],a:1,e:"Morgen: Regen und Wind = Yağmur ve rüzgar. Regen = yağmur, Wind = rüzgar."},

// B1 -- Konjunktiv II
{t:"mcq",d:2,lv:"B1",tp:"konjunktiv2",q:"B1 — 'An deiner Stelle ___ ich das nicht machen.' (Konjunktiv II - tavsiye)",o:["will","werde","würde","wolle"],a:2,e:"würde + Inf = Konjunktiv II. An deiner Stelle würde ich... = Senin yerinde olsam..."},
{t:"fill",d:2,lv:"B1",tp:"konjunktiv2",q:"B1 — Wenn ich Zeit ___, würde ich mehr reisen. (haben - K.II)",c:"hätte",e:"haben K.II: ich hätte. Wenn ich Zeit HÄTTE..."},
{t:"mcq",d:2,lv:"B1",tp:"konjunktiv2",q:"B1 — Kibarlık: '___ Sie mir bitte helfen?' (können - K.II)",o:["Können","Könnten","Konnten","Konnte"],a:1,e:"können K.II: könnte. Könnten Sie...? = çok nazik istek"},
{t:"fill",d:2,lv:"B1",tp:"konjunktiv2",q:"B1 — Ich ___ gern mehr Sport treiben, aber ich habe keine Zeit. (würde)",c:"würde",e:"würde + Infinitiv = Konjunktiv II. Ich WÜRDE gern... = ...isterdim"},
{t:"mcq",d:3,lv:"B1",tp:"konjunktiv2",q:"B1 — 'Wenn er früher ___, hätte er den Zug noch erwischt.'",o:["aufstehen würde","aufgestanden wäre","aufstehen wäre","aufgestanden würde"],a:1,e:"Geçmiş koşul: wäre + Partizip II. aufgestanden WÄRE = kalkmış olsaydı"},
{t:"mcq",d:3,lv:"B1",tp:"konjunktiv2",q:"B1 — 'sein' K.II 1. tekil?",o:["würde sein","sei","wäre","wäre sein"],a:2,e:"sein K.II: ich WÄRE. Ich wäre froh, wenn... = ...olsaydım mutlu olurdum"},

// Passiv
{t:"mcq",d:2,lv:"B1",tp:"passiv",q:"B1 — Passiv: 'Das Haus ___ gerade renoviert.'",o:["hat","ist","wird","wurde"],a:2,e:"Passiv Präsens: werden + PP. Das Haus WIRD renoviert = Ev şu an tamir ediliyor."},
{t:"fill",d:2,lv:"B1",tp:"passiv",q:"B1 — Der Brief ___ gestern geschrieben. (Passiv Prateritum)",c:"wurde",e:"Passiv Prateritum: wurde + PP. Der Brief WURDE geschrieben."},
{t:"mcq",d:2,lv:"B1",tp:"passiv",q:"B1 — 'Das muss sofort erledigt ___.' (Modal + Passiv)",o:["sein","werden","worden","geworden"],a:1,e:"Modal + Passiv Infinitiv: muss erledigt WERDEN."},
{t:"fill",d:3,lv:"B1",tp:"passiv",q:"B1 — Hier ___ Deutsch gesprochen. (Passiv Präsens, man yerine)",c:"wird",e:"Passiv = man alternatifi. Hier WIRD Deutsch gesprochen = Burada Almanca konuşulur."},
{t:"mcq",d:3,lv:"B1",tp:"passiv",q:"B1 — 'Die Tür ist geschlossen.' ne tür Passiv?",o:["Vorgangspassiv","Zustandspassiv","Modal Passiv","Kein Passiv"],a:1,e:"sein + PP = Zustandspassiv (sonuç). wird + PP = Vorgangspassiv (süreç)."},

// Relativs-tze
{t:"mcq",d:2,lv:"B1",tp:"relativsatz",q:"B1 — 'Der Mann, ___ ich gestern getroffen habe, ist Arzt.'",o:["der","den","dem","dessen"],a:1,e:"Der Mann = eril. Relativsatz'da nesne (Akkusativ) → den"},
{t:"fill",d:2,lv:"B1",tp:"relativsatz",q:"B1 — Das ist das Buch, ___ ich dir empfohlen habe. (das Buch, Akk)",c:"das",e:"das Buch nötr. Akkusativ nötr → das (değişmez)"},
{t:"mcq",d:2,lv:"B1",tp:"relativsatz",q:"B1 — 'Die Frau, ___ ich geholfen habe, ist meine Nachbarin.'",o:["die","der","den","deren"],a:1,e:"die Frau dişil. helfen + Dativ → Dativ dişil: der"},
{t:"fill",d:3,lv:"B1",tp:"relativsatz",q:"B1 — Das ist der Student, ___ Vater Professor ist. (Genitiv eril)",c:"dessen",e:"Genitiv eril/nötr: dessen. ... DESSEN Vater Professor ist"},
{t:"mcq",d:3,lv:"B1",tp:"relativsatz",q:"B1 — 'Alles, ___ er sagt, stimmt.' (was - belirsiz ref.)",o:["das","was","dem","dessen"],a:1,e:"alles/nichts/etwas → was (das değil!). Alles, WAS er sagt..."},

// Infinitivkonstruktionen
{t:"mcq",d:2,lv:"B1",tp:"infinitiv",q:"B1 — 'Ich spare, ___ ein Auto zu kaufen.'",o:["damit","um","weil","dass"],a:1,e:"um...zu = için (amaç). Ich spare, UM ein Auto zu kaufen."},
{t:"fill",d:2,lv:"B1",tp:"infinitiv",q:"B1 — Er ging, ohne etwas zu ___. (sagen - bir şey söylemeden)",c:"sagen",e:"ohne...zu + Infinitiv. ohne etwas zu SAGEN."},
{t:"mcq",d:2,lv:"B1",tp:"infinitiv",q:"B1 — 'Anstatt zu lernen, schaut er fern.' Türkçesi:",o:["Öğrenirken TV izliyor","Öğrenmek için TV izliyor","Öğrenmek yerine TV izliyor","Öğrendikten sonra TV izliyor"],a:2,e:"anstatt...zu = ...yerine. Öğrenmek YERINE TV izliyor."},
{t:"fill",d:3,lv:"B1",tp:"infinitiv",q:"B1 — Sie versucht, früh auf___stehen. (Trennbar + zu - aufzustehen)",c:"zu",e:"Trennbar fiil + zu: auf-ZU-stehen. versucht, früh aufZUstehen."},

// Zeitangaben
{t:"mcq",d:2,lv:"B1",tp:"zeitangaben",q:"B1 — '___ ich jung war, spielte ich Fußball.' (tek geçmiş olay)",o:["Wenn","Als","Während","Seitdem"],a:1,e:"als = tek seferlik geçmiş olay. wenn = tekrarlayan veya gelecek."},
{t:"fill",d:2,lv:"B1",tp:"zeitangaben",q:"B1 — ___ er schläft, arbeite ich. (eş zamanlı - während)",c:"Während",e:"während = ...iken (eş zamanlı). WÄHREND er schläft, arbeite ich."},
{t:"mcq",d:3,lv:"B1",tp:"zeitangaben",q:"B1 — 'Nachdem er gegessen hatte, ging er spazieren.' — neden Plusquamperfekt?",o:["Yanlış, Perfekt olmalı","Önce olan eylem P.Perf. alır","Kurala göre zorunlu","Prateritum da olabilir"],a:1,e:"nachdem ile önce biten eylem Plusquamperfekt: hatte gegessen."},

// Indirekte Rede
{t:"mcq",d:2,lv:"B1",tp:"indirekterede",q:"B1 — 'Er sagt: Ich bin krank.' → İndirek:",o:["Er sagt, er ist krank.","Er sagt, er sei krank.","Er sagt, er wäre krank.","A und B sind beide richtig."],a:3,e:"Günlük: er ist krank. Resmi/Habercilik: er sei krank (K.I). İkisi de doğru."},
{t:"fill",d:2,lv:"B1",tp:"indirekterede",q:"B1 — Sie fragt, ___ ich morgen Zeit habe. (ob - soru aktarımı)",c:"ob",e:"Soru aktarımı → ob. Sie fragt, OB ich Zeit habe."},
{t:"mcq",d:3,lv:"B1",tp:"indirekterede",q:"B1 — 'er kommt' Konjunktiv I formu? (haber dili)",o:["er kommt","er käme","er komme","er gekommen"],a:2,e:"kommen K.I 3. tekil: er komme. Infinitiv kökü + -e."},

// TELC B1 okuma
{t:"telc",d:2,lv:"B1",tp:"lesen",q:"TELC B1 — Metni oku:<br><br><i>Immer mehr Menschen arbeiten im Homeoffice. Laut einer aktuellen Studie sind 68% der Befragten zufrieden mit dieser Arbeitsform. Als größte Vorteile werden die flexible Zeiteinteilung und die Ersparnis von Pendelzeit genannt. Allerdings beklagen viele die soziale Isolation.</i><br><br>Was ist laut Text ein NACHTEIL des Homeoffice?",o:["Flexible Zeiteinteilung","Weniger Pendelzeit","Soziale Isolation","Mehr Freizeit"],a:2,e:"'beklagen viele die soziale Isolation' = şikayet = dezavantaj."},
{t:"telc",d:3,lv:"B1",tp:"lesen",q:"TELC B1 — E-posta:<br><br><i>Sehr geehrte Damen und Herren, ich bewerbe mich um die Stelle als Projektmanager. Ich habe 5 Jahre Berufserfahrung in der IT-Branche und spreche fließend Englisch und Deutsch. Bitte finden Sie meinen Lebenslauf anbei. Mit freundlichen Grüßen</i><br><br>Worum handelt es sich bei diesem Text?",o:["Nachricht an einen Freund","Eine Bewerbung","Eine Beschwerde","Ein Angebot"],a:1,e:"'bewerbe mich um die Stelle' = bir pozisyona başvuruyorum = Bewerbung."},
// Passiv geli-mi-
{t:"mcq",d:2,lv:"B2",tp:"erweitertes_passiv",q:"B2 — 'Das Problem ___ gelöst werden.' (Modal + Passiv Inf.)",o:["muss","hat","ist","wird"],a:0,e:"Modal + Passiv Infinitiv: muss + PP + werden. Das Problem MUSS gelöst werden."},
{t:"fill",d:2,lv:"B2",tp:"erweitertes_passiv",q:"B2 — Das Haus ist ___. Die Arbeiter haben fertig. (bauen - Zustandspassiv)",c:"gebaut",e:"Zustandspassiv sein + PP: ist GEBAUT. Sonuç durumu."},
{t:"mcq",d:3,lv:"B2",tp:"erweitertes_passiv",q:"B2 — 'Das lässt sich nicht beweisen.' ne demek?",o:["İspat edilemiyor (aktif)","İspat edilemez (pasif anlam)","İspat etmek istemez","İspat etmek gerekir"],a:1,e:"sich lassen + Inf = pasif anlam. lässt sich nicht beweisen = ispat edilemez."},
{t:"fill",d:3,lv:"B2",tp:"erweitertes_passiv",q:"B2 — Das ___ zu beachten. (sein + zu Inf. - dikkate alınmalı)",c:"ist",e:"sein + zu + Inf = edilgen zorunluluk. Das IST zu beachten = Bu dikkate alınmalı."},
// Komplexe Pr-positionen
{t:"mcq",d:2,lv:"B2",tp:"praepositionen_b2",q:"B2 — '___ des schlechten Wetters gingen wir spazieren.' (rağmen)",o:["Wegen","Aufgrund","Trotz","Während"],a:2,e:"trotz + Genitiv = ...rağmen. TROTZ des schlechten Wetters..."},
{t:"fill",d:2,lv:"B2",tp:"praepositionen_b2",q:"B2 — ___ der Arbeit höre ich Musik. (...sırasında)",c:"Während",e:"während + Genitiv = ...sırasında. WÄHREND der Arbeit höre ich Musik."},
{t:"mcq",d:3,lv:"B2",tp:"praepositionen_b2",q:"B2 — 'innerhalb' hangi hali yönetir?",o:["Akkusativ","Dativ","Genitiv","Nominativ"],a:2,e:"innerhalb + Genitiv. innerhalb einer Woche = bir hafta içinde."},
{t:"fill",d:3,lv:"B2",tp:"praepositionen_b2",q:"B2 — ___ einer Woche habe ich das geschafft. (bir hafta içinde)",c:"Innerhalb",e:"innerhalb + Genitiv = içinde. INNERHALB einer Woche..."},
// Nominalstil
{t:"mcq",d:2,lv:"B2",tp:"nominalstil",q:"B2 — 'Die Preise steigen.' → Nominalstil:",o:["Ein Preissteigung liegt vor.","Ein Anstieg der Preise ist zu verzeichnen.","Die Preise haben gestiegen.","Preise steigen auf."],a:1,e:"steigen → Anstieg. Ein ANSTIEG der Preise ist zu verzeichnen = Nominalstil."},
{t:"fill",d:3,lv:"B2",tp:"nominalstil",q:"B2 — zur ___ stellen = sağlamak/sunmak (önemli Nominalstil kalıbı)",c:"Verfügung",e:"zur Verfügung stellen = sağlamak. zur VERFÜGUNG stellen."},
{t:"mcq",d:3,lv:"B2",tp:"nominalstil",q:"B2 — 'in Betracht ziehen' ne demek?",o:["Dikkate almak","Reddetmek","Araştırmak","Anlatmak"],a:0,e:"in Betracht ziehen = dikkate almak, göz önünde bulundurmak."},
// Modalpartikeln
{t:"mcq",d:2,lv:"B2",tp:"modalpartikeln",q:"B2 — 'Das ist aber schön!' cümlesinde 'aber' işlevi?",o:["Karşıtlık","Pekiştirme/vurgu (şaşırma)","Soru","Olumsuzlama"],a:1,e:"aber = pekiştirme. Das ist ABER schön! = Bu gerçekten çok güzel! (şaşırma içerir)"},
{t:"fill",d:2,lv:"B2",tp:"modalpartikeln",q:"B2 — Er ist ___ krank. (galiba/muhtemelen)",c:"wohl",e:"wohl = galiba, muhtemelen. Er ist WOHL krank."},
{t:"mcq",d:3,lv:"B2",tp:"modalpartikeln",q:"B2 — 'Kannst du mal kommen?' de 'mal' ne yapar?",o:["Geçmiş zaman","İsteği yumuşatır/nazikleştirir","Soru yapar","Vurgu yapar"],a:1,e:"mal = yumuşatma. Kannst du MAL kommen? = Bir gelebilir misin? (daha nazik)"},
// Textsorten
{t:"telc",d:2,lv:"B2",tp:"textsorten",q:"TELC B2 — Resmi mektupta doğru selamlama (kişi bilinmiyor):",o:["Hallo zusammen!","Liebe Damen und Herren,","Sehr geehrte Damen und Herren,","Guten Tag!"],a:2,e:"Sehr geehrte Damen und Herren, = kişi bilinmiyorsa resmi selamlama."},
{t:"fill",d:3,lv:"B2",tp:"textsorten",q:"B2 — Essay sonuç cümlesi: '___ lässt sich sagen, dass...' (Özetle)",c:"Zusammenfassend",e:"Zusammenfassend lässt sich sagen = Özetle söylemek gerekirse."},
{t:"telc",d:3,lv:"B2",tp:"lesen",q:"TELC B2 — Metni oku:<br><br><i>Die Digitalisierung verändert den Arbeitsmarkt grundlegend. Während einfache Routinetätigkeiten zunehmend automatisiert werden, steigt die Nachfrage nach kreativen und sozialen Kompetenzen. Experten warnen, dass bis 2030 bis zu 30% der heutigen Berufe wegfallen könnten.</i><br><br>Was sagen Experten laut Text?",o:["Alle Jobs bleiben erhalten","Kreative Jobs werden automatisiert","Bis zu 30% der Berufe könnten wegfallen","Digitalisierung ist gut für alle"],a:2,e:"'bis zu 30% der heutigen Berufe wegfallen könnten' = meslek kaybı uyarısı."},
{t:"telc",d:3,lv:"B2",tp:"lesen",q:"TELC B2 — Metni oku:<br><br><i>Nachhaltigkeit ist längst kein Nischenthema mehr. Laut einer Umfrage achten 73% der Deutschen beim Einkauf auf Umweltaspekte. Jedoch klafft zwischen Einstellung und Verhalten oft eine Lücke: Nur 34% kaufen tatsächlich regelmäßig Bioprodukte.</i><br><br>'Zwischen Einstellung und Verhalten klafft eine Lücke' ne demek?",o:["İnsanlar tutarlı davranıyor","Söylem ile davranış arasında uçurum var","Herkes bio ürün alıyor","Araştırma güvenilir değil"],a:1,e:"klafft eine Lücke = arasında derin uçurum var. Einstellung ≠ Verhalten tutarsızlığı."}
];

var GQ_C1 = [
// Konjunktiv I - derin
{t:"mcq",d:3,lv:"C1",tp:"konjunktiv1",q:"C1 — 'kommen' Konjunktiv I 3. tekil?",o:["er kommt","er käme","er komme","er gekommen"],a:2,e:"K.I 3. tekil: Infinitiv kökü + -e → er KOMME."},
{t:"fill",d:3,lv:"C1",tp:"konjunktiv1",q:"C1 — Der Minister erklärte, er ___ nicht schuldig. (sein K.I)",c:"sei",e:"sein K.I 3. tekil: sei. Er erklärte, er SEI nicht schuldig."},
{t:"mcq",d:3,lv:"C1",tp:"konjunktiv1",q:"C1 — K.I ile K.II ne zaman değiştirilir?",o:["Her zaman K.II","K.I Indikativle aynı görünürse K.II","K.I daha zor olunca","Gazetede değil sadece kitaplarda"],a:1,e:"K.I Indikativ ile aynı görünürse (çoğulda sıkça) K.II kullanılır."},
// Stilistik
{t:"mcq",d:3,lv:"C1",tp:"stilistik",q:"C1 — 'Weil er krank ist' → Nominalstil:",o:["trotz seiner Krankheit","aufgrund seiner Krankheit","während seiner Krankheit","wegen krank sein"],a:1,e:"weil (sebep) → aufgrund + Genitiv. AUFGRUND seiner Krankheit."},
{t:"fill",d:3,lv:"C1",tp:"stilistik",q:"C1 — Die ___ Frau heißt Maria. (singen - Partizip I sıfat olarak)",c:"singende",e:"Partizip I sıfat: singend + -e = SINGENDE. Die singende Frau."},
{t:"mcq",d:3,lv:"C1",tp:"stilistik",q:"C1 — 'Es lässt sich feststellen' hangi dile aittir?",o:["Günlük konuşma","Çocuk dili","Bilim/akademik dil","Argo"],a:2,e:"lässt sich feststellen = akademik/bilimsel dil. man kann feststellen'in resmi karşılığı."},
// Argumentieren
{t:"mcq",d:3,lv:"C1",tp:"argumentieren",q:"C1 — 'Zwar mag es stimmen, dass..., jedoch...' yapısı ne için?",o:["Ekleme","Karşı görüşü kabul edip çürütme","Örnek verme","Sonuç bildirme"],a:1,e:"Zwar...jedoch = konsesyon: kısmen kabul et, sonra çürüt."},
{t:"fill",d:3,lv:"C1",tp:"argumentieren",q:"C1 — ___ lässt sich feststellen, dass das Problem komplex ist. (Özetle)",c:"Zusammenfassend",e:"Zusammenfassend lässt sich feststellen = Özetle tespit etmek mümkündür."},
{t:"mcq",d:3,lv:"C1",tp:"argumentieren",q:"C1 — 'Anhand von Beispielen wird deutlich...' ne demek?",o:["Örneklere rağmen","Örnekler aracılığıyla açıkça görülmektedir","Örnek olmadan","Örnekler yetersizdir"],a:1,e:"anhand von = aracılığıyla. Örnekler aracılığıyla açıkça görülmektedir."},
// Idiome
{t:"mcq",d:3,lv:"C1",tp:"idiomatik",q:"C1 — 'Den Nagel auf den Kopf treffen' ne demek?",o:["Çiviyle vurmak","Tam isabet etmek","Kafayı karıştırmak","Anlamak"],a:1,e:"tam isabetli söylemek/yapmak. Du hast den Nagel auf den Kopf getroffen!"},
{t:"fill",d:3,lv:"C1",tp:"idiomatik",q:"C1 — Ich habe die ___ voll von dieser Situation! (bıktım)",c:"Nase",e:"die Nase voll haben = bıkmak. Ich habe die NASE voll!"},
{t:"mcq",d:3,lv:"C1",tp:"idiomatik",q:"C1 — 'Da liegt der Hund begraben.' ne demek?",o:["Köpek bağlanmış","İşte sorun/mesele orada","Köpek orada","Gizli bir şey var"],a:1,e:"da liegt der Hund begraben = işte sorun orada, meselenin özü bu."},
// Diskursmarker
{t:"mcq",d:3,lv:"C1",tp:"diskursmarker",q:"C1 — 'darüber hinaus' işlevi?",o:["Karşıtlık","Sebep","Ekleme/ilave","Örnekleme"],a:2,e:"darüber hinaus = bunun ötesinde, ayrıca. Ekleme işlevi."},
{t:"fill",d:3,lv:"C1",tp:"diskursmarker",q:"C1 — Das Projekt war erfolgreich. ___ gab es Probleme. (bununla birlikte - Allerdings)",c:"Allerdings",e:"allerdings = bununla birlikte/her ne kadar. Kısıtlama işaretçisi."},
// TELC C1 okuma
{t:"telc",d:3,lv:"C1",tp:"lesen",q:"TELC C1 — Metni oku:<br><br><i>Die sogenannte 'Aufmerksamkeitsökonomie' beschreibt ein Phänomen der digitalen Gesellschaft: Da menschliche Aufmerksamkeit begrenzt ist, kämpfen Plattformen mit immer raffinierteren Mitteln um sie. Algorithmen optimieren Inhalte so, dass sie maximale Verweildauer erzeugen — oft auf Kosten von Qualität und Wohlbefinden der Nutzer.</i><br><br>'Auf Kosten von' ne anlama gelir?",o:["Sayesinde","...pahasına/zararına","Birlikte","Yerine"],a:1,e:"auf Kosten von = ...pahasına, ...zararına. auf Kosten der Nutzer = kullanıcıların zararına."},
{t:"telc",d:3,lv:"C1",tp:"lesen",q:"TELC C1 — Metni oku:<br><br><i>Angesichts der zunehmenden Komplexität globaler Herausforderungen gewinnt interdisziplinäres Denken an Bedeutung. Es reicht nicht mehr aus, in einem Fachgebiet exzellent zu sein; vielmehr sind Wissenschaftler gefordert, über Disziplingrenzen hinaus zu denken und zu kooperieren.</i><br><br>'Angesichts' ne anlama gelir?",o:["Rağmen","Sayesinde","Göz önünde bulundurarak/karşısında","Yerine"],a:2,e:"angesichts + Genitiv = göz önünde bulundurarak, karşısında. Angesichts der Komplexität = Karmaşıklık karşısında."},
// Konjunktiv I - derin
{t:"mcq",d:3,lv:"C1",tp:"konjunktiv1",q:"C1 — 'kommen' Konjunktiv I 3. tekil?",o:["er kommt","er käme","er komme","er gekommen"],a:2,e:"K.I 3. tekil: Infinitiv kökü + -e → er KOMME."},
{t:"fill",d:3,lv:"C1",tp:"konjunktiv1",q:"C1 — Der Minister erklärte, er ___ nicht schuldig. (sein K.I)",c:"sei",e:"sein K.I 3. tekil: sei. Er erklärte, er SEI nicht schuldig."},
{t:"mcq",d:3,lv:"C1",tp:"konjunktiv1",q:"C1 — K.I ile K.II ne zaman değiştirilir?",o:["Her zaman K.II","K.I Indikativle aynı görünürse K.II","K.I daha zor olunca","Gazetede değil sadece kitaplarda"],a:1,e:"K.I Indikativ ile aynı görünürse (çoğulda sıkça) K.II kullanılır."},
// Stilistik
{t:"mcq",d:3,lv:"C1",tp:"stilistik",q:"C1 — 'Weil er krank ist' → Nominalstil:",o:["trotz seiner Krankheit","aufgrund seiner Krankheit","während seiner Krankheit","wegen krank sein"],a:1,e:"weil (sebep) → aufgrund + Genitiv. AUFGRUND seiner Krankheit."},
{t:"fill",d:3,lv:"C1",tp:"stilistik",q:"C1 — Die ___ Frau heißt Maria. (singen - Partizip I sıfat olarak)",c:"singende",e:"Partizip I sıfat: singend + -e = SINGENDE. Die singende Frau."},
{t:"mcq",d:3,lv:"C1",tp:"stilistik",q:"C1 — 'Es lässt sich feststellen' hangi dile aittir?",o:["Günlük konuşma","Çocuk dili","Bilim/akademik dil","Argo"],a:2,e:"lässt sich feststellen = akademik/bilimsel dil. man kann feststellen'in resmi karşılığı."},
// Argumentieren
{t:"mcq",d:3,lv:"C1",tp:"argumentieren",q:"C1 — 'Zwar mag es stimmen, dass..., jedoch...' yapısı ne için?",o:["Ekleme","Karşı görüşü kabul edip çürütme","Örnek verme","Sonuç bildirme"],a:1,e:"Zwar...jedoch = konsesyon: kısmen kabul et, sonra çürüt."},
{t:"fill",d:3,lv:"C1",tp:"argumentieren",q:"C1 — ___ lässt sich feststellen, dass das Problem komplex ist. (Özetle)",c:"Zusammenfassend",e:"Zusammenfassend lässt sich feststellen = Özetle tespit etmek mümkündür."},
{t:"mcq",d:3,lv:"C1",tp:"argumentieren",q:"C1 — 'Anhand von Beispielen wird deutlich...' ne demek?",o:["Örneklere rağmen","Örnekler aracılığıyla açıkça görülmektedir","Örnek olmadan","Örnekler yetersizdir"],a:1,e:"anhand von = aracılığıyla. Örnekler aracılığıyla açıkça görülmektedir."},
// Idiome
{t:"mcq",d:3,lv:"C1",tp:"idiomatik",q:"C1 — 'Den Nagel auf den Kopf treffen' ne demek?",o:["Çiviyle vurmak","Tam isabet etmek","Kafayı karıştırmak","Anlamak"],a:1,e:"tam isabetli söylemek/yapmak. Du hast den Nagel auf den Kopf getroffen!"},
{t:"fill",d:3,lv:"C1",tp:"idiomatik",q:"C1 — Ich habe die ___ voll von dieser Situation! (bıktım)",c:"Nase",e:"die Nase voll haben = bıkmak. Ich habe die NASE voll!"},
{t:"mcq",d:3,lv:"C1",tp:"idiomatik",q:"C1 — 'Da liegt der Hund begraben.' ne demek?",o:["Köpek bağlanmış","İşte sorun/mesele orada","Köpek orada","Gizli bir şey var"],a:1,e:"da liegt der Hund begraben = işte sorun orada, meselenin özü bu."},
// Diskursmarker
{t:"mcq",d:3,lv:"C1",tp:"diskursmarker",q:"C1 — 'darüber hinaus' işlevi?",o:["Karşıtlık","Sebep","Ekleme/ilave","Örnekleme"],a:2,e:"darüber hinaus = bunun ötesinde, ayrıca. Ekleme işlevi."},
{t:"fill",d:3,lv:"C1",tp:"diskursmarker",q:"C1 — Das Projekt war erfolgreich. ___ gab es Probleme. (bununla birlikte - Allerdings)",c:"Allerdings",e:"allerdings = bununla birlikte/her ne kadar. Kısıtlama işaretçisi."},
// TELC C1 okuma
{t:"telc",d:3,lv:"C1",tp:"lesen",q:"TELC C1 — Metni oku:<br><br><i>Die sogenannte 'Aufmerksamkeitsökonomie' beschreibt ein Phänomen der digitalen Gesellschaft: Da menschliche Aufmerksamkeit begrenzt ist, kämpfen Plattformen mit immer raffinierteren Mitteln um sie. Algorithmen optimieren Inhalte so, dass sie maximale Verweildauer erzeugen — oft auf Kosten von Qualität und Wohlbefinden der Nutzer.</i><br><br>'Auf Kosten von' ne anlama gelir?",o:["Sayesinde","...pahasına/zararına","Birlikte","Yerine"],a:1,e:"auf Kosten von = ...pahasına, ...zararına. auf Kosten der Nutzer = kullanıcıların zararına."},
{t:"telc",d:3,lv:"C1",tp:"lesen",q:"TELC C1 — Metni oku:<br><br><i>Angesichts der zunehmenden Komplexität globaler Herausforderungen gewinnt interdisziplinäres Denken an Bedeutung. Es reicht nicht mehr aus, in einem Fachgebiet exzellent zu sein; vielmehr sind Wissenschaftler gefordert, über Disziplingrenzen hinaus zu denken und zu kooperieren.</i><br><br>'Angesichts' ne anlama gelir?",o:["Rağmen","Sayesinde","Göz önünde bulundurarak/karşısında","Yerine"],a:2,e:"angesichts + Genitiv = göz önünde bulundurarak, karşısında. Angesichts der Komplexität = Karmaşıklık karşısında."},

// B1/B2/C1 Grammar Questions - TELC/Goethe format


// --------------------------------------------------------
// B1 - KONJUNKTIV II
// --------------------------------------------------------
{t:"mcq",d:2,lv:"B1",tp:"konjunktiv2",q:"B1 — Nazik rica: ___ Sie mir bitte helfen?",o:["Konnten","Könnten","Können","Konnen"],a:1,e:"<b>Könnten</b> = können Konjunktiv II → en nazik rica formu. Könnten Sie... = yapabilir misiniz?"},
{t:"fill",d:2,lv:"B1",tp:"konjunktiv2",q:"B1 — Boşluk: Wenn ich Zeit ___, würde ich mehr lesen. (haben K.II)",c:"hätte",e:"<b>hätte</b> = haben Konjunktiv II. Wenn + K.II, würde + Infinitiv"},
{t:"mcq",d:2,lv:"B1",tp:"konjunktiv2",q:"B1 — 'Ich ___ gern nach Spanien reisen.' doğru form?",o:["werde","würde","wäre","hätte"],a:1,e:"<b>würde</b> + Infinitiv = K.II. Ich würde gern reisen = seyahat etmek isterdim"},
{t:"fill",d:2,lv:"B1",tp:"konjunktiv2",q:"B1 — Boşluk: An deiner Stelle ___ ich das nicht tun. (tavsiye)",c:"würde",e:"<b>würde</b> = tavsiye K.II. An deiner Stelle würde ich... = Senin yerinde..."},
{t:"mcq",d:3,lv:"B1",tp:"konjunktiv2",q:"TELC B1: 'Wenn er das gewusst ___, hätte er anders gehandelt.'",o:["hat","hätte","hatte","wäre"],a:1,e:"<b>hätte</b> = haben K.II (geçmiş K.II). Wenn er gewusst hätte... = bilseydi"},
{t:"fill",d:3,lv:"B1",tp:"konjunktiv2",q:"B1 — Boşluk: Es ___ schön, wenn du kommen könntest. (sein K.II)",c:"wäre",e:"<b>wäre</b> = sein Konjunktiv II. Es wäre schön = güzel olurdu"},
{t:"mcq",d:3,lv:"B1",tp:"konjunktiv2",q:"B1 — 'Du solltest mehr schlafen.' nasıl çevrilir?",o:["Uyumamalısın","Daha fazla uyumalısın","Çok uyudun","Uyumak zorunda değilsin"],a:1,e:"<b>sollte</b> = sollen K.II → tavsiye. Daha fazla uyumalısın."},

// --------------------------------------------------------
// B1 - PASSIV
// --------------------------------------------------------
{t:"mcq",d:2,lv:"B1",tp:"passiv",q:"B1 — Passiv Präsens: 'Das Auto ___ repariert.'",o:["hat","ist","wird","wurde"],a:2,e:"<b>wird</b> + PP = Passiv Präsens. Das Auto WIRD repariert = Araba tamir edilmektedir."},
{t:"fill",d:2,lv:"B1",tp:"passiv",q:"B1 — Boşluk: Der Brief ___ gestern geschrieben. (Passiv Prateritum)",c:"wurde",e:"<b>wurde</b> + PP = Passiv Prateritum. Der Brief WURDE geschrieben = Mektup yazıldı."},
{t:"mcq",d:2,lv:"B1",tp:"passiv",q:"B1 — 'Das Haus wurde von wem gebaut?' sorusunun cevabı:",o:["von dem Architekten","durch dem Architekten","mit dem Architekten","bei dem Architekten"],a:0,e:"<b>von + Dativ</b> = kim tarafından. von dem Architekten = mimar tarafından"},
{t:"fill",d:3,lv:"B1",tp:"passiv",q:"B1 — TELC: 'Hier ___ nicht geraucht.' (darf - Modal+Passiv)",c:"darf",e:"<b>darf nicht geraucht werden</b> → kısa form: darf nicht geraucht. Sigara içilmez."},
{t:"mcq",d:3,lv:"B1",tp:"passiv",q:"B1 — Zustandspassiv: 'Die Tür ___ geschlossen.' (sonuç)",o:["wird","wurde","ist","sei"],a:2,e:"<b>ist</b> + PP = Zustandspassiv (sonuç hali). Die Tür IST geschlossen = Kapı kapalı."},
{t:"telc",d:3,lv:"B1",tp:"passiv",q:"TELC B1: Metni oku.<br><br><i>In Deutschland wird sehr viel Wert auf Mülltrennung gelegt. Plastikmüll, Papier, Glas und Restmüll werden getrennt gesammelt. Dadurch können wertvolle Rohstoffe wiederverwendet werden.</i><br><br>Neden çöpler ayrılıyor?",o:["Temizlik için","Değerli hammadde geri kullanılabilsin","Yasal zorunluluk","Estetik görüntü için"],a:1,e:"'damit wertvolle Rohstoffe wiederverwendet werden können' = değerli hammaddeler geri kullanılabilsin"},

// --------------------------------------------------------
// B1 - RELAT-VS-TZE
// --------------------------------------------------------
{t:"mcq",d:2,lv:"B1",tp:"relativsatz",q:"B1 — 'Der Mann, ___ dort steht, ist mein Chef.' (eril Nom)",o:["den","dem","der","dessen"],a:2,e:"<b>der</b> = eril Nominativ Relativpronomen. Der Mann steht → özne → Nom → der"},
{t:"fill",d:2,lv:"B1",tp:"relativsatz",q:"B1 — 'Das Buch, ___ ich lese, ist interessant.' (nötr Akk)",c:"das",e:"<b>das</b> = nötr Akkusativ. Das Buch lese ich → nesne → Akk → das"},
{t:"mcq",d:2,lv:"B1",tp:"relativsatz",q:"B1 — 'Die Frau, ___ ich geholfen habe, ist Ärztin.' (Dativ)",o:["die","der","den","deren"],a:1,e:"<b>der</b> = dişil Dativ. helfen + Dativ: ich helfe wem? = der Frau → der"},
{t:"fill",d:3,lv:"B1",tp:"relativsatz",q:"B1 — 'Der Mann, ___ Auto kaputt ist, wartet.' (Genitiv)",c:"dessen",e:"<b>dessen</b> = eril/nötr Genitiv. Kimin arabası? → Genitiv → dessen"},
{t:"mcq",d:3,lv:"B1",tp:"relativsatz",q:"TELC B1: 'Alles, ___ er sagt, ist interessant.' doğru form?",o:["das","was","der","dem"],a:1,e:"<b>was</b> = alles/nichts/etwas/belirsiz referans için. Alles WAS er sagt..."},

// --------------------------------------------------------
// B1 - -NF-N-T-VKONSTRUKT-ONEN
// --------------------------------------------------------
{t:"mcq",d:2,lv:"B1",tp:"infinitiv",q:"B1 — 'Ich lerne Deutsch, ___ in Deutschland zu arbeiten.'",o:["damit","um","ohne","anstatt"],a:1,e:"<b>um...zu</b> = amaç. Almanya'da çalışmak IÇIN Almanca öğreniyorum."},
{t:"fill",d:2,lv:"B1",tp:"infinitiv",q:"B1 — 'Er ging, ohne etwas ___ sagen.' (zu + Infinitiv)",c:"zu",e:"<b>ohne...zu</b>: ohne etwas ZU sagen = bir şey söylemeden"},
{t:"mcq",d:2,lv:"B1",tp:"infinitiv",q:"B1 — Trennbar + zu: 'Ich versuche früh ___stehen.' ",o:["aufzustehen","zu aufstehen","aufstehenzü","zustehen auf"],a:0,e:"<b>aufzustehen</b> = auf + zu + stehen. Trennbar'da zu ön ek ile gövde arasına girer!"},
{t:"fill",d:3,lv:"B1",tp:"infinitiv",q:"B1 — 'Anstatt ___ lernen, spielt er.' (zu)",c:"zu",e:"<b>anstatt...zu</b>: anstatt ZU lernen = çalışmak yerine"},

// --------------------------------------------------------
// B1 - ZEITANGABEN / TEMPORALS-TZE
// --------------------------------------------------------
{t:"mcq",d:2,lv:"B1",tp:"zeitangaben",q:"B1 — '___ ich jung war, spielte ich Fußball.' (tek geçmiş)",o:["Wenn","Als","Während","Seitdem"],a:1,e:"<b>als</b> = tek seferlik geçmiş olay. wenn = tekrarlayan/gelecek"},
{t:"fill",d:2,lv:"B1",tp:"zeitangaben",q:"B1 — '___ er schläft, lerne ich.' (eş zamanlı - während)",c:"Während",e:"<b>Während</b> = ...iken. Fiil sona gider: Während er SCHLÄFT."},
{t:"mcq",d:3,lv:"B1",tp:"zeitangaben",q:"B1 — 'Nachdem er gegessen ___, ging er spazieren.' doğru form?",o:["hat","hatte","ist","war"],a:1,e:"<b>hatte gegessen</b> = Plusquamperfekt. nachdem ile önce olan olay PKP alır."},
{t:"fill",d:3,lv:"B1",tp:"zeitangaben",q:"B1 — '___ er in Berlin wohnt, ist er viel glücklicher.' (beri)",c:"Seitdem",e:"<b>Seitdem</b> = ...den beri. Yan cümle kurar, fiil sona."},
{t:"telc",d:3,lv:"B1",tp:"zeitangaben",q:"TELC B1: Goethe Lese-Text:<br><br><i>Bevor ich morgens das Haus verlasse, trinke ich immer einen Kaffee. Seitdem ich mit dem Fahrrad zur Arbeit fahre, fühle ich mich viel fitter. Nachdem ich die Arbeit beendet habe, gehe ich oft ins Fitnessstudio.</i><br><br>Kişi işten sonra ne yapıyor?",o:["Kahve içiyor","Bisiklete biniyor","Fitness'e gidiyor","Eve dönüyor"],a:2,e:"'Nachdem ich die Arbeit beendet habe, gehe ich ins Fitnessstudio' = İşi bitirdikten sonra fitness'e gidiyor."},

// --------------------------------------------------------
// B1 - WORTBILDUNG
// --------------------------------------------------------
{t:"mcq",d:2,lv:"B1",tp:"wortbildung",q:"B1 — 'die Lösung' hangi fiilden türetildi?",o:["lösen","löschen","legen","laufen"],a:0,e:"<b>lösen</b> → die Lösung (-ung eki dişil isim). lösen = çözmek"},
{t:"fill",d:2,lv:"B1",tp:"wortbildung",q:"B1 — der Regen + der Schirm = der ___ (bileşik kelime)",c:"Regenschirm",e:"<b>Regenschirm</b> = şemsiye. Bileşikte son kelimenin artikeli geçer: der Schirm → der"},
{t:"mcq",d:2,lv:"B1",tp:"wortbildung",q:"B1 — 'arbeitslos' nasıl türetildi?",o:["Arbeit + -los","arbeit + -los","Arbeit + -lich","Arbeit + -ig"],a:0,e:"<b>Arbeit + -los</b> = işsiz. -los eki 'yoksun/sız' demek. hoffnungslos = umutsuz"},
{t:"fill",d:3,lv:"B1",tp:"wortbildung",q:"B1 — möglich + -keit = die ___ (olasılık)",c:"Möglichkeit",e:"<b>Möglichkeit</b> = olasılık/imkân. -keit eki sıfattan dişil isim türetir."},

// --------------------------------------------------------
// B1 - REDEMITTEL / G-R-- B-LD-RME
// --------------------------------------------------------
{t:"mcq",d:1,lv:"B1",tp:"redemittel",q:"B1 — 'Meiner Meinung nach...' nasıl kullanılır?",o:["Karşı görüş bildirmek için","Kendi görüşünü sunmak için","Sonuç çıkarmak için","Örnek vermek için"],a:1,e:"<b>Meiner Meinung nach</b> = bence/benim görüşüme göre. Kendi görüşü."},
{t:"fill",d:2,lv:"B1",tp:"redemittel",q:"B1 — 'Auf der ___ Seite... auf der anderen Seite...' (bir yandan)",c:"einen",e:"<b>Auf der einen Seite... auf der anderen Seite</b> = bir yandan... öte yandan"},
{t:"mcq",d:2,lv:"B1",tp:"redemittel",q:"B1 — 'Das sehe ich anders.' ne demek?",o:["Aynı fikirde değilim","Daha iyi görüyorum","Görmüyorum","Anlıyorum"],a:0,e:"<b>Das sehe ich anders</b> = Bunu farklı görüyorum = katılmıyorum (kibarca)"},
{t:"telc",d:3,lv:"B1",tp:"redemittel",q:"TELC B1 Schreiben: Hangi cümle bir görüşü en iyi ifade eder?",o:["Das ist so.","Ich bin davon überzeugt, dass digitale Medien die Bildung verbessern.","Vielleicht ja.","Ich weiß nicht."],a:1,e:"<b>Ich bin davon überzeugt, dass...</b> = ...konusunda ikna olmuş durumdayım. Güçlü görüş ifadesi."},

// --------------------------------------------------------
// B2 - ERWEITERTES PASSIV
// --------------------------------------------------------
{t:"mcq",d:2,lv:"B2",tp:"erweiterte_passiv",q:"B2 — 'Das ___ nicht geändert werden.' (können - Modal+Passiv)",o:["kann","könnte","darf","muss"],a:0,e:"<b>kann nicht geändert werden</b> = değiştirilemez. Modal + PP + werden"},
{t:"fill",d:2,lv:"B2",tp:"erweiterte_passiv",q:"B2 — 'Das Formular ___ ausgefüllt.' (Zustandspassiv - tamamlanmış)",c:"ist",e:"<b>ist</b> + PP = Zustandspassiv. Das Formular IST ausgefüllt = Form doldurulmuş (hazır)."},
{t:"mcq",d:3,lv:"B2",tp:"erweiterte_passiv",q:"B2 — 'Das lässt sich leicht lösen.' Türkçesi?",o:["Bu kolayca çözüyor","Bu kolayca çözülebilir","Bu kendisi çözüyor","Bu zor çözülür"],a:1,e:"<b>sich lassen + Infinitiv</b> = ...abilmek (pasif anlam). lässt sich lösen = çözülebilir"},
{t:"fill",d:3,lv:"B2",tp:"erweiterte_passiv",q:"B2 — 'Das ___ zu beachten.' (sein + zu + Infinitiv - dikkat edilmeli)",c:"ist",e:"<b>ist zu + Infinitiv</b> = edilgen zorunluluk. Das IST zu beachten = Bu dikkate alınmalıdır."},
{t:"telc",d:3,lv:"B2",tp:"erweiterte_passiv",q:"TELC B2: Oku.<br><br><i>Im Betrieb wird täglich eine Sitzung abgehalten. Alle Entscheidungen werden protokolliert. Die Protokolle können von allen Mitarbeitern eingesehen werden.</i><br><br>Kim tutanakları görebilir?",o:["Sadece müdür","Sadece sekreter","Tüm çalışanlar","Sadece yönetim"],a:2,e:"'von allen Mitarbeitern eingesehen werden' = tüm çalışanlar tarafından görülebilir. Mitarbeiter = çalışan"},

// --------------------------------------------------------
// B2 - KOMPLEXE PR-POSITIONEN
// --------------------------------------------------------
{t:"mcq",d:2,lv:"B2",tp:"praepositionen_b2",q:"B2 — '___ des schlechten Wetters blieben wir zu Hause.' (rağmen)",o:["Wegen","Trotz","Während","Aufgrund"],a:1,e:"<b>trotz + Genitiv</b> = ...rağmen. Trotz des Wetters = hava durumuna rağmen"},
{t:"fill",d:2,lv:"B2",tp:"praepositionen_b2",q:"B2 — '___ einer Woche wird das Ergebnis bekannt.' (içinde - innerhalb)",c:"Innerhalb",e:"<b>innerhalb + Genitiv</b> = içinde. Innerhalb einer Woche = bir hafta içinde"},
{t:"mcq",d:2,lv:"B2",tp:"praepositionen_b2",q:"B2 — 'aufgrund' hangi hali yönetir?",o:["Dativ","Akkusativ","Genitiv","Nominativ"],a:2,e:"<b>aufgrund + Genitiv</b>. aufgrund des Problems, aufgrund der Situation"},
{t:"fill",d:3,lv:"B2",tp:"praepositionen_b2",q:"B2 — '___ seiner Erfahrung bekam er den Job.' (sayesinde - aufgrund)",c:"Aufgrund",e:"<b>Aufgrund seiner Erfahrung</b> = deneyimi sayesinde. aufgrund + Genitiv"},
{t:"telc",d:3,lv:"B2",tp:"praepositionen_b2",q:"TELC B2: Doğru edat seç: 'Die Veranstaltung findet ___ des Regens drinnen statt.'",o:["aufgrund","wegen","trotz","während"],a:2,e:"<b>trotz des Regens</b> = yağmura rağmen. wegen = nedeniyle, trotz = rağmen"},

// --------------------------------------------------------
// B2 - MODAL PARTIKELN
// --------------------------------------------------------
{t:"mcq",d:2,lv:"B2",tp:"modalpartikeln",q:"B2 — 'Das weißt du ___!' cümlesinde hangi partiküle uyar? (zaten biliyorsun)",o:["mal","eigentlich","doch","wohl"],a:2,e:"<b>doch</b> = zaten/ya. Das weißt du DOCH! = Bunu zaten biliyorsun ya!"},
{t:"fill",d:2,lv:"B2",tp:"modalpartikeln",q:"B2 — 'Kannst du ___ kommen?' (bir - yumuşatma talebi)",c:"mal",e:"<b>mal</b> = yumuşatma. Kannst du MAL kommen? = Bir gelebilir misin? (daha nazik)"},
{t:"mcq",d:2,lv:"B2",tp:"modalpartikeln",q:"B2 — 'Er ist ___ krank.' (galiba/muhtemelen)",o:["doch","eigentlich","mal","wohl"],a:3,e:"<b>wohl</b> = galiba, muhtemelen. Er ist WOHL krank = Galiba hasta."},
{t:"fill",d:3,lv:"B2",tp:"modalpartikeln",q:"B2 — 'Das ist ___ so!' (işte böyle - ne yapalım)",c:"eben",e:"<b>eben</b> = işte, ne yapalım. Das ist EBEN so! = İşte böyle (değiştirilemez)."},

// --------------------------------------------------------
// B2 - NOM-NALST-L
// --------------------------------------------------------
{t:"mcq",d:2,lv:"B2",tp:"nominalstil",q:"B2 — 'Die Preise steigen.' → Nominalstil:",o:["Eine Preissteigerung.","Ein Anstieg der Preise.","Die Preise sind gestiegen.","Steigende Preise existieren."],a:1,e:"<b>Ein Anstieg der Preise</b> = Nominalstil. steigen → Anstieg (isimleştirme)"},
{t:"fill",d:2,lv:"B2",tp:"nominalstil",q:"B2 — 'zur ___ stellen' = sunmak/sağlamak (Verfügung)",c:"Verfügung",e:"<b>zur Verfügung stellen</b> = sunmak/sağlamak. Önemli B2 Nominalstil ifadesi!"},
{t:"mcq",d:3,lv:"B2",tp:"nominalstil",q:"B2 — 'in Betracht ziehen' ne demek?",o:["Dikkate almak","Görmezden gelmek","Karar vermek","Kabul etmek"],a:0,e:"<b>in Betracht ziehen</b> = dikkate almak, göz önünde bulundurmak"},
{t:"fill",d:3,lv:"B2",tp:"nominalstil",q:"B2 — 'Weil er krank ist' → Nominalstil: ___ seiner Krankheit",c:"aufgrund",e:"<b>aufgrund seiner Krankheit</b> = hastalandığı için. weil (yan cümle) → aufgrund + Gen."},
{t:"telc",d:3,lv:"B2",tp:"nominalstil",q:"TELC B2: Resmi metni oku.<br><br><i>Zur Umsetzung des Projekts sind erhebliche finanzielle Mittel erforderlich. Im Rahmen der Planung wurde eine Kostenschätzung vorgenommen.</i><br><br>Metin ne hakkında?",o:["Proje tamamlandı","Proje için para gerekli ve maliyet tahmini yapıldı","Proje iptal edildi","Maliyet çok yüksek"],a:1,e:"'finanzielle Mittel erforderlich' = finansal kaynak gerekli. 'Kostenschätzung vorgenommen' = maliyet tahmini yapıldı."},

// --------------------------------------------------------
// C1 - KONJUNKTIV I (DER-N)
// --------------------------------------------------------
{t:"mcq",d:3,lv:"C1",tp:"konjunktiv1",q:"C1 — 'er kommen' Konjunktiv I formu?",o:["er kommt","er käme","er komme","er kämt"],a:2,e:"<b>er komme</b> = kommen K.I. Infinitiv kök (komm) + e = komme"},
{t:"fill",d:3,lv:"C1",tp:"konjunktiv1",q:"C1 — 'Der Minister sagte, er ___ nicht schuldig.' (sein K.I)",c:"sei",e:"<b>sei</b> = sein Konjunktiv I 3. tekil. Haber dili indirekt rede."},
{t:"mcq",d:3,lv:"C1",tp:"konjunktiv1",q:"C1 — K.I ile K.II'nin farkı nedir?",o:["K.I kibarlık, K.II dolaylı anlatım","K.I dolaylı anlatım, K.II gerçekdışı/kibarlık","Fark yok","K.I geçmiş, K.II gelecek"],a:1,e:"K.I = dolaylı anlatım (indirekte Rede). K.II = gerçekdışı koşul ve kibarlık."},
{t:"telc",d:3,lv:"C1",tp:"konjunktiv1",q:"TELC C1: Gazete haberini oku.<br><br><i>Der Politiker betonte, er sei für eine faire Lösung. Die Verhandlungen seien konstruktiv gewesen. Man werde bis Ende des Monats eine Einigung erzielen.</i><br><br>Bu metinde hangi kip kullanılmış?",o:["Konjunktiv II","Imperativ","Konjunktiv I","Indikativ"],a:2,e:"sei, seien gewesen, werde = Konjunktiv I. Haber dili dolaylı anlatım için."},

// --------------------------------------------------------
// C1 - ST-L-ST-K & PART-Z-P-ALKONSTRUKT-ON
// --------------------------------------------------------
{t:"mcq",d:3,lv:"C1",tp:"stilistik",q:"C1 — 'Weil er krank ist' → Partizipialkonstruktion:",o:["Krank ist er","Krank seiend","Erkrankt, blieb er zu Hause.","Als er krank"],a:2,e:"<b>Partizip II</b> bağlaç olarak: Erkrankt (hasta olmuş) blieb er zu Hause. Partizip başa gelir."},
{t:"fill",d:3,lv:"C1",tp:"stilistik",q:"C1 — 'Die ___ Frau heißt Maria.' (singen Partizip I = şarkı söyleyen)",c:"singende",e:"<b>singende</b> = singen + d + e (sıfat eki). die singende Frau = şarkı söyleyen kadın"},
{t:"mcq",d:3,lv:"C1",tp:"stilistik",q:"C1 — 'Angekommen in Berlin, suchte er sofort ein Hotel.' çevirisi:",o:["Berlin'e gelince hemen otel aradı","Berlin'e gelirken otel aradı","Berlin'e gideceği için otel aradı","Berlin'de otel aradığı için geldi"],a:0,e:"<b>Partizip II</b> başta: Angekommen (gelmiş/varınca) → Berlin'e varınca hemen otel aradı."},
{t:"telc",d:3,lv:"C1",tp:"stilistik",q:"C1 — Hangi cümle en resmi üslupta yazılmış?",o:["Das find ich voll interessant!","Ich glaube, das ist interessant.","Es erscheint mir bemerkenswert, dass...","Das ist interessant."],a:2,e:"<b>Es erscheint mir bemerkenswert</b> = yüksek üslup (gehobene Sprache). Akademik/resmi metinler için."},

// --------------------------------------------------------
// C1 - ARGUMENTIEREN
// --------------------------------------------------------
{t:"mcq",d:3,lv:"C1",tp:"argumentieren",q:"C1 — 'Zwar mag es stimmen, dass..., jedoch...' yapısı:",o:["Sonuç bildirme","Karşı görüşü kabul edip çürütme","Örnek verme","Tanım yapma"],a:1,e:"<b>Zwar...jedoch</b> = konsesyon yapısı. Kısmen kabul et, ardından çürüt."},
{t:"fill",d:3,lv:"C1",tp:"argumentieren",q:"C1 — '___ lässt sich feststellen, dass das Problem komplex ist.' (Özetle)",c:"Zusammenfassend",e:"<b>Zusammenfassend lässt sich feststellen</b> = Özetle tespit etmek mümkündür."},
{t:"mcq",d:3,lv:"C1",tp:"argumentieren",q:"C1 — 'Anhand von Beispielen' ne demek?",o:["Örneklere rağmen","Örnekler sayesinde/aracılığıyla","Örnekler yerine","Örneklerden uzakta"],a:1,e:"<b>anhand von</b> = aracılığıyla, yardımıyla. Anhand von Beispielen wird deutlich..."},
{t:"telc",d:3,lv:"C1",tp:"argumentieren",q:"TELC C1: Essay başlangıcı için en uygun cümle?",o:["Ich finde das Thema gut.","Das Thema Klimawandel ist heutzutage sehr aktuell und wird kontrovers diskutiert.","Klimawandel ist wichtig.","Alle müssen das Klima schützen."],a:1,e:"<b>Das Thema X ist heutzutage sehr aktuell und wird kontrovers diskutiert</b> = C1 essay girişi için ideal. Akademik ton, konu sunumu."},

// --------------------------------------------------------
// C1 - W-SSENSCHAFTL-CHE TEXTE
// --------------------------------------------------------
{t:"mcq",d:3,lv:"C1",tp:"wissenschaft",q:"C1 — 'Es lässt sich feststellen' hangi dile ait?",o:["Günlük konuşma","Çocuk dili","Bilim/akademik dil","Eski Almanca"],a:2,e:"<b>lässt sich feststellen</b> = Wissenschaftssprache. Akademik metinlerde man kann/ist festzustellen yerine."},
{t:"fill",d:3,lv:"C1",tp:"wissenschaft",q:"C1 — 'Die Ergebnisse ___ nahe, dass...' (legen - işaret ediyor)",c:"legen",e:"<b>nahelegen</b> = işaret etmek. Die Ergebnisse LEGEN nahe, dass... = Sonuçlar gösteriyor."},
{t:"mcq",d:3,lv:"C1",tp:"wissenschaft",q:"C1 — Hedging (Kesinleştirmeden kaçınma) neden kullanılır?",o:["Bilgisizliği gizlemek","Bilimsel dürüstlük - iddianın sınırlarını göstermek","Metni uzatmak","Pasif yapmak"],a:1,e:"Hedging = bilimsel dürüstlük. Es scheint, möglicherweise, tendenziell = iddianın sınırını gösterir."},
{t:"telc",d:3,lv:"C1",tp:"wissenschaft",q:"TELC C1: Akademik metni oku.<br><br><i>Die vorliegende Studie untersucht den Zusammenhang zwischen Schlafmangel und kognitiver Leistungsfähigkeit. Anhand einer Stichprobe von 200 Probanden wird aufgezeigt, dass unzureichender Schlaf die Konzentrationsfähigkeit signifikant beeinträchtigt.</i><br><br>Çalışma ne araştırıyor?",o:["Uyku ve mutluluk","Uyku eksikliği ve bilişsel performans","200 gönüllünün genel sağlığı","Konsantrasyon egzersizleri"],a:1,e:"'Zusammenhang zwischen Schlafmangel und kognitiver Leistungsfähigkeit' = uyku eksikliği ve bilişsel performans ilişkisi."},

// --------------------------------------------------------
// C1 - -D-OME
// --------------------------------------------------------
{t:"mcq",d:3,lv:"C1",tp:"idiome",q:"C1 — 'Den Nagel auf den Kopf treffen' ne demek?",o:["Çiviyi çakmak","Tam isabet etmek","Kafaya vurmak","Yanlış anlamak"],a:1,e:"<b>Den Nagel auf den Kopf treffen</b> = tam isabet etmek, doğru söylemek"},
{t:"fill",d:3,lv:"C1",tp:"idiome",q:"C1 — 'Ich habe die ___ voll davon!' (bıktım - Nase)",c:"Nase",e:"<b>die Nase voll haben</b> = bıkmak. Ich habe die Nase VOLL = Artık bıktım!"},
{t:"mcq",d:3,lv:"C1",tp:"idiome",q:"C1 — 'ins Fettnäpfchen treten' ne demek?",o:["Temizlik yapmak","Pot kırmak/ayağını denk almamak","Başarılı olmak","Hata düzeltmek"],a:1,e:"<b>ins Fettnäpfchen treten</b> = pot kırmak, yanlışlıkla rahatsız etmek"},
{t:"telc",d:3,lv:"C1",tp:"idiome",q:"C1 — 'Da liegt der Hund begraben.' ne anlama gelir?",o:["Köpek öldü","İşte sorun/problem orada","Gizli bir şey var","Beklenmedik bir şey oldu"],a:1,e:"<b>Da liegt der Hund begraben</b> = işte asıl sorun/mesele orada. Sıklıkla kullanılan deyim."},

// --------------------------------------------------------
// C1 - D-SKURSMARKER
// --------------------------------------------------------
{t:"mcq",d:3,lv:"C1",tp:"diskursmarker",q:"C1 — 'darüber hinaus' hangi işlevi görür?",o:["Karşıtlık","Sebep","Ekleme/ilave","Kısıtlama"],a:2,e:"<b>darüber hinaus</b> = bunun ötesinde, üstelik. Ekleme (Additivität) işlevi."},
{t:"fill",d:3,lv:"C1",tp:"diskursmarker",q:"C1 — 'Das Projekt war erfolgreich. ___ gab es einige Probleme.' (allerdings)",c:"Allerdings",e:"<b>Allerdings</b> = bununla birlikte, ama. Kısıtlama işaretçisi."},
{t:"mcq",d:3,lv:"C1",tp:"diskursmarker",q:"C1 — 'mit anderen Worten' ne demek?",o:["Başka kelimelerle/deyişle","Başka bir dilden","Sözsüz","Daha az kelimeyle"],a:0,e:"<b>mit anderen Worten</b> = başka bir deyişle, yani. Açıklama işaretçisi."},
{t:"telc",d:3,lv:"C1",tp:"diskursmarker",q:"TELC C1: Hangi işaretçi zıtlık bildirir?",o:["darüber hinaus","ferner","wohingegen","des Weiteren"],a:2,e:"<b>wohingegen</b> = oysa ki, buna karşın. Karşıtlık işaretçisi. Diğerleri ekleme."}
];

var AQ = [
// === EV & GUNLUK HAYAT ===
{word:"das Haus",tr:"ev",art:"das",ex:"Das Haus ist groß und schön.\nEv büyük ve güzel."},
{word:"die Wohnung",tr:"daire",art:"die",ex:"Die Wohnung kostet 800 Euro.\nDaire 800 Euro tutuyor."},
{word:"das Zimmer",tr:"oda",art:"das",ex:"Das Zimmer ist hell.\nOda aydınlık."},
{word:"die Küche",tr:"mutfak",art:"die",ex:"In der Küche koche ich gern.\nMutfakta yemek pişirmeyi severim."},
{word:"der Tisch",tr:"masa",art:"der",ex:"Das Essen steht auf dem Tisch.\nYemek masanın üstünde."},
{word:"der Stuhl",tr:"sandalye",art:"der",ex:"Der Stuhl ist bequem.\nSandalye rahat."},
{word:"das Sofa",tr:"kanepe",art:"das",ex:"Wir sitzen auf dem Sofa.\nKanepede oturuyoruz."},
{word:"das Bett",tr:"yatak",art:"das",ex:"Das Bett ist sehr weich.\nYatak çok yumuşak."},
{word:"der Schrank",tr:"dolap",art:"der",ex:"Der Schrank ist voll.\nDolap dolu."},
{word:"die Lampe",tr:"lamba",art:"die",ex:"Die Lampe ist kaputt.\nLamba bozuk."},
// === KISILER ===
{word:"der Mann",tr:"adam, erkek",art:"der",ex:"Der Mann ist freundlich.\nAdam güler yüzlü."},
{word:"die Frau",tr:"kadın",art:"die",ex:"Die Frau arbeitet als Ärztin.\nKadın doktor olarak çalışıyor."},
{word:"das Kind",tr:"çocuk",art:"das",ex:"Das Kind spielt im Garten.\nÇocuk bahçede oynuyor."},
{word:"der Junge",tr:"erkek çocuk",art:"der",ex:"Der Junge ist acht Jahre alt.\nErkek çocuk sekiz yaşında."},
{word:"das Mädchen",tr:"kız çocuğu",art:"das",ex:"Das Mädchen singt schön.\nKız çocuğu güzel şarkı söylüyor."},
{word:"der Freund",tr:"erkek arkadaş",art:"der",ex:"Mein Freund heißt Max.\nArkadaşımın adı Max."},
{word:"die Freundin",tr:"kız arkadaş",art:"die",ex:"Meine Freundin kommt morgen.\nKız arkadaşım yarın geliyor."},
// === MESLEK ===
{word:"der Arzt",tr:"doktor (erkek)",art:"der",ex:"Der Arzt untersucht den Patienten.\nDoktor hastayı muayene ediyor."},
{word:"die Ärztin",tr:"doktor (kadın)",art:"die",ex:"Die Ärztin ist sehr kompetent.\nDoktor çok yetkin."},
{word:"der Lehrer",tr:"öğretmen (erkek)",art:"der",ex:"Der Lehrer erklärt die Grammatik.\nÖğretmen grameri açıklıyor."},
{word:"die Lehrerin",tr:"öğretmen (kadın)",art:"die",ex:"Die Lehrerin ist geduldig.\nÖğretmen sabırlı."},
{word:"der Polizist",tr:"polis (erkek)",art:"der",ex:"Der Polizist hilft.\nPolis yardım ediyor."},
{word:"der Koch",tr:"aşçı",art:"der",ex:"Der Koch kocht sehr gut.\nAşçı çok iyi pişiriyor."},
{word:"die Krankenschwester",tr:"hemşire",art:"die",ex:"Die Krankenschwester ist nett.\nHemşire nazik."},
// === YIYECEK ===
{word:"das Brot",tr:"ekmek",art:"das",ex:"Das Brot ist frisch.\nEkmek taze."},
{word:"die Milch",tr:"süt",art:"die",ex:"Die Milch ist kalt.\nSüt soğuk."},
{word:"der Kaffee",tr:"kahve",art:"der",ex:"Der Kaffee ist heiß.\nKahve sıcak."},
{word:"der Tee",tr:"çay",art:"der",ex:"Der Tee schmeckt gut.\nÇay güzel.",},
{word:"das Wasser",tr:"su",art:"das",ex:"Das Wasser ist kalt.\nSu soğuk."},
{word:"der Apfel",tr:"elma",art:"der",ex:"Der Apfel ist rot und süß.\nElma kırmızı ve tatlı."},
{word:"die Kartoffel",tr:"patates",art:"die",ex:"Die Kartoffel ist ein Gemüse.\nPatates bir sebzedir."},
{word:"der Fisch",tr:"balık",art:"der",ex:"Der Fisch ist frisch.\nBalık taze."},
{word:"das Ei",tr:"yumurta",art:"das",ex:"Das Ei ist hart gekocht.\nYumurta sert pişirilmiş."},
{word:"der Kuchen",tr:"kek, pasta",art:"der",ex:"Der Kuchen schmeckt lecker.\nPasta lezzetli."},
{word:"die Suppe",tr:"çorba",art:"die",ex:"Die Suppe ist warm.\nÇorba ılık."},
{word:"der Salat",tr:"salata",art:"der",ex:"Der Salat ist frisch.\nSalata taze."},
// === ULASIM ===
{word:"das Auto",tr:"araba",art:"das",ex:"Das Auto ist neu.\nAraba yeni."},
{word:"der Bus",tr:"otobüs",art:"der",ex:"Der Bus kommt gleich.\nOtobüs geliyor."},
{word:"der Zug",tr:"tren",art:"der",ex:"Der Zug fährt nach Köln.\nTren Köln'e gidiyor."},
{word:"das Fahrrad",tr:"bisiklet",art:"das",ex:"Das Fahrrad ist kaputt.\nBisiklet bozuk."},
{word:"das Flugzeug",tr:"uçak",art:"das",ex:"Das Flugzeug ist pünktlich.\nUçak zamanında."},
{word:"der Bahnhof",tr:"tren istasyonu",art:"der",ex:"Der Bahnhof ist im Zentrum.\nTren istasyonu merkezde."},
// === SEHIR & YERLER ===
{word:"die Schule",tr:"okul",art:"die",ex:"Die Schule beginnt um acht.\nOkul sekizde başlar."},
{word:"das Krankenhaus",tr:"hastane",art:"das",ex:"Das Krankenhaus ist groß.\nHastane büyük."},
{word:"das Hotel",tr:"otel",art:"das",ex:"Das Hotel ist teuer.\nOtel pahalı."},
{word:"das Restaurant",tr:"restoran",art:"das",ex:"Das Restaurant ist voll.\nRestoran dolu."},
{word:"der Supermarkt",tr:"süpermarket",art:"der",ex:"Der Supermarkt ist offen.\nSüpermarket açık."},
{word:"die Apotheke",tr:"eczane",art:"die",ex:"Die Apotheke ist um die Ecke.\nEczane köşede."},
{word:"das Kino",tr:"sinema",art:"das",ex:"Das Kino zeigt einen guten Film.\nSinema iyi bir film gösteriyor."},
{word:"die Bank",tr:"banka",art:"die",ex:"Die Bank ist geschlossen.\nBanka kapalı."},
{word:"der Park",tr:"park",art:"der",ex:"Im Park gibt es viele Bäume.\nParkta çok ağaç var."},
// === DOGA ===
{word:"der Baum",tr:"ağaç",art:"der",ex:"Der Baum ist sehr groß.\nAğaç çok büyük."},
{word:"die Blume",tr:"çiçek",art:"die",ex:"Die Blume ist schön.\nÇiçek güzel."},
{word:"der Hund",tr:"köpek",art:"der",ex:"Der Hund ist brav.\nKöpek uslu."},
{word:"die Katze",tr:"kedi",art:"die",ex:"Die Katze schläft.\nKedi uyuyor."},
{word:"der Vogel",tr:"kuş",art:"der",ex:"Der Vogel singt schön.\nKuş güzel şarkı söylüyor."},
// === SOYUT / D--ER ===
{word:"die Sprache",tr:"dil",art:"die",ex:"Deutsch ist eine schwere Sprache.\nAlmanca zor bir dil."},
{word:"die Arbeit",tr:"iş, çalışma",art:"die",ex:"Die Arbeit macht Spaß.\nİş eğlenceli."},
{word:"die Zeit",tr:"zaman, vakit",art:"die",ex:"Ich habe keine Zeit.\nVaktim yok."},
{word:"das Geld",tr:"para",art:"das",ex:"Ich habe kein Geld.\nParaM yok."},
{word:"die Idee",tr:"fikir",art:"die",ex:"Das ist eine gute Idee!\nBu iyi bir fikir!"},
{word:"das Problem",tr:"problem, sorun",art:"das",ex:"Das ist kein Problem.\nBu sorun değil."},
{word:"die Frage",tr:"soru",art:"die",ex:"Ich habe eine Frage.\nBir sorum var."},
{word:"die Antwort",tr:"cevap",art:"die",ex:"Ich weiß die Antwort.\nCevabı biliyorum."},
{word:"der Weg",tr:"yol, yön",art:"der",ex:"Der Weg ist lang.\nYol uzun."},
{word:"die Nummer",tr:"numara",art:"die",ex:"Wie ist Ihre Telefonnummer?\nTelefon numaranız nedir?"}
];

var SQ = [
  {mode:"click",w:["Ich","heisse","Thomas","."],c:"Ich heisse Thomas.",tr:"Adim Thomas.",lv:"A1"},
  {mode:"click",w:["Woher","kommst","du","?"],c:"Woher kommst du?",tr:"Sen nereden geliyorsun?",lv:"A1"},
  {mode:"click",w:["Ich","bin","nicht","müde","."],c:"Ich bin nicht müde.",tr:"Ben yorgun degilim.",h:"nicht genellikle sona yakin gelir",lv:"A1"},
  {mode:"click",w:["Das","Haus","ist","gros","."],c:"Das Haus ist gros.",tr:"Ev buyuk.",h:"V2: fiil 2. konumda",lv:"A1"},
  {mode:"click",w:["Er","kommt","aus","Berlin","."],c:"Er kommt aus Berlin.",tr:"O Berlinden geliyor.",lv:"A1"},
  {mode:"type",c:"Ich bin 22 Jahre alt.",tr:"22 yasindayim.",h:"Ipucu: sein + yas + Jahre alt",lv:"A1"},
  {mode:"type",c:"Die Katze ist schwarz und klein.",tr:"Kedi siyah ve kucuk.",h:"Ipucu: die Katze + ist + renk + und + boyut",lv:"A1"},
  {mode:"type",c:"Ich gehe heute in die Schule.",tr:"Bugun okula gidiyorum.",h:"Ipucu: Ich + gehe + bugun + okula",lv:"A1"},
  {mode:"type",c:"Er spielt jeden Tag Fussball.",tr:"Her gun futbol oynuyor.",h:"Ipucu: Er + spielt + her gun + spor",lv:"A1"},
  {mode:"type",c:"Das Wetter ist heute schon.",tr:"Bugun hava guzel.",h:"Ipucu: Das Wetter + ist + heute + sifat",lv:"A1"},
  {mode:"type",c:"Ich lerne jeden Tag Deutsch.",tr:"Her gun Almanca ogreniyorum.",h:"Ipucu: Ich + lerne + zaman + dil",lv:"A1"},
  {mode:"click",w:["Wir","haben","ein","grosses","Haus","."],c:"Wir haben ein grosses Haus.",tr:"Buyuk bir evimiz var.",lv:"A1"},
  {mode:"type",c:"Meine Mutter ist Ärztin.",tr:"Annem doktordur.",h:"Ipucu: Meine Mutter + ist + meslek",lv:"A1"},
  {mode:"type",c:"Ich komme aus der Türkei.",tr:"Turkiyeden geliyorum.",h:"Ipucu: Ich + komme + aus + der Türkei",lv:"A1"},
  {mode:"click",w:["Kannst","du","mir","helfen","?"],c:"Kannst du mir helfen?",tr:"Bana yardim edebilir misin?",h:"Soru: fiil basa gelir",lv:"A1"},
  {mode:"type",c:"Das Kind spielt im Garten.",tr:"Cocuk bahcede oynuyor.",h:"Ipucu: Das Kind + spielt + im Garten",lv:"A1"},
  {mode:"type",c:"Ich habe keine Zeit.",tr:"Vaktim yok.",h:"Ipucu: Ich + habe + keine + zaman",lv:"A1"},
  {mode:"click",w:["Sie","arbeitet","in","einem","Büro","."],c:"Sie arbeitet in einem Büro.",tr:"O bir ofiste calisiyor.",lv:"A1"},
  {mode:"type",c:"Heute ist das Wetter sehr kalt.",tr:"Bugun hava cok soguk.",h:"Ipucu: Bugun + ist + das Wetter + cok + soguk",lv:"A1"},
  {mode:"type",c:"Er trinkt jeden Morgen Kaffee.",tr:"Her sabah kahve iciyor.",h:"Ipucu: Er + trinkt + her sabah + icecek",lv:"A1"},
  {mode:"click",w:["Ich","muss","morgen","früh","aufstehen","."],c:"Ich muss morgen früh aufstehen.",tr:"Yarin erken kalkmam gerekiyor.",h:"Modal + Infinitiv sona gider",lv:"A2"},
  {mode:"type",c:"Wir sind gestern ins Kino gegangen.",tr:"Dun sinemaya gittik.",h:"Perfekt: sein + Partizip II sona",lv:"A2"},
  {mode:"type",c:"Ich habe das Buch schon gelesen.",tr:"Kitabi coktan okudum.",h:"Perfekt: haben + Partizip II sona",lv:"A2"},
  {mode:"click",w:["Er","hat","seiner","Mutter","geholfen","."],c:"Er hat seiner Mutter geholfen.",tr:"Annesine yardim etti.",h:"helfen + Dativ; Perfekt: haben + Partizip",lv:"A2"},
  {mode:"type",c:"Ich bleibe zu Hause weil ich krank bin.",tr:"Hasta oldugum icin evde kaliyorum.",h:"weil: fiil sona gider",lv:"A2"},
  {mode:"type",c:"Kannst du mir sagen wo der Bahnhof ist.",tr:"Tren istasyonunun nerede oldugunu soyleye bilir misin.",h:"Dolaylı soru: fiil sona",lv:"A2"},
  {mode:"click",w:["Das","Buch","ist","interessanter","als","der","Film","."],c:"Das Buch ist interessanter als der Film.",tr:"Kitap filmden daha ilginc.",h:"Komparativ + als",lv:"A2"},
  {mode:"type",c:"Sie freut sich über das Geschenk.",tr:"Hediyeden dolayi sevindi.",h:"sich freuen über + Akkusativ",lv:"A2"},
// B1 c-mle kurma
  {mode:"type",c:"Wenn ich mehr Zeit hätte, würde ich mehr lesen.",tr:"Daha fazla vaktim olsaydı, daha fazla okurdum.",h:"Konjunktiv II: hätte / würde...lesen",lv:"B1"},
  {mode:"type",c:"Das Haus wird gerade renoviert.",tr:"Ev şu an tamir edilmektedir.",h:"Passiv Präsens: wird + PP",lv:"B1"},
  {mode:"type",c:"Der Mann, den ich getroffen habe, ist Arzt.",tr:"Karşılaştığım adam doktordur.",h:"Relativsatz: den (eril Akkusativ)",lv:"B1"},
  {mode:"type",c:"Ich spare Geld, um ein Auto zu kaufen.",tr:"Araba almak için para biriktiriyorum.",h:"um...zu + Infinitiv sona",lv:"B1"},
  {mode:"type",c:"Als ich klein war, wohnte ich in Istanbul.",tr:"Küçükken İstanbul'da oturuyordum.",h:"als = tek geçmiş olay + Prateritum",lv:"B1"},
  {mode:"type",c:"Er ging, ohne etwas zu sagen.",tr:"Bir şey söylemeden gitti.",h:"ohne...zu + Infinitiv",lv:"B1"},
  {mode:"click",w:["Meiner","Meinung","nach","ist","das","richtig","."],c:"Meiner Meinung nach ist das richtig.",tr:"Bence bu doğru.",h:"Meiner Meinung nach = bence (V2 kuralı!)",lv:"B1"},
  {mode:"type",c:"Nachdem er gegessen hatte, ging er spazieren.",tr:"Yedikten sonra yürüyüşe çıktı.",h:"nachdem + Plusquamperfekt: hatte gegessen",lv:"B1"},

  // B2 c-mle kurma
  {mode:"type",c:"Das muss sofort erledigt werden.",tr:"Bu hemen halledilmeli.",h:"Modal + Passiv Infinitiv: erledigt werden",lv:"B2"},
  {mode:"type",c:"Trotz des schlechten Wetters gingen wir spazieren.",tr:"Kötü havaya rağmen yürüyüşe çıktık.",h:"trotz + Genitiv = rağmen",lv:"B2"},
  {mode:"type",c:"Ein Anstieg der Preise ist zu verzeichnen.",tr:"Fiyatlarda bir artış gözlemlenmektedir.",h:"Nominalstil: steigen → Anstieg",lv:"B2"},
  {mode:"type",c:"Das lässt sich nicht so einfach erklären.",tr:"Bu o kadar kolay açıklanamaz.",h:"sich lassen + Inf = pasif anlam",lv:"B2"},
  {mode:"click",w:["Zwar","ist","es","teuer",",","aber","es","ist","gut","."],c:"Zwar ist es teuer, aber es ist gut.",tr:"Her ne kadar pahalı olsa da iyidir.",h:"Zwar...aber = her ne kadar...ama",lv:"B2"},
  {mode:"type",c:"Innerhalb einer Woche hat er das Problem gelöst.",tr:"Bir hafta içinde sorunu çözdü.",h:"innerhalb + Genitiv = ...içinde (süre)",lv:"B2"},

  // C1 c-mle kurma
  {mode:"type",c:"Der Minister erklärte, er sei an dem Vorfall nicht beteiligt.",tr:"Bakan, olaya karışmadığını açıkladı.",h:"Konjunktiv I indirekte Rede: sei beteiligt",lv:"C1"},
  {mode:"type",c:"Angesichts der steigenden Kosten müssen wir sparen.",tr:"Artan maliyetler göz önünde bulundurulduğunda tasarruf etmeliyiz.",h:"angesichts + Genitiv = göz önünde bulundurarak",lv:"C1"},
  {mode:"type",c:"Aufgrund der aktuellen Situation ist eine Entscheidung erforderlich.",tr:"Mevcut durum nedeniyle bir karar gerekmektedir.",h:"aufgrund + Genitiv + sein + zu Inf",lv:"C1"},
  {mode:"type",c:"Die Ergebnisse legen nahe, dass weitere Untersuchungen notwendig sind.",tr:"Sonuçlar, daha fazla araştırmanın gerekli olduğuna işaret ediyor.",h:"nahelegen = işaret etmek (akademik ifade)",lv:"C1"},
  {mode:"click",w:["Zusammenfassend","lässt","sich","sagen",",","dass","das","Thema","komplex","ist","."],c:"Zusammenfassend lässt sich sagen, dass das Thema komplex ist.",tr:"Özetle, konunun karmaşık olduğunu söylemek mümkündür.",h:"Zusammenfassend lässt sich sagen = akademik özet başlangıcı",lv:"C1"},
  {mode:"type",c:"Er hat den Nagel auf den Kopf getroffen.",tr:"Tam isabetli söyledi.",h:"den Nagel auf den Kopf treffen = tam isabet etmek (deyim)",lv:"C1"}
];

var VOCAB = [
// === KISILER & AILE ===
{word:"der Mann",tr:"adam, erkek",art:"der (eril)",ex:"Der Mann ist nett.\nAdam nazik.",srs:0},
{word:"die Frau",tr:"kadın",art:"die (dişil)",ex:"Die Frau arbeitet hier.\nKadın burada çalışıyor.",srs:0},
{word:"das Kind",tr:"çocuk",art:"das (nötr)",ex:"Das Kind spielt gern.\nÇocuk oynamayı sever.",srs:0},
{word:"der Vater",tr:"baba",art:"der (eril)",ex:"Mein Vater ist Arzt.\nBabam doktor.",srs:0},
{word:"die Mutter",tr:"anne",art:"die (dişil)",ex:"Meine Mutter kocht gern.\nAnnem yemek pişirmeyi sever.",srs:0},
{word:"der Bruder",tr:"erkek kardeş",art:"der (eril)",ex:"Ich habe einen Bruder.\nBir erkek kardeşim var.",srs:0},
{word:"die Schwester",tr:"kız kardeş",art:"die (dişil)",ex:"Meine Schwester ist jung.\nKız kardeşim genç.",srs:0},
{word:"der Sohn",tr:"oğul",art:"der (eril)",ex:"Ihr Sohn studiert Medizin.\nOğlu tıp okuyor.",srs:0},
{word:"die Tochter",tr:"kız çocuğu",art:"die (dişil)",ex:"Die Tochter spielt Klavier.\nKız çocuğu piyano çalıyor.",srs:0},
{word:"der Opa",tr:"dede",art:"der (eril)",ex:"Mein Opa ist 80 Jahre alt.\nDedem 80 yaşında.",srs:0},
{word:"die Oma",tr:"büyükanne",art:"die (dişil)",ex:"Die Oma backt Kuchen.\nBüyükannem pasta yapar.",srs:0},
{word:"der Onkel",tr:"amca/dayı/enişte",art:"der (eril)",ex:"Mein Onkel wohnt in Wien.\nAmcam Viyana'da oturuyor.",srs:0},
{word:"die Tante",tr:"teyze/hala/yenge",art:"die (dişil)",ex:"Meine Tante ist sehr nett.\nTeyzeм çok nazik.",srs:0},
{word:"der Cousin",tr:"erkek kuzen",art:"der (eril)",ex:"Mein Cousin spielt Gitarre.\nErkek kuzenim gitar çalıyor.",srs:0},
{word:"die Cousine",tr:"kız kuzen",art:"die (dişil)",ex:"Meine Cousine studiert in Berlin.\nKız kuzenim Berlin'de okuyor.",srs:0},
// === EV & MOBILYA ===
{word:"das Haus",tr:"ev, bina",art:"das (nötr)",ex:"Das Haus ist groß.\nEv büyük.",srs:0},
{word:"die Wohnung",tr:"daire",art:"die (dişil)",ex:"Die Wohnung hat drei Zimmer.\nDairenin üç odası var.",srs:0},
{word:"das Zimmer",tr:"oda",art:"das (nötr)",ex:"Das Zimmer ist hell.\nOda aydınlık.",srs:0},
{word:"die Küche",tr:"mutfak",art:"die (dişil)",ex:"Die Küche ist modern.\nMutfak modern.",srs:0},
{word:"das Badezimmer",tr:"banyo",art:"das (nötr)",ex:"Das Badezimmer ist klein.\nBanyo küçük.",srs:0},
{word:"das Wohnzimmer",tr:"oturma odası",art:"das (nötr)",ex:"Wir sitzen im Wohnzimmer.\nOturma odasında oturuyoruz.",srs:0},
{word:"das Schlafzimmer",tr:"yatak odası",art:"das (nötr)",ex:"Das Schlafzimmer hat ein großes Bett.\nYatak odasında büyük bir yatak var.",srs:0},
{word:"der Tisch",tr:"masa",art:"der (eril)",ex:"Das Buch liegt auf dem Tisch.\nKitap masanın üstünde.",srs:0},
{word:"der Stuhl",tr:"sandalye",art:"der (eril)",ex:"Setz dich auf den Stuhl!\nSandalyeye otur!",srs:0},
{word:"das Bett",tr:"yatak",art:"das (nötr)",ex:"Das Bett ist sehr bequem.\nYatak çok rahat.",srs:0},
{word:"der Schrank",tr:"dolap",art:"der (eril)",ex:"Die Kleider hängen im Schrank.\nKıyafetler dolapta asılı.",srs:0},
{word:"das Sofa",tr:"kanepe",art:"das (nötr)",ex:"Wir sitzen auf dem Sofa.\nKanepede oturuyoruz.",srs:0},
{word:"die Lampe",tr:"lamba",art:"die (dişil)",ex:"Die Lampe ist kaputt.\nLamba bozuk.",srs:0},
{word:"das Fenster",tr:"pencere",art:"das (nötr)",ex:"Bitte mach das Fenster auf!\nLütfen pencereyi aç!",srs:0},
{word:"die Tür",tr:"kapı",art:"die (dişil)",ex:"Die Tür ist offen.\nKapı açık.",srs:0},
// === YIYECEK & ICECEK ===
{word:"das Brot",tr:"ekmek",art:"das (nötr)",ex:"Ich esse Brot zum Frühstück.\nKahvaltıda ekmek yerim.",srs:0},
{word:"die Butter",tr:"tereyağı",art:"die (dişil)",ex:"Das Brot mit Butter schmeckt gut.\nTereyağlı ekmek lezzetli.",srs:0},
{word:"der Käse",tr:"peynir",art:"der (eril)",ex:"Ich mag Käse sehr gern.\nPeyniri çok severim.",srs:0},
{word:"das Ei",tr:"yumurta",art:"das (nötr)",ex:"Ich esse zwei Eier zum Frühstück.\nKahvaltıda iki yumurta yerim.",srs:0},
{word:"die Wurst",tr:"sosis/salam",art:"die (dişil)",ex:"Deutsche Wurst ist sehr lecker.\nAlman sosisi çok lezzetli.",srs:0},
{word:"der Apfel",tr:"elma",art:"der (eril)",ex:"Ein Apfel täglich ist gesund.\nHer gün bir elma sağlıklıdır.",srs:0},
{word:"die Banane",tr:"muz",art:"die (dişil)",ex:"Die Banane ist reif.\nMuz olgun.",srs:0},
{word:"die Tomate",tr:"domates",art:"die (dişil)",ex:"Die Tomaten sind frisch.\nDomateler taze.",srs:0},
{word:"die Kartoffel",tr:"patates",art:"die (dişil)",ex:"Pommes Frites sind Kartoffeln.\nPatates kızartması patates.",srs:0},
{word:"das Fleisch",tr:"et",art:"das (nötr)",ex:"Ich esse kein Fleisch.\nEt yemiyorum.",srs:0},
{word:"der Fisch",tr:"balık",art:"der (eril)",ex:"Wir essen freitags Fisch.\nCuma günleri balık yeriz.",srs:0},
{word:"die Suppe",tr:"çorba",art:"die (dişil)",ex:"Die Suppe ist heiß.\nÇorba sıcak.",srs:0},
{word:"das Wasser",tr:"su",art:"das (nötr)",ex:"Ich trinke viel Wasser.\nÇok su içerim.",srs:0},
{word:"der Kaffee",tr:"kahve",art:"der (eril)",ex:"Morgens trinke ich Kaffee.\nSabahları kahve içerim.",srs:0},
{word:"der Tee",tr:"çay",art:"der (eril)",ex:"Möchten Sie Tee oder Kaffee?\nÇay mı kahve mi istersiniz?",srs:0},
{word:"die Milch",tr:"süt",art:"die (dişil)",ex:"Kinder trinken gern Milch.\nÇocuklar süt içmeyi sever.",srs:0},
{word:"der Saft",tr:"meyve suyu",art:"der (eril)",ex:"Ich trinke einen Orangensaft.\nPortakal suyu içiyorum.",srs:0},
{word:"das Bier",tr:"bira",art:"das (nötr)",ex:"Ein Bier, bitte!\nBir bira, lütfen!",srs:0},
{word:"der Wein",tr:"şarap",art:"der (eril)",ex:"Ein Glas Wein, bitte.\nBir bardak şarap, lütfen.",srs:0},
{word:"der Zucker",tr:"şeker",art:"der (eril)",ex:"Kein Zucker, danke!\nŞekersiz, teşekkürler!",srs:0},
// === KIYAFET ===
{word:"das Hemd",tr:"gömlek (erkek)",art:"das (nötr)",ex:"Er trägt ein weißes Hemd.\nBeyaz gömlek giyiyor.",srs:0},
{word:"die Bluse",tr:"bluz",art:"die (dişil)",ex:"Die Bluse ist sehr schön.\nBluz çok güzel.",srs:0},
{word:"die Hose",tr:"pantolon",art:"die (dişil)",ex:"Ich trage eine blaue Hose.\nMavi pantolon giyiyorum.",srs:0},
{word:"der Rock",tr:"etek",art:"der (eril)",ex:"Der Rock ist zu kurz.\nEtek çok kısa.",srs:0},
{word:"das Kleid",tr:"elbise",art:"das (nötr)",ex:"Das rote Kleid ist wunderschön.\nKırmızı elbise çok güzel.",srs:0},
{word:"der Mantel",tr:"palto",art:"der (eril)",ex:"Im Winter brauche ich einen Mantel.\nKışın palto lazım.",srs:0},
{word:"die Jacke",tr:"ceket, mont",art:"die (dişil)",ex:"Nimm eine Jacke mit!\nBir ceket al!",srs:0},
{word:"der Pullover",tr:"kazak",art:"der (eril)",ex:"Der Pullover ist warm.\nKazak sıcak.",srs:0},
{word:"die Schuhe",tr:"ayakkabılar",art:"die (dişil,cogul)",ex:"Die Schuhe sind neu.\nAyakkabılar yeni.",srs:0},
{word:"die Socken",tr:"çoraplar",art:"die (cogul)",ex:"Wo sind meine Socken?\nÇoraplarım nerede?",srs:0},
// === ULASIM ===
{word:"das Auto",tr:"araba",art:"das (nötr)",ex:"Das Auto ist kaputt.\nAraba bozuk.",srs:0},
{word:"der Bus",tr:"otobüs",art:"der (eril)",ex:"Ich fahre mit dem Bus.\nOtobüsle gidiyorum.",srs:0},
{word:"die U-Bahn",tr:"metro",art:"die (dişil)",ex:"Die U-Bahn ist schnell.\nMetro hızlı.",srs:0},
{word:"der Zug",tr:"tren",art:"der (eril)",ex:"Der Zug fährt nach München.\nTren Münih'e gidiyor.",srs:0},
{word:"das Flugzeug",tr:"uçak",art:"das (nötr)",ex:"Das Flugzeug landet um 14 Uhr.\nUçak saat 14'te iniyor.",srs:0},
{word:"das Fahrrad",tr:"bisiklet",art:"das (nötr)",ex:"Ich fahre gern Fahrrad.\nBisiklet sürmeyi severim.",srs:0},
{word:"der Bahnhof",tr:"tren istasyonu",art:"der (eril)",ex:"Der Bahnhof ist sehr groß.\nTren istasyonu çok büyük.",srs:0},
{word:"der Flughafen",tr:"havalimanı",art:"der (eril)",ex:"Der Flughafen ist weit.\nHavalimanı uzak.",srs:0},
// === OKUL & IS ===
{word:"die Schule",tr:"okul",art:"die (dişil)",ex:"Die Schule beginnt um 8 Uhr.\nOkul saat 8'de başlar.",srs:0},
{word:"die Universität",tr:"üniversite",art:"die (dişil)",ex:"Sie studiert an der Universität.\nÜniversitede okuyor.",srs:0},
{word:"das Buch",tr:"kitap",art:"das (nötr)",ex:"Das Buch ist sehr interessant.\nKitap çok ilginç.",srs:0},
{word:"der Stift",tr:"kalem",art:"der (eril)",ex:"Hast du einen Stift für mich?\nBenim için kalemin var mı?",srs:0},
{word:"das Heft",tr:"defter",art:"das (nötr)",ex:"Ich schreibe alles ins Heft.\nHer şeyi deftere yazıyorum.",srs:0},
{word:"die Hausaufgabe",tr:"ev ödevi",art:"die (dişil)",ex:"Ich mache meine Hausaufgaben.\nÖdevlerimi yapıyorum.",srs:0},
{word:"der Lehrer",tr:"öğretmen (erkek)",art:"der (eril)",ex:"Der Lehrer erklärt gut.\nÖğretmen iyi anlatıyor.",srs:0},
{word:"die Lehrerin",tr:"öğretmen (kadın)",art:"die (dişil)",ex:"Die Lehrerin ist sehr nett.\nÖğretmen çok nazik.",srs:0},
{word:"der Schüler",tr:"öğrenci (erkek)",art:"der (eril)",ex:"Der Schüler lernt fleißig.\nÖğrenci çalışkan.",srs:0},
{word:"das Büro",tr:"ofis",art:"das (nötr)",ex:"Ich arbeite im Büro.\nOfiste çalışıyorum.",srs:0},
{word:"der Chef",tr:"patron/müdür",art:"der (eril)",ex:"Mein Chef ist nett.\nPatronum nazik.",srs:0},
// === SEHIR & YERLER ===
{word:"die Stadt",tr:"şehir",art:"die (dişil)",ex:"Berlin ist eine große Stadt.\nBerlin büyük bir şehir.",srs:0},
{word:"die Straße",tr:"sokak, cadde",art:"die (dişil)",ex:"Die Straße ist lang.\nSokak uzun.",srs:0},
{word:"der Supermarkt",tr:"süpermarket",art:"der (eril)",ex:"Der Supermarkt ist geöffnet.\nSüpermarket açık.",srs:0},
{word:"die Apotheke",tr:"eczane",art:"die (dişil)",ex:"Die Apotheke ist um die Ecke.\nEczane köşede.",srs:0},
{word:"das Krankenhaus",tr:"hastane",art:"das (nötr)",ex:"Das Krankenhaus ist groß.\nHastane büyük.",srs:0},
{word:"die Bank",tr:"banka",art:"die (dişil)",ex:"Die Bank ist geschlossen.\nBanka kapalı.",srs:0},
{word:"das Restaurant",tr:"restoran",art:"das (nötr)",ex:"Das Restaurant ist sehr gut.\nRestoran çok iyi.",srs:0},
{word:"das Hotel",tr:"otel",art:"das (nötr)",ex:"Das Hotel hat ein Schwimmbad.\nOtelin yüzme havuzu var.",srs:0},
{word:"der Park",tr:"park",art:"der (eril)",ex:"Im Park spazieren gehen.\nParkta yürüyüş yapmak.",srs:0},
{word:"das Kino",tr:"sinema",art:"das (nötr)",ex:"Wir gehen heute ins Kino.\nBugün sinemaya gidiyoruz.",srs:0},
{word:"die Post",tr:"postane",art:"die (dişil)",ex:"Ich schicke einen Brief zur Post.\nPostaneye mektup gönderiyorum.",srs:0},
// === V-CUT & SA-LIK ===
{word:"der Kopf",tr:"baş",art:"der (eril)",ex:"Mir tut der Kopf weh.\nBaşım ağrıyor.",srs:0},
{word:"der Bauch",tr:"karın",art:"der (eril)",ex:"Ich habe Bauchschmerzen.\nKarın ağrım var.",srs:0},
{word:"der Arm",tr:"kol",art:"der (eril)",ex:"Der Arm ist gebrochen.\nKolu kırık.",srs:0},
{word:"das Bein",tr:"bacak",art:"das (nötr)",ex:"Das Bein tut weh.\nBacağım acıyor.",srs:0},
{word:"die Hand",tr:"el",art:"die (dişil)",ex:"Wasch dir die Hände!\nEllerini yıka!",srs:0},
{word:"das Auge",tr:"göz",art:"das (nötr)",ex:"Sie hat blaue Augen.\nMavi gözleri var.",srs:0},
{word:"die Nase",tr:"burun",art:"die (dişil)",ex:"Meine Nase läuft.\nBurun akıyor.",srs:0},
{word:"der Mund",tr:"ağız",art:"der (eril)",ex:"Mund auf, bitte!\nAğzı aç, lütfen!",srs:0},
{word:"das Fieber",tr:"ateş (hastalık)",art:"das (nötr)",ex:"Das Kind hat Fieber.\nÇocuğun ateşi var.",srs:0},
{word:"die Erkältung",tr:"soğuk algınlığı",art:"die (dişil)",ex:"Ich habe eine Erkältung.\nSoğuk algınlığım var.",srs:0},
// === SIFATLAR ===
{word:"groß",tr:"büyük, uzun boylu",art:"—",ex:"Das Haus ist groß.\nEv büyük.",srs:0},
{word:"klein",tr:"küçük, kısa boylu",art:"—",ex:"Das Kind ist noch klein.\nÇocuk henüz küçük.",srs:0},
{word:"alt",tr:"yaşlı, eski",art:"—",ex:"Das Haus ist sehr alt.\nEv çok eski.",srs:0},
{word:"jung",tr:"genç",art:"—",ex:"Sie ist noch sehr jung.\nO hâlâ çok genç.",srs:0},
{word:"gut",tr:"iyi",art:"—",ex:"Das ist gut!\nBu iyi!",srs:0},
{word:"schlecht",tr:"kötü",art:"—",ex:"Das Wetter ist schlecht.\nHava kötü.",srs:0},
{word:"schön",tr:"güzel",art:"—",ex:"Das Wetter ist schön.\nHava güzel.",srs:0},
{word:"hässlich",tr:"çirkin",art:"—",ex:"Das Kleid ist hässlich.\nElbise çirkin.",srs:0},
{word:"teuer",tr:"pahalı",art:"—",ex:"Das ist zu teuer!\nBu çok pahalı!",srs:0},
{word:"billig",tr:"ucuz",art:"—",ex:"Das ist sehr billig.\nBu çok ucuz.",srs:0},
{word:"schnell",tr:"hızlı",art:"—",ex:"Das Auto ist schnell.\nAraba hızlı.",srs:0},
{word:"langsam",tr:"yavaş",art:"—",ex:"Bitte sprich langsamer!\nLütfen daha yavaş konuş!",srs:0},
{word:"müde",tr:"yorgun",art:"—",ex:"Ich bin sehr müde.\nÇok yorgunum.",srs:0},
{word:"krank",tr:"hasta",art:"—",ex:"Er ist krank.\nO hasta.",srs:0},
{word:"gesund",tr:"sağlıklı",art:"—",ex:"Ich bin gesund.\nSağlıklıyım.",srs:0},
// === FIILLER (s-zl-k formu) ===
{word:"arbeiten",tr:"çalışmak",art:"—",ex:"Ich arbeite von 9 bis 17 Uhr.\nSaat 9'dan 17'ye kadar çalışıyorum.",srs:0},
{word:"lernen",tr:"öğrenmek",art:"—",ex:"Wir lernen Deutsch.\nAlmanca öğreniyoruz.",srs:0},
{word:"schlafen",tr:"uyumak",art:"—",ex:"Ich schlafe acht Stunden.\nSekiz saat uyuyorum.",srs:0},
{word:"kochen",tr:"yemek pişirmek",art:"—",ex:"Meine Mutter kocht gut.\nAnnem iyi yemek pişirir.",srs:0},
{word:"kaufen",tr:"satın almak",art:"—",ex:"Ich kaufe ein Buch.\nBir kitap satın alıyorum.",srs:0},
{word:"trinken",tr:"içmek",art:"—",ex:"Ich trinke Kaffee.\nKahve içiyorum.",srs:0},
{word:"essen",tr:"yemek yemek",art:"—",ex:"Wir essen Pizza.\nPizza yiyoruz.",srs:0},
{word:"fahren",tr:"araçla gitmek",art:"—",ex:"Ich fahre mit dem Bus.\nOtobüsle gidiyorum.",srs:0},
{word:"gehen",tr:"yürüyerek gitmek",art:"—",ex:"Ich gehe zur Schule.\nOkula yürüyerek gidiyorum.",srs:0},
{word:"kommen",tr:"gelmek",art:"—",ex:"Wann kommst du?\nNe zaman geliyorsun?",srs:0},
{word:"wohnen",tr:"oturmak, yaşamak",art:"—",ex:"Ich wohne in Berlin.\nBerlin'de oturuyorum.",srs:0},
{word:"spielen",tr:"oynamak",art:"—",ex:"Die Kinder spielen im Park.\nÇocuklar parkta oynuyor.",srs:0},
{word:"lesen",tr:"okumak",art:"—",ex:"Er liest ein Buch.\nKitap okuyor.",srs:0},
{word:"schreiben",tr:"yazmak",art:"—",ex:"Ich schreibe einen Brief.\nMektup yazıyorum.",srs:0},
{word:"sprechen",tr:"konuşmak",art:"—",ex:"Sie spricht gut Deutsch.\nAlmanca iyi konuşuyor.",srs:0},
{word:"hören",tr:"dinlemek, duymak",art:"—",ex:"Ich höre Musik.\nMüzik dinliyorum.",srs:0},
{word:"sehen",tr:"görmek",art:"—",ex:"Ich sehe einen Film.\nFilm izliyorum.",srs:0},
{word:"verstehen",tr:"anlamak",art:"—",ex:"Ich verstehe das nicht.\nBunu anlamıyorum.",srs:0},
{word:"suchen",tr:"aramak",art:"—",ex:"Ich suche meine Schlüssel.\nAnahtarlarımı arıyorum.",srs:0},
{word:"finden",tr:"bulmak",art:"—",ex:"Ich finde das Buch nicht.\nKitabı bulamıyorum.",srs:0},
// === G-NL-K IFADELER ===
{word:"bitte",tr:"lütfen / rica ederim",art:"—",ex:"Bitte hilf mir!\nLütfen bana yardım et!",srs:0},
{word:"danke",tr:"teşekkürler",art:"—",ex:"Danke schön!\nÇok teşekkürler!",srs:0},
{word:"entschuldigung",tr:"özür dilerim / affedersiniz",art:"—",ex:"Entschuldigung, wo ist der Bahnhof?\nAffedersiniz, tren istasyonu nerede?",srs:0},
{word:"tschüss",tr:"hoşça kal (samimi)",art:"—",ex:"Tschüss! Bis morgen!\nHoşça kal! Yarın görüşürüz!",srs:0},
{word:"gern",tr:"seve seve, memnuniyetle",art:"—",ex:"Ich helfe gern!\nMemnuniyetle yardım ederim!",srs:0},
{word:"leider",tr:"maalesef, ne yazık ki",art:"—",ex:"Leider kann ich nicht kommen.\nMaalesef gelemiyorum.",srs:0},
{word:"vielleicht",tr:"belki",art:"—",ex:"Vielleicht komme ich morgen.\nBelki yarın gelirim.",srs:0},
{word:"natürlich",tr:"tabii ki, elbette",art:"—",ex:"Natürlich helfe ich dir!\nElbette sana yardım ederim!",srs:0},
// === HAFTANIN GUNLERI ===
{word:"Montag",tr:"Pazartesi",art:"der",ex:"Am Montag fängt die Woche an.\nPazartesi hafta başlar.",srs:0},
{word:"Dienstag",tr:"Salı",art:"der",ex:"Am Dienstag habe ich Sport.\nSalı günü sporum var.",srs:0},
{word:"Mittwoch",tr:"Çarşamba",art:"der",ex:"Mittwoch ist die Wochenmitte.\nÇarşamba haftanın ortasıdır.",srs:0},
{word:"Donnerstag",tr:"Perşembe",art:"der",ex:"Am Donnerstag gehe ich einkaufen.\nPerşembe alışverişe gidiyorum.",srs:0},
{word:"Freitag",tr:"Cuma",art:"der",ex:"Freitag ist mein Lieblingstag!\nCuma en sevdiğim gün!",srs:0},
{word:"Samstag",tr:"Cumartesi",art:"der",ex:"Am Samstag schlafe ich lange.\nCumartesi geç uyandım.",srs:0},
{word:"Sonntag",tr:"Pazar",art:"der",ex:"Sonntags ist alles zu.\nPazar günü her yer kapalı.",srs:0},
// === AYLAR ===
{word:"Januar",tr:"Ocak",art:"der",ex:"Im Januar ist es kalt.\nOcak'ta soğuk.",srs:0},
{word:"Februar",tr:"Şubat",art:"der",ex:"Im Februar ist Fasching.\nŞubat'ta karnaval var.",srs:0},
{word:"März",tr:"Mart",art:"der",ex:"Im März beginnt der Frühling.\nMart'ta ilkbahar başlar.",srs:0},
{word:"April",tr:"Nisan",art:"der",ex:"Im April regnet es oft.\nNisan'da sık yağmur yağar.",srs:0},
{word:"Mai",tr:"Mayıs",art:"der",ex:"Im Mai ist es schön warm.\nMayıs'ta güzel ılık.",srs:0},
{word:"Juni",tr:"Haziran",art:"der",ex:"Im Juni beginnt der Sommer.\nHaziran'da yaz başlar.",srs:0},
{word:"Juli",tr:"Temmuz",art:"der",ex:"Im Juli ist es sehr heiß.\nTemmuz'da çok sıcak.",srs:0},
{word:"August",tr:"Ağustos",art:"der",ex:"Im August fahren viele in Urlaub.\nAğustos'ta çoğu kişi tatile gider.",srs:0},
{word:"September",tr:"Eylül",art:"der",ex:"Im September beginnt die Schule.\nEylül'de okul başlar.",srs:0},
{word:"Oktober",tr:"Ekim",art:"der",ex:"Im Oktober ist Oktoberfest.\nEkim'de Oktoberfest var.",srs:0},
{word:"November",tr:"Kasım",art:"der",ex:"Im November ist es grau.\nKasım'da hava gri.",srs:0},
{word:"Dezember",tr:"Aralık",art:"der",ex:"Im Dezember ist Weihnachten.\nAralık'ta Noel var.",srs:0}
];

var AQ_B1 = [
  {word:"die Entscheidung",tr:"karar",art:"die",ex:"Eine wichtige Entscheidung treffen.\nÖnemli bir karar almak."},
  {word:"der Zusammenhang",tr:"bağlantı, ilişki",art:"der",ex:"Der Zusammenhang ist klar.\nBağlantı açık."},
  {word:"die Möglichkeit",tr:"olasılık, imkân",art:"die",ex:"Es gibt keine Möglichkeit.\nHiçbir olasılık yok."},
  {word:"das Ergebnis",tr:"sonuç",art:"das",ex:"Das Ergebnis ist positiv.\nSonuç olumlu."},
  {word:"die Entwicklung",tr:"gelişim, gelişme",art:"die",ex:"Eine positive Entwicklung.\nOlumlu bir gelişme."},
  {word:"der Unterschied",tr:"fark",art:"der",ex:"Der Unterschied ist groß.\nFark büyük."},
  {word:"die Voraussetzung",tr:"ön koşul, şart",art:"die",ex:"Das ist die wichtigste Voraussetzung.\nBu en önemli ön koşul."},
  {word:"der Einfluss",tr:"etki, nüfuz",art:"der",ex:"Der Einfluss der Medien.\nMedyanın etkisi."},
  {word:"die Verantwortung",tr:"sorumluluk",art:"die",ex:"Verantwortung übernehmen.\nSorumluluk almak."},
  {word:"das Verhalten",tr:"davranış",art:"das",ex:"Das Verhalten ist auffällig.\nDavranış dikkat çekici."},
  {word:"die Lösung",tr:"çözüm",art:"die",ex:"Eine Lösung finden.\nBir çözüm bulmak."},
  {word:"der Beitrag",tr:"katkı, makale",art:"der",ex:"Einen Beitrag leisten.\nKatkıda bulunmak."}
];
var AQ_B2 = [
  {word:"die Beeinträchtigung",tr:"zarar, olumsuz etki",art:"die",ex:"Eine Beeinträchtigung der Gesundheit.\nSağlığa zarar."},
  {word:"der Rückgang",tr:"düşüş, azalma",art:"der",ex:"Ein Rückgang der Zahlen.\nSayıların düşüşü."},
  {word:"die Förderung",tr:"teşvik, destek",art:"die",ex:"Die Förderung junger Talente.\nGenç yeteneklerin teşviki."},
  {word:"das Bewusstsein",tr:"bilinç, farkındalık",art:"das",ex:"Das Bewusstsein schärfen.\nBilinci keskinleştirmek."},
  {word:"die Auswirkung",tr:"etki, sonuç",art:"die",ex:"Die Auswirkungen sind gravierend.\nEtkiler ciddi."},
  {word:"der Mangel",tr:"eksiklik, kıtlık",art:"der",ex:"Mangel an Fachkräften.\nUzman açığı."},
  {word:"die Gewährleistung",tr:"güvence, garanti",art:"die",ex:"Die Gewährleistung der Qualität.\nKalitenin güvencesi."},
  {word:"das Gleichgewicht",tr:"denge",art:"das",ex:"Das Gleichgewicht halten.\nDengeyi korumak."},
  {word:"die Umsetzung",tr:"uygulama, hayata geçirme",art:"die",ex:"Die Umsetzung des Plans.\nPlanın uygulanması."},
  {word:"der Nachweis",tr:"kanıt, belge",art:"der",ex:"Einen Nachweis erbringen.\nKanıt sunmak."}
];
var AQ_C1 = [
  {word:"die Ambivalenz",tr:"karmaşık duygular, ikirciklilik",art:"die",ex:"Die Ambivalenz der Gefühle.\nDuyguların ikircikliliği."},
  {word:"der Paradigmenwechsel",tr:"paradigma değişimi",art:"der",ex:"Ein Paradigmenwechsel findet statt.\nBir paradigma değişimi gerçekleşiyor."},
  {word:"die Kohärenz",tr:"tutarlılık, bütünlük",art:"die",ex:"Die Kohärenz des Textes.\nMetnin tutarlılığı."},
  {word:"das Phänomen",tr:"fenomen, olgu",art:"das",ex:"Ein soziales Phänomen.\nSosyal bir olgu."},
  {word:"die Prämisse",tr:"öncül, varsayım",art:"die",ex:"Von dieser Prämisse ausgehend...\nBu varsayımdan hareketle..."},
  {word:"der Diskurs",tr:"söylem, tartışma",art:"der",ex:"Im wissenschaftlichen Diskurs.\nBilimsel söylemde."},
  {word:"die Reziprozität",tr:"karşılıklılık",art:"die",ex:"Das Prinzip der Reziprozität.\nKarşılıklılık ilkesi."},
  {word:"das Postulat",tr:"postulat, temel sav",art:"das",ex:"Das Postulat der Gleichheit.\nEşitlik postülatı."},
  {word:"die Kontextualisierung",tr:"bağlama oturtma",art:"die",ex:"Die Kontextualisierung ist wichtig.\nBağlama oturtmak önemli."},
  {word:"der Antagonismus",tr:"zıtlık, çatışma",art:"der",ex:"Ein Antagonismus zwischen den Positionen.\nPositions arasındaki çatışma."}
];

// -- SEV-YEYE G-RE C-MLE KURMA -----------------------------------------------
var SQ_B1 = [
  {mode:"type",c:"Ich würde gern nach Japan reisen, wenn ich mehr Geld hätte.",tr:"Daha fazla param olsaydı Japonya'ya seyahat etmek isterdim.",h:"Konjunktiv II: würde + Inf / wenn + hätte",lv:"B1"},
  {mode:"type",c:"Das Paket wurde gestern von meiner Nachbarin angenommen.",tr:"Paket dün komşum tarafından teslim alındı.",h:"Passiv Prateritum: wurde + PP / von + Dativ",lv:"B1"},
  {mode:"type",c:"Der Mann der dort steht ist mein neuer Kollege.",tr:"Orada duran adam yeni meslektaşım.",h:"Relativsatz: der Mann + der + Relativsatz",lv:"B1"},
  {mode:"type",c:"Ich lerne Deutsch um in Deutschland arbeiten zu können.",tr:"Almanya'da çalışabilmek için Almanca öğreniyorum.",h:"um...zu + Infinitiv (können trennbar değil)",lv:"B1"},
  {mode:"type",c:"Als ich klein war spielte ich jeden Tag Fußball.",tr:"Küçükken her gün futbol oynardım.",h:"als = tek geçmiş olay + Prateritum",lv:"B1"},
  {mode:"click",w:["Trotz","des","schlechten","Wetters","gingen","wir","spazieren","."],c:"Trotz des schlechten Wetters gingen wir spazieren.",tr:"Kötü havaya rağmen yürüyüşe çıktık.",h:"trotz + Genitiv / V2 korunur",lv:"B1"},
  {mode:"type",c:"Er geht zur Arbeit ohne zu frühstücken.",tr:"Kahvaltı etmeden işe gidiyor.",h:"ohne + zu + Infinitiv",lv:"B1"},
  {mode:"type",c:"Nachdem sie das Buch gelesen hatte fuhr sie in die Bibliothek.",tr:"Kitabı okuduktan sonra kütüphaneye gitti.",h:"nachdem + Plusquamperfekt, dann Prateritum",lv:"B1"}
];
var SQ_B2 = [
  {mode:"type",c:"Das Problem lässt sich nicht so einfach lösen.",tr:"Bu sorun bu kadar kolay çözülemez.",h:"sich lassen + Infinitiv = pasif anlam",lv:"B2"},
  {mode:"type",c:"Aufgrund seiner langjährigen Erfahrung wurde er sofort eingestellt.",tr:"Uzun yıllara dayanan deneyimi sayesinde hemen işe alındı.",h:"aufgrund + Genitiv / Passiv Prateritum",lv:"B2"},
  {mode:"type",c:"Es wäre schön wenn du öfter anrufen würdest.",tr:"Daha sık arasaydın güzel olurdu.",h:"Konjunktiv II: wäre / wenn + würdest",lv:"B2"},
  {mode:"type",c:"Die Entscheidung die gestern getroffen wurde ist umstritten.",tr:"Dün alınan karar tartışmalıdır.",h:"Relativsatz + Passiv: die + PP + wurde",lv:"B2"},
  {mode:"type",c:"Statt ein Auto zu kaufen fährt er mit dem Fahrrad.",tr:"Araba satın almak yerine bisikletle gidiyor.",h:"Statt...zu + Infinitiv (anstatt...zu ile aynı)",lv:"B2"},
  {mode:"click",w:["Zur","Verfügung","steht","ein","modernes","Labor","mit","neuester","Technik","."],c:"Zur Verfügung steht ein modernes Labor mit neuester Technik.",tr:"Kullanıma en son teknolojiye sahip modern bir laboratuvar sunulmaktadır.",h:"Nominalstil: zur Verfügung stehen",lv:"B2"},
  {mode:"type",c:"Der Bericht dem zufolge die Lage ernst ist wurde veröffentlicht.",tr:"Durumun ciddi olduğunu belirten rapor yayımlandı.",h:"dem zufolge = Genitiv Relativpronomen ileri yapı",lv:"B2"},
  {mode:"type",c:"Es ist zu beachten dass alle Formulare vollständig ausgefüllt werden müssen.",tr:"Tüm formların eksiksiz doldurulması gerektiğine dikkat edilmelidir.",h:"sein + zu + Infinitiv / Passiv Infinitiv",lv:"B2"}
];
var SQ_C1 = [
  {mode:"type",c:"Zusammenfassend lässt sich feststellen dass die Ergebnisse eindeutig sind.",tr:"Özetle, sonuçların açık ve net olduğu tespit edilebilir.",h:"Akademik: Zusammenfassend lässt sich feststellen",lv:"C1"},
  {mode:"type",c:"Der Minister betonte er sei für eine konstruktive Lösung des Problems.",tr:"Bakan, sorunun yapıcı bir çözümü için taraftar olduğunu vurguladı.",h:"Konjunktiv I: sei (sein K.I) / indirekte Rede",lv:"C1"},
  {mode:"type",c:"Angekommen in Berlin suchte er sofort nach einer Unterkunft.",tr:"Berlin'e varır varmaz hemen bir konaklama yeri aradı.",h:"Partizip II bağlaç olarak: Angekommen (varınca)",lv:"C1"},
  {mode:"type",c:"Es erscheint bemerkenswert dass trotz aller Schwierigkeiten Fortschritte erzielt wurden.",tr:"Tüm güçlüklere rağmen ilerleme kaydedilmesi dikkat çekicidir.",h:"C1 üslup: erscheint bemerkenswert / trotz + Passiv",lv:"C1"},
  {mode:"type",c:"Die singende Frau auf der Bühne ist eine international bekannte Sopranistin.",tr:"Sahnedeki şarkı söyleyen kadın uluslararası tanınan bir sopranodur.",h:"Partizip I sıfat: singend+e = singende",lv:"C1"},
  {mode:"click",w:["Anhand","von","Beispielen","wird","deutlich","dass","Sprache","Denken","beeinflusst","."],c:"Anhand von Beispielen wird deutlich dass Sprache Denken beeinflusst.",tr:"Örnekler aracılığıyla dilin düşünceyi etkilediği açıkça görülmektedir.",h:"anhand von / Passiv / Nominalstil",lv:"C1"},
  {mode:"type",c:"Zwar mag es stimmen dass Technologie das Leben erleichtert jedoch bringt sie auch Risiken mit sich.",tr:"Her ne kadar teknolojinin hayatı kolaylaştırdığı doğru olsa da beraberinde riskler de getirmektedir.",h:"Zwar...jedoch = konsesyon yapısı",lv:"C1"},
  {mode:"type",c:"Im Rahmen dieser Untersuchung wird der Zusammenhang zwischen Ernährung und Gesundheit analysiert.",tr:"Bu çalışma kapsamında beslenme ve sağlık arasındaki ilişki analiz edilmektedir.",h:"Akademik: Im Rahmen / Nominalstil / Passiv",lv:"C1"}
];

// -- SEV-YEYE G-RE YAZMA SORULARI -------------------------------------------
var WQ_B1 = [
  {tip:"tr2de",soru:"Türkçeyi Almancaya çevir: Eğer daha fazla vaktim olsaydı, her gün Almanca öğrenirdim.",cevap:"Wenn ich mehr Zeit hätte würde ich jeden Tag Deutsch lernen.",h:"Konjunktiv II: hätte / würde"},
  {tip:"tr2de",soru:"Türkçeyi Almancaya çevir: Yağmura rağmen pikniğe gittik ve çok eğlendik.",cevap:"Trotz des Regens gingen wir zum Picknick und hatten viel Spaß.",h:"trotz + Genitiv / Perfekt"},
  {tip:"tr2de",soru:"Türkçeyi Almancaya çevir: O kitap ki dün aldım çok ilginçmiş.",cevap:"Das Buch das ich gestern gekauft habe ist sehr interessant.",h:"Relativsatz: das Buch + das + Relativsatz"},
  {tip:"de2tr",soru:"Almancayı Türkçeye çevir: Obwohl er sehr müde war, arbeitete er bis Mitternacht weiter.",cevap:"Çok yorgun olmasına rağmen gece yarısına kadar çalışmaya devam etti.",h:"obwohl = ...masına rağmen"},
  {tip:"de2tr",soru:"Almancayı Türkçeye çevir: Seitdem sie das Stipendium bekommen hat, lernt sie viel fleißiger.",cevap:"Bursu aldığından beri çok daha çalışkan öğreniyor.",h:"seitdem = ...den beri"},
  {tip:"yaz",soru:"Almanca yaz (4-5 cümle): Kendi ülkende neyin farklı olmasını isterdin? (Konjunktiv II kullan)",cevap:"",h:"Wenn ich könnte, würde ich... / Es wäre besser, wenn..."},
  {tip:"yaz",soru:"Almanca yaz (4-5 cümle): Bir şehir aktivitesini anlat. Nerede? Ne yaptın? Passiv kullan.",cevap:"",h:"Passiv: wurde + PP / Perfekt"},
  {tip:"bosuk",soru:"Boşlukları doldur: Wenn ich mehr Geld ___ (haben K.II), ___ ich eine Weltreise machen (würde).",cevap1:"hätte",cevap2:"würde",h:"K.II: hätte (haben) / würde (werden)"},
  {tip:"bosuk",soru:"Boşlukları doldur: Das Haus ___ (werden, Passiv Prateritum) vor 100 Jahren ___. (bauen)",cevap1:"wurde",cevap2:"gebaut",h:"Passiv Prateritum: wurde + gebaut"}
];
var WQ_B2 = [
  {tip:"tr2de",soru:"Türkçeyi Almancaya çevir: Bu sorun, ihmal edilen çevre politikaları nedeniyle ortaya çıkmıştır.",cevap:"Dieses Problem ist aufgrund vernachlässigter Umweltpolitik entstanden.",h:"aufgrund + Genitiv / Nominalstil / Passiv Perfekt"},
  {tip:"tr2de",soru:"Türkçeyi Almancaya çevir: Bir yandan dijitalleşme fırsatlar sunarken, öte yandan ciddi riskler de barındırmaktadır.",cevap:"Einerseits bietet die Digitalisierung Chancen andererseits birgt sie auch erhebliche Risiken.",h:"einerseits...andererseits / Nominalstil"},
  {tip:"de2tr",soru:"Almancayı Türkçeye çevir: Die Maßnahmen, die zur Verbesserung der Luftqualität ergriffen wurden, zeigen erste Wirkung.",cevap:"Hava kalitesinin iyileştirilmesi için alınan önlemler ilk etkisini gösteriyor.",h:"Relativsatz + Passiv / Nominalstil"},
  {tip:"de2tr",soru:"Almancayı Türkçeye çevir: Trotz erheblicher finanzieller Mittel konnte das Projekt nicht fristgerecht abgeschlossen werden.",cevap:"Önemli miktarda finansal kaynağa rağmen proje zamanında tamamlanamadı.",h:"trotz + Genitiv / Passiv Modalverb"},
  {tip:"yaz",soru:"Almanca yaz (5-6 cümle): Sosyal medyanın gençler üzerindeki olumlu ve olumsuz etkilerini tartış.",cevap:"",h:"Auf der einen Seite... / Andererseits... / Es lässt sich argumentieren..."},
  {tip:"yaz",soru:"Almanca yaz (5-6 cümle): Çevre koruma hakkında bir makale girişi yaz. B2 üslubunda.",cevap:"",h:"Das Thema X gewinnt an Bedeutung... / Es ist unbestreitbar..."},
  {tip:"bosuk",soru:"Boşlukları doldur: ___ (trotz) aller Schwierigkeiten ___ (werden + lösen) das Problem.",cevap1:"Trotz",cevap2:"wird gelöst",h:"trotz + Genitiv / Passiv Präsens: wird gelöst"},
  {tip:"bosuk",soru:"Boşlukları doldur: Das ___ (lassen + sich) nicht ___ (ändern) — es ist eine Tatsache.",cevap1:"lässt",cevap2:"ändern",h:"sich lassen + Infinitiv = pasif anlam"}
];
var WQ_C1 = [
  {tip:"tr2de",soru:"Türkçeyi Almancaya çevir: Araştırma bulgularının, mevcut politika çerçevesinin köklü bir yeniden değerlendirmesini gerektirdiği açıkça ortadadır.",cevap:"Es ist offensichtlich dass die Forschungsergebnisse eine grundlegende Neubewertung des bestehenden politischen Rahmens erfordern.",h:"Akademik üslup / Nominalstil / Nebensatz"},
  {tip:"tr2de",soru:"Türkçeyi Almancaya çevir: Her ne kadar savunulan argümanlar belirli bir geçerliliğe sahip olsa da, göz ardı edilen yapısal faktörler mevcuttur.",cevap:"Zwar mögen die vorgebrachten Argumente eine gewisse Gültigkeit besitzen jedoch werden dabei strukturelle Faktoren außer Acht gelassen.",h:"Zwar...jedoch / Konjunktiv II + Passiv"},
  {tip:"de2tr",soru:"Almancayı Türkçeye çevir: Die vorliegende Untersuchung legt nahe, dass ein kausaler Zusammenhang zwischen den untersuchten Variablen besteht.",cevap:"Mevcut araştırma, incelenen değişkenler arasında nedensel bir ilişki olduğuna işaret etmektedir.",h:"nahelegen / kausaler Zusammenhang / Akademik"},
  {tip:"de2tr",soru:"Almancayı Türkçeye çevir: Es erscheint paradox, dass ausgerechnet jene Maßnahmen, die zur Stabilisierung beitragen sollten, destabilisierende Wirkungen entfaltet haben.",cevap:"Tam da istikrara katkıda bulunması gereken o önlemlerin istikrarsızlaştırıcı etkiler göstermiş olması paradoksal görünmektedir.",h:"erscheint paradox / Relativsatz / Partizip"},
  {tip:"yaz",soru:"Almanca yaz (6-8 cümle): Yapay zekanın eğitim sistemine entegrasyonunu akademik üslupta tartış.",cevap:"",h:"C1: Im Rahmen... / Es lässt sich argumentieren... / Zwar...jedoch..."},
  {tip:"yaz",soru:"Almanca yaz (6-8 cümle): Bir akademik makale özeti yaz. Konjunktiv I kullan.",cevap:"",h:"Die Studie zeige... / Der Autor betone... / Es werde festgestellt..."},
  {tip:"bosuk",soru:"Boşlukları doldur: ___ (Zusammenfassend) lässt ___ (sich) feststellen, dass die Hypothese bestätigt wurde.",cevap1:"Zusammenfassend",cevap2:"sich",h:"Akademik: Zusammenfassend lässt sich feststellen"},
  {tip:"bosuk",soru:"Boşlukları doldur: Die Ergebnisse ___ (legen) nahe, dass weitere Forschung ___ (sein + erforderlich).",cevap1:"legen",cevap2:"erforderlich ist",h:"nahelegen / sein + Adjektiv"}
];

// ─────────────────────────────────────────────────────────────
// ÖRNEK YENİ SORULAR — questions.js'e bu şekilde eklenir
// Yeni soru eklemek için GQ dizisinin SONUNA (]; 'den önce) yapıştır
// ─────────────────────────────────────────────────────────────
// GQ dizisine eklenmesi gereken 10 yeni A1 sorusu:
/*
  {t:"mcq",d:1,lv:"A1",tp:"begr",q:"Sabah 7'de komşunla karşılaştın. Ne dersin?",o:["Gute Nacht!","Guten Morgen!","Auf Wiedersehen!","Guten Abend!"],a:1,e:"Guten Morgen = Günaydın (sabah selamı, 06:00-12:00 arası)"},
  {t:"fill",d:1,lv:"A1",tp:"zahlen",q:"Ich bin ___ Jahre alt. (27 - siebenundzwanzig)",c:"siebenundzwanzig",e:"27 = siebenundzwanzig. Almancada onlar+und+birler: zwanzig+sieben"},
  {t:"mcq",d:1,lv:"A1",tp:"farben",q:"Eine Banane ist ___.",o:["rot","blau","gelb","grün"],a:2,e:"gelb = sarı. Eine Banane ist gelb = Muz sarıdır."},
  {t:"fill",d:2,lv:"A1",tp:"verben",q:"Ich ___ jeden Tag Kaffee. (trinken - içmek, 1. tekil)",c:"trinke",e:"trinken: ich trinke, du trinkst, er trinkt. Ich trinke Kaffee = Kahve içerim."},
  {t:"mcq",d:1,lv:"A1",tp:"familie",q:"Mein Vater und meine Mutter sind meine ___.",o:["Geschwister","Kinder","Eltern","Großeltern"],a:2,e:"Eltern = anne+baba = ebeveynler. Vater+Mutter = Eltern"},
  {t:"mcq",d:2,lv:"A1",tp:"wohnen",q:"Ich wohne ___ zweiten Stock.",o:["in","im","an","auf"],a:1,e:"im zweiten Stock = 2. katta. im = in+dem. Stockwerk için 'im' kullanılır."},
  {t:"fill",d:1,lv:"A1",tp:"essen_trinken",q:"Das Brot ist ___. (Ekmek taze - frisch)",c:"frisch",e:"frisch = taze. Das Brot ist frisch = Ekmek taze."},
  {t:"mcq",d:2,lv:"A1",tp:"zahlen",q:"Es ist Viertel vor acht. Saat kaç?",o:["8.15","7.45","8.45","7.15"],a:1,e:"Viertel vor acht = sekize çeyrek kala = 7.45. vor = önce"},
  {t:"fill",d:1,lv:"A1",tp:"personalpron",q:"Das ist meine Schwester. ___ ist sehr nett. (o - dişil)",c:"Sie",e:"Sie = o (dişil). Schwester dişil → Sie ist nett."},
  {t:"mcq",d:3,lv:"A1",tp:"wortstellung",q:"Doğru V2 cümlesi hangisi?",o:["Heute ich gehe einkaufen.","Heute gehe ich einkaufen.","Ich heute einkaufen gehe.","Gehe heute einkaufen ich."],a:1,e:"V2: fiil 2. konumda. Heute (1) GEHE (2) ich (3) einkaufen (4)."}
*/
