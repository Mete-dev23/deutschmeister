# DeutschMeister — Devlog

> Bu dosya her güncelleme sonunda otomatik olarak Claude tarafından güncellenir.
> Manuel düzenleme gerekmez.

---

## Versiyon Sistemi

| Format | Ne zaman |
|--------|----------|
| v4.0.x | Hata düzeltme, küçük ekleme |
| v4.1.x | Orta büyüklük özellik |
| v5.0.0 | Büyük sürüm, mimari değişiklik |

---

## v4.0.1 — 14.04.2026 12:59

**Değişen dosya:** `index.html`

**Eklenenler:**
- Soru Yönetimi paneli (3 sekme): AI Soru Üret / Paketi İçe Aktar / Soru Yönet
- AI Soru Üretim Paneli: Seviye (A1-C2), Kategori, Alt Kategori, Soru Tipi, Sayı, Zorluk, Sınav Modu seçimleri
- Seçimlere göre otomatik ChatGPT/Claude prompt üretimi
- JSON soru paketi içe aktarma sistemi
- `customQ` → Drive'a otomatik senkron
- Semnatik versiyon sistemi (x.y.z) uygulandı

**Düzeltilenler:**
- `VOCAB is not defined` hatası — `typeof` guard eklendi
- `page-import` div yanlış yuvalama düzeltildi (summary içine gömülmüştü)
- `showPage()` null-safe yapıldı

---

## v4.0.0 — 14.04.2026 06:12

**Değişen dosyalar:** `index.html`, `questions.js` (yeni), `topics.js` (yeni)

**Eklenenler:**
- Dosya yapısı 3'e ayrıldı: `index.html` + `questions.js` + `topics.js`
- Sorular (`GQ`, `AQ`, `SQ`, `VOCAB`, level arrays) → `questions.js`
- Konu anlatımları (`TOPIC_CONTENT`, `TOPICS`, `TNAMES`) → `topics.js`
- `index.html` 393KB → 135KB küçüldü
- `customQ` alanı `DEF` objesine eklendi
- `getQs()` özel soruları (customQ) gramer alıştırmasına dahil ediyor

---

## v3.5 — 13.04.2026 14:49

**Değişen dosya:** `almanca_ogrenme.html`

**Eklenenler:**
- B1/B2/C1 seviye alıştırmaları: Gramer, Artikel, Cümle Kurma, Yazma, Mini Sınav
- `getSinavB1()`, `getSinavB2()`, `getSinavC1()` — seviyeye özel TELC/Goethe formatı sınavlar
- AI Tavsiye: API yerine clipboard + ChatGPT/Claude yönlendirme linki
- `copyAdvicePrompt()` + `escapeHtml()` fonksiyonları

**Düzeltilenler:**
- Yazma değerlendirmesi: Levenshtein fuzzy match — `Deutchland` → `Deutschland` kabul
- V2 cümle kontrolü: `isV2Match()` — devrik cümle kabul
- `ß/ss`, `ä/ae`, `ö/oe`, `ü/ue` normalizasyonu `normalizeDE()`'ye eklendi
- Unicode box char (─ ═) JS comment hatası — tüm non-ASCII yorumlar temizlendi
- Double `];` sorunu düzeltildi

---

## v3.4 — 13.04.2026

**Değişen dosya:** `almanca_ogrenme.html`

**Eklenenler:**
- B1 (8 konu), B2 (5 konu), C1 (6 konu) içerikleri `TOPIC_CONTENT`'e eklendi
- Her konu: 3-4 anlatım bölümü + 5-6 alıştırma sorusu
- `openTopic()` fonksiyonu — konuya tıklayınca detay + alıştırma
- `backToTopics()`, `renderTopicQ()`, `checkTopicMCQ()`, `checkTopicFill()` eklendi
- A1/A2/B1/B2/C1 sekme filtresi konu sayfasına eklendi

---

## v3.3 — 03.04.2026

**Değişen dosya:** `almanca_ogrenme.html`

**Eklenenler:**
- A1 konu anlatımları (11 konu): Selamlama, Sayılar, Renkler, Aile, Meslekler, sein&haben, Yemek, Günler, Ev, Yönler, Sıfatlar
- A2 konu anlatımları (7 konu): Perfekt, Prateritum, Kasus, Bağlaçlar, Modal, Sıfat Çekimi, Trennbar
- Drive sessiz yeniden bağlanma (`prompt:""`)
- Kullanıcı bilgisi `dm_user` key'iyle localStorage'a kaydedildi

---

## v3.2 — Mart 2026

**Değişen dosya:** `almanca_ogrenme.html`

**Eklenenler:**
- 350+ gramer sorusu — TELC/Goethe A1/A2 formatı
- 10 yeni A1 konu: einkaufen, essen_trinken, verkehr, gesundheit, wohnen, beruf, zeit, kleidung, wetter, familie
- 162 kelime hazinesi, 66 artikel kelimesi
- Yazma alıştırması: 29 soru, 4 tip (TR→DE, DE→TR, serbest, boşluk doldurma)
- Cümle kurma: yazma modu + tıklama modu ayrıldı
- Anti-repeat sistemi: `_seenQs` ile görülen sorular takip ediliyor
- Zorluk dengesi: her oturumda ~3 kolay + 4 orta + 3 zor
- Kural tabanlı yazma değerlendirmesi (`evaluateGerman()`)
- Levenshtein mesafesi ile fuzzy eşleştirme (`evaluateWithAnswer()`)

---

## v3.0 — Şubat 2026

**Değişen dosya:** `almanca_ogrenme.html`

**Eklenenler:**
- Google Drive senkron sistemi (appDataFolder)
- XP, streak, doğru/yanlış istatistikleri
- Flashcard / SRS sistemi
- Mini sınav (TELC A1→A2 formatı, 100 puan, geçme:80)
- Analiz & Tavsiye sayfası — konu bazlı güçlü/zayıf analiz
- Sidebar: seviye seçimi (A1-C1), ilerleme çubukları

---

## Teknik Notlar

**Sık karşılaşılan sorunlar:**

| Sorun | Sebep | Çözüm |
|-------|-------|-------|
| `X is not defined` | Dosya yükleme sırası | `typeof X !== 'undefined'` guard |
| `Unexpected token` JS hatası | Unicode box chars (─ ═) comment'lerde | Tüm `//` satırlarında non-ASCII → `-` |
| Double `];` | Dizi birleştirmede fazla kapanma | `node --check` ile test |
| Sayfa siyah kalıyor | Div yanlış yuvalama | Parent div sayısı kontrol |
| Cache eski versiyon | GitHub Pages önbellek | `Ctrl+Shift+R` hard reload |

**Her güncellemede kontrol listesi:**
```
node --check ile test et
Versiyon numarasını güncelle  
DEVLOG.md güncelle
GitHub'a yükle
Hard reload ile test et
```
