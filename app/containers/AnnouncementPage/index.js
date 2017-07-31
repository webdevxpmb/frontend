/*
 *
 * AnnouncementPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import SectionHeading from 'components/SectionHeading';
import AnnouncementItem from 'components/AnnouncementItem';
import { createStructuredSelector } from 'reselect';
import makeSelectAnnouncementPage from './selectors';
import Style from './styled';

export class AnnouncementPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const content = `1. Pendaftar dan peserta wajib mengikuti semua peraturan yang tertera pada guideline.<br />
                    2. Peserta adalah pihak yang telah mengikuti mekanisme pendaftaran pada website resmi CompFest 9.<br />
                    3. Masa pendaftaran Data Science Academy adalah 14 Mei 2017 sampai 18 Juni 2017.<br />
                    4. Data Science Academy dibuka untuk umum dengan batasan umur dari 17 sampai 25 tahun.<br />
                    5. Peserta harus mengisi formulir pendaftaran dengan lengkap dan memberikan informasi yang bisa dipertanggungjawabkan.<br />
                    6. Peserta merupakan Warga Negara Indonesia dan wajib membawa kartu pengenal. Kartu pengenal yang kami terima adalah KTP/SIM/kartu pelajar yang masih berlaku.<br />
                    7. Setiap tim terdiri dari minimal 1 peserta dan maksimal 3 orang peserta.<br />
                    8. Setiap peserta hanya diperbolehkan terdaftar di satu tim.<br />
                    9. Setiap anggota tim diperbolehkan berasal dari sekolah/institusi yang berbeda.<br />
                    10. Peserta yang boleh mengikuti akademi adalah peserta yang sudah terdaftar dan tidak boleh diganti oleh orang lain selama akademi berlangsung.<br />
                    11. Peserta yang tidak memenuhi persyaratan pendaftaran sampai waktu yang ditentukan akan dinyatakan gugur.<br />
                    12. Peserta menyetujui apabila sewaktu-waktu dihubungi oleh panitia CompFest 9 maupun partner dari CompFest 9.`;
    return (
      <Style>
        <Helmet
          title="Pengumuman"
          meta={[
            { name: 'Pengumuman', content: 'Description of AnnouncementPage' },
          ]}
        />
        <div className="content">
          <SectionHeading>
            Announcement
          </SectionHeading>
          <AnnouncementItem
            title="Briefing Angkatan dan PSAF Mahasiswa Baru Fasilkom UI 2017"
            content={content}
            publisher="Najwa Satirah "
            date="31 Juli 2017"
            time="20.00 PM"
          />
        </div>
      </Style>
    );
  }
}

AnnouncementPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  AnnouncementPage: makeSelectAnnouncementPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementPage);
