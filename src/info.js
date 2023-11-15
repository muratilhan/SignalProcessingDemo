export const db = [
  {
    name: "nrz",
    infos: ["1 bit'i pozitif,", "0 bit'i 0 gerilimi temsil eder"],
  },
  {
    name: "polarnrz_i",
    infos: ["0 bit'i durumu korur.", "1 bit'i değişim bitidir"],
  },
  {
    name: "polarnrz_l",
    infos: ["0 bit'i pozitif gelirim", "1 bit'i negatif ile tanımlanır"],
  },
  {
    name: "polarmanchester",
    infos: [" her bit ikiye bölünür.", "1 bit'i yükselen kenarı ile temsil edilir.", "0 bit'i düşen kenarı ile temsil edilir."],
  },
  {
    name: "bipolarami",
    infos: ["0 bit'leri sıfır gerilim ile temsil edilir.", "1 bit'i bir önceki 1 bit'inin tersini temsil eder."],
  },
  {
    name: "bipolarpseudoter",
    infos: ["1 bit'leri 0 gerilimi,", "0 bit'leri bir önceki 0 bit'in tersini temsil eder."],
  },
  {
    name: "2b/1q",
    infos: ["00 önceki seviye pozitifse +1 negatifse -1", "01 önceki seviye pozitifse +3 negatifse -3","10 önceki seviye pozitifse -1 negatifse +1","11 önceki seviye pozitifse -3 negatifse +3 gerilimi temsil eder.", ],
  }

];
