export type NavMenuType = {
  id: number;
  title: string;
  href: string;
}

export const NavMenu: NavMenuType[] = [
  { id: 1, title: "Home", href: "#home" },
  { id: 2, title: "About", href: "#about" },
  { id: 3, title: "Event", href: "#event" },
  { id: 4, title: "Galery", href: "#galery" },
]

export type EventType = {
  id: number;
  title: string;
  desc: string;
  image: string;
}

export const EventCard: EventType[] = [
  {
    id: 1,
    title: "Training Basic",
    desc: "Training Basic merupakan salah satu program kerja UKM PCC yang bertujuan untuk memberikan pelatihan dan mengenalkan tiga bidang departemen dibawah Workshop UKM PCC, kepada calon anggota baru UKM PCC",
    image: "/assets/training-basic-software.jpg"
  },
  {
    id: 2,
    title: "PCC Class",
    desc: "PCC Class merupakan salah satu program kerja UKM PCC yang bertujuan untuk berbagi ilmu pengetahuan tentang IT kepada mahasiswa Politeknik Negeri Semarang.",
    image: "/assets/training-basic-network.jpg"
  },
  {
    id: 3,
    title: "Tech Comfest",
    desc: "Techcomfest adalah salah satu wujud misi dan peran aktif UKM Polytechnic Computer Club dalam mengikuti perkembangan teknologi dalam bidang IT.",
    image: "/assets/techcomfest.jpg"
  },
  {
    id: 4,
    title: "Goes To Public",
    desc: "Goes To Public atau yang biasa di kenal GTP adalah salah satu wujud peran aktif UKM PCC untuk berbagi ilmu pengetahuan tentang IT dan bakti sosial kepada masyarakat.",
    image: "/assets/gtp.jpg"
  },
]

export type SocialMediaType = {
  id: number;
  title: string;
  image: string;
  path: string;
}

export const SocialMedia: SocialMediaType[] = [
  {
    id: 1,
    title: "Instagram",
    image: "/assets/instagram.svg",
    path: "https://www.instagram.com/pccpolines"
  },
  {
    id: 2,
    title: "X",
    image: "/assets/x.svg",
    path: "https://x.com/ukmpcc"
  },
  {
    id: 3,
    title: "Tiktok",
    image: "/assets/tiktok.svg",
    path: "https://www.tiktok.com/@pcc.polines"
  },
  {
    id: 4,
    title: "Facebook",
    image: "/assets/facebook.svg",
    path: "https://www.facebook.com/ukmpcc"
  },
  {
    id: 5,
    title: "YouTube",
    image: "/assets/youtube.svg",
    path: "https://www.youtube.com/@UKMPCCPOLINES"
  },

]

export type AboutAccordionType = {
  id: string;
  title: string;
  content: string;
}

export const AboutAccordion: AboutAccordionType[] = [
  {
    id: "item-1",
    title: "Apa itu UKM PCC ?",
    content:
      "UKM Polytechnic Computer Club yang disingkat UKM PCC merupakan salah satu Unit Kegiatan Mahasiswa di Politeknik Negeri Semarang yang sudah cukup berumur. UKM PCC memberikan banyak kontribusi kepada institusi POLINES sendiri lewat prestasi-prestasi yang telah diraih.",
  },
  {
    id: "item-2",
    title: "Kapan UKM PCC disahkan ?",
    content:
      "PCC disahkan sebagai UKM di Politeknik Negeri Semarang pada tanggal 14 Agustus 1992, yang mempunyai tujuan untuk mewadahi, mengembangkan pengetahuan dan keterampilan dalam bidang IT khususnya bagi para anggota, serta masyarakat umum.",
  },
  {
    id: "item-3",
    title: "Apa Visi dari UKM PCC ?",
    content:
      "Menjadikan UKM PCC sebagai wadah yang inovatif, adaptif, solutif, serta mengamalkan 7-layers PCC sebagai landasan berorganisasi.",
  },
  {
    id: "item-4",
    title: "Apa Misi dari UKM PCC ?",
    content:
      "Menerapkan 7-Layers PCC dalam diri tiap anggota dalam setiap langkah. Membentuk SDM yang kritis dan inovatif, serta mengembangkan pengetahuan dan portofolio dalam bidang teknologi informasi dan komputer, serta menanamkan jiwa loyalitas dan integritas.",
  },
];
