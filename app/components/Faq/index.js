/**
*
* Faq
*
*/

import React from 'react';

import Card from 'components/Card';
import FAQ from './FAQ';

const listQa = [
  {
    question: 'Apa?',
    answer: 'Halo',
  },
  {
    question: 'Apa?',
    answer: 'Jawaban bertele2 tele2tel e2le2t ele2tele2tele2 tele2t ele2te le2tele2tel e2tele2t ele2t ele2tele 2tele2tel e2tele2tele2te le2te le2tele2tele2t ele2tele2tele2 tele2t ele2tele2tele2tel e2tele2te le2tele2tel e2tele2tele2tele2tele2tele2tele2tele2t ele2tel e2tele2tele2tele2t le2tele2tele2t ele2tele2tele2tel e2tele2tele2tele2tele2tele2tele2tele2 tele2tele2tele2tele2tele2',
  },
  {
    question: 'Apa?',
    answer: `1.Pendaftar dan peserta wajib mengikuti semua peraturan yang tertera pada guideline.<br />
            2.Peserta adalah pihak yang telah mengikuti mekanisme pendaftaran pada website resmi CompFest 9.<br />
            3.Masa pendaftaran Data Science Academy adalah 14 Mei 2017 sampai 18 Juni 2017.<br />
            4.Data Science Academy dibuka untuk umum dengan batasan umur dari 17 sampai 25 tahun.<br />
            5.Peserta harus mengisi formulir pendaftaran dengan lengkap dan memberikan informasi yang bisa dipertanggungjawabkan.<br />
            6.Peserta merupakan Warga Negara Indonesia dan wajib membawa kartu pengenal. Kartu pengenal yang kami terima adalah KTP/SIM/kartu pelajar yang masih berlaku.<br />
            7.Setiap tim terdiri dari minimal 1 peserta dan maksimal 3 orang peserta.<br />
            8.Setiap peserta hanya diperbolehkan terdaftar di satu tim.<br />
            9.Setiap anggota tim diperbolehkan berasal dari sekolah/institusi yang berbeda.<br />
            10.Peserta yang boleh mengikuti akademi adalah peserta yang sudah terdaftar dan tidak boleh diganti oleh orang lain selama akademi berlangsung.<br />
            11.Peserta yang tidak memenuhi persyaratan pendaftaran sampai waktu yang ditentukan akan dinyatakan gugur.<br />
            12.Peserta menyetujui apabila sewaktu-waktu dihubungi oleh panitia CompFest 9 maupun partner dari CompFest 9.`,
  },
  {
    question: 'Apa?',
    answer: 'Halo',
  },
];

function Faq() {
  return (
    <Card>
      <FAQ>
        {
          listQa.map(item => (
            <QA question={item.question} answer={item.answer} />
          ))
        }
      </FAQ>
    </Card>
  );
}

function QA(props) {
  return (
    <div className="qa-item">
      <div className="qa-li">
        <span className="prefix">Q:</span><p dangerouslySetInnerHTML={{ __html: props.question }} />
      </div>
      <div className="qa-li">
        <span className="prefix">A:</span><p dangerouslySetInnerHTML={{ __html: props.answer }} />
      </div>
    </div>
  );
}

QA.propTypes = {
  question: React.PropTypes.string.isRequired,
  answer: React.PropTypes.string.isRequired,
};

export default Faq;
