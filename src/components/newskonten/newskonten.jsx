import React from "react";
import "./newskonten.scss";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Headline from "../assets/Headline1.jpg";
// import News from "../news/news";
const newskonten = () => {
  return (
    <>
      <Navbar />
      <div className="news-konten-parent">
        <div className="news-konten-img">
          <div className="foto-parent">
            <h3 className="judul-konten">
              Mengungkap Rahasia Komposisi Fotografi yang Menarik
            </h3>
            <div className="foto-konten">
              <div className="foto">
                <img src={Headline} alt="img" />
              </div>
              <div className="news-recomendation">
                <div className="konten-recomendation">
                  <h4>Recomendation</h4>
                  <div className="konten-recomendation-child">
                    <div className="photo-news">
                      <img src={Headline} alt="news" />
                    </div>
                    <div className="text-news">
                      <div className="judul-news">
                        <h3>Judul dan headline berita blablbabla</h3>
                      </div>
                      <div className="tags">
                        <div className="tags-spesifik">
                          <p className="tag">karya</p>
                          <p className="date">10-07-2023</p>
                        </div>
                        <div className="seperator"></div>
                      </div>
                    </div>
                  </div>
                  <div className="konten-recomendation-child">
                    <div className="photo-news">
                      <img src={Headline} alt="news" />
                    </div>
                    <div className="text-news">
                      <div className="judul-news">
                        <h3>Judul dan headline berita blablbabla</h3>
                      </div>
                      <div className="tags">
                        <div className="tags-spesifik">
                          <p className="tag">karya</p>
                          <p className="date">10-07-2023</p>
                        </div>
                        <div className="seperator"></div>
                      </div>
                    </div>
                  </div>
                  <div className="konten-recomendation-child">
                    <div className="photo-news">
                      <img src={Headline} alt="news" />
                    </div>
                    <div className="text-news">
                      <div className="judul-news">
                        <h3>Judul dan headline berita blablbabla</h3>
                      </div>
                      <div className="tags">
                        <div className="tags-spesifik">
                          <p className="tag">karya</p>
                          <p className="date">10-07-2023</p>
                        </div>
                        <div className="seperator"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pembuat">
              <p className="admin">admin</p>
              <p className="date">June 3rd, </p>
              <p className="tags-news">Karya</p>
            </div>
            <div className="text-konten">
              <p className="text">
                Apakah Anda ingin menghasilkan foto yang menarik dan memukau?
                Salah satu faktor kunci dalam menciptakan foto yang menarik
                adalah pemahaman tentang komposisi fotografi. Komposisi
                melibatkan cara mengatur elemen-elemen visual di dalam bingkai
                foto Anda. Dalam artikel ini, kami akan memperkenalkan Anda pada
                prinsip dasar komposisi fotografi yang mudah dimengerti oleh
                orang awam. Aturan Ketiga Salah satu prinsip komposisi yang
                paling umum digunakan adalah aturan ketiga. Aturan ini
                melibatkan membagi bingkai foto Anda menjadi sembilan bagian
                yang sama dengan menggunakan dua garis horizontal dan dua garis
                vertikal yang membentuk grid. Tempatkan objek atau titik fokus
                utama Anda di sekitar persimpangan garis ini untuk menciptakan
                komposisi yang lebih menarik secara visual. Garis Pemandu
                Garis-garis dalam foto Anda dapat menjadi alat yang kuat untuk
                mengarahkan mata pemirsa ke titik fokus utama. Misalnya, jalur
                jalan atau sungai dapat membantu memandu mata orang yang melihat
                foto Anda dari satu sudut ke sudut lainnya. Gunakan garis-garis
                ini dengan cerdik untuk menciptakan pergerakan dan arah dalam
                komposisi Anda. Ruang Negatif Ruang negatif adalah area kosong
                atau sepi dalam bingkai foto yang mengelilingi objek utama.
                Dalam komposisi, memberikan ruang negatif yang cukup di sekitar
                objek dapat membantu mengarahkan perhatian pemirsa secara
                langsung ke objek tersebut. Ruang negatif juga dapat menciptakan
                kesan ketenangan dan keharmonisan dalam foto Anda. Perspektif
                dan Sudut Pandang Cobalah untuk mengambil foto dari sudut
                pandang yang tidak biasa atau tidak umum. Mengubah perspektif
                dapat memberikan kesan baru pada objek dan membantu menciptakan
                komposisi yang menarik secara visual. Cobalah mengambil foto
                dari sudut rendah, sudut tinggi, atau miring untuk mengungkapkan
                objek dalam cara yang tidak biasa. Ingatlah bahwa komposisi
                fotografi adalah aturan dasar yang dapat Anda gunakan sebagai
                panduan. Selain itu, jangan takut untuk bereksperimen dan
                mengembangkan gaya Anda sendiri. Praktikkan prinsip-prinsip ini
                dan Anda akan melihat peningkatan dalam kualitas foto Anda.
                Selamat mencoba!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default newskonten;
